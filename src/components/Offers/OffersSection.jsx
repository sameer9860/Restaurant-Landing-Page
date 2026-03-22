import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../Shared/SectionHeader";
import { Button } from "../Shared/Button";
import { OFFERS } from "../../constants/restaurantConstants";
import { fadeIn } from "../../constants/animations";

export const OffersSection = () => {
  return (
    <section className="py-24 bg-surface" id="offers">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Deals You Can’t Resist"
          subtitle="Specially curated combos for your cravings"
          centered
        />
        <div className="grid md:grid-cols-2 gap-8">
          {OFFERS.map((offer, idx) => (
            <motion.article 
              key={idx} 
              className="relative overflow-hidden rounded-xl bg-surface-container flex flex-col sm:flex-row group shadow-sm hover:shadow-md transition-all"
              variants={fadeIn("up", idx * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-full sm:w-1/2 aspect-square sm:aspect-auto">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center">
                <div className={`${offer.labelColor} text-on-primary w-fit px-3 py-1 rounded text-xs font-black mb-4 uppercase tracking-tighter shadow-sm`}>
                  {offer.label}
                </div>
                <h3 className="font-headline font-bold text-2xl mb-2 text-on-surface">{offer.title}</h3>
                <p className="text-on-surface-variant mb-4">{offer.description}</p>
                <div className={`text-3xl font-black ${offer.discountColor} mb-6`}>{offer.discount}</div>
                <Button 
                  variant="dark"
                  className="w-full"
                >
                  Order Online
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};