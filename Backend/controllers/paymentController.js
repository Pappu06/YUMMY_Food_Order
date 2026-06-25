import razorpay from "../config/razorpay.js";

export const createOrder = async (req, res) => {
  try {
    const options = {
      amount: 499 * 100,
      currency: "INR",
      receipt: "receipt_order_001",
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};