export const plansMap = [
    {
      id: "basic",
      name: "Basic",
      description: "Get started with VidCraft!",
      price: "10",
      items: ["3 Blog Posts", "3 Transcription"],
      paymentLink: "https://buy.stripe.com/test_9AQeX0cwG8bw5kQeUU",
      priceId: process.env.NODE_ENV === "development" ? 'price_1R1RYwJlk7lRS8hGMwmdQMni' : ""

    },
    {
      id: "pro",
      name: "Pro",
      description: "All Blog Posts, let’s go!",
      price: "19.99",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_3cs5mqfIS1N86oU5kl",
      priceId: process.env.NODE_ENV === "development" ? 'price_1R1RZPJlk7lRS8hGTqvIxgjX' : ""
    },
  ];
