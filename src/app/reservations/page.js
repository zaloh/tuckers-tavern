'use client';
import { useState } from 'react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Reservation submitted:', formData);
    // Add actual form submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Make a Reservation</h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Book your stay at Tucker's Tavern. All rooms come with complimentary cat companionship!
        </p>

        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/5 dark:bg-primary/10 rounded-lg shadow-lg p-8"
        >
          <div className="grid gap-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg bg-background/50 dark:bg-background/50 text-black"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg dark:bg-background/50 text-black"
                />
              </div>
            </div>

            {/* Booking Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold" htmlFor="roomType">
                  Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg dark:bg-background/50 text-black"
                >
                  <option value="">Select a room</option>
                  <option value="cheshire">The Cheshire Suite</option>
                  <option value="garfield">Garfield's Comfort Room</option>
                  <option value="salem">Salem's Mystic Chamber</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-semibold" htmlFor="guests">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg dark:bg-background/50 text-black"
                >
                  {[1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold" htmlFor="checkIn">
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg dark:bg-background/50 text-black"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold" htmlFor="checkOut">
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg dark:bg-background/50 text-black"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="specialRequests">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border rounded-lg dark:bg-background/50 text-black"
                placeholder="Any special requests or cat preferences?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors"
            >
              Book Now
            </button>
          </div>
        </form>

        <div className="mt-12 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>Need to modify or cancel a reservation? Please contact us at (555) CAT-TAVERN</p>
        </div>
      </div>
    </div>
  );
} 