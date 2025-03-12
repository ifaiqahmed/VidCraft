import getData from "@/lib/db";

export default async function Dashboard(){

    const sql = await getData();
    const response = await sql`SELECT version()`;

    return <section>{ response[0].version };</section> 
}