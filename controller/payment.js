const { sendError } = require("../utils/helper");

const stripe = require("stripe")('sk_test_51LA5tHSFtRtwCUyraFMkl50k3k65YODGpua9yDDD0HuTnfH8Hl69j4cQjIFTvUzgWcZ4Fa6FKXqNp2WueAILggZd00TwF5BNg7');

exports.paymentStripe = async (req, res, next) => {
  try {
    // Getting data from client
    let { amount, name } = req.body;
    // Simple validation
    if (!amount || !name) {
      console.log('all fields err');
      return res.status(400).json({ message: "All fields are required" });
    }
    amount = parseInt(amount);
    // Initiate payment
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "LKR",
      payment_method_types: ["card"],
      metadata: { name },
    });
    // Extracting the client secret 
    const clientSecret = paymentIntent.client_secret;
    // Sending the client secret as response
    res.json({ message: "Payment initiated", clientSecret });
  } catch (err) {
    // Catch any error and send error 500 to client
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

exports.webHook = async (req, res) => {
  const sig = req.header['stripe-signature'];
  let event;
  try {
    event = await stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.log(err);
    res.statue(400).json({ message: err.message })
  }

  if(event.type === "payment_intent.created"){
console.log(`${event.data.object.metadata.name} initiated payment!`);
  }
  if(event.type === "payment_intent.succeeded"){
    console.log(`${event.data.object.metadata.name} succeeded payment!`)
  }
}