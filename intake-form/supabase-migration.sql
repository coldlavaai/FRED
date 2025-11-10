-- Create intake_responses table in Supabase
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS intake_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_name TEXT NOT NULL,
  client_name TEXT NOT NULL,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  responses JSONB NOT NULL,
  files_info JSONB,
  status TEXT DEFAULT 'new',
  notes TEXT,
  reviewed_by TEXT,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_intake_responses_client ON intake_responses(client_name);
CREATE INDEX IF NOT EXISTS idx_intake_responses_status ON intake_responses(status);
CREATE INDEX IF NOT EXISTS idx_intake_responses_submitted ON intake_responses(submitted_at DESC);

-- Enable Row Level Security (optional, but recommended)
ALTER TABLE intake_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for form submission)
CREATE POLICY "Allow public inserts" ON intake_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated reads (for you to view responses)
CREATE POLICY "Allow authenticated reads" ON intake_responses
  FOR SELECT
  TO authenticated
  USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_intake_responses_updated_at
  BEFORE UPDATE ON intake_responses
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON intake_responses TO anon;
GRANT SELECT, UPDATE ON intake_responses TO authenticated;
