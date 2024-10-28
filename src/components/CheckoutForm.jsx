import React from "react";
import { Form } from "react-router-dom";

const CheckoutForm = () => {
  return (
    <Form className="flex flex-col gap-8">
      <h2 className="text-5xl font-bold mb-8">Billing details</h2>
      <div className="flex gap-16">
        <div>
          <label htmlFor="firstname" className="text-2xl capitalize">
            First name
          </label>
          <input
            type="text"
            id="firstname"
            className="border border-gray-300 rounded-lg outline-none block h-16 mt-4 "
          />
        </div>
        <div>
          <label htmlFor="firstname" className="text-2xl">
            Last name
          </label>
          <input
            type="text"
            id="firstname"
            className="border border-gray-300 rounded-lg outline-none block h-16 mt-4 "
          />
        </div>
      </div>
      <div>
        <label htmlFor="firstname" className="text-2xl capitalize">
          country name (optional)
        </label>
        <input
          type="text"
          id="firstname"
          className="border border-gray-300 rounded-lg outline-none block h-16 mt-4 w-full "
        />
      </div>
      <div>
        <label htmlFor="firstname" className="text-2xl capitalize ">
          country / region
        </label>
        <select className="block border border-gray-300 rounded-lg outline-none h-20 w-full text-xl mt-4 capitalize p-4">
          <option value="">sir lanka</option>
        </select>
      </div>
      <div>
        <label htmlFor="firstname" className="text-2xl capitalize">
          street address
        </label>
        <input
          type="text"
          id="firstname"
          className="border border-gray-300 rounded-lg outline-none block h-16 mt-4 w-full "
        />
      </div>
      <div>
        <label htmlFor="firstname" className="text-2xl capitalize">
          town / city
        </label>
        <input
          type="text"
          id="firstname"
          className="border border-gray-300 rounded-lg outline-none block h-16 mt-4 w-full "
        />
      </div>
      <div>
        <label htmlFor="firstname" className="text-2xl capitalize ">
          province
        </label>
        <select className="block border border-gray-300 rounded-lg outline-none h-20 w-full text-xl mt-4 capitalize p-4">
          <option value="">western province</option>
        </select>
      </div>
      <div>
        <label htmlFor="firstname" className="text-2xl capitalize">
          ZIP code
        </label>
        <input
          type="text"
          id="firstname"
          className="border border-gray-300 rounded-lg outline-none block h-16 mt-4 w-full "
        />
      </div>
    </Form>
  );
};

export default CheckoutForm;
