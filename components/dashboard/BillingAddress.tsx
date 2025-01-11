"use client";

import React from "react";
interface BillingAddressProps {
    register: any
    errors: any;
    touchedFields: any;
  }

  const BillingAddress: React.FC<BillingAddressProps> = ({ register, errors, touchedFields }) => {

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-6">Billing Address</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("fullName")}
            type="text"
            className={`mt-2 block w-full rounded-lg border ${
              errors.fullName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
            placeholder="Kevin Patel"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            className={`mt-2 block w-full rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
            placeholder="mail@pagedone.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Mobile Number 1 <span className="text-red-500">*</span>
            </label>
            <input
              {...register("mobile1")}
              type="text"
              className={`mt-2 block w-full rounded-lg border ${
                errors.mobile1 ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
              placeholder="76532 25623"
            />
            {errors.mobile1 && <p className="text-red-500 text-sm mt-1">{errors.mobile1.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mobile Number 2</label>
            <input
              {...register("mobile2")}
              type="text"
              className={`mt-2 block w-full rounded-lg border ${
                errors.mobile2 ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
              placeholder="00000 00000"
            />
            {errors.mobile2 && <p className="text-red-500 text-sm mt-1">{errors.mobile2.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("address")}
            type="text"
            className={`mt-2 block w-full rounded-lg border ${
              errors.address ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
            placeholder="A - 1002 Alpha Plus, Raiya Telephone Exchange"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              {...register("country")}
              className={`mt-2 block w-full rounded-lg border ${
                errors.country ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              State <span className="text-red-500">*</span>
            </label>
            <input
              {...register("state")}
              type="text"
              className={`mt-2 block w-full rounded-lg border ${
                errors.state ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
              placeholder="State"
            />
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              City <span className="text-red-500">*</span>
            </label>
            <input
              {...register("city")}
              type="text"
              className={`mt-2 block w-full rounded-lg border ${
                errors.city ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
              placeholder="City"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              {...register("zipCode")}
              type="text"
              className={`mt-2 block w-full rounded-lg border ${
                errors.zipCode ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base py-3 px-4`}
              placeholder="Zip Code"
            />
            {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>}
          </div>
        </div>

    </div>
  );
};

export default BillingAddress;
