"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Button from "../components/Button";

import { useRouter } from "next/navigation";

const PROPERTY_TYPES = [
  {
    key: "single",
    title: "Single House Property",
    desc: "Single unit house for single family",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M10.5 25.6667L10.5022 20.9972C10.5028 19.9115 10.503 19.3686 10.6804 18.9405C10.9174 18.3683 11.372 17.9138 11.9442 17.6772C12.3726 17.5 12.9155 17.5 14.0012 17.5C15.0872 17.5 15.6303 17.5 16.0588 17.6773C16.6312 17.9142 17.0858 18.3688 17.3227 18.9412C17.5 19.3697 17.5 19.9128 17.5 20.9988V25.6667"
          stroke="#272B35"
          stroke-width="1.75"
        />
        <path
          d="M8.26989 5.55584L7.10321 6.46648C5.33378 7.84762 4.44906 8.53819 3.97453 9.51189C3.5 10.4856 3.5 11.6104 3.5 13.86V16.2998C3.5 20.7152 3.5 22.9229 4.86683 24.2947C6.23367 25.6663 8.43355 25.6663 12.8333 25.6663H15.1667C19.5664 25.6663 21.7664 25.6663 23.1331 24.2947C24.5 22.9229 24.5 20.7152 24.5 16.2998V13.86C24.5 11.6104 24.5 10.4856 24.0255 9.51189C23.5509 8.53819 22.6662 7.84762 20.8968 6.46648L19.7301 5.55584C16.9775 3.40729 15.6011 2.33301 14 2.33301C12.3989 2.33301 11.0225 3.40729 8.26989 5.55584Z"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "apartment",
    title: "Apartments complex",
    desc: "Multiple unit house for families",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
      >
        <path
          d="M15.836 2.33594L3.00269 8.16927"
          stroke="#272B35"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.6667 3.5V25.6667H8.83341C6.63352 25.6667 5.53358 25.6667 4.85017 24.9832C4.16675 24.2998 4.16675 23.1999 4.16675 21V8.16667"
          stroke="#272B35"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.6667 8.16406L26.3334 13.9974"
          stroke="#272B35"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.3308 25.6637H20.4975C22.6973 25.6637 23.7973 25.6637 24.4807 24.9803C25.1641 24.2968 25.1641 23.1969 25.1641 20.997V13.4141"
          stroke="#272B35"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.6667 11.6641V8.16406"
          stroke="#272B35"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.83081 12.8359H9.99748M8.83081 17.5026H9.99748"
          stroke="#272B35"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.3308 16.3359H20.4975"
          stroke="#272B35"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.9167 25.6667V21"
          stroke="#272B35"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "condo",
    title: "Condominiums",
    desc: "Multiple unit house for families",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
      >
        <path
          d="M14.3335 2.33301H7.3335C4.43783 2.33301 3.8335 2.93734 3.8335 5.83301V25.6663H17.8335V5.83301C17.8335 2.93734 17.2292 2.33301 14.3335 2.33301Z"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linejoin="round"
        />
        <path
          d="M21.3335 9.33301H17.8335V25.6663H24.8335V12.833C24.8335 9.93734 24.2292 9.33301 21.3335 9.33301Z"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linejoin="round"
        />
        <path
          d="M9.66943 7H12.0028M9.66943 10.5H12.0028M9.66943 14H12.0028"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.7528 25.667V21.0003C13.7528 19.9004 13.7528 19.3504 13.4111 19.0087C13.0693 18.667 12.5194 18.667 11.4194 18.667H10.2528C9.15282 18.667 8.60286 18.667 8.26114 19.0087C7.91943 19.3504 7.91943 19.9004 7.91943 21.0003V25.667"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const ROLES = [
  {
    key: "landlord",
    title: "Landlord",
    desc: "Owner of the property",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M15.7544 15.7503C17.6495 16.5626 18.5972 16.9687 19.5526 16.8413C19.6604 16.8268 19.7675 16.8074 19.8736 16.7831C20.813 16.5673 21.5579 15.8546 23.0478 14.4292L23.2227 14.2619C24.3524 13.1322 24.9173 12.5673 25.0545 11.4143C25.1917 10.2613 24.8972 9.77954 24.3083 8.81597C23.7852 7.95988 23.0546 6.98391 22.0377 5.96705C21.0209 4.95017 20.0448 4.21963 19.1887 3.69642C18.2252 3.10754 17.7435 2.81309 16.5904 2.95026C15.4374 3.08743 14.8725 3.65231 13.7428 4.78206L13.5755 4.95683C12.1502 6.44683 11.4375 7.19181 11.2217 8.13131C11.1974 8.23723 11.1781 8.34421 11.1637 8.45193C11.0362 9.40742 11.4424 10.3551 12.2546 12.2503"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.2552 12.249L2.92188 21.5832V25.0832H6.42187V22.7498H8.75521V20.4165H11.0885L15.7552 15.7498"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.8307 8.16699L18.6641 9.33366"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "realtor",
    title: "Realtor",
    desc: "Manage property on behalf on owner",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
      >
        <path
          d="M23.9975 25.667V19.8337C23.9975 17.6338 23.9975 16.5339 23.314 15.8504C22.6306 15.167 21.5307 15.167 19.3308 15.167L14.6641 25.667L9.99748 15.167C7.79759 15.167 6.69764 15.167 6.01423 15.8504C5.33081 16.5339 5.33081 17.6338 5.33081 19.8337V25.667"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.6694 17.5003L14.086 22.167L14.6694 23.917L15.2527 22.167L14.6694 17.5003ZM14.6694 17.5003L13.5027 15.167H15.836L14.6694 17.5003Z"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.7475 7.58398V6.41732C18.7475 4.16216 16.9193 2.33398 14.6641 2.33398C12.409 2.33398 10.5808 4.16216 10.5808 6.41732V7.58398C10.5808 9.83915 12.409 11.6673 14.6641 11.6673C16.9193 11.6673 18.7475 9.83915 18.7475 7.58398Z"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "pmc",
    title: "Property management company",
    desc: "For management company",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
      >
        <path
          d="M8.50016 10.5H7.3335M13.1668 10.5H12.0002M8.50016 7H7.3335M13.1668 7H12.0002"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.9142 17.4997H20.7476M21.9142 12.833H20.7476"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.6668 9.33297V24.4997H26.0002V11.6663C26.0002 10.3776 24.9555 9.33297 23.6668 9.33297H16.6668ZM16.6668 9.33297V4.66634C16.6668 3.37768 15.6222 2.33301 14.3335 2.33301H6.16683C4.87816 2.33301 3.8335 3.37768 3.8335 4.66634V11.6663"
          stroke="#272B35"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.0028 25.6667V26.5417C12.486 26.5417 12.8778 26.1499 12.8778 25.6667H12.0028ZM2.66943 25.6667H1.79443C1.79443 26.1499 2.18619 26.5417 2.66943 26.5417V25.6667ZM8.79443 16.3333C8.79443 17.1388 8.14152 17.7917 7.3361 17.7917V19.5417C9.10801 19.5417 10.5444 18.1053 10.5444 16.3333H8.79443ZM7.3361 17.7917C6.53068 17.7917 5.87777 17.1388 5.87777 16.3333H4.12777C4.12777 18.1053 5.56418 19.5417 7.3361 19.5417V17.7917ZM5.87777 16.3333C5.87777 15.5279 6.53068 14.875 7.3361 14.875V13.125C5.56418 13.125 4.12777 14.5614 4.12777 16.3333H5.87777ZM7.3361 14.875C8.14152 14.875 8.79443 15.5279 8.79443 16.3333H10.5444C10.5444 14.5614 9.10801 13.125 7.3361 13.125V14.875ZM12.0028 24.7917H2.66943V26.5417H12.0028V24.7917ZM3.54443 25.6667C3.54443 23.5726 5.24202 21.875 7.3361 21.875V20.125C4.27551 20.125 1.79443 22.606 1.79443 25.6667H3.54443ZM7.3361 21.875C9.43018 21.875 11.1278 23.5726 11.1278 25.6667H12.8778C12.8778 22.606 10.3967 20.125 7.3361 20.125V21.875Z"
          fill="#272B35"
        />
      </svg>
    ),
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
        <div className="w-full  p-10 mt-8 mb-8">
          <SectionTitle>Property type</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {PROPERTY_TYPES.map((type) => (
              <Card
                key={type.key}
                selected={propertyType === type.key}
                onClick={() => setPropertyType(type.key)}
                className="h-full"
              >
                <div className="flex items-center gap-[30px] ">
                  <div className="w-[28px] h-[28px]  justify-center rounded-[8px] bg-[#F9FBFF] ">
                    {/* Placeholder for icon */}
                    <span className="text-xl text-[#272B35]">{type.icon}</span>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <span className="text-black text-[16px] font-semibold leading-normal">
                      {type.title}
                    </span>
                    <span className="text-[#777980]  text-[14px] font-medium leading-normal">
                      {type.desc}
                    </span>
                  </div>
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
                <div className="flex items-center gap-[30px] ">
                  <div className="w-[28px] h-[28px]  justify-center rounded-[8px] bg-[#F9FBFF] ">
                    {/* Placeholder for icon */}
                    <span className="text-xl text-[#272B35]">{r.icon}</span>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <span className="text-black text-[16px] font-semibold leading-normal">
                      {r.title}
                    </span>
                    <span className="text-[#777980]  text-[14px] font-medium leading-normal">
                      {r.desc}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Button
              className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              type="button"
            >
              Back
            </Button>
            <Button type="button" onClick={() => router.push("/property-type")}>
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
