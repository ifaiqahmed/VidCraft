import getData from "./db";
import Stripe from "stripe";


export async function handleCheckoutSessionCompleted({ session, stripe }: {
    session: Stripe.Checkout.Session;
    stripe: Stripe;
}) {
   const customerId = session.customer as string;
   const customer = await stripe.customers.retrieve(customerId);
   if("email" in customer) {
    await createOrUpdateUser(customer ,customerId);

   }

}

async function createOrUpdateUser(customer: Stripe.Customer, customerId: string) {
    try {
        const sql = await getData();
        const user = await sql`SELECT * FROM users WHERE email = ${customer.email}`;
        await sql`INSERT INTO users (email, full_name, customer_id) VALUES (${customer.email}, ${customer.name}, ${customerId},)'`
    } catch (error) {
        console.error(error);
    }
}