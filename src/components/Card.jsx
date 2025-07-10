import React from 'react';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(AddItem({ id, name, price, image, qty: 1 }));
    toast.success("Item successfully added to your cart.", { theme: "light" });
  };

  return (
    <div className="w-[280px] h-[420px] bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      
      {/* Image */}
      <div className="w-full h-[60%] rounded-md overflow-hidden border">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-3 pt-4 text-gray-800">
        <h2 className="text-lg font-semibold">{name}</h2>

        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-gray-900">₹{price}</span>
          <div className="flex items-center gap-2 px-2 py-0.5 border text-xs rounded-full text-gray-700 border-gray-300 bg-gray-100">
            {type === "veg" ? <LuLeafyGreen size={14} /> : <GiChickenOven size={14} />}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-2 py-2 rounded-md border border-gray-300 bg-green-500 text-gray-800 hover:bg-gray-100 transition-all text-sm font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
