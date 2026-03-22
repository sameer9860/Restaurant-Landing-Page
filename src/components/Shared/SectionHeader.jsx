import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../constants/animations";

export const SectionHeader = ({ title, subtitle, centered = false, className = "" }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-on-surface-variant text-lg ${centered ? "mx-auto" : ""} max-w-2xl`}>
          {subtitle}
        </p>
      )}
      {!centered && <div className="w-24 h-2 bg-primary rounded-full mt-4"></div>}
    </motion.div>
  );
};
