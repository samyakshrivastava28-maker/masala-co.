import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  const sections = [
    {
      title: "Our Food & Taste",
      content: "At Masala & Co., we believe food is more than sustenance; it’s an experience. We specialize in authentic Indian cuisine with a modern twist. Our spices are ground fresh daily, our meats are marinated overnight, and our vegetarian dishes are vibrant expressions of seasonal produce. The taste is unabashedly bold, yet refined enough for the corporate palate.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/25/4b/34/food-menu-assortment.jpg?w=900&h=500&s=1",
      reverse: false
    },
    {
      title: "The Executive Chef",
      content: "Helmed by Chef Arjun Kapoor, whose culinary journey spans from the bustling streets of Mumbai to Michelin-starred kitchens in London. Chef Arjun brings precision, creativity, and a deep respect for traditional techniques. He ensures every plate leaving the kitchen is a masterpiece designed to impress.",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/3/YN/YC/ZH/148640419/hire-chinese-chef-for-cafe.jpg",
      reverse: true
    },
    {
      title: "Interior & Ambience",
      content: "Designed to facilitate conversation and close deals. Our interior features muted tones, comfortable leather seating, and strategic lighting to create a warm, yet highly professional environment. Quiet corners offer privacy for important discussions, while the main dining room buzzes with subdued, sophisticated energy.",
      image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&auto=format&fit=crop",
      reverse: false
    },
    {
      title: "Our Esteemed Customers",
      content: "Masala & Co. is the preferred dining destination for executives, entrepreneurs, and visionaries. Our clientele expects nothing but the best, and we deliver consistently. We provide a space where business gets done, relationships are built, and success is celebrated.",
      image: "https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?semt=ais_hybrid&w=740&q=80",
      reverse: true
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            About Masala & Co.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 max-w-2xl mx-auto"
          >
            Redefining the corporate dining experience through culinary excellence and refined hospitality.
          </motion.p>
        </div>

        <div className="space-y-24">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${section.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-zinc-900/10" />
                </div>
              </div>
              <div className="lg:w-1/2 lg:px-8">
                <h2 className="text-3xl font-bold text-zinc-900 mb-6">{section.title}</h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
