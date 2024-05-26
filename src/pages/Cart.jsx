import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex items-center justify-center min-h-[80vh] w-11/12 max-w-[1200px] mx-auto py-6">
      {cart.length > 0 ? (
        <div className="flex gap-10 xl:flex-row flex-col">
          {/* cart item list */}
          <div className="xl:w-[60%] flex flex-col gap-8 w-full max-w-[900px] mx-auto">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          {/* cart summary and checout */}
          <div className="xl:w-[40%] flex flex-col justify-between py-16 pb-14 px-2 w-full max-w-[900px] mx-auto">
            {/* cart summary */}
            <div className="flex flex-col sm:gap-5">
              <div className="flex flex-col my-2 sm:gap-4">
                <p className="sm:text-xl text-green-800 font-semibold uppercase">
                  Your Cart
                </p>
                <p className="sm:text-[50px] text-green-700 font-semibold uppercase sm:-mt-3 text-3xl">
                  Summary
                </p>
              </div>
              <p className="font-semibold sm:text-xl text-slate-700">
                Total Items: {cart.length}
              </p>
            </div>
            {/* checkout */}
            <div className="flex flex-col gap-5">
              <p className="font-semibold sm:text-xl text-slate-700">
                Total Amount:{" "}
                <span className="font-bold"> ${totalAmount} </span>
              </p>
              <button className="w-full sm:py-3 bg-green-700 text-white uppercase font-bold rounded-md text-[17px] border-green-700 border-2 hover:bg-white hover:text-green-700 py-1">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold">
            Cart Empty <span className="text-red-600">!!</span>
          </h1>
          <Link to={"/"}>
            <button className="bg-green-500 p-3 px-8 m-5 hover:bg-green-300 transition-all duration-150 hover:font-semibold text-xl">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
