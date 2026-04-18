import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Contact() {
  const WHATSAPP_NUMBER = "918305500767";

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 max-w-2xl mx-auto"
          >
            We are here to assist you with reservations, catering inquiries, or any other requirements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0 mr-6">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-1">Call Us</h3>
                  <p className="text-zinc-600">+91 8305 500 767</p>
                  <p className="text-zinc-500 text-sm mt-1">Available 11 AM to 11 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mr-6">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-1">WhatsApp</h3>
                  <p className="text-zinc-600">+91 8305 500 767</p>
                  <p className="text-zinc-500 text-sm mt-1">For quick orders and inquiries</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex mt-2 text-sm text-green-600 font-medium hover:underline"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 flex-shrink-0 mr-6">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-1">Email</h3>
                  <p className="text-zinc-600">info@masalaco.com</p>
                  <p className="text-zinc-500 text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 flex-shrink-0 mr-6">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-1">Location</h3>
                  <p className="text-zinc-600">Corporate Hub, Business District</p>
                  <p className="text-zinc-600">Metropolis, MT 12345</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100"
          >
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Send an Inquiry</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-2">Subject</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow"
                >
                  <option>Table Reservation</option>
                  <option>Corporate Catering</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
