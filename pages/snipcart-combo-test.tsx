// pages/foxy-demo.tsx
import { useState } from "react"
import Script from "next/script"

export default function FoxyDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Foxy Cart Loader */}
      <Script
        src="https://cdn.foxycart.com/enticebynishan/loader.js"
        strategy="afterInteractive"
      />

      {/* Page Content */}
      <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-2xl font-bold mb-6">Foxy.io Demo</h1>

        {/* View Cart button */}
        <a
          href="https://enticebynishan.foxycart.com/cart"
          className="bg-zinc-800 text-white px-4 py-2 rounded mb-6"
        >
          🛒 View Cart
        </a>

        {/* Open modal */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add Sample Item
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm text-center relative">
              <h2 className="text-lg font-semibold mb-4">Sample Product</h2>
              <p className="text-gray-600 mb-4">Simple test item using Foxy</p>

              {/* Add to cart form */}
              <form
                action="https://enticebynishan.foxycart.com/cart"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="name" value="Test Product" />
                <input type="hidden" name="price" value="10.00" />
                <input type="hidden" name="code" value="test-product" />
                <input type="hidden" name="quantity" value="1" />

                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded w-full"
                  onClick={() => setIsModalOpen(false)}
                >
                  Add to Cart
                </button>
              </form>

              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 text-sm text-gray-500 hover:underline block mx-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
