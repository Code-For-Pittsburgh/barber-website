import Stripe from "stripe";

const stripe = Stripe(
  "sk_test_51L9mvXBpDbTwcZJxrqXIpLILNfApxFi2o7AFhrxUoqBQ3ekJLMcApQmYZuavpxBzAS1tJzKFspmLr2eqmEIiLNLD00j9EY2KMh"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "required",
        shipping_options: [{ shipping_rate: "shr_1L9nyRBpDbTwcZJxgPdViHSK" }],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/1ri0ajhp/production/"
            )
            .replace("-webp", ".webp");
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name + " (size : " + item.quantity + ")",
                images: [newImage],
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: 1,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
