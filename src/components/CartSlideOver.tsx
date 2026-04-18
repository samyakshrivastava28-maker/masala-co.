import React from 'react';
import { X, Plus, Minus, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSlideOver({ isOpen, onClose }: CartSlideOverProps) {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  const WHATSAPP_NUMBER = "918305500767";

  const handleOrderViaWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "Hello Masala & Co.! I'd like to place an order:%0a%0a";
    cart.forEach((item) => {
      message += `${item.quantity}x ${item.name} - ₹${item.price * item.quantity}%0a`;
    });
    message += `%0a*Total: ₹${total}*`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 transition-opacity" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md w-full bg-white shadow-xl flex flex-col h-full animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between p-4 border-b border-zinc-200">
            <h2 className="text-xl font-semibold text-zinc-900">Your Order</h2>
            <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-500">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
                <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍽️</span>
                </div>
                <p className="text-zinc-500 text-lg">Your cart is empty.</p>
                <button
                  onClick={onClose}
                  className="mt-4 text-orange-600 font-medium hover:text-orange-700 underline"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li key={item.id} className="flex py-2 border-b border-zinc-100">
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between font-medium text-zinc-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">₹{item.price * item.quantity}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm mt-2">
                        <div className="flex items-center border border-zinc-300 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 px-2 text-zinc-600 hover:bg-zinc-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2 text-zinc-600 hover:bg-zinc-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-orange-600 hover:text-orange-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-zinc-200 p-4 sm:p-6 bg-zinc-50">
              <div className="flex justify-between text-base font-medium text-zinc-900 mb-4">
                <p>Subtotal</p>
                <p>₹{total}</p>
              </div>
              <p className="text-sm text-zinc-500 mb-4">
                Taxes and delivery calculated at checkout on WhatsApp.
              </p>
              <button
                onClick={handleOrderViaWhatsApp}
                className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Order via WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
