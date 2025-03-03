import React from "react";
import { FaHandshake } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

function page() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 min-h-[450px] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://www.moas.org/z/-vf.0.0.0.4067.D9441D2F68CB9D0D2C64A6016060206979A351A7C4273F969B38C1EA9B05A6C7"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 pt-20 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Essential Travel Tips for Taniti
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Everything you need to know for a smooth and enjoyable trip
            </p>
          </div>
        </div>

        <div className="flex flex-col pt-12 gap-16 pb-8">
          <div className="flex">
            <div className="w-3/5 flex flex-col gap-8">
              <div className="flex items-center gap-2 text-3xl">
                <FaHandshake />
                Local Customs
              </div>
              <p>
                Tanitians are warm and welcoming. When greeting locals, a smile
                and a simple 'hello' go a long way.
              </p>
              <div className="p-3 rounded-lg bg-[#008080] max-w-fit text-white">
                Learn More
              </div>
            </div>
            <div className="w-2/5">
              <img
                className="h-[280px] object-cover w-full"
                src="https://www.tahiti.com/Content/Images/about-tahiti/culture_03.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-3/5 flex flex-col gap-8">
              <div className="flex items-center gap-2 text-3xl">
                <IoIosChatbubbles />
                Language Tips
              </div>
              <p>
                While many Tanitians speak English, learning a few local phrases
                can enhance your experience.
              </p>
              <ul>
                <li className="flex gap-2">
                  <FaCheck />
                  Hello: 'Talofa'
                </li>
                <li className="flex gap-2">
                  <FaCheck />
                  Thank you: 'Fa'afetai'
                </li>
                <li className="flex gap-2">
                  <FaCheck />
                  Goodbye: 'Tofa'
                </li>
              </ul>
              <div className="p-3 rounded-lg bg-[#008080] max-w-fit text-white">
                Learn More
              </div>
            </div>
            <div className="w-2/5">
              <img
                className="h-[280px] object-cover w-full"
                src="https://www.tahititourisme.com/app/uploads/iris-images/26849/p2-raivavae-00142-raivavae-a-gregoire-le-bacon-2732x4096-1-scaled-1920x1080-f50_50.webp"
                alt=""
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-3/5 flex flex-col gap-8">
              <div className="flex items-center gap-2 text-3xl">
                <FaCreditCard />
                Currency and Payments
              </div>
              <p>
                Taniti uses the U.S. dollar. Most businesses accept major credit
                cards, but it's good to carry some cash for smaller vendors.
              </p>
              <ul>
                <li className="flex gap-2">
                  <FaCheck />
                  Currency: U.S. dollar
                </li>
                <li className="flex gap-2">
                  <FaCheck />
                  Credit Cards: Widely accepted
                </li>
                <li className="flex gap-2">
                  <FaCheck />
                  ATMs: Available in Taniti City
                </li>
              </ul>
              <div className="p-3 rounded-lg bg-[#008080] max-w-fit text-white">
                Learn More
              </div>
            </div>
            <div className="w-2/5">
              <img
                className="h-[280px] object-cover w-full"
                src="https://media.istockphoto.com/id/1229050375/photo/pacific-francs.jpg?s=612x612&w=0&k=20&c=29ogBrKJ5MB2K00po9OsxGo9sQb8EcHKjZ9615xHuPw="
                alt=""
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-3/5 flex flex-col gap-8">
              <div className="flex items-center gap-2 text-3xl">
                <FaShieldAlt />
                Safety Tips
              </div>
              <p>
                Taniti is a safe destination, but it's always good to stay aware
                of your surroundings and keep your belongings secure.
              </p>
              <ul>
                <li className="flex gap-2">
                  <FaCheck />
                  Avoid carrying large amounts of cash
                </li>
                <li className="flex gap-2">
                  <FaCheck />
                  Use hotel safes for valuables
                </li>
                <li className="flex gap-2">
                  <FaCheck />
                  Be cautious in crowded areas
                </li>
              </ul>
              <div className="p-3 rounded-lg bg-[#008080] max-w-fit text-white">
                Learn More
              </div>
            </div>
            <div className="w-2/5">
              <img
                className="h-[280px] object-cover w-full"
                src="https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/kifepl2hvrpm3q2m5ro1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
