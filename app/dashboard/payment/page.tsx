"use client";

import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { billingAddressSchema } from "@/utils/payments";
import BillingAddress from "@/components/dashboard/BillingAddress";
import CreditCardInfo from "@/components/dashboard/CreditCardInfo";
import { FaCcMastercard, FaCcPaypal, FaCcApplePay } from "react-icons/fa";

const PaymentForm = () => {
  const [selectedPayment, setSelectedPayment] = useState("creditCard");

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(billingAddressSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log("Payment Data:", data);
    console.log("Selected Payment Method:", selectedPayment);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            Billing Information
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Choose a payment option below and fill out the appropriate information.
          </p>
        </div>
        <button
          type="submit"
          form="paymentForm"
          className="px-8 py-4 bg-blue-600 dark:bg-blue-700 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-800 transition"
        >
          Continue
        </button>
      </div>

      <div className="flex  gap-4 mb-8">
        <button
          className={`flex items-center gap-2 px-6 py-3 border rounded-lg text-lg font-medium transition ${selectedPayment === "creditCard"
              ? "bg-blue-600 text-white border-blue-600"
              : "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          onClick={() => setSelectedPayment("creditCard")}
        >
          <FaCcMastercard size={24} />
          Credit Card
        </button>
        <button
          className={`flex items-center gap-2 px-6 py-3 border rounded-lg text-lg font-medium transition ${selectedPayment === "applePay"
              ? "bg-gray-300 text-gray-800 border-gray-300"
              : "text-gray-600 border-gray-300 hover:bg-gray-300"
            }`}
          onClick={() => setSelectedPayment("applePay")}
        >
          <FaCcApplePay size={24} />
          Apple Pay
        </button>
        <button
          className={`flex items-center gap-2 px-6 py-3 border rounded-lg text-lg font-medium transition ${selectedPayment === "paypal"
              ? "bg-blue-600 text-white border-blue-600"
              : "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          onClick={() => setSelectedPayment("paypal")}
        >
          <FaCcPaypal size={24} />
          PayPal
        </button>
      </div>

      <form
        id="paymentForm"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BillingAddress register={register} errors={errors} touchedFields={touchedFields} />
        <CreditCardInfo register={register} errors={errors} touchedFields={touchedFields} />
      </form>
    </div>

  );
};

export default PaymentForm;
