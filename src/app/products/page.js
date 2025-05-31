'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '@/lib/features/cartSlice';
import Image from 'next/image';

// Sample products data with actual items
const products = [
  {
    id: 1,
    name: 'Premium Rice',
    price: 24.99,
    image: '/images/cartitems/rice.jpg',
    rating: 4.8,
    reviews: 156,
    description: 'High-quality rice grains, perfect for every meal'
  },
  {
    id: 2,
    name: 'Fresh Oranges',
    price: 5.99,
    image: '/images/cartitems/orenge.jpg',
    rating: 4.9,
    reviews: 203,
    description: 'Sweet and juicy oranges, rich in Vitamin C'
  },
  {
    id: 3,
    name: 'Ripe Tomatoes',
    price: 3.99,
    image: '/images/cartitems/tomatoe.jpg',
    rating: 4.7,
    reviews: 178,
    description: 'Fresh, ripe tomatoes perfect for salads and cooking'
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1 rtl:space-x-reverse">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-3 h-3 sm:w-4 sm:h-4 ${index < Math.floor(rating) ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      ))}
    </div>
  );
};

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 2000);
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8">
      {notification && (
        <div className="fixed top-16 sm:top-20 right-2 sm:right-4 bg-green-500 text-white px-3 sm:px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out text-sm sm:text-base">
          {notification}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">Fresh Groceries</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="relative h-48 sm:h-64 p-4 sm:p-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-t-lg p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={product.id === 1}
                />
              </div>
              <div className="p-4 sm:px-5 sm:pb-5">
                <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2 sm:mb-4">
                  {product.name}
                </h5>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2 sm:mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2 mb-3 sm:mb-5">
                  <StarRating rating={product.rating} />
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                    {product.rating.toFixed(1)}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full sm:w-auto text-white font-medium rounded-lg text-sm px-4 sm:px-5 py-2 sm:py-2.5 text-center ${
                      isInCart(product.id)
                        ? 'bg-green-600 hover:bg-green-700 focus:ring-green-300'
                        : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'
                    } focus:ring-4 focus:outline-none`}
                  >
                    {isInCart(product.id) ? 'Add Again' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
