import { motion } from "framer-motion";


const MENU_HIGHLIGHTS = [
  {
    id: "pizza",
    title: "Signature Pizzas",
    description: "Margherita with fresh basil & Chicken BBQ with smoked mozzarella.",
    price: "From Rs. 450",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBArHKUIpJOGfqagc-3BOFQV9OTJ7HVnYL9daClV0f6vZEVmxFgOYu5o6j9-ooQCL7AvEl523216H5h5PIo1RYUh-SaWy4opMQ6T0sUzshBr1XDLB9NHV69vf9vPsQ5YW6jJoNDLBADrkdGKIMS47KP_HWRGoFdW3cXnMzmip4hyBzQEiyDrpQIhTKH2JhhJB7C66AwYjM1WXuAqmAlq7EmIPjYQ6jL0-_cu3Oy3itLhrmXFPhRN31Qshhy2ZZHIvef7k2GlqbYmntP",
    colSpan: "md:col-span-8",
    height: "h-[400px]",
  },
  {
    id: "burger",
    title: "Iconic Burgers",
    description: "Classic Beef & Garden Veggie",
    price: "From Rs. 550",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARE-RzjSwyBnuWcjzllrMk7ch45AwO116lRj-1iJNn-TmmhqEIaQ7YgPk3WCNOM_SZGSKpN6NX1xK9uKXL8k7oOPEitc4Giqb9bl3rNMy7GhqE-sBFGN2pYYdXE2EHShen_jCLzDtULGBRAFEFLAhPAfZnACDewf6anciTylAdeQD3TvSGykb8rcpxuNNwGA0ozFpXqEKeTLlthYyZEXdBahoPg5As1Bh80tCeO7C7sQ4YEjtst-LChTg8VIiJJImjanpi2cYTUb4W",
    colSpan: "md:col-span-4",
    height: "h-[400px]",
    textCenter: true,
  },
  {
    id: "pasta",
    title: "Authentic Pasta",
    description: "Carbonara & Veggie Penne",
    price: "From Rs. 650",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXE6iwvwc3Tv_IuitHBH63Em0gkv_fZXN_a37_opzYAkEB2OE7DF_yKp6ypvsLAOogsAEYethB5GKBJfJL-Y3boULWht4_rnvRdLeQSxmxisH3hfpfLmPYC31NhmJVwdtErqGkrsvYyICmzI3mVuT5LJTjao8Ux77omszoS-i8hPubKZXZ4TLhNfLxQ6LjN53vTTvk2fw9WGLUWc9iZ0kpZntj0bkV6ZaVUcLZWTrkcKPKFQHJMuKYDQeh-zpAu3HHcGUu5siUrZqA",
    colSpan: "md:col-span-4",
    height: "h-[350px]",
    textCenter: true,
  },
];

export const MenuSection = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="menu">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mb-4">Our Bestsellers</h2>
            <div className="w-24 h-2 bg-primary rounded-full"></div>
          </motion.div>
          <button className="flex items-center gap-2 text-primary font-bold hover:underline decoration-2 underline-offset-8">
            View Full Menu
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {MENU_HIGHLIGHTS.map((item, index) => (
            <motion.div 
              key={item.id} 
              className={`${item.colSpan} group relative overflow-hidden rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all ${item.height}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className={`absolute bottom-0 p-8 w-full text-white ${item.textCenter ? 'text-center' : ''}`}>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className={`font-headline font-extrabold mb-2 ${item.id === 'pasta' ? 'text-2xl' : 'text-3xl'}`}>
                      {item.title}
                    </h3>
                    <p className={`opacity-90 ${!item.textCenter ? 'max-w-md' : ''}`}>
                      {item.description}
                    </p>
                  </div>
                  {item.price && (
                    <span className="bg-primary text-on-primary px-4 py-2 rounded-full font-bold">
                      {item.price}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Promo Card */}
          <motion.div 
            className="md:col-span-8 bg-secondary-container rounded-lg p-10 flex flex-col md:flex-row items-center justify-between gap-8 h-[350px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-md">
              <h3 className="font-headline font-extrabold text-4xl text-on-secondary-container mb-4 italic">Love at first bite?</h3>
              <p className="text-on-secondary-container/80 text-lg mb-6">
                Our chefs use local organic flour and Himalayan cheeses to create the most authentic comfort food experience in Nepal.
              </p>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-opacity">
                Order Your Favorite
              </button>
            </div>
            <div className="hidden md:block">
              <motion.span 
                className="material-symbols-outlined text-[120px] text-primary/20"
                initial={{ rotate: -10 }}
                whileInView={{ rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                restaurant_menu
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};