import { handleCheckoutSessionCompleted } from "@/lib/payment-helper";
import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req: NextRequest) {

    const payload = await req.text();

    const sig = req.headers.get("stripe-signature");
    let event;
    try {
        event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);


        // handle the event
        switch (event.type) {

            case "checkout.session.completed": {
                const session = await stripe.checkout.sessions.retrieve(event.data.object.id, {
                    expand: ['line_items'],
                });
                console.log({ session });

                //connect to database aor update the user
                await handleCheckoutSessionCompleted({ session, stripe });
                break
            }

            case "customer.subscription.deleted": {
                /// connect to db
                const subscriptionId = event.data.object.id;
                const subscription = await stripe.subscriptions.retrieve(subscriptionId);

                console.log({ subscription });

                // connect to db // update user status to canceled

                break;
            }

            default:
                console.log(`Unhandled event type ${event.type}`);
        }

    }

    catch (error) {
        return NextRequest.json({
            status: "error",
        })
        return NextRequest.json({
            status: "success",
        })
    }

}