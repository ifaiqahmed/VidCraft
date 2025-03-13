import getData from "./db";
import Stripe from "stripe";


export async function handleCheckoutSessionCompleted({ session, stripe }: {
    session: Stripe.Checkout.Session;
    stripe: Stripe;
}) {
    const customerId = session.customer as string;
    const customer = await stripe.customers.retrieve(customerId);
    const priceId = session.line_items?.data[0].price.id;
    const sql = await getData();
    if ("email" in customer && priceId) {
        await createOrUpdateUser(sql, customer, customerId);
        await updateUserSubscription(sql, priceId, customer.email as string);
        await insertPayment(sql, session, customer.email as string, priceId);
    }

}

async function insertPayment(sql: any, session: Stripe.Checkout.Session, priceId: string, customerEmail: string) {
    try {
        await sql`INSERT INTO payments (amount, status, stripe_payment_id, price_id, user_email ) VALUES (${session.amount_total}, ${session.status}, ${session.id}, ${priceId}, ${customerEmail})`;
    } catch (error) {
        console.error(error);

    }
}

async function createOrUpdateUser(customer: Stripe.Customer, customerId: string, sql: any) {
    try {
        const user = await sql`SELECT * FROM users WHERE email = ${customer.email}`;
        await sql`INSERT INTO users (email, full_name, customer_id) VALUES (${customer.email}, ${customer.name}, ${customerId},)'`
    } catch (error) {
        console.error(error);
    }
}

async function updateUserSubscription(sql: any, priceId: string, email: string) {
    try {
        await sql`UPDATE users SET price_id = ${priceId}, status = 'active' where email = ${email}`;
    } catch (error) {
        console.error(error);
    }
}   