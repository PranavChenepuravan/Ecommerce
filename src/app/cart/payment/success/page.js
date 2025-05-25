'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, addToCompletedOrders, selectCartItems, selectCartTotalAmount } from '@/lib/features/cartSlice';

export default function PaymentSuccessPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const hasProcessedOrder = useRef(false);
  
  useEffect(() => {
    // Only process if there are items in the cart and order hasn't been processed
    if (cartItems.length > 0 && !hasProcessedOrder.current) {
      hasProcessedOrder.current = true;
      // First add to completed orders
      dispatch(addToCompletedOrders({
        totalAmount,
        deliveryAddress: localStorage.getItem('deliveryAddress') || 'Not specified',
      }));
      // Then clear the cart
      dispatch(clearCart());
    }
  }, [dispatch, cartItems, totalAmount]);

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          
          <div className="space-y-3">
            <Link
              href="/yourorders"
              className="block w-full bg-blue-600 text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm sm:text-base"
            >
              View Your Orders
            </Link>
            <Link
              href="/products"
              className="block w-full text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 