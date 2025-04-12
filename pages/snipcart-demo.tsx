// pages/snipcart-demo.tsx
import { useState } from "react"
import Script from "next/script"

export default function SnipcartDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Snipcart Loader */}
      <Script
        src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"
      />

      {/* Static product metadata so Snipcart crawler can validate the product */}
      <div
        hidden
        id="product-test-item-1"
        data-item-id="test-item-1"
        data-item-name="Test Product"
        data-item-price="10.00"
        data-item-url="/snipcart-demo"
      ></div>

      {/* Page Content */}
      <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-2xl font-bold mb-6">Snipcart Demo</h1>

        {/* View Cart */}
        <button
          className="snipcart-checkout snipcart-summary bg-zinc-800 text-white px-4 py-2 rounded mb-6 flex items-center gap-2"
        >
          🛒 View Cart (<span className="snipcart-items-count"></span>)
        </button>

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
              <p className="text-gray-600 mb-4">Simple test item</p>

              <button
                className="snipcart-add-item bg-green-600 text-white px-4 py-2 rounded"
                data-item-id="test-item-1"
                data-item-price="10.00"
                data-item-url="/snipcart-demo"
                data-item-name="Test Product"
                onClick={() => setIsModalOpen(false)}
              >
                Add to Cart
              </button>

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

      {/* Snipcart root */}
      <div
        hidden
        id="snipcart"
        data-api-key="MzYyMjA1ZWMtNTI5NS00NGUwLWJkZWYtMWFmZTNjZmY0MGRiNjM4ODAwMzQ0MTg4MTM3ODI4"
        data-config-modal-style="side"
      ></div>
    </>
  )
}
