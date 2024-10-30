import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";

const CheckoutPrice = () => {
  const { items, totalPrice } = useCart();
  const { name, price, count } = items();

  return (
    <div className="w-5/12">
      <div className="flex gap-80 border-b border-gray-300 pb-4">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold capitalize">product</h1>
          <h2 className="text-2xl">
            <span className="text-gray-400 mr-4">{name}</span> x {count}
          </h2>
          <h3 className="text-2xl capitalize">subtotal</h3>
          <h4 className="text-2xl capitalize">total</h4>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl capitalize font-semibold">subtotal</h1>
          <h1 className="text-2xl">Rs.{price ? price : 0}.000.00</h1>
          <h1 className="text-2xl">Rs.{price ? price : 0}.000.00</h1>
          <h1 className="text-3xl text-primary font-bold">
            Rs.{totalPrice()}.000.00
          </h1>
        </div>
      </div>
      <div className="pt-8">
        <div className="flex items-center">
          <input type="radio" id="transfer" value="transfer" name="transfer" />
          <label htmlFor="transfer" className="text-2xl ml-2 capitalize">
            Direct bank transfer
          </label>
        </div>
        <p className="text-base text-gray-400 mt-2 mb-4">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
        <div className="flex items-center">
          <input type="radio" id="cash" value="cash" name="transfer" />
          <label htmlFor="cash" className="text-2xl ml-2">
            Cash on Delivery
          </label>
        </div>
        <p className="text-lg mt-8">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>
        <div className="flex justify-center mt-12">
          <Button variant="outline2" size="lg">
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPrice;