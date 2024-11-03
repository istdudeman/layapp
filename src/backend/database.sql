-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nrp VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Create an index on nrp for faster lookups
CREATE INDEX idx_users_nrp ON users(nrp);