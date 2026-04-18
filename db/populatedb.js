#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  message TEXT,
  author VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (message, author)
VALUES
  ('Hi there!', 'Amando'),
  ('Hello World!', 'Charles');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://aadyant:1547_psql@localhost:5432/top_messages",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
