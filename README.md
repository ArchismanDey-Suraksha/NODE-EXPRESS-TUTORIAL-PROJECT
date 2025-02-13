**SQL code**

-- Create 'users' table with a password column
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,  -- add this column for authentication
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);
