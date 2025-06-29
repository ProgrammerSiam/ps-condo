"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import FileUpload from "../../components/FileUpload";
import { useRouter } from "next/navigation";

const PROPERTY_TYPES = [
  {
    key: "single",
    title: "Single House Property",
    desc: "Single unit house for single family",
  },
  {
    key: "apartment",
    title: "Apartments complex",
    desc: "Multiple unit house for families",
  },
  {
    key: "condo",
    title: "Condominiums",
    desc: "Multiple unit house for families",
  },
];

const ROLES = [
  {
    key: "landlord",
    title: "Landlord",
    desc: "Owner of the property",
  },
  {
    key: "realtor",
    title: "Realtor",
    desc: "Manage property on behalf on owner",
  },
  {
    key: "pmc",
    title: "Property management company",
    desc: "For management company",
  },
];

const COUNTRIES = ["Choose country", "USA", "Canada", "UK"];
const STATES = ["Choose state", "Texas", "California", "New York"];

export default function NextStepPage() {
  const router = useRouter();
  const [propertyType, setPropertyType] = useState("condo");
  const [role, setRole] = useState("landlord");
  const [agreementFile, setAgreementFile] = useState<File | null>(null);
  const [accepted, setAccepted] = useState(false);
  const [form, setForm] = useState({
    companyName: "Runyan trade center",
    companyId: "",
    jobTitle: "Manager",
    country: "Choose country",
    street: "111 Austin Ave",
    apt: "3050",
    phone: "+880",
    email: "majarul2025@gmail.com",
    city: "Dallas",
    state: "Choose state",
    zip: "75061",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-10 mt-8 mb-8">
          <SectionTitle>Property type</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {PROPERTY_TYPES.map((type) => (
              <Card
                key={type.key}
                selected={propertyType === type.key}
                onClick={() => setPropertyType(type.key)}
                className="h-full"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-[#f5f8ff] rounded flex items-center justify-center">
                      <span className="text-xl">🏠</span>
                    </div>
                    <span className="font-semibold text-base text-gray-900">
                      {type.title}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 pl-10">
                    {type.desc}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <SectionTitle>Select your role</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {ROLES.map((r) => (
              <Card
                key={r.key}
                selected={role === r.key}
                onClick={() => setRole(r.key)}
                className="h-full"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-[#f5f8ff] rounded flex items-center justify-center">
                      <span className="text-xl">
                        {r.key === "landlord"
                          ? "🧑‍💼"
                          : r.key === "realtor"
                          ? "🧑‍💼"
                          : "🏢"}
                      </span>
                    </div>
                    <span className="font-semibold text-base text-gray-900">
                      {r.title}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 pl-10">{r.desc}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-8">
            <div className="bg-gray-50 rounded-xl border border-gray-200">
              <div className="px-6 py-3 border-b border-gray-200 rounded-t-xl bg-gray-100 text-sm font-semibold text-gray-700">
                Company & office info
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    Company name*
                  </label>
                  <input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleFormChange}
                    className="input"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    Company Identifier(EIN/TIN)*
                  </label>
                  <input
                    name="companyId"
                    value={form.companyId}
                    onChange={handleFormChange}
                    className="input"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    Your job title*
                  </label>
                  <input
                    name="jobTitle"
                    value={form.jobTitle}
                    onChange={handleFormChange}
                    className="input"
                  />
                </div>
                <div className="flex flex-col gap-1 md:col-span-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    Agreement with landlord/owner*
                  </label>
                  <FileUpload
                    file={agreementFile}
                    onFileChange={setAgreementFile}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    Country/Region*
                  </label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleFormChange}
                    className="input"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    Street address*
                  </label>
                  <input
                    name="street"
                    value={form.street}
                    onChange={handleFormChange}
                    className="input"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    Apt, suit, unit (if applicable)
                  </label>
                  <input
                    name="apt"
                    value={form.apt}
                    onChange={handleFormChange}
                    className="input"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    Phone number*
                  </label>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center px-2 bg-gray-100 border border-gray-200 rounded text-xs text-gray-700">
                      🇧🇩
                    </span>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleFormChange}
                      className="input"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    Contact email*
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    className="input"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    City/Town*
                  </label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleFormChange}
                    className="input"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700 mb-1">
                    State/Territory*
                  </label>
                  <select
                    name="state"
                    value={form.state}
                    onChange={handleFormChange}
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
                    Zip code*
                  </label>
                  <input
                    name="zip"
                    value={form.zip}
                    onChange={handleFormChange}
                    className="input"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-8">
            <Checkbox
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              label="Accept RentYard property adding terms & condition"
            />
          </div>

          <div className="flex justify-between items-center">
            <Button
              className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              type="button"
            >
              Back
            </Button>
            <Button
              type="button"
              disabled={!accepted}
              onClick={() => {
                router.push("/condominiums-info");
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
