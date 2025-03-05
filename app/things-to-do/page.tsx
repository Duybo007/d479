"use client";
import React, { JSX, useState } from "react";
import { FaHiking } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiFlowerLotusBold } from "react-icons/pi";
import { MdLocalDining } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";


interface ActivityType {
  name: string;
  icon: JSX.Element;
}

function Page() {
  const activities = [
    {
      id: 1,
      title: "Scuba Diving Adventure",
      description:
        "Explore vibrant coral reefs and marine life with our experienced instructors.",
      price: "$89",
      difficulty: "Challenging",
      image:
        "https://res.cloudinary.com/manawa/image/upload/c_fill,g_auto,h_630,w_1200,q_auto/articles/most-beautiful-spots-for-your-first-scuba-dive/61396758347_kwukov",
      activityType: "Adventure",
      location: "Yellow Beach",
    },
    {
      id: 2,
      title: "Luxury Spa Day",
      description:
        "Indulge in a day of relaxation with our signature spa treatments.",
      price: "$129",
      difficulty: "Easy",
      image:
        "https://www.sanctuarysalondayspa.com/wp-content/uploads/2019/08/spa-services-5.jpg",
      activityType: "Relaxation",
      location: "Merriton Landing",
    },
    {
      id: 3,
      title: "Culinary Experience",
      description:
        "Taste the authentic flavors of Taniti with our guided food tour.",
      price: "$75",
      difficulty: "Moderate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjN6YrQgnf5hhAEGOKXLmfnLhJaNXrivpgYEzzR1LYAYeD1giNflJvEWxK-WlGhq8mPzY&usqp=CAU",
      activityType: "Dining",
      location: "Taniti City",
    },
    {
      id: 4,
      title: "Taniti City Zoo Tour",
      description:
        "Enjoy a fun-filled day exploring exotic animals and interactive exhibits with the whole family.",
      price: "$50",
      difficulty: "Easy",
      image:
        "https://www.thebethlists.com/uploads/8/6/4/5/8645885/fullsizeoutput-94cd_orig.jpeg",
      activityType: "Family Friendly",
      location: "Taniti City",
    },
  ];

  const activityTypes = [
    { name: "Adventure", icon: <FaHiking /> },
    { name: "Relaxation", icon: <PiFlowerLotusBold /> },
    { name: "Dining", icon: <MdLocalDining /> },
    { name: "Family Friendly", icon: <MdFamilyRestroom /> },
  ];

  const locations = ["Taniti City", "Merriton Landing", "Yellow Beach"];

  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const filteredActivities = activities.filter(
    (activity) =>
      (!selectedActivity || activity.activityType === selectedActivity) &&
      (!selectedLocation || activity.location === selectedLocation)
  );
  return (
    <div className="h-screen max-w-screen-xl mx-auto">
      <div className="flex flex-col bg-gray-50 py-12 h-full">
        <div className="flex justify-center gap-20 items-center text-black">
          <div className="flex flex-col">
            <h1 className="text-5xl pb-4">Things to Do in Taniti</h1>
            <p>
              Discover amazing activities and experiences on our beautiful
              island
            </p>
          </div>
          <div className="w-1/2">
            <img src="/taniti.webp" alt="" className="rounded-lg"/>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-lg py-6 flex w-full text-black">
          <div className="flex flex-col w-1/2 ">
            <p>Activity Type</p>
            <div className="flex gap-4 mt-3 flex-wrap">
              {activityTypes.map((type: ActivityType) => (
                <div
                  key={type.name}
                  className={`flex py-1 px-3 gap-2 justify-center items-center border rounded-full cursor-pointer 
              ${
                selectedActivity === type.name
                  ? "bg-teal-500 text-white border-teal-500"
                  : "border-gray-500"
              }`}
                  onClick={() =>
                    setSelectedActivity(
                      type.name === selectedActivity ? null : type.name
                    )
                  }
                >
                  {type.icon}
                  <p>{type.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <p>Location</p>
            <div className="flex gap-4 mt-3 flex-wrap">
              {locations.map((loc: string) => (
                <div
                  key={loc}
                  className={`flex py-1 px-3 gap-2 justify-center items-center border rounded-full cursor-pointer 
              ${
                selectedLocation === loc
                  ? "bg-teal-500 text-white border-teal-500"
                  : "border-gray-500"
              }`}
                  onClick={() =>
                    setSelectedLocation(loc === selectedLocation ? null : loc)
                  }
                >
                  <FaLocationDot />
                  <p>{loc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <div>
                  <img
                    className="rounded-t-lg max-h-[200px] w-full object-cover"
                    src={activity.image}
                    alt={activity.title}
                  />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold text-gray-900">
                    {activity.title}
                  </h5>
                  <p className="mb-3 text-gray-700">{activity.description}</p>
                </div>
                <div className="flex justify-between px-5 pb-5 items-center">
                  <p className="text-black">{`From ${activity.price} - ${activity.difficulty}`}</p>
                  <div className="p-2 bg-teal-500 text-white rounded-lg cursor-pointer">
                    Learn More
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No activities match your selection.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
