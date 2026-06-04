import { supabase } from "./client";

export async function testConnection() {
  const { data, error } = await supabase.auth.getSession();

  console.log("Data:", data);
  console.log("Error:", error);
}