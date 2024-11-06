import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/tavern-interior.jpg"
          alt="Tucker's Tavern Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white">
          <h1 className="font-playfair italic text-5xl md:text-9xl font-bold mb-4">Tucker's Tavern</h1>
          <p className="text-xl md:text-2xl">Where Feline Comfort Meets Fine Dining</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Services Grid */}
        <div className="relative py-16">
          <div className="absolute inset-0">
            <Image
              src="/beer-banner.jpg"
              alt="Cozy Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-3 gap-8 mb-4">
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Fine Dining</h2>
                <p>Savor our delectable dishes while our feline friends provide purr-fect company.</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Cozy Rooms</h2>
                <p>Rest in our comfortable rooms, each themed after famous literary cats.</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Tavern & Bar</h2>
                <p>Enjoy our selection of drinks in the company of our resident cats.</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="relative py-16">
          <div className="absolute inset-0">
            <Image
              src="/cats-lounge.jpg"
              alt="Cats Lounge Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-2xl mx-auto text-center relative z-10 px-4">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Welcome to Tucker's Tavern</h2>
              <p className="text-lg mb-4">
                Established in 2024, Tucker's Tavern is a unique establishment where cats and humans alike can find comfort, 
                good food, and warm company. Our resident cats ensure that no guest ever dines alone.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-primary text-white py-8">
        <div className="absolute inset-0">
          <Image
            src="/tavern-bg.png"
            alt="Paw Pattern Background"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="mb-4">📍 123 Whisker Lane, Catsbury</p>
          <p className="mb-4">📞 (555) CAT-TAVERN</p>
          <p>🐱 Proudly owned and operated by cats, managed by humans</p>
        </div>
      </footer>
    </div>
  );
}
