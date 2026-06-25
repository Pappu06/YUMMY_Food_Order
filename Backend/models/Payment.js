import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    customerName: String,

    customerEmail: String,

    amount: Number,

    razorpay_order_id: String,

    razorpay_payment_id: String,

    razorpay_signature: String,

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Payment", paymentSchema);