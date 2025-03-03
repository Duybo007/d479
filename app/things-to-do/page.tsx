import React from "react";
import { FaHiking } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiFlowerLotusBold } from "react-icons/pi";
import { MdLocalDining } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";

function page() {
  return (
    <div className="h-screen max-w-screen-xl mx-auto">
      <div className="flex flex-col bg-gray-50 py-12 h-full">
        <h1 className="text-5xl pb-4">Things to Do in Taniti</h1>
        <p>
          Discover amazing activities and experiences on our beautiful island
        </p>

        <div className="mt-10 bg-white rounded-lg py-6 flex w-full">
          <div className="flex flex-col w-1/2">
            <p>Activity Type</p>
            <div className="flex gap-4 mt-3 flex-wrap">
              <div className="flex py-1 px-3 gap-2 justify-center items-center border border-gray-500 rounded-full cursor-pointer">
                <FaHiking />
                <p>Adventure</p>
              </div>
              <div className="flex py-1 px-3 gap-2 justify-center items-center border border-gray-500 rounded-full cursor-pointer">
                <PiFlowerLotusBold />
                <p>Relaxation</p>
              </div>
              <div className="flex py-1 px-3 gap-2 justify-center items-center border border-gray-500 rounded-full cursor-pointer">
                <MdLocalDining />
                <p>Dining</p>
              </div>
              <div className="flex py-1 px-3 gap-2 justify-center items-center border border-gray-500 rounded-full cursor-pointer">
                <MdFamilyRestroom />
                <p>Family Friendly</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <p>Location</p>
            <div className="flex gap-4 mt-3 flex-wrap">
              <div className="flex py-1 px-3 gap-2 justify-center items-center border border-gray-500 rounded-full cursor-pointer">
                <FaLocationDot />
                <p>Taniti City</p>
              </div>
              <div className="flex py-1 px-3 gap-2 justify-center items-center border border-gray-500 rounded-full cursor-pointer">
                <FaLocationDot />
                <p>Merriton Landing</p>
              </div>
              <div className="flex py-1 px-3 gap-2 justify-center items-center border border-gray-500 rounded-full cursor-pointer">
                <FaLocationDot />
                <p>Yellow Beach</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                className="rounded-t-lg max-h-[200px] w-full object-cover"
                src="https://res.cloudinary.com/manawa/image/upload/c_fill,g_auto,h_630,w_1200,q_auto/articles/most-beautiful-spots-for-your-first-scuba-dive/61396758347_kwukov"
                alt=""
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Scuba Diving Adventure
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Explore vibrant coral reefs and marine life with our experienced
                instructors.
              </p>
            </div>
            <div className="flex justify-between px-5 pb-5 items-center">
              <p>From $89 - Challenging</p>
              <div className="p-2 bg-[#008080] text-white rounded-lg cursor-pointer">
                Learn More
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                className="rounded-t-lg max-h-[200px] w-full object-cover"
                src="https://www.sanctuarysalondayspa.com/wp-content/uploads/2019/08/spa-services-5.jpg"
                alt=""
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Luxury Spa Day
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Indulge in a day of relaxation with our signature spa
                treatments.
              </p>
            </div>
            <div className="flex justify-between px-5 pb-5 items-center">
              <p>From $129 - Easy</p>
              <div className="p-2 bg-[#008080] text-white rounded-lg cursor-pointer">
                Learn More
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                className="rounded-t-lg max-h-[200px] w-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjN6YrQgnf5hhAEGOKXLmfnLhJaNXrivpgYEzzR1LYAYeD1giNflJvEWxK-WlGhq8mPzY&usqp=CAU"
                alt=""
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Culinary Experience
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Taste the authentic flavors of Taniti with our guided food tour.
              </p>
            </div>
            <div className="flex justify-between px-5 pb-5 items-center">
              <p>From $75 - Moderate</p>
              <div className="p-2 bg-[#008080] text-white rounded-lg cursor-pointer">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
