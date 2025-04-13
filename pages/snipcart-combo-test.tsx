// pages/snipcart-combo-test.tsx
import { useState } from "react"
import Script from "next/script"

export default function SnipcartComboTest() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [entree, setEntree] = useState("Grilled Chicken")

  // Dynamically adjust price based on premium entree
  const basePrice = 25
  const premiumUpcharge = 10
  const isPremium = entree === "Lamb Curry"
  const finalPrice = isPremium ? basePrice + premiumUpcharge : basePrice

  return (
    <>
      <Script
        src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"
      />

      <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-2xl font-bold mb-6">Combo - Individual Test</h1>

        <button
          className="snipcart-checkout snipcart-summary bg-zinc-800 text-white px-4 py-2 rounded mb-6 flex items-center gap-2"
        >
          🛒 View Cart (<span className="snipcart-items-count"></span>)
        </button>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Build Your Combo
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm text-center relative">
              <h2 className="text-lg font-semibold mb-4">Combo - Individual</h2>
              <p className="text-gray-600 mb-4">Pick your favorites. Base price: $25</p>

              <form className="space-y-4">
                {/* Salad */}
                <div>
                  <label className="block text-sm font-medium mb-1">Salad</label>
                  <select name="salad" required className="w-full border rounded px-3 py-2">
                    <option value="Beet Salad">Beet Salad</option>
                    <option value="Kale Caesar">Kale Caesar</option>
                  </select>
                </div>

                {/* Entree */}
                <div>
                  <label className="block text-sm font-medium mb-1">Entree</label>
                  <select
                    name="entree"
                    required
                    value={entree}
                    onChange={(e) => setEntree(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="Grilled Chicken">Grilled Chicken</option>
                    <option value="Lamb Curry">Lamb Curry (Premium +$10)</option>
                  </select>
                </div>

                {/* Side */}
                <div>
                  <label className="block text-sm font-medium mb-1">Side</label>
                  <select name="side" required className="w-full border rounded px-3 py-2">
                    <option value="Rice Pilaf">Rice Pilaf</option>
                    <option value="Roasted Veggies">Roasted Veggies</option>
                  </select>
                </div>

                {/* Delivery Day */}
                <div>
                  <label className="block text-sm font-medium mb-1">Delivery Day</label>
                  <select name="day" required className="w-full border rounded px-3 py-2">
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                  </select>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-sm font-medium mb-1">Special Requests</label>
                  <textarea
                    name="request"
                    className="w-full border rounded px-3 py-2 text-sm"
                    placeholder="No onions, extra dressing, etc."
                  ></textarea>
                </div>

                {/* Add to Cart */}
                <button
                  type="button"
                  className="snipcart-add-item bg-green-600 text-white px-4 py-2 rounded w-full"
                  data-item-id="combo-individual"
                  data-item-name="Combo - Individual"
                  data-item-price={finalPrice.toFixed(2)}
                  data-item-url="/snipcart-combo-test"
                  data-item-custom1-name="Salad"
                  data-item-custom1-options="Beet Salad|Kale Caesar"
                  data-item-custom2-name="Entree"
                  data-item-custom2-options="Grilled Chicken|Lamb Curry"
                  data-item-custom2-value={entree}
                  data-item-custom3-name="Side"
                  data-item-custom3-options="Rice Pilaf|Roasted Veggies"
                  data-item-custom4-name="Delivery Day"
                  data-item-custom4-options="Tuesday|Wednesday|Thursday"
                  data-item-custom5-name="Special Request"
                  data-item-custom5-required="false"
                  onClick={() => setIsModalOpen(false)}
                >
                  Add to Cart ${finalPrice.toFixed(2)}
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-sm text-gray-500 hover:underline mt-2"
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
