import React from "react";
import { useCart } from "../context/CartContext";
import { URL } from "../../utils/constants";
import { FaTrash } from "react-icons/fa";
import { Button } from "./ui/button";

const CartDetails = () => {
  const { cartItems, deleteCart, totalPrice, subtotal } = useCart();
  return (
    <div className="p-24 flex gap-8">
      <table className="w-full h-28">
        <tr className="bg-red-50 text-3xl text-left">
          <th></th>
          <th className="py-4">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            const { price, count, name } = item.attributes;
            const subtotal = Math.floor(price * count);
            return (
              <tr>
                <td className="w-1/3 py-8">
                  <img
                    src={`${URL}${item.attributes.image.data.attributes.url}`}
                    className="h-80 w-3/4 rounded-xl"
                  />
                </td>
                <td className="text-2xl text-gray-400 font-semibold ">
                  {name}
                </td>
                <td className="text-2xl text-gray-400 font-semibold">
                  Rs.{price}.000.00
                </td>
                <td className="text-center">
                  <h3 className="border text-2xl w-1/5 rounded-lg">{count}</h3>
                </td>
                <td className="text-2xl">Rs.{subtotal}.000.00 </td>
                <td>
                  <FaTrash className="hover:text-primary cursor-pointer w-8 h-6" />
                </td>
              </tr>
            );
          })
        ) : (
          <div className="text-center mt-8">no items shown</div>
        )}
      </table>
      <div className=" py-8 w-1/2 h-1/2 bg-red-50">
        <h2 className="capitalize text-4xl font-semibold text-center mb-24">
          cart totals
        </h2>
        <div className="flex gap-16 justify-center items-center my-8 font-bold">
          <h3 className="text-2xl">Subtotal</h3>
          <p className="text-2xl text-gray-400">Rs.{totalPrice()}.000.00</p>
        </div>
        <div className="flex gap-24 justify-center items-center font-bold mb-8">
          <h3 className="text-2xl">Total</h3>
          <p className="text-2xl text-primary font-bold">
            Rs.{totalPrice()}.000.00
          </p>
        </div>
        <div className="flex justify-center">
          <Button variant="outline1" size="lg">
            Check out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
