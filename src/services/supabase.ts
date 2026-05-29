import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  'https://sylqiyaewgnjuitdnnkj.supabase.co'

const supabaseAnonKey =
  'sb_publishable_T6wix_w0NydQtOfeYq6DgQ_vC4zijA1'

export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey
  )