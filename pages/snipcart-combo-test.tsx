// pages/snipcart-combo-test.tsx
import { useState } from "react"
import Script from "next/script"

export default function SnipcartComboTest() {
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

      {/* ✅ Static metadata required for Snipcart product crawler */}
      <div
        hidden
        id="combo-individual"
        data-item-id="combo-individual"
        data-item-name="Combo - Individual"
        data-item-price="25.00"
        data-item-url="/snipcart-combo-test"
      ></div>

      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-2xl font-bold mb-6">Combo Test - Individual</h1>

        {/* Cart Button */}
        <button className="snipcart-checkout snipcart-summary bg-zinc-800 text-white px-4 py-2 rounded mb-6">
          🛒 View Cart (<span className="snipcart-items-count"></span>)
        </button>

        {/* Open Modal */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Build Combo
        </button>

        {/* Combo Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
              <h2 className="text-xl font-semibold mb-4">Combo - Individual</h2>
              <p className="text-gray-600 mb-4">
                Choose your Salad, Entree, and Side. $25 base price.
              </p>

              <form>
                {/* Salad */}
                <label className="block mb-4">
                  <span className="block text-sm font-medium">Salad</span>
                  <select
                    name="Salad"
                    className="w-full border px-3 py-2 rounded"
                  >
                    <option>Beet Salad</option>
                    <option>Farm Salad</option>
                    <option>Kale Caesar</option>
                  </select>
                </label>

                {/* Entree */}
                <label className="block mb-4">
                  <span className="block text-sm font-medium">Entree</span>
                  <select
                    name="Entree"
                    className="w-full border px-3 py-2 rounded"
                  >
                    <option>Grilled Chicken</option>
                    <option>Stuffed Eggplant</option>
                    <option>Beef Kofta (Premium)</option>
                  </select>
                </label>

                {/* Side */}
                <label className="block mb-4">
                  <span className="block text-sm font-medium">Side</span>
                  <select
                    name="Side"
                    className="w-full border px-3 py-2 rounded"
                  >
                    <option>Rice Pilaf</option>
                    <option>Roasted Veggies</option>
                    <option>Lentil Soup</option>
                  </select>
                </label>

                {/* Delivery Day */}
                <label className="block mb-4">
                  <span className="block text-sm font-medium">Delivery Day</span>
                  <select
                    name="Delivery Day"
                    className="w-full border px-3 py-2 rounded"
                  >
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                  </select>
                </label>

                {/* Special Request */}
                <label className="block mb-4">
                  <span className="block text-sm font-medium">Special Request</span>
                  <input
                    type="text"
                    name="Special Request"
                    className="w-full border px-3 py-2 rounded"
                    placeholder="e.g. No onions"
                  />
                </label>

                {/* Add to Cart */}
                <button
                  type="button"
                  className="snipcart-add-item bg-green-600 text-white px-4 py-2 rounded w-full"
                  data-item-id="combo-individual"
                  data-item-price="25.00"
                  data-item-name="Combo - Individual"
                  data-item-url="/snipcart-combo-test"
                  data-item-custom1-name="Salad"
                  data-item-custom1-options="Beet Salad|Farm Salad|Kale Caesar"
                  data-item-custom2-name="Entree"
                  data-item-custom2-options="Grilled Chicken|Stuffed Eggplant|Beef Kofta (Premium)"
                  data-item-custom3-name="Side"
                  data-item-custom3-options="Rice Pilaf|Roasted Veggies|Lentil Soup"
                  data-item-custom4-name="Delivery Day"
                  data-item-custom4-options="Tuesday|Wednesday|Thursday"
                  data-item-custom5-name="Special Request"
                >
                  Add Combo to Cart
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mt-4 block mx-auto text-sm text-gray-500 hover:underline"
                >
                  Cancel
                </button>
              </form>
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
