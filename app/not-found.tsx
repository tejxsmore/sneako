import Link from "next/link";
import React from "react";

export default function Notfound() {
  return (
    <div className="p-6 bg-white flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-4xl font-bold text-gray pb-6">Oops, wrong turn,</h1>
        <Link
          href="/shop"
          className="flex items-center justify-center text-2xl text-white font-bold bg-brick border border-brick p-3 rounded-full"
        >
          <p className="mr-3">Continue to shop</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </p>
        </Link>
      </div>
    </div>
  );
}
