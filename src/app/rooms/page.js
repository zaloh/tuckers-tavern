import Image from 'next/image';

export default function Rooms() {
  const rooms = [
    {
      name: "The Cheshire Suite",
      price: "150",
      description: "Luxurious suite with a magical wonderland theme, featuring a king-size bed and private balcony.",
      amenities: ["King-size bed", "Private bathroom", "Balcony", "Tea service", "Cat bed"],
      image: "/rooms/cheshire-suite.png"
    },
    {
      name: "Garfield's Comfort Room",
      price: "120",
      description: "Cozy room with warm orange tones and extra-comfortable furnishings.",
      amenities: ["Queen-size bed", "Private bathroom", "Lounge chair", "Mini fridge", "Cat tower"],
      image: "/rooms/garfield-comfort.png"
    },
    {
      name: "Salem's Mystic Chamber",
      price: "135",
      description: "Mysterious and elegant room with gothic touches and modern comforts.",
      amenities: ["Queen-size bed", "Ensuite bathroom", "Writing desk", "Window seat", "Cat scratching post"],
      image: "/rooms/salems-mystic.png"
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Rooms</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="bg-white/5 dark:bg-primary/10 rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
                <p className="text-xl text-accent mb-4">${room.price} per night</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{room.description}</p>
                <div>
                  <h3 className="font-semibold mb-2">Amenities:</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {room.amenities.map((amenity) => (
                      <li key={amenity}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/reservations"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
          >
            Book a Room
          </a>
        </div>
      </div>
    </div>
  );
} 