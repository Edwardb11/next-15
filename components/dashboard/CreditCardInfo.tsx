"use client";

import React from "react";


interface CreditCardInfoProps {
  register: any
  errors: any;
  touchedFields: any;
}
const CreditCardInfo: React.FC<CreditCardInfoProps> = ({ register, errors, touchedFields }) => {



  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 ">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-6">Credit Card Info</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name on Card <span className="text-red-500">*</span>
        </label>
        <input
          {...register("nameOnCard")}
          type="text"
          className={`mt-2 block w-full rounded-lg border ${errors.nameOnCard ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
          placeholder="Kevin Patel"
        />
        {errors.nameOnCard && touchedFields.nameOnCard && (
          <p className="text-red-500 text-sm mt-1">{errors.nameOnCard.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Card Number <span className="text-red-500">*</span>
        </label>
        <input
          {...register("cardNumber")}
          type="text"
          className={`mt-2 block w-full rounded-lg border ${errors.cardNumber ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
          placeholder="0000 - 0000 - 0000 - 0000"
        />
        {errors.cardNumber && touchedFields.cardNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            CVV <span className="text-red-500">*</span>
          </label>
          <input
            {...register("cvv")}
            type="text"
            className={`mt-2 block w-full rounded-lg border ${errors.cvv ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
            placeholder="000"
          />
          {errors.cvv && touchedFields.cvv && (
            <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Exp. Month <span className="text-red-500">*</span>
          </label>
          <select
            {...register("expMonth")}
            className={`mt-2 block w-full rounded-lg border ${errors.expMonth ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={String(i + 1).padStart(2, "0")}>
                {String(i + 1).padStart(2, "0")}
              </option>
            ))}
          </select>
          {errors.expMonth && touchedFields.expMonth && (
            <p className="text-red-500 text-sm mt-1">{errors.expMonth.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Exp. Year <span className="text-red-500">*</span>
          </label>
          <select
            {...register("expYear")}
            className={`mt-2 block w-full rounded-lg border ${errors.expYear ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
          >
            {Array.from({ length: 10 }, (_, i) => {
              const year = new Date().getFullYear() + i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          {errors.expYear && touchedFields.expYear && (
            <p className="text-red-500 text-sm mt-1">{errors.expYear.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditCardInfo;
