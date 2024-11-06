export default function Menu() {
  const menuItems = {
    drinks: [
      { 
        name: "The Purr-fect Latte", 
        price: "4.50", 
        description: "Our signature coffee with house-made caramel and cinnamon",
        image: "/menu/latte.jpg"
      },
      { 
        name: "Whisker Whiskey Sour", 
        price: "8.00", 
        description: "Classic whiskey sour with a twist of orange",
        image: "/menu/whiskey-sour.jpg"
      },
      { 
        name: "Catnip Tea", 
        price: "3.50", 
        description: "Relaxing herbal blend (Human-safe!)",
        image: "/menu/herbal-tea.jpg"
      },
    ],
    food: [
      { 
        name: "Fish & Chips", 
        price: "14.00", 
        description: "Fresh cod with house-cut fries",
        image: "/menu/fish-and-chips.jpg"
      },
      { 
        name: "Mouse Mushroom Risotto", 
        price: "16.00", 
        description: "Creamy risotto with wild mushrooms",
        image: "/menu/mushroom-risotto.jpg"
      },
      { 
        name: "The Fat Cat Burger", 
        price: "15.00", 
        description: "Half-pound burger with all the fixings",
        image: "/menu/cat-burger.jpg"
      },
    ],
    desserts: [
      { 
        name: "Cream Puff Paradise", 
        price: "6.00", 
        description: "Light and airy cream puffs",
        image: "/menu/cream-puffs.jpg"
      },
      { 
        name: "Kitty Cookie Sundae", 
        price: "7.00", 
        description: "Ice cream with cat-shaped cookies",
        image: "/menu/cookie-sunday.jpg"
      },
    ],
  };

  // Add Image component import at the top
  const Image = require('next/image').default;

  // Update the menu item display component
  const MenuItem = ({ item }) => (
    <div className="bg-white/5 dark:bg-primary/10 rounded-lg shadow-lg p-6">
      <div className="mb-4 relative w-full">
        <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex justify-between items-baseline">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <span className="text-lg">${item.price}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
    </div>
  );

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        
        {/* Drinks Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Drinks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.drinks.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* Food Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Food</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.food.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* Desserts Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary">Desserts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.desserts.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 