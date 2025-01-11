"use client";

import BillingAddress from "@/components/dashboard/BillingAddress";
import CreditCardInfo from "@/components/dashboard/CreditCardInfo";
import { useState } from "react";


const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">Billing Information</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Choose a payment option below and fill out the appropriate information.
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-10">
        {["Credit Card", "Apple Pay", "PayPal"].map((method) => (
          <button
            key={method}
            onClick={() => setPaymentMethod(method.toLowerCase().replace(" ", ""))}
            className={`px-6 py-3 rounded-lg font-medium text-sm shadow-sm transition ${
              paymentMethod === method.toLowerCase().replace(" ", "")
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {method}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BillingAddress />
        <CreditCardInfo />
      </div>

      <div className="mt-10 text-center">
        <button className="px-8 py-4 bg-blue-600 dark:bg-blue-700 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-800 transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Payment;
