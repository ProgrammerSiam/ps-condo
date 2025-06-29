"use client";
import React from "react";
import Button from "../../components/Button";
import { FiEdit2, FiTrash2, FiPlus, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const INFO_LEFT = [
  {
    label: "Property address",
    value:
      "Dallas apartments complex, http://rentyard.com, Total unit: 60\n963 Damon Dr E Dallas TX 75061 USA",
    required: true,
    canEdit: true,
  },
  {
    label: "Leasing info",
    value:
      "Leasing manager: Alex Johan, leasing@rentyard.com\n+880 1234567890\nAddress: 963 Damon Dr E Dallas TX 75061 USA",
    required: true,
    canEdit: true,
  },
  {
    label: "Charges",
    value: "Application fee: $200 (All 18+ applicants), Admin fee: $45",
    required: true,
    canEdit: true,
  },
  {
    label: "Rent frequency & payment reminder",
    value:
      "Rent payment frequency: Monthly, Rent reminder date: 25th every month\nRent due date: 5th every month",
    required: true,
    canEdit: true,
  },
  {
    label: "Application agreement",
    value: "Agreement: Yes, Accept immigrant & student application",
    required: false,
    optional: true,
    canEdit: true,
  },
  {
    label: "About the property",
    value:
      "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    required: false,
    optional: true,
    canEdit: true,
  },
  {
    label: "Community's amenity/features",
    value: [
      "Air conditioning",
      "Cable ready",
      "Ceiling fan",
      "High ceilings",
      "Private balcony",
      "Refrigerator",
      "Wooded views",
      "W/D hookup",
    ],
    isTags: true,
    required: false,
    recommended: true,
    canEdit: true,
  },
];

const INFO_RIGHT = [
  {
    label: "Pet fees",
    value: "Dog, Max 100LB, $200 one-time, $200 deposit, $100/month",
    required: false,
    optional: true,
    canEdit: true,
  },
  {
    label: "Parking",
    value: "Guest parking available, 24H",
    required: false,
    optional: true,
    canEdit: true,
  },
  {
    label: "Nearest educational institution",
    value: [
      "Greenway school, 1mile from, 2mile",
      "High school, 1mile from, 2mile",
    ],
    required: false,
    recommended: true,
    canEdit: true,
  },
  {
    label: "Nearest stations",
    value: ["Bus, Station name, 2mile", "Airport, Station name, 2mile"],
    required: false,
    recommended: true,
    canEdit: true,
  },
  {
    label: "Nearest landmark",
    value: ["Museum, Landmark name, 2mile", "Mosque, Landmark name, 2mile"],
    required: false,
    recommended: true,
    canEdit: true,
  },
  {
    label: "Utilities provider",
    value: ["Cable utilities company name", "Internet utilities company name"],
    required: false,
    recommended: true,
  },
];

const GALLERY = [
  { type: "featured", url: "", label: "Upload cover photo" },
  ...Array.from({ length: 8 }).map((_, i) => ({
    type: "more",
    url: "",
    label: `Photo ${i + 1}`,
  })),
];

const VIDEOS = [
  { label: "Property video (optional)" },
  { label: "Property virtual tour (optional)" },
  { label: "Property self video (optional)" },
];

export default function CondominiumsSummaryPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-2 py-8">
        <div className="w-full max-w-7xl bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 text-left">
            Condominiums information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              {INFO_LEFT.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-2 group relative border-b last:border-b-0 pb-3"
                >
                  <div className="flex-1">
                    <span className="text-xs font-medium text-gray-700">
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
                    {item.isTags ? (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {Array.isArray(item.value) &&
                          item.value.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center bg-[#f5f8ff] border border-[#2563eb] text-[#2563eb] rounded-full px-3 py-1 text-xs font-medium"
                            >
                              {tag}
                              <button className="ml-1 text-[#2563eb] hover:text-[#f43f5e]">
                                <FiX size={12} />
                              </button>
                            </span>
                          ))}
                        <button className="inline-flex items-center border border-[#2563eb] text-[#2563eb] rounded-full px-3 py-1 text-xs font-medium hover:bg-[#f5f8ff]">
                          <FiPlus className="mr-1" size={14} /> Add
                        </button>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-900 whitespace-pre-line mt-1">
                        {item.value}
                      </div>
                    )}
                  </div>
                  {item.canEdit && (
                    <div className="flex gap-1 absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition">
                      <button className="text-gray-400 hover:text-[#2563eb] p-1">
                        <FiEdit2 size={16} />
                      </button>
                      <button className="text-gray-400 hover:text-[#f43f5e] p-1">
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-3">
              {INFO_RIGHT.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-2 group relative border-b last:border-b-0 pb-3"
                >
                  <div className="flex-1">
                    <span className="text-xs font-medium text-gray-700">
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
                    {Array.isArray(item.value) ? (
                      <ul className="list-disc ml-5 mt-1 text-sm text-gray-900">
                        {item.value.map((v) => (
                          <li key={v}>{v}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm text-gray-900 whitespace-pre-line mt-1">
                        {item.value}
                      </div>
                    )}
                  </div>
                  {item.canEdit && (
                    <div className="flex gap-1 absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition">
                      <button className="text-gray-400 hover:text-[#2563eb] p-1">
                        <FiEdit2 size={16} />
                      </button>
                      <button className="text-gray-400 hover:text-[#f43f5e] p-1">
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Property Gallery */}
          <div className="mb-8">
            <div className="bg-gray-50 rounded-xl border border-gray-200">
              <div className="px-6 py-3 border-b border-gray-200 rounded-t-xl bg-gray-100 text-sm font-semibold text-gray-700">
                Property gallery{" "}
                <span className="text-xs text-gray-400">
                  (It&apos;s not unit photo)*
                </span>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col gap-2 w-full md:w-1/3">
                    <span className="text-xs font-medium text-gray-700 mb-1">
                      Featured photo*
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="upload-box flex flex-col items-center justify-center cursor-pointer">
                        <svg
                          width="32"
                          height="32"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <rect width="32" height="32" rx="8" fill="#f5f8ff" />
                          <path
                            d="M16 10v12M10 16h12"
                            stroke="#2563eb"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-xs text-gray-400 mt-2">
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
                          className="upload-box flex flex-col items-center justify-center cursor-pointer"
                        >
                          <svg
                            width="32"
                            height="32"
                            fill="none"
                            viewBox="0 0 32 32"
                          >
                            <rect
                              width="32"
                              height="32"
                              rx="8"
                              fill="#f5f8ff"
                            />
                            <path
                              d="M16 10v12M10 16h12"
                              stroke="#2563eb"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
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
                  className="upload-box flex flex-col items-center justify-center cursor-pointer min-h-[80px]"
                >
                  <FiPlus className="text-[#2563eb] mb-1" size={20} />
                  <span className="text-xs text-gray-400 text-center">
                    {v.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="flex justify-between items-center  pt-6 mt-6">
            <button
              className="text-[#272B35] bg-transparent underline text-[16px] font-medium leading-normal"
              type="button"
            >
              Back
            </button>
            <Button
              type="button"
              className="px-8"
              onClick={() => router.push("/property-info")}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
