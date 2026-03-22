import React from "react";
import { motion } from "framer-motion";


export const Hero = () => {
  const handleOrderNow = () => alert("Order now clicked!");
  const handleBookTable = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-[795px] flex items-center overflow-hidden px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="z-10 order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-bold text-sm mb-6 uppercase tracking-widest"
          >
            Nepal's Finest
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface leading-[1.1] mb-6"
          >
            Taste Nepal’s Favorite <span className="text-primary">Comfort Foods!</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-on-surface-variant text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Delicious Pizza, Pasta & Burgers made fresh daily using authentic recipes and locally sourced Himalayan ingredients.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button 
              className="bg-primary text-on-primary px-10 py-5 rounded-full font-headline font-extrabold text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
              onClick={handleOrderNow}
            >
              Order Now
            </button>
            <button 
              className="bg-surface-container-lowest text-primary border-2 border-primary/10 px-10 py-5 rounded-full font-headline font-extrabold text-lg hover:bg-primary/5 transition-all"
              onClick={handleBookTable}
            >
              Book a Table
            </button>
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDai4g7ZilfiQ9dH5ohVThhXt_y1vAY2h4FabkY8DLhv0EXjYam08wAMWmVuRtHVKkK5k6EgGz8apQEdyEfmPKsfor1ImDtpVsywMJLCVfNhMPFjoPxmVRf1I-_ISkE7S3zdPar5k65uYzPkOXE6KVQkoqRflP42Z0b--GqJUXqYi3KIP3c0zGxkpo_xnswPjZQJ1akrUMhxJ_WqIXNjbTfGLz-iSSG4FmCNnJvRVPD-lXUQz41sJkyEB7EYQnaiVXaS5CH0ZRhdjLf"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>

  );
};