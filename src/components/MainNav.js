'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 sm:px-6 py-4 shadow-md relative z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold flex items-center space-x-2">
            <span>🛒</span>
            <span className="hidden sm:inline">ShopEasy</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-yellow-300 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-yellow-300 transition-colors">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/yourorders" className="hover:text-yellow-300 transition-colors">
                Your Orders
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-yellow-300 transition-colors">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute left-0 right-0 top-full bg-gray-900 border-t border-gray-800 shadow-lg`}
        >
          <ul className="px-4 py-2">
            <li>
              <Link
                href="/"
                className="block py-2 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-2 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="block py-2 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="/yourorders"
                className="block py-2 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Your Orders
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="block py-2 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 