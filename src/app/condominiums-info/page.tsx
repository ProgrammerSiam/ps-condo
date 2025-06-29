"use client";
import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import FileUpload from "../../components/FileUpload";
import { useRouter } from "next/navigation";

const INFO_ITEMS = [
  { label: "Property address", required: true },
  { label: "Leasing info", required: true },
  { label: "Charges", required: true },
  { label: "Rent frequency & payment reminder", required: true },
  { label: "Application agreement", required: false },
  { label: "About the property", required: false },
  { label: "Community's amenity/features", required: false, recommended: true },
  {
    label: "Pet fees",
    required: false,
    note: "Optional, add fees if you allow pet",
  },
  { label: "Parking", required: false },
  {
    label: "Nearest educational institution",
    required: false,
    recommended: true,
  },
  { label: "Nearest stations", required: false, recommended: true },
  { label: "Nearest landmark", required: false, recommended: true },
  { label: "Utilities provider", required: false, recommended: true },
];

const FEATURED_PHOTO_BOXES = 1;
const MORE_PHOTO_BOXES = 8;

const COUNTRIES = ["Choose country", "USA", "Canada", "UK"];
const STATES = ["Choose state", "Texas", "California", "New York"];

export default function CondominiumsInfoPage() {
  const router = useRouter();
  const [showAddressModal, setShowAddressModal] = React.useState(false);
  const [addressForm, setAddressForm] = React.useState({
    propertyName: "Dallas apartments complex",
    totalUnits: "50",
    website: "http://",
    country: "Choose country",
    street: "111 Austin Ave",
    apt: "123",
    zip: "75061",
    city: "Dallas",
    state: "Choose state",
  });
  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
  };

  const [showLeasingModal, setShowLeasingModal] = React.useState(false);
  const [leasingForm, setLeasingForm] = React.useState({
    name: "Alex Johan",
    phone: "+880",
    email: "leasing@rentyard.com",
    sameAddress: false,
    country: "Choose country",
    street: "111 Austin Ave",
    apt: "3050",
    city: "Dallas",
    state: "Choose state",
    zip: "75061",
  });
  const handleLeasingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setLeasingForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setLeasingForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const [showChargesModal, setShowChargesModal] = React.useState(false);
  const [chargesForm, setChargesForm] = React.useState({
    applicationFee: "100",
    applicantType: "All 18+ applicant",
    adminFee: "15",
    notApplicable: false,
  });
  const handleChargesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      setChargesForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setChargesForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  const APPLICANT_TYPES = [
    "All 18+ applicant",
    "Primary applicant only",
    "All applicants",
  ];

  // Modal state
  const [activeModal, setActiveModal] = React.useState<string | null>(null);

  // About the property
  const [aboutProperty, setAboutProperty] = React.useState("");

  // Application agreement
  const [applicationAgreement, setApplicationAgreement] =
    React.useState<File | null>(null);
  const [acceptImmigrant, setAcceptImmigrant] = React.useState(false);

  // Rent frequency & payment reminder
  const [rentFrequency, setRentFrequency] = React.useState("Monthly");
  const [reminderDate, setReminderDate] = React.useState("25th Every month");
  const [dueDate, setDueDate] = React.useState("5th Every month");
  const RENT_FREQUENCIES = ["Monthly", "Quarterly", "Yearly"];

  // Parking
  const [parkingTime, setParkingTime] = React.useState("24");
  const [parkingOverview, setParkingOverview] = React.useState("");
  const PARKING_TIMES = ["24", "12", "6"];

  // Pet fees
  const [petType, setPetType] = React.useState("");
  const [petWeight, setPetWeight] = React.useState("100");
  const [petFee, setPetFee] = React.useState("$100");
  const [petDeposit, setPetDeposit] = React.useState("$100");
  const [petRent, setPetRent] = React.useState("$100");
  const PET_TYPES = ["Dog", "Cat", "Other"];

  // Community amenities
  const [amenitySearch, setAmenitySearch] = React.useState("");
  const [selectedAmenities, setSelectedAmenities] = React.useState<string[]>([
    "Air conditioning",
  ]);
  const AMENITIES = [
    "Air conditioning",
    "Cable ready",
    "Ceiling fan",
    "High ceilings",
    "Private balcony",
    "Refrigerator",
    "Wooded views",
    "W/D hookup",
    "Hardwood Floor (home)",
    "Fireplace (home)",
    "First aid kit",
    "Carbon monoxide alarm",
    "Expanded patios (home)",
    "Free parking on premises",
    "Fire extinguisher",
  ];

  // Landmark
  const [landmarkType, setLandmarkType] = React.useState("Museum");
  const [landmarkDistance, setLandmarkDistance] = React.useState("1.5");
  const [landmarkUnit, setLandmarkUnit] = React.useState("Mile");
  const [landmarkName, setLandmarkName] = React.useState("");
  const LANDMARK_UNITS = ["Mile", "Km"];

  // Nearest station
  const [stationType, setStationType] = React.useState("");
  const [stationDistance, setStationDistance] = React.useState("1.5");
  const [stationUnit, setStationUnit] = React.useState("Mile");
  const [stationName, setStationName] = React.useState("");
  const STATION_UNITS = ["Mile", "Km"];

  // Nearest educational institution
  const [eduType, setEduType] = React.useState("High school");
  const [eduDistance, setEduDistance] = React.useState("1.5");
  const [eduUnit, setEduUnit] = React.useState("Mile");
  const [eduName, setEduName] = React.useState("");
  const EDU_TYPES = ["High school", "College", "University"];
  const EDU_UNITS = ["Mile", "Km"];

  // Utilities provider
  const [utilityType, setUtilityType] = React.useState("");
  const [utilityCompany, setUtilityCompany] = React.useState("");
  const UTILITY_TYPES = ["Electric", "Water", "Gas", "Internet"];

  // Render modal content
  const renderModalContent = () => {
    switch (activeModal) {
      case "About the property":
        return (
          <form className="space-y-4">
            <textarea
              className="input min-h-[120px] resize-none"
              placeholder="Type message here"
              value={aboutProperty}
              onChange={(e) => setAboutProperty(e.target.value)}
            />
            <div className="flex items-end justify-end">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      case "Application agreement":
        return (
          <form className="space-y-4">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Upload agreement
            </label>
            <FileUpload
              file={applicationAgreement}
              onFileChange={setApplicationAgreement}
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={acceptImmigrant}
                onChange={(e) => setAcceptImmigrant(e.target.checked)}
                className="w-4 h-4 accent-[#2563eb] rounded"
              />
              <span className="text-xs text-gray-700">
                Accept immigrant & international student application
              </span>
            </div>
            <div className="flex items-end justify-end">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      case "Rent frequency & payment reminder":
        return (
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Rent payment frequency*
              </label>
              <select
                className="input"
                value={rentFrequency}
                onChange={(e) => setRentFrequency(e.target.value)}
              >
                {RENT_FREQUENCIES.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Rent Reminder/Statement date*
              </label>
              <input
                className="input"
                value={reminderDate}
                onChange={(e) => setReminderDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Rent due date*
              </label>
              <input
                className="input"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div className="flex items-end justify-end md:col-span-3 mt-2">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      case "Parking":
        return (
          <form className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Guest vehicle parking time
              </label>
              <select
                className="input w-32"
                value={parkingTime}
                onChange={(e) => setParkingTime(e.target.value)}
              >
                {PARKING_TIMES.map((t) => (
                  <option key={t} value={t}>
                    {t}H
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Write parking overview
              </label>
              <textarea
                className="input min-h-[80px] resize-none"
                maxLength={200}
                value={parkingOverview}
                onChange={(e) => setParkingOverview(e.target.value)}
              />
            </div>
            <div className="flex items-end justify-end">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      case "Pet fees":
        return (
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Pet type*
              </label>
              <select
                className="input"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
              >
                <option value="">Select</option>
                {PET_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Max weight(LB)*
              </label>
              <input
                className="input"
                value={petWeight}
                onChange={(e) => setPetWeight(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                One time pet fee*
              </label>
              <input
                className="input"
                value={petFee}
                onChange={(e) => setPetFee(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Pet Security Deposit*
              </label>
              <input
                className="input"
                value={petDeposit}
                onChange={(e) => setPetDeposit(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Monthly pet rent*
              </label>
              <input
                className="input"
                value={petRent}
                onChange={(e) => setPetRent(e.target.value)}
              />
            </div>
            <div className="flex items-end justify-end md:col-span-3 mt-2">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      case "Community's amenity/features":
        return (
          <form className="space-y-4">
            <input
              className="input"
              placeholder="Search amenities"
              value={amenitySearch}
              onChange={(e) => setAmenitySearch(e.target.value)}
            />
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
              {AMENITIES.filter((a) =>
                a.toLowerCase().includes(amenitySearch.toLowerCase())
              ).map((a) => (
                <button
                  type="button"
                  key={a}
                  className={`px-3 py-1 rounded-lg border text-xs font-medium ${
                    selectedAmenities.includes(a)
                      ? "bg-[#2563eb] text-white border-[#2563eb]"
                      : "bg-white text-gray-700 border-gray-200"
                  }`}
                  onClick={() =>
                    setSelectedAmenities(
                      selectedAmenities.includes(a)
                        ? selectedAmenities.filter((x) => x !== a)
                        : [...selectedAmenities, a]
                    )
                  }
                >
                  {a}
                </button>
              ))}
            </div>
            <div className="flex items-end justify-end">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      case "Nearest landmark":
        return (
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Landmark type*
              </label>
              <input
                className="input"
                value={landmarkType}
                onChange={(e) => setLandmarkType(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Distance from property*
              </label>
              <div className="flex gap-2">
                <input
                  className="input w-24"
                  value={landmarkDistance}
                  onChange={(e) => setLandmarkDistance(e.target.value)}
                />
                <select
                  className="input w-24"
                  value={landmarkUnit}
                  onChange={(e) => setLandmarkUnit(e.target.value)}
                >
                  {LANDMARK_UNITS.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Landmark name*
              </label>
              <input
                className="input"
                value={landmarkName}
                onChange={(e) => setLandmarkName(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div className="flex items-end justify-end md:col-span-3 mt-2">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      case "Nearest stations":
        return (
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Nearest station type*
              </label>
              <select
                className="input"
                value={stationType}
                onChange={(e) => setStationType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Bus">Bus</option>
                <option value="Train">Train</option>
                <option value="Metro">Metro</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Distance from property*
              </label>
              <div className="flex gap-2">
                <input
                  className="input w-24"
                  value={stationDistance}
                  onChange={(e) => setStationDistance(e.target.value)}
                />
                <select
                  className="input w-24"
                  value={stationUnit}
                  onChange={(e) => setStationUnit(e.target.value)}
                >
                  {STATION_UNITS.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Nearest station name*
              </label>
              <input
                className="input"
                value={stationName}
                onChange={(e) => setStationName(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div className="flex items-end justify-end md:col-span-3 mt-2">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      case "Nearest educational institution":
        return (
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Educational institution type*
              </label>
              <select
                className="input"
                value={eduType}
                onChange={(e) => setEduType(e.target.value)}
              >
                {EDU_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Distance from property*
              </label>
              <div className="flex gap-2">
                <input
                  className="input w-24"
                  value={eduDistance}
                  onChange={(e) => setEduDistance(e.target.value)}
                />
                <select
                  className="input w-24"
                  value={eduUnit}
                  onChange={(e) => setEduUnit(e.target.value)}
                >
                  {EDU_UNITS.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Educational institution name*
              </label>
              <input
                className="input"
                value={eduName}
                onChange={(e) => setEduName(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div className="flex items-end justify-end md:col-span-3 mt-2">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      case "Utilities provider":
        return (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Utility type*
              </label>
              <select
                className="input"
                value={utilityType}
                onChange={(e) => setUtilityType(e.target.value)}
              >
                <option value="">Select</option>
                {UTILITY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Provider company name*
              </label>
              <input
                className="input"
                value={utilityCompany}
                onChange={(e) => setUtilityCompany(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div className="flex items-end justify-end md:col-span-2 mt-2">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      case "Leasing info":
        return (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Leasing manager name*
              </label>
              <input
                name="name"
                value={leasingForm.name}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Leasing manager Phone number*
              </label>
              <div className="flex gap-2">
                <span className="inline-flex items-center px-2 bg-gray-100 border border-gray-200 rounded text-xs text-gray-700">
                  🇧🇩
                </span>
                <input
                  name="phone"
                  value={leasingForm.phone}
                  onChange={handleLeasingChange}
                  className="input"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Leasing manager email*
              </label>
              <input
                name="email"
                value={leasingForm.email}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex items-center gap-2 md:col-span-2 mt-2">
              <input
                type="checkbox"
                name="sameAddress"
                checked={leasingForm.sameAddress}
                onChange={handleLeasingChange}
                className="w-4 h-4 accent-[#2563eb] rounded"
              />
              <span className="text-xs text-gray-700">
                Address (same as property)
              </span>
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Country/Region*
              </label>
              <select
                name="country"
                value={leasingForm.country}
                onChange={handleLeasingChange}
                className="input"
              >
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Street address*
              </label>
              <input
                name="street"
                value={leasingForm.street}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Apt, suit, unit (if applicable)
              </label>
              <input
                name="apt"
                value={leasingForm.apt}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                City/Town*
              </label>
              <input
                name="city"
                value={leasingForm.city}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                State/Territory*
              </label>
              <select
                name="state"
                value={leasingForm.state}
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
            <div className="flex flex-col gap-1 md:col-span-1">
              <label className="text-xs font-medium text-gray-700 mb-1">
                Zip code*
              </label>
              <input
                name="zip"
                value={leasingForm.zip}
                onChange={handleLeasingChange}
                className="input"
              />
            </div>
            <div className="flex items-end justify-end md:col-span-2 mt-2">
              <Button
                type="button"
                className="px-8"
                onClick={() => setActiveModal(null)}
              >
                Add
              </Button>
            </div>
          </form>
        );
      default:
        return null;
    }
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
            Condominiums information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {INFO_ITEMS.slice(0, 7).map((item, i) => (
              <div
                key={item.label}
                className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 bg-white"
              >
                <span className="text-sm text-gray-900">
                  {item.label}
                  {item.required && (
                    <span className="text-[#f43f5e]">(Required)</span>
                  )}
                  {item.note && (
                    <span className="text-gray-400 ml-1">{item.note}</span>
                  )}
                  {item.recommended && (
                    <span className="text-gray-400 ml-1">
                      (Optional but recommended)
                    </span>
                  )}
                  {!item.required && !item.recommended && (
                    <span className="text-gray-400 ml-1">(Optional)</span>
                  )}
                </span>
                <Button
                  className="bg-white text-[#2563eb] border border-[#2563eb] hover:bg-[#f5f8ff] px-3 py-1 text-sm font-medium"
                  onClick={() => setActiveModal(item.label)}
                >
                  + Add
                </Button>
              </div>
            ))}
            {INFO_ITEMS.slice(7).map((item, i) => (
              <div
                key={item.label}
                className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 bg-white"
              >
                <span className="text-sm text-gray-900">
                  {item.label}
                  {item.required && (
                    <span className="text-[#f43f5e]">(Required)</span>
                  )}
                  {item.note && (
                    <span className="text-gray-400 ml-1">{item.note}</span>
                  )}
                  {item.recommended && (
                    <span className="text-gray-400 ml-1">
                      (Optional but recommended)
                    </span>
                  )}
                  {!item.required && !item.recommended && (
                    <span className="text-gray-400 ml-1">(Optional)</span>
                  )}
                </span>
                <Button
                  className="bg-white text-[#2563eb] border border-[#2563eb] hover:bg-[#f5f8ff] px-3 py-1 text-sm font-medium"
                  onClick={() => setActiveModal(item.label)}
                >
                  + Add
                </Button>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <div className="bg-gray-50 rounded-xl border border-gray-200">
              <div className="px-6 py-3 border-b border-gray-200 rounded-t-xl bg-gray-100 text-sm font-semibold text-gray-700">
                Property gallery{" "}
                <span className="text-xs text-gray-400">
                  (It's not unit photo)*
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
                      {Array.from({ length: MORE_PHOTO_BOXES }).map((_, i) => (
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
          <div className="mb-8">
            <label className="text-xs font-medium text-gray-700 mb-1 block">
              Videos (optional)
            </label>
            <div className="relative">
              <input type="text" className="input pr-8" placeholder="" />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#2563eb"
                    strokeWidth="2"
                  />
                  <path d="M8 7l4 3-4 3V7z" fill="#2563eb" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center border-t pt-6 mt-6">
            <Button
              className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              type="button"
            >
              Back
            </Button>
            <Button
              type="button"
              className="px-8"
              onClick={() => router.push("/summary")}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
      <Modal
        open={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal || ""}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}
