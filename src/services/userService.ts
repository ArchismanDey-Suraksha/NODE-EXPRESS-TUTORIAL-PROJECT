import { supabase } from '../utils/supabaseClient';

export const fetchAllUsers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*');
  if (error) {
    throw error;
  }
  return data;
};

export const fetchUserById = async (id: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  if (error) {
    throw error;
  }
  return data;
};

export const createUser = async (user: any) => {
  const { data, error } = await supabase
    .from('users')
    .insert(user)
    .single();
  if (error) {
    throw error;
  }
  return data;
};

export const fetchUserByEmail = async (email: string) => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
    if (error) {
      throw error;
    }
    return data;
  };