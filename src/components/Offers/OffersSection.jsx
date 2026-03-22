import React from "react";
import { motion } from "framer-motion";


const OFFERS = [
  {
    title: "Combo Meal",
    description: "Pizza + Pasta + Soft Drink",
    discount: "20% Off",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQYHohMDw_Hqu6x9onCRtXzEjWczOIsSPrpDDjqRyb-4UfCeQK7cD88ARNXsnvgER_l6mH2uO342eIb20fEZ5u5WUsovdhfyszKIz_MrBUptsCQibNhXSKZ2Nby12FXoIzgIs0HC69Jme9hX7B4z958CE1rJczzjhg_Vj0KBjDPg1q7kvlIh5_ogjjdUuzUQEqOLlwncTmrd76AQPenTTKsdW88pDTt4294rEihyf3E5Hhuge15uSoe6Z4AGZt8o9obbXarFA5sRew",
    label: "Bestseller",
    labelColor: "bg-primary",
    discountColor: "text-primary",
  },
  {
    title: "Burger Meal",
    description: "Any Burger + Fries + Drink",
    discount: "Free Dessert",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrRpUOniyzpQmIkfLtN3SG8tRG9lqRyKE2LHwP84RQ6aZ-ZoU4BBNkRKLgdg6_Sdu81Cl3oDqBeQdUHzwe8Jx0fqbYlYmztVhIx7jZ3yCHqXkqAbsDU0fJPsgjLiJs6K1NTBdGXBABqLlrdy8MeXySyIEM4GhkiBtS9OH9Gci0SJaVzXcIQtTJBPaxk6qdcdPbQfS5TlUlN_vOk9leGQnxbLJcj0CWjwd3UkEmKR-JDJ5dyTwZUj0nSK4Nhr9ZjWpBU7jGlyp50JLs",
    label: "New",
    labelColor: "bg-secondary",
    discountColor: "text-secondary",
  },
];

export const OffersSection = () => {
  return (
    <section className="py-24 bg-surface" id="offers">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mb-4">Deals You Can’t Resist</h2>
          <p className="text-on-surface-variant text-lg">Specially curated combos for your cravings</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {OFFERS.map((offer, idx) => (
            <motion.article 
              key={idx} 
              className="relative overflow-hidden rounded-xl bg-surface-container flex flex-col sm:flex-row group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="w-full sm:w-1/2 aspect-square sm:aspect-auto">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center">
                <div className={`${offer.labelColor} text-on-primary w-fit px-3 py-1 rounded text-xs font-black mb-4 uppercase tracking-tighter`}>
                  {offer.label}
                </div>
                <h3 className="font-headline font-bold text-2xl mb-2">{offer.title}</h3>
                <p className="text-on-surface-variant mb-4">{offer.description}</p>
                <div className={`text-3xl font-black ${offer.discountColor} mb-6`}>{offer.discount}</div>
                <button className="w-full bg-on-surface text-surface py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
                  Order Online
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};