import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Utensils, Star, Clock } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 50, damping: 20 } }
  };

  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 w-full h-full">
          {/* We use a high quality placeholder representing a corporate restaurant environment */}
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Corporate Dining" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-md">
              Premium food Restaurants
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Masala & Co.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-light max-w-2xl mx-auto mb-10">
              Impress your clients with an unforgettable culinary journey. We blend authentic Indian flavors with modern, sophisticated presentations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NavLink 
                to="/menu" 
                className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-medium transition-all text-lg flex items-center justify-center group"
              >
                Order Online
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </NavLink>
              <NavLink 
                to="/about" 
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-colors text-lg flex items-center justify-center backdrop-blur-sm"
              >
                Our Story
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 border border-zinc-100 shadow-sm">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exquisite Menu</h3>
              <p className="text-zinc-500">Curated dishes balancing traditional spices with contemporary plating, perfect for corporate lunches or dinners.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 border border-zinc-100 shadow-sm">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Impeccable Taste</h3>
              <p className="text-zinc-500">Every ingredient is hand-picked to ensure the highest quality. We guarantee a memorable dining experience.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 border border-zinc-100 shadow-sm">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Swift Service</h3>
              <p className="text-zinc-500">We value your time. Enjoy fast, reliable online ordering directly through WhatsApp for utmost convenience.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Appeal Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-orange-600 rounded-3xl transform -rotate-6 scale-105 opacity-10"></div>
              <img 
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ac/aa/3f/enjoy-high-japanese-cuisine.jpg?w=1200&s=1" 
                alt="Corporate Dining Experience" 
                className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Close the Deal Over Exceptional Food.</h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Whether you're hosting a board meeting, entertaining international clients, or celebrating a major milestone, Masala & Co. provides the perfect sophisticated backdrop. Impress them without saying a word.
              </p>
              <ul className="space-y-4 mb-10">
                {['Premium Corporate Atmosphere', 'World-Class Executive Chef', 'Seamless WhatsApp Ordering'].map((item, i) => (
                  <li key={i} className="flex items-center text-zinc-700">
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <NavLink 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors rounded-full font-medium"
              >
                Contact Us for Catering
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
