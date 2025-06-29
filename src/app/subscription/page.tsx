"use client";
import React, { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

const PLANS = [
  {
    key: "regular",
    name: "Regular",
    price: 99.99,
    desc: "Popular for all units",
  },
  {
    key: "platinum",
    name: "Platinum",
    price: 129.99,
    desc: "Popular in all USA",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: 199.99,
    desc: "Popular in all USA",
  },
];

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState("regular");
  const [showCardModal, setShowCardModal] = useState(false);
  const [cardForm, setCardForm] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: "",
  });
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardForm({ ...cardForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col">
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-8">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-[#2563eb]">Rent</span>
            <span className="font-bold text-xl text-gray-900">Yard</span>
          </div>
          <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-1.5 text-sm font-medium">
            Save & Exit
          </Button>
        </div>
      </div>
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm p-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">
            Choose a plan after 30-day free trial
          </h2>
          <div className="flex gap-4 mb-8">
            {PLANS.map((plan) => (
              <div
                key={plan.key}
                className={`flex-1 border rounded-xl p-6 cursor-pointer transition select-none ${
                  selectedPlan === plan.key
                    ? "border-[#2563eb] bg-[#f5f8ff]"
                    : "border-gray-200 bg-white hover:border-[#2563eb]"
                }`}
                onClick={() => setSelectedPlan(plan.key)}
              >
                <div className="flex flex-col gap-2 items-start">
                  <span className="font-semibold text-base text-gray-900">
                    {plan.name}
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${plan.price.toFixed(2)}
                    <span className="text-base font-normal">/mo</span>
                  </span>
                  <span className="text-xs text-gray-500">{plan.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Payment options
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked
                  readOnly
                  className="accent-[#2563eb]"
                />
                <span className="text-sm text-gray-700">
                  Any saved card ending in 1234
                </span>
                <Button
                  type="button"
                  className="ml-2 px-3 py-1 text-sm"
                  onClick={() => setShowCardModal(true)}
                >
                  Add new card
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  disabled
                  className="accent-[#2563eb]"
                />
                <span className="text-sm text-gray-400">
                  ACH/Bank transfer (coming soon)
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-8">
            <input
              type="checkbox"
              checked
              readOnly
              className="accent-[#2563eb]"
            />
            <span className="text-sm text-gray-700">
              Auto-renew subscription
            </span>
          </div>
          <div className="flex justify-between items-center border-t pt-6 mt-6">
            <Button
              className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              type="button"
            >
              Back
            </Button>
            <div className="flex items-center gap-4">
              <span className="text-base text-gray-700">
                Total with card charges:
              </span>
              <span className="text-xl font-bold text-[#2563eb]">
                ${PLANS.find((p) => p.key === selectedPlan)?.price.toFixed(2)}
              </span>
              <Button
                type="button"
                className="px-8"
                onClick={() => setShowConfirm(true)}
              >
                Proceed payment
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Modal
        open={showCardModal}
        onClose={() => setShowCardModal(false)}
        title="Add new card"
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Card number
            </label>
            <input
              name="cardNumber"
              value={cardForm.cardNumber}
              onChange={handleCardChange}
              className="input"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Expiry date
            </label>
            <input
              name="expiry"
              value={cardForm.expiry}
              onChange={handleCardChange}
              className="input"
              placeholder="MM/YY"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-700 mb-1">
              CVC
            </label>
            <input
              name="cvc"
              value={cardForm.cvc}
              onChange={handleCardChange}
              className="input"
              placeholder="CVC"
            />
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              name="name"
              value={cardForm.name}
              onChange={handleCardChange}
              className="input"
              placeholder="Name on card"
            />
          </div>
          <div className="flex items-end justify-end md:col-span-2 mt-2">
            <Button
              type="button"
              className="px-8"
              onClick={() => setShowCardModal(false)}
            >
              Save
            </Button>
          </div>
        </form>
      </Modal>
      <Modal
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Confirm Payment"
      >
        <div className="space-y-4">
          <div className="text-sm text-gray-700">
            Are you sure you want to proceed with the payment for the{" "}
            <span className="font-semibold">
              {PLANS.find((p) => p.key === selectedPlan)?.name}
            </span>{" "}
            plan at{" "}
            <span className="font-semibold">
              ${PLANS.find((p) => p.key === selectedPlan)?.price.toFixed(2)}
            </span>
            ?
          </div>
          <div className="flex items-end justify-end gap-2">
            <Button
              type="button"
              className="px-6"
              onClick={() => setShowConfirm(false)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="px-8"
              onClick={() => setShowConfirm(false)}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
