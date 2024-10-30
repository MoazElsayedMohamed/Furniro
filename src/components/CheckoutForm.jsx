import React from "react";
import { Form } from "react-router-dom";
import FormRow from "./FormRow";
import FormRowSelector from "./FormRowSelector";

const CheckoutForm = () => {
  return (
    <Form className="flex flex-col gap-8">
      <h2 className="text-5xl font-bold mb-8">Billing details</h2>
      <div className="flex gap-16">
        <FormRow id="firstname" type="text" label="First Name" />
        <FormRow id="lastname" type="text" label="Last Name" />
      </div>
      <FormRow id="countryname" type="text" label="Country Name (Optional)" />
      <FormRowSelector
        id="country"
        label="country / region"
        option="sir lanka"
      />
      <FormRow id="streetaddress" type="text" label="Street Address" />
      <FormRow id="town" type="text" label="Town / City" />
      <FormRowSelector
        id="province"
        label="Province"
        option="western province"
      />
      <FormRow id="zipcode" type="text" label="ZIP Code" />
    </Form>
  );
};

export default CheckoutForm;
