import React from "react";
import { useCart } from "../context/CartContext";
import { URL } from "../../utils/constants";
import { FaTrash } from "react-icons/fa";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const CartDetails = () => {
  const { cartItems, deleteCart, totalPrice } = useCart();
  return (
    <div className="p-24 flex gap-8 sm:max-phone:flex-col sm:max-phone:p-2 sm:max-phone:items-center ">
      <table className="w-full h-28">
        <tr className="bg-red-50 text-3xl text-left sm:max-phone:text-lg">
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
              <tr className="sm:max-phone:text-base">
                <td className="w-1/3 py-8">
                  <img
                    src={`${URL}${item.attributes.image.data.attributes.url}`}
                    className="h-80 w-3/4 rounded-xl sm:max-phone:h-32"
                  />
                </td>
                <td className="text-2xl text-gray-400 font-semibold sm:max-phone:text-base">
                  {name}
                </td>
                <td className="text-2xl text-gray-400 font-semibold sm:max-phone:text-base">
                  Rs.{price}.000.00
                </td>
                <td className="text-center">
                  <h3 className="border text-2xl w-1/5 rounded-lg sm:max-phone:text-base">
                    {count}
                  </h3>
                </td>
                <td className="text-2xl sm:max-phone:text-base">
                  Rs.{subtotal}.000.00{" "}
                </td>
                <td>
                  <FaTrash className="hover:text-primary cursor-pointer w-8 h-6 sm:max-phone:w-4 sm:max-phone:h-3" />
                </td>
              </tr>
            );
          })
        ) : (
          <div className="text-center mt-8">no items shown</div>
        )}
      </table>
      <div className=" py-8 w-1/2 h-1/2 bg-red-50 sm:max-phone:w-3/4">
        <h2 className="capitalize text-4xl font-semibold text-center mb-24 sm:max-phone:text-2xl">
          cart totals
        </h2>
        <div className="flex gap-16 justify-center items-center my-8 font-bold ">
          <h3 className="text-2xl sm:max-phone:text-base">Subtotal</h3>
          <p className="text-2xl text-gray-400 sm:max-phone:text-base">
            Rs.{totalPrice()}.000.00
          </p>
        </div>
        <div className="flex gap-24 justify-center items-center font-bold mb-8">
          <h3 className="text-2xl sm:max-phone:text-base">Total</h3>
          <p className="text-2xl text-primary font-bold sm:max-phone:text-base">
            Rs.{totalPrice()}.000.00
          </p>
        </div>
        <Link to="/checkout" className="flex justify-center">
          <Button variant="outline1" size="lg">
            Check out
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;
