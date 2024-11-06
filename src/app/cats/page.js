import Image from 'next/image';

export default function Cats() {
  const residentCats = [
    {
      name: "Tucker",
      role: "Proprietor",
      description: "The distinguished siamese tabby who started it all. Known for his impeccable taste in wines and warm greeting purrs.",
      personality: ["Sophisticated", "Friendly", "Wine Connoisseur"],
      favoriteSpot: "By the fireplace in the main hall",
      image: "/tucker.png"
    },
    {
      name: "Mittens",
      role: "Head of Guest Relations",
      description: "A gentle tuxedo cat with white paws. She ensures every guest feels welcomed and comfortable.",
      personality: ["Gentle", "Attentive", "Social"],
      favoriteSpot: "The reception desk cushion",
      image: "/mittens.png"
    },
    {
      name: "Shadow",
      role: "Night Manager",
      description: "A mysterious black cat who keeps watch over the tavern during the quiet hours.",
      personality: ["Mysterious", "Vigilant", "Protective"],
      favoriteSpot: "The moonlit windowsill",
      image: "/shadow.png"
    },
    {
      name: "Biscuit",
      role: "Kitchen Supervisor",
      description: "A plump ginger cat who takes his food and drink quality control duties very seriously.",
      personality: ["Food Enthusiast", "Playful", "Thorough"],
      favoriteSpot: "Near the kitchen door",
      image: "/biscuit.png"
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Meet Our Resident Cats</h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Our feline staff members are the heart and soul of Tucker's Tavern. 
          Each has their own unique personality and role in making your stay purr-fect.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {residentCats.map((cat) => (
            <div key={cat.name} className="bg-white/5 dark:bg-primary/10 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
              <div className="flex flex-col gap-4 text-center">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={`${cat.name} - ${cat.role}`}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-primary">{cat.name}</h2>
                  <p className="text-accent font-semibold italic">{cat.role}</p>
                </div>
                
                <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold border-b border-primary/20 pb-1">
                    Personality Traits
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {cat.personality.map((trait) => (
                      <span 
                        key={trait}
                        className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-semibold border-b border-primary/20 pb-1">
                    Favorite Spot
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{cat.favoriteSpot}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            All our cats are well-cared for and regularly checked by our veterinarian.
            While they love attention, we ask guests to respect their space and comfort.
          </p>
        </div>
      </div>
    </div>
  );
} 