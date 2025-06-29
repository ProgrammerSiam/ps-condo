"use client";
import React, { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LEFT_ITEMS = [
  {
    label: "Property address",
    required: true,
    optional: false,
    recommended: false,
    note: undefined,
  },
  {
    label: "Leasing info",
    required: true,
    optional: false,
    recommended: false,
    note: undefined,
  },
  {
    label: "Charges",
    required: true,
    optional: false,
    recommended: false,
    note: undefined,
  },
  {
    label: "Rent frequency & payment reminder",
    required: true,
    optional: false,
    recommended: false,
    note: undefined,
  },
  {
    label: "Application agreement",
    required: false,
    optional: true,
    recommended: false,
    note: undefined,
  },
  {
    label: "About the property",
    required: false,
    optional: true,
    recommended: false,
    note: undefined,
  },
  {
    label: "Community's amenity/features",
    required: false,
    optional: false,
    recommended: true,
    note: undefined,
  },
];

const RIGHT_ITEMS = [
  {
    label: "Pet fees",
    required: false,
    optional: true,
    recommended: false,
    note: "add fees if you allow pet",
  },
  {
    label: "Parking",
    required: false,
    optional: true,
    recommended: false,
    note: undefined,
  },
  {
    label: "Nearest educational institution",
    required: false,
    optional: false,
    recommended: true,
    note: undefined,
  },
  {
    label: "Nearest stations",
    required: false,
    optional: false,
    recommended: true,
    note: undefined,
  },
  {
    label: "Nearest landmark",
    required: false,
    optional: false,
    recommended: true,
    note: undefined,
  },
  {
    label: "Utilities provider",
    required: false,
    optional: false,
    recommended: true,
    note: undefined,
  },
];

const GALLERY = [
  { type: "featured", label: "Upload cover photo" },
  ...Array.from({ length: 8 }).map((_, i) => ({
    type: "more",
    label: `Photo ${i + 1}`,
  })),
];

const VIDEOS = [
  { label: "Property video (optional)" },
  { label: "Property virtual tour (optional)" },
  { label: "Property self video (optional)" },
];

const COUNTRIES = [
  { code: "BD", flag: "🇧🇩", dial: "+880" },
  { code: "US", flag: "🇺🇸", dial: "+1" },
  { code: "IN", flag: "🇮🇳", dial: "+91" },
];
const STATES = ["Choose state", "Texas", "California", "New York"];

export default function PropertyInfoPage() {
  const router = useRouter();
  const [modal, setModal] = useState<{ label: string } | null>(null);
  const [inputValue, setInputValue] = useState("");
  // Leasing info modal state
  const [leasing, setLeasing] = useState({
    name: "Alex johan",
    country: COUNTRIES[0].code,
    phone: "+880",
    email: "leasing@rentyard.com",
    sameAddress: false,
    street: "111 Austin Ave",
    apt: "123",
    city: "Dallas",
    state: "Choose state",
    zip: "75061",
  });

  const handleLeasingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setLeasing((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setLeasing((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col">
      {/* Header */}
      <div className="border-b-4 border-[#2563eb] bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
          <div className="flex items-center gap-2">
            <Image src="/next.svg" alt="RentYard Logo" width={40} height={40} />
            <span className="font-bold text-xl text-[#2563eb]">Rent</span>
            <span className="font-bold text-xl text-gray-900">Yard</span>
          </div>
          <Button className="bg-white border border-[#2563eb] text-[#2563eb] hover:bg-[#f5f8ff] px-5 py-1.5 text-sm font-medium">
            Save & Exit
          </Button>
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-2 py-8">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 text-left">
            Add Property Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left Column */}
            <div className="flex flex-col gap-2">
              {LEFT_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b last:border-b-0 py-3"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {item.label}
                      {item.required && (
                        <span className="ml-1 text-[#f43f5e]">(Required)</span>
                      )}
                      {item.optional && (
                        <span className="ml-1 text-gray-400">(Optional)</span>
                      )}
                      {item.recommended && (
                        <span className="ml-1 text-gray-400">
                          (Optional but recommended)
                        </span>
                      )}
                    </span>
                    {item.note && (
                      <span className="text-xs text-gray-400">{item.note}</span>
                    )}
                  </div>
                  <Button
                    type="button"
                    className="border border-[#2563eb] text-[#2563eb] bg-white hover:bg-[#f5f8ff] px-3 py-1 text-sm font-medium flex items-center gap-1"
                    onClick={() => setModal({ label: item.label })}
                  >
                    <FiPlus size={16} /> Add
                  </Button>
                </div>
              ))}
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-2">
              {RIGHT_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b last:border-b-0 py-3"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {item.label}
                      {item.required && (
                        <span className="ml-1 text-[#f43f5e]">(Required)</span>
                      )}
                      {item.optional && (
                        <span className="ml-1 text-gray-400">(Optional)</span>
                      )}
                      {item.recommended && (
                        <span className="ml-1 text-gray-400">
                          (Optional but recommended)
                        </span>
                      )}
                    </span>
                    {item.note && (
                      <span className="text-xs text-gray-400">{item.note}</span>
                    )}
                  </div>
                  <Button
                    type="button"
                    className="border border-[#2563eb] text-[#2563eb] bg-white hover:bg-[#f5f8ff] px-3 py-1 text-sm font-medium flex items-center gap-1"
                    onClick={() => setModal({ label: item.label })}
                  >
                    <FiPlus size={16} /> Add
                  </Button>
                </div>
              ))}
            </div>
          </div>
          {/* Property Gallery */}
          <div className="mb-8">
            <div className="bg-gray-50 rounded-xl border border-gray-200">
              <div className="px-6 py-3 border-b border-gray-200 rounded-t-xl bg-gray-100 text-sm font-semibold text-gray-700">
                Property gallery (it&apos;s not unit photo)*
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col gap-2 w-full md:w-1/3">
                    <span className="text-xs font-medium text-gray-700 mb-1">
                      Featured photo*
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="upload-box flex flex-col items-center justify-center cursor-pointer min-h-[80px] border-2 border-dashed border-[#2563eb] rounded-lg bg-white hover:bg-[#f5f8ff] transition">
                        <FiPlus className="text-[#2563eb] mb-1" size={24} />
                        <span className="text-xs text-gray-400 mt-2 text-center">
                          Upload cover photo
                          <br />
                          (.jpg, .png only)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-gray-700 mb-1">
                      More photos{" "}
                      <span className="text-gray-400">(optional)</span>
                    </span>
                    <div className="grid grid-cols-4 gap-2">
                      {GALLERY.slice(1).map((photo, i) => (
                        <div
                          key={i}
                          className="upload-box flex flex-col items-center justify-center cursor-pointer min-h-[80px] border-2 border-dashed border-[#2563eb] rounded-lg bg-white hover:bg-[#f5f8ff] transition"
                        >
                          <FiPlus className="text-[#2563eb] mb-1" size={20} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Videos */}
          <div className="mb-8">
            <label className="text-xs font-medium text-gray-700 mb-1 block">
              Videos (optional)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {VIDEOS.map((v) => (
                <div
                  key={v.label}
                  className="upload-box flex flex-col items-center justify-center cursor-pointer min-h-[80px] border-2 border-dashed border-[#2563eb] rounded-lg bg-white hover:bg-[#f5f8ff] transition"
                >
                  <FiPlus className="text-[#2563eb] mb-1" size={20} />
                  <span className="text-xs text-gray-400 text-center">
                    {v.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* Navigation Bar */}
      <div className="w-full border-t bg-white py-4 px-6 flex justify-between items-center fixed bottom-0 left-0 z-40">
        <Button
          className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          type="button"
        >
          Back
        </Button>
        <Button
          type="button"
          className="px-8"
          onClick={() => router.push("/subscription")}
        >
          Next
        </Button>
      </div>
      {/* Modal for Add actions */}
      <Modal
        open={!!modal}
        onClose={() => setModal(null)}
        title={modal?.label || ""}
      >
        {modal?.label === "Leasing info" ? (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Leasing manager name<span className="text-[#f43f5e]">*</span>
              </label>
              <input
                name="name"
                value={leasing.name}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Leasing manager Phone number
                <span className="text-[#f43f5e]">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  name="country"
                  value={leasing.country}
                  onChange={handleLeasingChange}
                  className="input w-20"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag}
                    </option>
                  ))}
                </select>
                <input
                  name="phone"
                  value={leasing.phone}
                  onChange={handleLeasingChange}
                  className="input"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Leasing manager email<span className="text-[#f43f5e]">*</span>
              </label>
              <input
                name="email"
                value={leasing.email}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex items-center gap-2 md:col-span-2 mt-2">
              <input
                type="checkbox"
                name="sameAddress"
                checked={leasing.sameAddress}
                onChange={handleLeasingChange}
                className="w-4 h-4 accent-[#2563eb] rounded"
              />
              <span className="text-xs text-gray-700">
                Address (same as property)
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Street address<span className="text-[#f43f5e]">*</span>
              </label>
              <input
                name="street"
                value={leasing.street}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Apt, suit, unit
              </label>
              <input
                name="apt"
                value={leasing.apt}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                City/Town<span className="text-[#f43f5e]">*</span>
              </label>
              <input
                name="city"
                value={leasing.city}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                State/Territory<span className="text-[#f43f5e]">*</span>
              </label>
              <select
                name="state"
                value={leasing.state}
                onChange={handleLeasingChange}
                className="input"
              >
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Zip code<span className="text-[#f43f5e]">*</span>
              </label>
              <input
                name="zip"
                value={leasing.zip}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex items-end justify-end md:col-span-2 mt-2">
              <Button
                type="button"
                className="px-8"
                onClick={() => setModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        ) : (
          <form className="space-y-4">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {modal?.label}
            </label>
            <input
              className="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex items-end justify-end gap-2">
              <Button
                type="button"
                className="px-6"
                onClick={() => setModal(null)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="px-8"
                onClick={() => setModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
