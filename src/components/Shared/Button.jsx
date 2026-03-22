import React from "react";
import { motion } from "framer-motion";
export const Button = ({ 
  children, 
  variant = "primary", 
  onClick, 
  className = "", 
  type = "button",
  icon
}) => {
  const variants = {
    primary: "bg-primary text-on-primary shadow-xl shadow-primary/20 hover:scale-105 active:scale-95",
    secondary: "bg-secondary text-on-secondary shadow-lg hover:scale-105 active:scale-95",
    outline: "bg-surface-container-lowest text-primary border-2 border-primary/10 hover:bg-primary/5 active:scale-95",
    dark: "bg-on-surface text-surface hover:bg-primary hover:text-white active:scale-95",
    ghost: "text-primary hover:bg-primary/5 active:scale-95",
  };

  const baseStyles = "px-8 py-3 rounded-full font-headline font-extrabold text-lg transition-all flex items-center justify-center gap-2";
  
  return (
    <motion.button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && <span className="material-symbols-outlined text-xl">{icon}</span>}
      {children}
    </motion.button>
  );
};
