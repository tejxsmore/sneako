import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { SiNike } from "react-icons/si";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1000px)");

  return (
    <nav className="text-md bg-light text-dark relative flex justify-between items-center p-6 sm:py-12 font-medium md:px-16 lg:px-36">
      <div class="flex">
        {!matches && (
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className="space-y-1.5 cursor-pointer z-50 pt-2 mr-6"
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 32 }}
              className="block h-0.5 w-6 bg-black"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 32,
              }}
              className="block h-0.5 w-4 bg-black"
            ></motion.span>
          </div>
        )}
        <a href="/nike" className="text-4xl z-50">
          <SiNike />
        </a>
      </div>

      {matches && (
        <div className="flex gap-12 items-center text-gray-700 text-md">
          <a href="/nike/airmax">AIRMAX</a>
          <a href="/nike/airforce">AIRFORCE</a>
          <a href="/nike/airjordan">AIRJORDAN</a>
        </div>
      )}

      <div className="flex ">
        <div className="flex cursor-pointer z-50">
          <a href="/signin" className="mr-6">
            <span class="material-symbols-outlined">
              <CgProfile />
            </span>
          </a>
          <button className="">
            <span class="material-symbols-outlined">
              <FiShoppingCart />
            </span>
          </button>
        </div>
      </div>

      {toggled && !matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -25 }}
          className="fixed top-0 left-0 w-3/5 z-40 h-screen flex justify-center bg-light text-dark"
        >
          <div className="flex flex-col text-md pt-28 z-50">
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              className="pb-5"
              href="/nike/airmax"
            >
              AIRMAX
            </a>
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              className="pb-5"
              href="/nike/airforce"
            >
              AIRFORCE
            </a>
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              className="pb-5"
              href="/nike/airjordan"
            >
              AIRJORDAN
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
