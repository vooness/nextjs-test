// src/components/PizzaMenu.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPizzaSlice, FaLeaf, FaDrumstickBite, FaWineGlassAlt } from "react-icons/fa";

export default function PizzaMenu() {
  const [menuItems] = useState([
    { name: "Pizza", description: "Choose from a variety of classic and gourmet pizzas.", price: "from $8.99", icon: <FaPizzaSlice size={50} className="text-amber-500" /> },
    { name: "Salads", description: "Fresh, healthy salads made to order.", price: "from $6.99", icon: <FaLeaf size={50} className="text-green-400" /> },
    { name: "Chicken", description: "Tender, juicy chicken dishes.", price: "from $9.99", icon: <FaDrumstickBite size={50} className="text-red-500" /> },
    { name: "Drinks", description: "Refreshing drinks to complete your meal.", price: "from $2.99", icon: <FaWineGlassAlt size={50} className="text-blue-400" /> },
  ]);

  return (
    <div className="p-8 bg-gray-900 text-center text-white">
      {/* Informace o dopravě zdarma a nadpis */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-amber-400 mb-4">Explore Our Menu</h2>
        <p className="text-lg text-gray-300">
          Enjoy a variety of delicious options, crafted with love and delivered hot!
        </p>
        <p className="text-sm text-gray-500 mt-2 italic">* Free delivery on all orders over $20</p>
      </div>

      {/* Výběr kategorií jídel s ikonami a animacemi */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-amber-400">{item.name}</h3>
            <p className="text-gray-400 mt-2">{item.description}</p>
            <p className="text-lg font-bold text-gray-200 mt-4">{item.price}</p>
          </motion.div>
        ))}
      </div>

      {/* Sekce s dodatečnými informacemi */}
      <div className="mt-16 p-4 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-amber-400 mb-2">Order Now and Enjoy Free Delivery!</h3>
        <p className="text-gray-300">
          Place your order and have it delivered right to your door, fresh and hot.
        </p>
        <motion.button
          className="mt-4 px-6 py-2 rounded-full bg-amber-500 text-gray-900 font-semibold hover:bg-amber-600 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          Order Now
        </motion.button>
      </div>
    </div>
  );
}
