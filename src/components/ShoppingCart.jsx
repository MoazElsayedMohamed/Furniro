import React from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { URL } from "../../utils/constants";
import { IoIosCloseCircle } from "react-icons/io";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

const ShoppingCart = ({ handleOpenCard }) => {
  const { cartItems, deleteCart, totalPrice } = useCart();
  const { productCount } = useProduct();

  return (
    <>
      <section className="absolute z-50 bg-white right-0 top-0 p-8 shadow w-1/3 sm:max-xl:w-[20rem] sm:max-xl:p-4">
        <div>
          <div className="flex justify-between items-center mb-8 ">
            <h1 className="text-4xl font-bold border-b border-gray-300 pr-48 py-8 sm:max-xl:text-2xl sm:max-xl:pr-0">
              Shopping cart
            </h1>
            <IoLockClosedOutline
              className="w-10 h-8 sm:max-xl:w-20"
              onClick={handleOpenCard}
            />
          </div>
          <div>
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                return (
                  <>
                    <div className="flex items-center gap-12 mb-4 cursor-pointer sm:max-xl:gap-4">
                      <img
                        src={`${URL}${item.attributes.image.data.attributes.url}`}
                        alt="product image"
                        className=" h-60 rounded-lg sm:max-xl:h-32"
                      />
                      <div>
                        <h3 className="text-3xl font-semibold mb-4 sm:max-xl:text-xl sm:max-xl:mb-8">
                          {item.attributes.name}
                        </h3>
                        <div className="flex items-center gap-4 text-2xl sm:max-xl:text-lg sm:max-xl:gap-2">
                          <p>{productCount}</p>
                          <p>X</p>
                          <p className="text-primary font-semibold">
                            Rs.{item.attributes.price}.000
                          </p>
                        </div>
                      </div>
                      <div className="absolute right-10 sm:max-xl:right-2">
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
          <div className="flex items-center gap-48 text-2xl mt-60 sm:max-xl:flex-col sm:max-xl:gap-8">
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
            <Link to="/checkout">
              <Button variant="outline2" size="cardSize">
                Checkout
              </Button>
            </Link>
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
