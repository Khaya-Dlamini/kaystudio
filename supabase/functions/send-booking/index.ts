import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const RESEND_FROM = Deno.env.get("RESEND_FROM") ?? "Lihle Websites <onboarding@resend.dev>";
const NOTIFY_TO = Deno.env.get("NOTIFY_TO") ?? "info@lihlewebsites.co.za";

interface BookingPayload {
  name: string;
  email: string;
  phone?: string;
  project_type?: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = (await req.json()) as Partial<BookingPayload>;

    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields (name, email, message)." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: row, error: dbError } = await supabase
      .from("bookings")
      .insert({
        name: body.name,
        email: body.email,
        phone: body.phone ?? null,
        project_type: body.project_type ?? null,
        message: body.message,
      })
      .select("id, created_at")
      .single();

    if (dbError) {
      return new Response(
        JSON.stringify({ error: "Could not save your booking. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let emailStatus: "sent" | "skipped" | "failed" = "skipped";
    let emailError: string | null = null;

    if (RESEND_API_KEY) {
      try {
        const projectTypeLabel = body.project_type
          ? body.project_type.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
          : "Not specified";

        const html = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #14171a;">
            <h2 style="font-family: 'Syne', sans-serif; color: #06B386;">New project enquiry</h2>
            <p style="color: #4a4f55;">Someone just submitted the booking form on Lihle Websites.</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr><td style="padding: 8px 0; font-weight: 700; width: 130px;">Name</td><td style="padding: 8px 0;">${escapeHtml(body.name)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 700;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(body.email)}" style="color: #06B386;">${escapeHtml(body.email)}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: 700;">Phone</td><td style="padding: 8px 0;">${body.phone ? escapeHtml(body.phone) : "—"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 700;">Project type</td><td style="padding: 8px 0;">${escapeHtml(projectTypeLabel)}</td></tr>
            </table>
            <h3 style="font-family: 'Syne', sans-serif; font-size: 16px; margin-top: 24px;">Project details</h3>
            <p style="background: #f3f1e9; padding: 16px; border-radius: 12px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(body.message)}</p>
            <p style="color: #8a8f95; font-size: 12px; margin-top: 24px;">Submitted ${new Date(row.created_at).toLocaleString()}</p>
          </div>
        `;

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: RESEND_FROM,
            to: NOTIFY_TO,
            reply_to: body.email,
            subject: `New project enquiry from ${body.name}`,
            html,
          }),
        });

        if (!resendRes.ok) {
          const errText = await resendRes.text();
          emailStatus = "failed";
          emailError = errText;
          console.error("Resend error:", errText);
        } else {
          emailStatus = "sent";
        }
      } catch (err) {
        emailStatus = "failed";
        emailError = err instanceof Error ? err.message : String(err);
        console.error("Email send failed:", emailError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        bookingId: row.id,
        emailStatus,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
