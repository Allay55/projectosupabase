import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://gupumqxsaaaqgxdgliek.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1cHVtcXhzYWFhcWd4ZGdsaWVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjUyOTYyMywiZXhwIjoyMDc4MTA1NjIzfQ.K4CB8CKD8v4Rv3lHqV-j6cGsz0aIq9UsaoND1Gxtbb4';
export const supabase = createClient(supabaseUrl,supabaseKey);