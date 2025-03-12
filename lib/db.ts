import { neon } from '@neondatabase/serverless';

export default async function getData() {
    if(!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
    }
  const sql = neon(process.env.DATABASE_URL);
return sql;
}

