import React from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { URL } from "../../utils/constants";
import { IoIosCloseCircle } from "react-icons/io";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const ShoppingCart = ({ handleOpenCard }) => {
  const { cartItems, deleteCart, totalPrice } = useCart();

  return (
    <>
      <section>
        <div className="absolute z-50 bg-white right-0 top-0 p-8 shadow w-1/3 ">
          <div className="flex justify-between items-center mb-8 ">
            <h1 className="text-4xl font-bold border-b border-gray-300 pr-48 py-8">
              Shopping cart
            </h1>
            <IoLockClosedOutline
              className="w-10 h-8"
              onClick={handleOpenCard}
            />
          </div>
          <div>
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                return (
                  <>
                    <div className="flex items-center gap-12 mb-4 cursor-pointer">
                      <img
                        src={`${URL}${item.attributes.image.data.attributes.url}`}
                        alt="product image"
                        className=" h-60 rounded-lg"
                      />
                      <div>
                        <h3 className="text-3xl font-semibold mb-4">
                          {item.attributes.name}
                        </h3>
                        <div className="flex items-center gap-4 text-2xl">
                          <p>{item.attributes.count}</p>
                          <p>X</p>
                          <p className="text-primary font-semibold">
                            Rs.{item.attributes.price}.000.00
                          </p>
                        </div>
                      </div>
                      <div className="absolute right-10">
                        <IoIosCloseCircle
                          className="w-10 h-8"
                          onClick={() => deleteCart(item.id)}
                        />
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div>No items shown in the list </div>
            )}
          </div>
          <div className="flex items-center gap-48 text-2xl mt-60">
            <h2 className="">Subtotal</h2>
            <p className="text-primary font-semibold">
              Rs {totalPrice()}.000.00
            </p>
          </div>
          <div className="border-t border-gray-300 pt-8 mt-4">
            <Link to="/cart">
              <Button variant="outline2" size="cardSize">
                Cart
              </Button>
            </Link>
            <Button variant="outline2" size="cardSize">
              Checkout
            </Button>
            <Button variant="outline2" size="cardSize">
              Comparison
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
