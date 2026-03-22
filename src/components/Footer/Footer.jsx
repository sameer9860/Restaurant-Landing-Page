import React from "react";
import { RESTAURANT_INFO } from "../../constants/restaurantConstants";

export const Footer = () => {
  const QUICK_LINKS = [
    { label: "Home", href: "#" },
    { label: "Menu", href: "#menu" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-[#f6f3eb] dark:bg-gray-900 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary text-2xl">restaurant</span>
            <span className="text-xl font-headline font-bold text-primary italic uppercase tracking-tighter">
              {RESTAURANT_INFO.NAME}
            </span>
          </div>
          <p className="font-body text-sm text-on-surface-variant dark:text-gray-400 leading-relaxed">
            {RESTAURANT_INFO.DESCRIPTION}
          </p>
        </div>
        
        <div>
          <h4 className="font-headline font-bold mb-6 text-on-surface uppercase tracking-widest text-xs opacity-70">Quick Links</h4>
          <ul className="space-y-4 font-body text-sm text-on-surface-variant dark:text-gray-400">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline font-bold mb-6 text-on-surface uppercase tracking-widest text-xs opacity-70">Opening Hours</h4>
          <ul className="space-y-4 font-body text-sm text-on-surface-variant dark:text-gray-400">
            <li className="flex justify-between">
              <span>Mon-Fri:</span> 
              <span className="font-semibold">{RESTAURANT_INFO.HOURS.WEEKDAYS}</span>
            </li>
            <li className="flex justify-between">
              <span>Sat-Sun:</span> 
              <span className="font-semibold">{RESTAURANT_INFO.HOURS.WEEKENDS}</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline font-bold mb-6 text-on-surface uppercase tracking-widest text-xs opacity-70">Newsletter</h4>
          <p className="font-body text-sm text-on-surface-variant dark:text-gray-400 mb-4">Get tasty updates and secret deals.</p>
          <div className="flex gap-2">
            <input 
              className="bg-surface-container border-none rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-primary text-sm shadow-inner" 
              placeholder="Email" 
              type="email"
            />
            <button className="bg-primary text-on-primary p-2 rounded-full hover:scale-110 active:scale-90 transition-all shadow-md">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 py-8 flex justify-center items-center border-t border-outline-variant/10">
        <p className="font-body text-sm text-on-surface-variant dark:text-gray-400 text-center">
          © {new Date().getFullYear()} {RESTAURANT_INFO.NAME}. Crafted with Soul.
        </p>
      </div>
    </footer>
  );
};