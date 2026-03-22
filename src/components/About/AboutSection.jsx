import React from "react";
import { motion } from "framer-motion";
import { RESTAURANT_INFO } from "../../constants/restaurantConstants";


export const AboutSection = () => {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-lg -rotate-3"></div>
            <motion.img 
              alt="Restaurant Interior" 
              className="relative z-10 rounded-lg shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCChgvnep9I-Zq0qma3NloeSOT2IRDal6PA1BUULNhrFRDvZ9blqE2_tvp3ewXVCcWvnHzYImgCzUH4qZwh9kmc32P7h2370kk_fGQaNPfpb_0WYSrQQHIXobUv_uwsIKeYxv0GAbKCmgzU3EF1ReKYw-JS10mJGzlgdyDv14508Y0rqoh46txQqpaejndWWYXIGpb1nh_X9X-GMRjUMEGnYKpF9hTeO5Rzi2CHcINFdqqVedPLJZh0iYBFe5X-TNNdTx7ZeNcTWols"
              whileHover={{ scale: 1.02 }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-10 bg-secondary-container p-8 rounded-lg shadow-xl z-20 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-headline font-black text-4xl text-on-secondary-container leading-none italic uppercase">EST. {RESTAURANT_INFO.ESTABLISHED}</p>
              <p className="text-on-secondary-container/70 font-bold uppercase tracking-widest text-sm mt-2">Born in Nepal</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mb-8">Fresh, Local, Delicious</h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>Located in the heart of Nepal, we serve the finest pizzas, pastas, and burgers using fresh, high-quality ingredients sourced directly from local farmers.</p>
              <p>Our mission: to bring a smile to every customer with every bite. We believe comfort food shouldn't just be tasty—it should tell a story of craftsmanship and passion.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { icon: "check_circle", label: "Organic Local Sourcing" },
                { icon: "check_circle", label: "Himalayan Spices" },
                { icon: "check_circle", label: "Handmade Dough" },
                { icon: "check_circle", label: "Eco-friendly Kitchen" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <span className="font-bold">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};