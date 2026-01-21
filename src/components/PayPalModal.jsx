import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalModal = ({ amount, onClose, onSuccess }) => {
    const initialOptions = {
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: "AUD", // Assuming AUD based on existing PricingCards
        intent: "capture",
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>

                <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
                    Complete Your Purchase
                </h3>

                <div className="mb-6 text-center">
                    <span className="text-3xl font-bold text-gray-900">${amount}</span>
                    <span className="text-gray-500 ml-1">AUD</span>
                </div>

                <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: String(amount),
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                                onSuccess(details);
                            });
                        }}
                        onError={(err) => {
                            console.error("PayPal Error:", err);
                            alert("Payment failed. Please try again.");
                        }}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    );
};

export default PayPalModal;
