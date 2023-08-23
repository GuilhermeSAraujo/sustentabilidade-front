import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fpccrcjtdqyttkjxvnad.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)
console.log('VITE_SUPABASE_API_KEY', import.meta.env.VITE_SUPABASE_API_KEY);
console.log('env', import.meta.env);

export default supabase;