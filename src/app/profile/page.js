'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    // Get user email
    const email = localStorage.getItem('userEmail');
    setUserEmail(email);
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gray-900 px-6 py-8">
            <div className="flex items-center">
              <div className="h-20 w-20 rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-3xl text-white">
                  {userEmail ? userEmail[0].toUpperCase() : 'U'}
                </span>
              </div>
              <div className="ml-6">
                <h1 className="text-2xl font-bold text-white">My Profile</h1>
                <p className="text-gray-300 mt-1">{userEmail}</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 text-sm text-gray-900">{userEmail}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Account Type</label>
                    <p className="mt-1 text-sm text-gray-900">Standard User</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Member Since</label>
                    <p className="mt-1 text-sm text-gray-900">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              {/* Shopping Statistics */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Shopping Statistics</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Total Orders</span>
                    <span className="text-sm text-gray-900">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Items in Cart</span>
                    <span className="text-sm text-gray-900">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Wishlist Items</span>
                    <span className="text-sm text-gray-900">0</span>
                  </div>
                </div>
              </div>

              {/* Account Settings */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h2>
                <div className="space-y-4">
                  <button
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => alert('Change Password functionality coming soon!')}
                  >
                    Change Password
                  </button>
                  <button
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => alert('Notification preferences coming soon!')}
                  >
                    Notification Preferences
                  </button>
                </div>
              </div>

              {/* Privacy & Security */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Privacy & Security</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="two-factor"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="two-factor" className="ml-2 block text-sm text-gray-900">
                      Enable Two-Factor Authentication
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="marketing"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="marketing" className="ml-2 block text-sm text-gray-900">
                      Receive Marketing Emails
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Danger Zone</h3>
                    <div className="mt-2">
                      <button
                        className="text-sm text-red-600 hover:text-red-500"
                        onClick={() => alert('Delete account functionality coming soon!')}
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}