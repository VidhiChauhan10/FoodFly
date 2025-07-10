import React, { useContext, useEffect } from 'react';
import { GiKnifeFork } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {
  const { input, setInput, setCate, setShowCart } = useContext(dataContext);

  useEffect(() => {
    const newList = food_items.filter(item =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input]);

  const items = useSelector(state => state.cart);

  return (
    <nav className="w-full px-5 md:px-10 py-4 bg-white border-b border-gray-200 shadow-sm flex justify-between items-center">
      
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full bg-gray-100 border border-gray-300">
          <GiKnifeFork className="text-gray-600 text-xl" />
        </div>
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">FoodieFly</h1>
      </div>

      {/* Search */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="hidden sm:flex w-[55%] md:w-[65%] items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 gap-3"
      >
        <BiSearchAlt2 className="text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      {/* Cart */}
      <div
        className="relative bg-gray-100 border border-gray-300 rounded-full p-2 cursor-pointer hover:shadow-md transition"
        onClick={() => setShowCart(true)}
      >
        {items.length > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-gray-800 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
            {items.length}
          </span>
        )}
        <BsCart4 className="text-gray-700 text-lg" />
      </div>
    </nav>
  );
}

export default Nav;
