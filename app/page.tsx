import { FaBed } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 min-h-96 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://jesseaster.com/Na_Pali_Coast,_Kauai,_Hawaii.jpg"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 pt-20 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Welcome to Our Amazing Island
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Discover amazing culture and services that await you.
            </p>
            <div className="flex gap-4">
              <div className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Plan Your Trip
              </div>
              <a
                href="#"
                className="bg-white text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Explore Attractions
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-20 bg-gray-100 py-8 px-3 justify-center">
          <div className="flex flex-col gap-2 cursor-pointer py-5 px-10 justify-center items-center bg-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-300">
            <FaBed className="text-6xl" />
            <div>Book Accommodations</div>
          </div>
          <div className="flex flex-col gap-2 cursor-pointer py-5 px-10 justify-center items-center bg-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-300">
            <FaCar className="text-6xl" />
            <div>Find Transportation</div>
          </div>
          <div className="flex flex-col gap-2 cursor-pointer py-5 px-10 justify-center items-center bg-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-300">
            <GiForkKnifeSpoon className="text-6xl" />
            <div>Local Cuisine</div>
          </div>
          <div className="flex flex-col gap-2 cursor-pointer py-5 px-10 justify-center items-center bg-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-300">
            <FaCalendarAlt className="text-6xl" />
            <div>Events Calendar</div>
          </div>
        </div>

        <div className="flex flex-col py-12 items-center gap-6">
          <div className="font-semibold text-4xl">Featured Attractions</div>
          <div className="flex gap-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="rounded-t-lg w-[300px] h-[200px]"
                  src="https://images.unsplash.com/photo-1599837139010-617a01b35781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80"
                  alt=""
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Beaches
                  </h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Explore our pristine beaches
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="rounded-t-lg w-[300px] h-[200px]"
                  src="https://www.tahititourisme.com/app/uploads/2023/07/cascade-de-la-vallee-de-la-maroto-a-myles-mcguinness-1.webp"
                  alt=""
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Rainforest Tours
                  </h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Discover exotic wildlife
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="rounded-t-lg w-[300px] h-[200px]"
                  src="https://media.istockphoto.com/id/157480366/photo/mount-roto-nui-volcanic-mountain-moorea-island.jpg?s=612x612&w=0&k=20&c=ADOARLZbDLZgRBLLXQtvTzAnIpsJXkK_eEdURw7wUVg="
                  alt=""
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Volcano Visits
                  </h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Experience natural wonders
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="rounded-t-lg w-[300px] h-[200px]"
                  src="https://travelsquire.com/ts/wp-content/uploads/2013/09/4343975887_778a195bb5_o.jpg"
                  alt=""
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Nightlife
                  </h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Enjoy evening entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
