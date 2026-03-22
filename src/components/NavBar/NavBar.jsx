import React from "react";
import { Button } from "../Shared/Button";
import { RESTAURANT_INFO } from "../../constants/restaurantConstants";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Menu", href: "#menu" },
  { label: "Offers", href: "#offers" },
  { label: "About", href: "#about" },
];

export const NavBar = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fffcf5] dark:bg-gray-950/80 backdrop-blur-md shadow-sm dark:shadow-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
          <span className="font-headline font-extrabold tracking-tight text-2xl italic text-primary dark:text-red-500">
            {RESTAURANT_INFO.NAME}
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={
                link.active 
                  ? "text-primary border-b-2 border-primary pb-1 font-medium" 
                  : "text-on-surface hover:text-primary transition-colors font-medium opacity-80 hover:opacity-100"
              }
            >
              {link.label}
            </a>
          ))}
          <Button 
            className="px-6 py-2 text-base"
            onClick={(e) => handleScroll(e, "#contact")}
          >
            Book a Table
          </Button>
        </div>

        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
};