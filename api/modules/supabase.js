const { createClient } = require('@supabase/supabase-js')

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY
const supabaseUrl = 'https://ywiiukwsarpprtuodpaz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3aWl1a3dzYXJwcHJ0dW9kcGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg4MTg2ODMsImV4cCI6MTk4NDM5NDY4M30.hSd2mvfHLJ8iY5tnbzaop5EVCrfSNbjd5DP-acpxDKM'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

module.exports = supabase