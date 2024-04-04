/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';

interface ShoeProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Bagcard = ({ id, title, image, price }: ShoeProps) => {
  let INRupee = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  return (
    <div className="p-6 bg-light text-dark border border-gray rounded-2xl sm:flex sm:space-x-6">
      <div className="">
        <img src={image} alt={title} className="w-full sm:w-32" />
      </div>
      <div className="sm:w-full space-y-3">
        <button className="p-0.25 px-3 text-xs border border-brick text-center rounded-full bg-lightbrick">
          # {id}
        </button>
        <h2>{title}</h2>
        <p>{INRupee.format(Number(price))}</p>
        <div className="sm:flex sm:space-x-3 space-y-3 sm:space-y-0">
          <button className="p-2 px-6 w-full border border-gray bg-white rounded-full">
            Remove from bag
          </button>
          <button className="p-2 px-6 w-full border border-brick bg-brick text-white rounded-full">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bagcard;
