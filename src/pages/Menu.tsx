import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { menuItems, menuCategories, MenuItem } from '../data/menuData';
import { useCart } from '../context/CartContext';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  };

  return (
    <div className="bg-zinc-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 max-w-2xl mx-auto"
          >
            Order online and we'll process it instantly via WhatsApp for your convenience.
          </motion.p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-zinc-900 text-white shadow-md'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeCategory} // Force re-render animation on category change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative h-48 w-full">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-sm bg-white border ${item.isVegetarian ? 'border-green-600' : 'border-red-600'} p-[2px]`}>
                    <span className={`w-full h-full rounded-full ${item.isVegetarian ? 'bg-green-600' : 'bg-red-600'}`}></span>
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-zinc-900">{item.name}</h3>
                  <span className="text-lg font-semibold text-orange-600 whitespace-nowrap ml-4">₹{item.price}</span>
                </div>
                <p className="text-zinc-500 text-sm mb-6 flex-1">{item.description}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full py-3 bg-zinc-50 hover:bg-orange-50 text-zinc-900 hover:text-orange-600 border border-zinc-200 hover:border-orange-200 rounded-xl font-medium transition-colors flex items-center justify-center"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            No items found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
