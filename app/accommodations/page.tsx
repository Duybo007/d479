"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Page() {
  const accommodations = [
    {
      id: 1,
      title: "Luxury Beach Resort",
      type: "hotel",
      price: 299,
      rating: 4.8,
      image:
        "https://www.pioneer-cbh.com/app/uploads/sites/33/2021/08/25-PIONEER-BEACH-HOTEL-SUPERIOR-DELUXE-ROOM-SV.jpg",
      description: "Hotel • Beachfront",
    },
    {
      id: 2,
      title: "Cozy B&B Inn",
      type: "bb",
      price: 149,
      rating: 4.8,
      image:
        "https://images.trvl-media.com/lodging/2000000/1490000/1489300/1489274/20306c1b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      description: "B&B • City Center",
    },
    {
      id: 3,
      title: "Oceanfront Villa",
      type: "beach-house",
      price: 499,
      rating: 4.8,
      image:
        "https://d3glb5zioac6h9.cloudfront.net/uploads/sources/497766/detail_large/Blue_Vista_05.jpg?1691692473",
      description: "Beach House • Private",
    },
  ];

  const [selectedType, setSelectedType] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  const filterAccommodations = () => {
    return accommodations.filter((acc) => {
      const matchesType = selectedType === "all" || acc.type === selectedType;

      const [minPrice, maxPrice] =
        selectedPrice === "all"
          ? [0, Infinity]
          : selectedPrice.split("-").map(Number);
      const matchesPrice = acc.price >= minPrice && acc.price <= maxPrice;

      const matchesRating =
        selectedRating === "all" ||
        (selectedRating === "5" && acc.rating >= 5) ||
        (selectedRating === "4" && acc.rating >= 4) ||
        (selectedRating === "3" && acc.rating >= 3);

      return matchesType && matchesPrice && matchesRating;
    });
  };
  return (
    <div className="h-screen max-w-screen-xl mx-auto">
      <div className="flex flex-col bg-gray-50 py-12 h-full">
        <h1 className="text-5xl pb-4">Find Your Perfect Stay</h1>

        <div className="bg-white p-6 flex justify-between">
          <form className="w-1/2">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
          </form>

          <div className="flex gap-4">
            <select
              onChange={(e) => setSelectedType(e.target.value)}
              className="border rounded-lg px-3 mr-3"
            >
              <option value="all">All Types</option>
              <option value="hotel">Hotel</option>
              <option value="bb">B&B</option>
              <option value="beach-house">Beach House</option>
            </select>

            <select
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="border rounded-lg px-3 mr-3"
            >
              <option value="all">Price Range</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-300">$100 - $300</option>
              <option value="300-500">$300 - $500</option>
            </select>

            <select
              onChange={(e) => setSelectedRating(e.target.value)}
              className="border rounded-lg px-3"
            >
              <option value="all">Rating</option>
              <option value="5">5 Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          {filterAccommodations().map((acc) => (
            <div
              key={acc.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <div>
                <img
                  className="rounded-t-lg max-h-[200px] object-cover w-[300px]"
                  src={acc.image}
                  alt={acc.title}
                />
              </div>
              <div className="p-5 flex justify-between">
                <div>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {acc.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {acc.description}
                  </p>
                </div>
                <div className="flex mt-2">
                  <FaStar />
                  <div>{acc.rating}</div>
                </div>
              </div>
              <div className="flex justify-between px-5 pb-5 items-center">
                <p>${acc.price}/night</p>
                <div className="p-2 bg-[#008080] text-white rounded-lg cursor-pointer">
                  Book Now
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
