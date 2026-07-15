/*
# Create bookings table

1. New Tables
- `bookings` — stores project enquiries submitted from the booking form.
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person enquiring
  - `email` (text, not null) — email address to reply to
  - `phone` (text, nullable) — optional phone/WhatsApp number
  - `project_type` (text, nullable) — selected project type id (business, portfolio, blog, landing, other)
  - `message` (text, not null) — the brand/project description
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `bookings`.
- Allow anon + authenticated INSERT only (public form submissions).
- No SELECT/UPDATE/DELETE for anon — only the service role (edge function) can read rows server-side.
3. Notes
- This is a single-tenant, no-auth app. The booking form is public, so anon must be able to insert.
- Reading back bookings is done server-side via the service role key inside the edge function, not from the client.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  project_type text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Intentionally no SELECT/UPDATE/DELETE policies for anon/authenticated:
-- booking enquiries are private to the site owner and only read server-side via the service role.
