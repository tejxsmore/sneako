import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className="relative flex justify-between items-center p-6 font-medium">
      <div class="flex">
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-1.5 cursor-pointer z-50 pt-1 pr-6"
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
        <a href="/">
          <h1 className="">SNEAKO</h1>
        </a>
      </div>

      {matches && (
        <div className="flex gap-12 items-center">
          <a href="/nike">NIKE</a>
          <a href="/adidas">ADIDAS</a>
          <a href="/puma">PUMA</a>
        </div>
      )}

      {matches && (
        <div className="flex items-center">
          <a href="/favorite" className="pr-6">
            <span class="material-symbols-outlined">favorite</span>
          </a>
          <a href="/cart" className="">
            <span class="material-symbols-outlined">shopping_cart</span>
          </a>
        </div>
      )}

      {!matches && (
        <div className="flex">
          <div className="pr-3 md:pr-6 cursor-pointer z-50">
            <a href="/favorite" className="pt-2 pr-3 md:pr-6">
              <span class="material-symbols-outlined">favorite</span>
            </a>
            <a href="/cart" className="">
              <span class="material-symbols-outlined">shopping_cart</span>
            </a>
          </div>
        </div>
      )}

      {toggled && !matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed bg-white bottom-0 left-0 w-full h-screen flex items-center justify-center"
        >
          <div className="flex flex-col gap-12 text-lg text-center">
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              href="/nike"
            >
              NIKE
            </a>
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              href="/adidas"
            >
              ADIDAS
            </a>
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              href="/puma"
            >
              PUMA
            </a>
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              href="/login"
            >
              <button className="px-5 py-2 border-2 border-black">Login</button>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
