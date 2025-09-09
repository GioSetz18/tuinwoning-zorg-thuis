-- Create a function to trigger webhook on lead insertion
CREATE OR REPLACE FUNCTION notify_new_lead()
RETURNS trigger AS $$
BEGIN
  -- This will be handled by the webhook configuration in Supabase dashboard
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to call the function on new leads
CREATE TRIGGER trigger_new_lead
  AFTER INSERT ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_lead();