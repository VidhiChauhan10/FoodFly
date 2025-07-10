import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

function Card2({ name, id, price, image, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full md:h-[140px] h-auto bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 hover:shadow-md transition-shadow duration-200">
      
      {/* Left Section */}
      <div className="flex items-center gap-4 w-full md:w-[70%]">
        
        {/* Image */}
        <div className="w-[80px] h-[80px] rounded-lg overflow-hidden border border-gray-300">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Item Info */}
        <div className="flex flex-col gap-2 text-gray-800">
          <h2 className="text-base md:text-lg font-semibold">{name}</h2>

          {/* Quantity Control */}
          <div className="flex items-center border border-gray-300 rounded-full text-sm overflow-hidden">
            <button
              className="px-3 py-1 hover:bg-gray-100 transition-all"
              onClick={() => qty > 1 && dispatch(DecrementQty(id))}
            >
              −
            </button>
            <span className="px-4">{qty}</span>
            <button
              className="px-3 py-1 hover:bg-gray-100 transition-all"
              onClick={() => dispatch(IncrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end justify-between h-full gap-4 text-gray-800">
        <span className="text-base font-medium">₹{price}</span>
        <button
          className="text-gray-400 hover:text-red-500 transition-all"
          onClick={() => dispatch(RemoveItem(id))}
        >
          <RiDeleteBin6Line size={22} />
        </button>
      </div>
    </div>
  );
}

export default Card2;
