/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

interface ShoeProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Shoecard = ({ id, title, image, price }: ShoeProps) => {
  const [fill, setFill] = useState("#FFFFFF");

  let INRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const handleFav = async () => {
    fill !== "#F2613F" ? setFill("#F2613F") : setFill("#FFFFFF");
    const data = { id, title, image, price };

    if (fill !== "#F2613F") {
      try {
        const addFav = await fetch("/api/favorite/addFav", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
          },
        });

        if (addFav.ok) {
          console.log("Added to favorites");
        } else {
          console.error("Failed to add");
        }
      } catch (error) {
        console.error("Error :", error);
      }
    } else {
      try {
        const removeFav = await fetch("/api/favorite/deleteFav", {
          method: "POST",
          body: JSON.stringify({ id }),
          headers: {
            "content-type": "application/json",
          },
        });

        if (removeFav.ok) {
          console.log("Removed from favorites");
        } else {
          console.error("Failed to remove");
        }
      } catch (error) {
        console.error("Error :", error);
      }
    }
  };

  const handleBuy = async () => {
    const data = { id, title, image, price };

    try {
      const addBag = await fetch("/api/bag/addBag", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });

      if (addBag.ok) {
        console.log("Added to Bag");
      } else {
        console.error("Failed to add");
      }
    } catch (error) {
      console.error("Error :", error);
    }
  };

  return (
    <div className="p-6 mb-6 sm:mr-6 rounded-2xl bg-light text-dark sm:w-72 space-y-3 border border-gray">
      <div className="flex justify-between ">
        <h4 className="text-sm font-sm">{title}</h4>
        <button onClick={handleFav}>
          <svg
            id="heart"
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke={fill === "#FFFFFF" ? "#31363F" : fill}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
      <img src={image} alt={title} className="" />
      <p className="w-full border border-gray bg-white text-center p-2 rounded-full text-sm">
        {INRupee.format(Number(price))}
      </p>
      <div className="flex space-x-3 text-sm font-sm">
        <button
          onClick={handleBuy}
          className="w-1/2 border border-gray bg-white p-2 rounded-full text-center"
        >
          Add to bag
        </button>
        <button className="w-1/2 border border-brick p-2 rounded-full bg-brick text-white">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Shoecard;
