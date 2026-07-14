import { supabase } from "./supabase.js";

export async function submitInquiry(payload) {
  const { data, error } = await supabase.functions.invoke(
    "send-contact-email",
    {
      body: payload,
    }
  );

  if (error) {
    throw new Error(error.message);
  }

  return data;
}