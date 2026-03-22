import React from "react";
import { motion } from "framer-motion";


const TESTIMONIALS = [
  { 
    name: "Sita R.", 
    initials: "SR", 
    text: "Best pizza in Nepal! The crust is so light and the toppings are generous. Truly authentic taste.",
    bgColor: "bg-primary-container",
    textColor: "text-on-primary-container"
  },
  { 
    name: "Raj P.", 
    initials: "RP", 
    text: "Amazing pasta and friendly staff. The Spaghetti Carbonara is to die for. Definitely coming back!",
    bgColor: "bg-secondary-container",
    textColor: "text-on-secondary-container"
  },
  { 
    name: "Mina T.", 
    initials: "MT", 
    text: "Love their burgers! They are juicy, flavorful, and the fries are perfectly crispy. A must-try.",
    bgColor: "bg-tertiary-container",
    textColor: "text-on-tertiary-container"
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mb-4">What Our Customers Say</h2>
          <p className="text-on-surface-variant text-lg italic">Real love from our local community</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.article 
              key={idx} 
              className={`bg-surface-container-highest p-8 rounded-lg relative ${idx > 0 ? 'mt-8 md:mt-0' : ''}`}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, rotate: 1 }}
            >
              <span className="material-symbols-outlined text-tertiary-dim text-6xl absolute -top-4 -left-4 opacity-20">format_quote</span>
              <p className="text-on-surface text-lg mb-8 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.bgColor} flex items-center justify-center font-bold ${t.textColor}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <div className="flex text-secondary-fixed-dim">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};