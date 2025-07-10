import React from "react";
import { useNavigate } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GiKnifeFork className="text-3xl text-[#14ffec]" />
          <h1 className="text-2xl font-bold text-gray-800">FoodieFly</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
          <a href="#how" className="hover:text-[#14ffec] transition">How It Works</a>
          <a href="#testimonials" className="hover:text-[#14ffec] transition">Testimonials</a>
          <a href="#contact" className="hover:text-[#14ffec] transition">Contact</a>
        </nav>
        <button
          onClick={() => navigate("/home")}
          className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-[#14ffec] to-[#0fcfcf] text-white rounded-full hover:scale-105 transition"
        >
          Browse Menu
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center px-6 md:px-0">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Delicious Delivered Fast</h2>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-gray-200">
            Discover amazing local dishes delivered straight to your door with FoodieFly.
          </p>
          <button
            onClick={() => navigate("/home")}
            className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-[#ff00cc] to-[#3333ff] hover:scale-105 transition"
          >
            Order Now
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-20 bg-gray-50 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-bold mb-12 text-gray-800">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: "🍽️",
              title: "Browse",
              desc: "Explore diverse cuisines and dishes you love.",
              border: "from-[#ff00cc] to-[#3333ff]",
            },
            {
              icon: "🛒",
              title: "Order",
              desc: "Add your favorites to the cart and checkout in seconds.",
              border: "from-[#14ffec] to-[#0fcfcf]",
            },
            {
              icon: "🚀",
              title: "Enjoy",
              desc: "Relax while we bring your meal to your doorstep.",
              border: "from-[#facc15] to-[#f97316]",
            },
          ].map((step, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all p-8 border-t-4 bg-gradient-to-tr ${step.border}`}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h4>
              <p className="text-white text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white px-6 md:px-20 text-center">
        <h3 className="text-3xl font-bold mb-12 text-gray-800">Loved by Thousands</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {[
            {
              name: "Aarav",
              msg: "Best food app I've used. Amazing UI and delivery speed!",
              rating: 5,
              bg: "bg-[#f0f9ff]",
            },
            {
              name: "Sneha",
              msg: "So many choices. The experience is seamless and tasty!",
              rating: 4,
              bg: "bg-[#fff7ed]",
            },
            {
              name: "Rahul",
              msg: "Feels like a foodie's paradise. Highly recommend!",
              rating: 5,
              bg: "bg-[#fef9f9]",
            },
          ].map((user, i) => (
            <div
              key={i}
              className={`${user.bg} border border-gray-200 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all w-full md:w-[300px] text-left`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-tr from-[#ff00cc] to-[#3333ff] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
                  {user.name[0]}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">{user.name}</h5>
                  <div className="flex gap-1 text-yellow-400">
                    {Array(user.rating).fill().map((_, idx) => (
                      <FaStar key={idx} size={16} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-700">“{user.msg}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1f1f1f] text-white py-8 mt-10 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} FoodieFly. All rights reserved.</p>
        <p className="text-xs text-gray-400 mt-2">Built with ❤️ by vidhi</p>
      </footer>
    </div>
  );
};

export default Landing;
