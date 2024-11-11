import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormRow from "./FormRow";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";
import { getCode } from "country-list";
import CheckoutPrice from "./CheckoutPrice";

const CheckoutForm = () => {
  const [checkoutInput, setCheckoutInput] = useState({
    first_name: "",
    last_name: "",
    country_code: "",
    company: "",
    address: "",
    city: "",
    province: "",
    zip_code: "",
  });
  const [countryName, setCountryName] = useState("");
  let { item } = useCart();
  if (item.length === 1) {
    item = item[0];
  }
  if (item.length > 1) {
    item.map((single) => {
      item.id = single.id;
      item.count = single.count;
    });
  }

  const { token } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setCheckoutInput((prevInput) => ({
      ...prevInput,
      [e.target.id]: e.target.value,
      country_code: getCode(countryName),
    }));
  }

  const requestData = {
    data: {
      ...checkoutInput,
      order_items: [
        {
          product: item.id,
          count: item.count,
        },
      ],
    },
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:1337/api/checkout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();
      console.log(data);

      toast.success("checkout successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h2 className="text-5xl font-bold mb-8">Billing details</h2>
        <div className="flex gap-16">
          <FormRow
            id="first_name"
            type="text"
            label="First Name"
            onChange={handleChange}
          />
          <FormRow
            id="last_name"
            type="text"
            label="Last Name"
            onChange={handleChange}
          />
        </div>
        <FormRow
          id="company"
          type="text"
          label="Company Name (Optional)"
          onChange={handleChange}
        />
        <FormRow
          id="country_code"
          label="country / region"
          option="sir lanka"
          onChange={(e) => setCountryName(e.target.value)}
        />
        <FormRow
          id="address"
          type="text"
          label="Street Address"
          onChange={handleChange}
        />
        <FormRow
          id="city"
          type="text"
          label="Town / City"
          onChange={handleChange}
        />
        <FormRow
          id="province"
          label="Province"
          option="western province"
          onChange={handleChange}
        />
        <FormRow
          id="zip_code"
          type="text"
          label="ZIP Code"
          onChange={handleChange}
        />
        <button type="submit" className="hidden">
          submit
        </button>
      </form>
      <CheckoutPrice handleSubmit={handleSubmit} />
    </>
  );
};

export default CheckoutForm;
