import { createOrder } from "../services/paymentService";

function PaymentButton() {

    const handlePayment = async () => {
        try {
            const data = await createOrder();

            console.log(data);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            onClick={handlePayment}
            className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-lg"
        >
            Pay Now
        </button>
    );
}

export default PaymentButton;