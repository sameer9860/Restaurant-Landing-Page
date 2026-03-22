import React from "react";
import { motion } from "framer-motion";
import { RESTAURANT_INFO } from "../../constants/restaurantConstants";


export const ContactSection = () => {
  const CONTACT_ITEMS = [
    {
      icon: "location_on",
      title: "Our Address",
      detail: RESTAURANT_INFO.ADDRESS,
    },
    { icon: "call", title: "Phone Number", detail: RESTAURANT_INFO.PHONE },
    { icon: "mail", title: "Email Address", detail: RESTAURANT_INFO.EMAIL },
  ];

  const SOCIAL_LINKS = [
    { icon: "social_leaderboard", label: "facebook" },
    { icon: "photo_camera", label: "instagram" },
    { icon: "movie", label: "tiktok" },
  ];

  return (
    <section
      className="py-24 bg-surface-container-high rounded-t-[3rem]"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mb-8">
              Visit Us
            </h2>
            <div className="space-y-8">
              {CONTACT_ITEMS.map((item, index) => (
                <motion.div 
                  key={item.title} 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <span className="material-symbols-outlined text-primary">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1 text-on-surface">
                      {item.title}
                    </p>
                    <p className="text-on-surface-variant text-lg">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <p className="font-bold text-on-surface mb-6">
                Follow Our Journey
              </p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href="#"
                    className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="material-symbols-outlined">
                      {link.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[450px] w-full rounded-lg bg-surface-container-lowest overflow-hidden shadow-2xl relative">
              {/* Map Placeholder */}
              <iframe
                title="Himalayan Hearth Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.296574929!2d85.2561530635191!3d27.708893339000803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu!5e0!3m2!1sen!2snp!4v1711100000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
              {/* Map Button Overlay */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RESTAURANT_INFO.NAME + " " + RESTAURANT_INFO.ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined">directions</span>
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
