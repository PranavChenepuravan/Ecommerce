import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/supermarket.png"
          alt="Supermarket background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to ShopEasy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Your one-stop destination for all your shopping needs. Discover amazing products at great prices.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/products"
                className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                Browse Products
              </Link>
              <Link
                href="/cart"
                className="text-sm font-semibold leading-6 text-yellow-400 hover:text-yellow-300"
              >
                View Cart <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
