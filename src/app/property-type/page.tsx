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

export default function Home() {
  const [propertyType, setPropertyType] = useState("condo");
  const [role, setRole] = useState("landlord");
  const [ownershipFile, setOwnershipFile] = useState<File | null>(null);
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const handleGetStarted = () => {
    if (accepted) {
      router.push("/next-step");
    }
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
                      {/* Placeholder for icon */}
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
                      {/* Placeholder for icon */}
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

          <SectionTitle className="mb-2">Proof of ownership</SectionTitle>
          <div className="mb-8">
            <FileUpload file={ownershipFile} onFileChange={setOwnershipFile} />
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
              onClick={() => router.push("/property-type")}
            >
              Back
            </Button>
            <Button
              type="button"
              disabled={!accepted}
              onClick={() => router.push("/realtor-verification")}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
