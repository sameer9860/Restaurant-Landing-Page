import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../Shared/SectionHeader";
import { Button } from "../Shared/Button";
import { MENU_HIGHLIGHTS } from "../../constants/restaurantConstants";
import { fadeIn } from "../../constants/animations";

export const MenuSection = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="menu">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader 
            title="Our Bestsellers"
            className="mb-0"
          />
          <button className="flex items-center gap-2 text-primary font-bold hover:underline decoration-2 underline-offset-8 transition-all">
            Explore  Full Menu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {MENU_HIGHLIGHTS.map((item, index) => (
            <motion.div 
              key={item.id} 
              className={`${item.colSpan} group relative overflow-hidden rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all ${item.height}`}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className={`absolute bottom-0 p-8 w-full text-white ${item.textCenter ? 'text-center' : ''}`}>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className={`font-headline font-extrabold mb-2 ${item.id === 'pasta' ? 'text-2xl' : 'text-3xl'}`}>
                      {item.title}
                    </h3>
                    <p className={`opacity-90 ${!item.textCenter ? 'max-w-md' : ''}`}>
                      {item.description}
                    </p>
                  </div>
                  {item.price && (
                    <span className="bg-primary text-on-primary px-4 py-2 rounded-full font-bold shadow-lg">
                      {item.price}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Promo Card */}
          <motion.div 
            className="md:col-span-8 bg-secondary-container rounded-lg p-10 flex flex-col md:flex-row items-center justify-between gap-8 h-[350px]"
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-md">
              <h3 className="font-headline font-extrabold text-4xl text-on-secondary-container mb-4 italic">Love at first bite?</h3>
              <p className="text-on-secondary-container/80 text-lg mb-6">
                Our chefs use local organic flour and Himalayan cheeses to create the most authentic comfort food experience in Nepal.
              </p>
              <Button>
                Order Your Favorite
              </Button>
            </div>
            <div className="hidden md:block">
              <motion.span 
                className="material-symbols-outlined text-[120px] text-primary/20"
                initial={{ rotate: -10 }}
                whileInView={{ rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                restaurant_menu
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};