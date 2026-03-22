import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../Shared/SectionHeader";
import { TESTIMONIALS } from "../../constants/restaurantConstants";
import { scaleUp } from "../../constants/animations";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="What Our Customers Say"
          subtitle="Real love from our local community"
          centered
        />
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.article 
              key={idx} 
              className={`bg-surface-container-highest p-8 rounded-lg relative ${idx > 0 ? 'mt-8 md:mt-0' : ''} shadow-sm hover:shadow-md transition-all`}
              variants={scaleUp(idx * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, rotate: 1 }}
            >
              <span className="material-symbols-outlined text-tertiary-dim text-6xl absolute -top-4 -left-4 opacity-20">format_quote</span>
              <p className="text-on-surface text-lg mb-8 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.bgColor} flex items-center justify-center font-bold ${t.textColor} shadow-inner`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-on-surface">{t.name}</p>
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