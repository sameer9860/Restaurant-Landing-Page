import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Shared/Button";
import { IMAGES } from "../../constants/restaurantConstants";
import { fadeIn, staggerContainer } from "../../constants/animations";


export const Hero = () => {
  const handleBookTable = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[795px] flex items-center overflow-hidden px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="z-10 order-2 lg:order-1"
          variants={staggerContainer()}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={fadeIn("up")}
            className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-bold text-sm mb-6 uppercase tracking-widest"
          >
            Nepal's Finest
          </motion.span>
          <motion.h1 
            variants={fadeIn("up")}
            className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface leading-[1.1] mb-6"
          >
            Taste Nepal’s Favorite <span className="text-primary">Comfort Foods!</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn("up")}
            className="text-on-surface-variant text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Delicious Pizza, Pasta & Burgers made fresh daily using authentic recipes and locally sourced Himalayan ingredients.
          </motion.p>
          <motion.div variants={fadeIn("up")} className="flex flex-col sm:flex-row gap-4">
            <Button>
              Order Now
            </Button>
            <Button 
              variant="outline"
              onClick={handleBookTable}
            >
              Book a Table
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-container/30 rounded-full blur-3xl"></div>
          <motion.div 
            className="relative rounded-lg overflow-hidden shadow-2xl cursor-pointer z-10"
            initial={{ rotate: 3 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <img 
              alt="Gourmet Platter" 
              className="w-full h-auto object-cover aspect-square md:aspect-video lg:aspect-square" 
              src={IMAGES.HERO}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};