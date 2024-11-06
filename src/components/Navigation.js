'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary/95 backdrop-blur-lg text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold font-playfair italic">
            Tucker's Tavern
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/menu" className="hover:text-accent transition-colors">
              Menu
            </Link>
            <Link href="/rooms" className="hover:text-accent transition-colors">
              Rooms
            </Link>
            <Link href="/cats" className="hover:text-accent transition-colors">
              Our Cats
            </Link>
            <Link href="/reservations" className="hover:text-accent transition-colors">
              Reservations
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/menu"
                className="block px-3 py-2 hover:bg-primary/80 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/rooms"
                className="block px-3 py-2 hover:bg-primary/80 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </Link>
              <Link
                href="/cats"
                className="block px-3 py-2 hover:bg-primary/80 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Cats
              </Link>
              <Link
                href="/reservations"
                className="block px-3 py-2 hover:bg-primary/80 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservations
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 