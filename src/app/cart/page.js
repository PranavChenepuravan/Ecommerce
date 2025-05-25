'use client';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotalAmount, addToCart, removeFromCart } from '@/lib/features/cartSlice';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  const handleIncreaseQuantity = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(removeFromCart(productId));
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center py-12 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Your cart is empty</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Add some products to your cart to see them here.</p>
            <Link
              href="/products"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-40 sm:h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain rounded-t-lg sm:rounded-l-lg sm:rounded-t-none p-2"
                    sizes="(max-width: 640px) 100vw, 200px"
                  />
                </div>
                <div className="flex-1 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0">
                    <div>
                      <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.name}
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                      <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white sm:mb-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        ${item.price.toFixed(2)} each
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mt-3 sm:mt-4">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 focus:outline-none"
                      >
                        -
                      </button>
                      <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white min-w-[1.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(item)}
                        className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 focus:outline-none"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Total</h2>
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">${totalAmount.toFixed(2)}</span>
          </div>
          <Link
            href="/cart/payment"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm sm:text-base text-center"
          >
            Proceed to Checkout
          </Link>
          <Link
            href="/products"
            className="block text-center mt-3 sm:mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
