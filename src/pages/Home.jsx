import React, { useContext } from 'react';
import Nav from '../components/Nav';
import Categories from '../Category';
import Card from '../components/Card';
import { food_items } from '../food';
import { dataContext } from '../context/UserContext';
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Home() {
  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  const filter = (category) => {
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(item => item.food_category === category);
      setCate(newList);
    }
  };

  const items = useSelector(state => state.cart);
  const subtotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  const deliveryFee = 20;
  const taxes = subtotal * 0.5 / 100;
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="w-full min-h-screen bg-[#f6f5f3] text-gray-800 font-sans">
      <Nav />

      {/* Categories */}
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-4 py-6 px-4">
          {Categories.map((item, index) => (
            <div
              key={index}
              onClick={() => filter(item.name)}
              className="w-[100px] h-[110px] bg-white border border-gray-300 rounded-lg flex flex-col justify-center items-center gap-2 text-sm text-gray-700 font-medium cursor-pointer hover:bg-gray-100 transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Menu Cards */}
      <div className="flex flex-wrap justify-center gap-5 px-4 py-6">
        {cate.length > 0 ? (
          cate.map((item, index) => (
            <Card
              key={index}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <p className="text-center text-gray-600 font-medium mt-4">No matching items found.</p>
        )}
      </div>

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[40vw] bg-white border-l border-gray-300 z-50 transition-transform duration-500 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <RxCross2
            className="text-gray-600 text-xl cursor-pointer hover:text-black transition"
            onClick={() => setShowCart(false)}
          />
        </div>

        <div className="p-5">
          {items.length > 0 ? (
            <>
              <div className="flex flex-col gap-5 max-h-[50vh] overflow-y-auto pr-2">
                {items.map((item, index) => (
                  <Card2
                    key={index}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                    qty={item.qty}
                  />
                ))}
              </div>

              {/* Summary */}
              <div className="mt-6 border-t pt-4 space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (0.5%)</span>
                  <span>₹{taxes.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 text-base font-semibold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                onClick={() => toast.success("Order placed ✅", { theme: "light" })}
                className="mt-6 w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition"
              >
                Place Order
              </button>
            </>
          ) : (
            <p className="text-center text-gray-500 mt-20 text-base">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
