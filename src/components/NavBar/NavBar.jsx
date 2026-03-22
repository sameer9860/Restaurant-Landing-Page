import React from "react";

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
          <span className="material-symbols-outlined text-[#c22225] text-3xl">restaurant</span>
          <span className="font-headline font-extrabold tracking-tight text-2xl italic text-[#c22225] dark:text-red-500">
            Himalayan Hearth
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
                  ? "text-[#c22225] border-b-2 border-[#c22225] pb-1 font-medium" 
                  : "text-[#383833] dark:text-gray-300 hover:text-[#c22225] transition-colors font-medium"
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold hover:opacity-80 transition-all duration-300 active:scale-95"
          >
            Book a Table
          </a>
        </div>

        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
};