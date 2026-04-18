import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartSlideOver from './CartSlideOver';
import AIAssistant from './AIAssistant';

export default function Layout() {
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <NavLink to="/" className="text-2xl font-bold tracking-tighter text-orange-600">
                Masala & Co.
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-orange-600 ${
                      isActive ? 'text-orange-600 font-semibold' : 'text-zinc-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-zinc-600 hover:text-orange-600 transition-colors"
                aria-label="Open cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-600 border-2 border-white rounded-full">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-zinc-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-zinc-600 hover:bg-zinc-50 hover:text-orange-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <footer className="bg-zinc-900 text-zinc-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Masala & Co.</h3>
              <p className="text-zinc-400 text-sm">
                Corporate dining redefined. Bringing authentic flavors and modern presentations to your table.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
                <li><NavLink to="/menu" className="hover:text-white transition-colors">Menu</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>WhatsApp: +91 8305500767</li>
                <li>Email: info@masalaco.com</li>
                <li>Location: Corporate Hub, Business District</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-sm text-center text-zinc-500 flex flex-col items-center justify-center space-y-2">
            <p>&copy; {new Date().getFullYear()} Masala & Co. All rights reserved. Designed for Corporate Clients.</p>
            <p>Made by <a href="https://28webhub.netlify.app" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors hover:underline">S-Web Hub</a></p>
          </div>
        </div>
      </footer>

      <CartSlideOver isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AIAssistant />
    </div>
  );
}
