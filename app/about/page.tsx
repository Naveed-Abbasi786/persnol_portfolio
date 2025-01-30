"use client";
import Button from "@/component/button/page";
import Image from "next/image";
import React from "react";
import ProfileImage from "@/public/assets/img/profile.jpg";

export default function page() {
  const PersonalInfo: string = JSON.stringify([
    { firstName: "Steve" },
    { lastName: "Milner" },
    { Age: "27 Years" },
    { Nationality: "Tunisian" },
    { Freelance: "Available" },
    { Address: "Tunis" },
    { phone: "21621184010" },
    { Email: "you@mail.com" },
    { Skype: "steve.milner" },
    { languages: ["French", "English"] },
  ]);

  // Define type for the parsed JSON data
  type PersonalInfoType = Record<string, string | string[]>;

  const parsedInfo: PersonalInfoType[] = JSON.parse(PersonalInfo);

  interface ExperinceDefineType {
    years: number;
    exper: string;
  }
  const ExperinceData: ExperinceDefineType[] = [
    { years: 12, exper: "years of experience" },
    { years: 97, exper: "completed  projects" },
    { years: 81, exper: "Happy customers" },
    { years: 53, exper: "awards won" },
  ];
  const downloandNow = () => {
    alert("S");
  };
  return (
    <div className="h-fit w-full bg-[#111111]">


      <div className="md:flex hidden h-[210px] flex-col items-center justify-center p-8">
        <div className="relative">
          <h1 className="abt -z-10 select-none text-center font-PoppinsHeading text-[120px] font-bold leading-[0.4] tracking-[10px]">
            RESUME
          </h1>
        </div>
        <div className="absolute top-16 flex">
          <h1 className="text-center font-Open_Sans text-[56px] !font-extrabold text-white">
            ABOUT <span className="text-[#ffb400]">ME</span>
          </h1>
        </div>
      </div>

      <div className="flex md:hidden  w-full justify-center items-center ">
            <Image
              src={ProfileImage}
              width={740}
              height={100}
              alt="Profile"
              className="h-[250px] w-[250px] rounded-full border-4 mt-20 z-10 border-[#252525] object-cover drop-shadow"
            />
          </div>

      <div className="flex h-fit w-full items-center justify-center">
        <div className="grid h-full w-[86%] grid-cols-1 lg:grid-cols-2">
          <div className="p-6">
            <h1 className="font-Poppins text-[26px] font-semibold uppercase leading-[31.2px] tracking-wide text-white">
              Persnol Infos{" "}
            </h1>

            <div className="grid h-full w-full grid-cols-2">
              <div className="flex flex-col gap-2 pt-6">
                {parsedInfo
                  .slice(0, 5)
                  .map((item: PersonalInfoType, index: number) => {
                    const key: string = Object.keys(item)[0];
                    const value: string | string[] = item[key];

                    return (
                      <div key={index} className="py-2">
                        <span className="text-[13px] capitalize text-gray-300 md:text-[16px]">{`${key} :`}</span>{" "}
                        <span className="text-[13px] font-medium capitalize text-white md:text-[16px]">
                          {Array.isArray(value) ? value.join(", ") : value}
                        </span>
                      </div>
                    );
                  })}
                <div className="mt-12 w-[90%] md:mt-0">
                  <Button
                    text="Download CV"
                    oNClick={downloandNow}
                    icon="ri:download-fill"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-6">
                {parsedInfo
                  .slice(5)
                  .map((item: PersonalInfoType, index: number) => {
                    const key: string = Object.keys(item)[0];
                    const value: string | string[] = item[key];

                    return (
                      <div key={index} className="py-2">
                        <span className="text-[13px] capitalize text-gray-300 md:text-[16px]">{`${key} :`}</span>{" "}
                        <span className="text-[13px] font-medium capitalize text-white md:text-[16px]">
                          {Array.isArray(value) ? value.join(", ") : value}
                        </span>
                      </div>
                    );
                  })}
              </div>

            </div>
          </div>

          <div className="mb-6  grid grid-cols-2 gap-8">
            {ExperinceData.map((val, idx) => (
              <div key={idx} className="flex  md:h-[180px] h-[130px] col-span-1 flex-col items-start justify-center rounded-sm border-2 border-[#252525]">
                <h1 className="ml-7 flex justify-start font-Open_Sans lg:text-[47px] md:text-[40px] text-[35px] font-bold text-[#ffb400]">
                  {val.years} <span className="block lg:text-[36px] md:text-[33px] text-[30px]">+</span>
                </h1>
                <div className="flex items-center justify-center md:ml-0 md:mb-0  ml-8 gap-3 md:px-10 px-0 leading-6">
                  <span className="md:block hidden h-[2px] w-[60px] bg-gray-500"></span>{" "}
                  <h6 className="font-Open_Sans md:text-[14px] lg:text-[15px] text-[13px] font-normal uppercase text-white">
                    {val.exper}
                  </h6>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
}
