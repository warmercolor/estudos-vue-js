import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uthulnsihiscdicksuvf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0aHVsbnNpaGlzY2RpY2tzdXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1Mzc5NDUsImV4cCI6MjAzODExMzk0NX0.6biu1q04LDAQUQWWw0GKQiMCVQ1FaCGqySQeUS6RAYI'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase ✅', supabase)

export default function useSupabase () {
  return supabase
}
