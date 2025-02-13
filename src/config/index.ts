import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

export default {
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseKey: process.env.SUPABASE_KEY || '',
    jwtSecret: process.env.JWT_SECRET || 'defaultsecret',
  };
  