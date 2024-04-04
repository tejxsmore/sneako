"use client";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = { name, email, pass };

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit Form");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  return (
    <div className="bg-white text-gray p-6 flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="border border-gray w-full sm:max-w-sm flex flex-col p-6 rounded-2xl text-sm font-sm"
      >
        <Link href="/shop" className="text-lg font-bold text-dark">
          SNEAKO
        </Link>
        <p className="pb-3">
          {`Already have an account?`}{" "}
          <span className="font-semibold ml-1">
            <a href="/auth/signin">Signin</a>
          </span>
        </p>
        <div className="flex flex-col py-3">
          <input
            required
            id="name"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="p-3 px-4 rounded-full bg-light text-dark focus:outline-none font-medium"
          />
        </div>
        <div className="flex flex-col py-3">
          <input
            required
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 px-4 rounded-full bg-light text-dark focus:outline-none font-medium"
          />
        </div>
        <div className="flex flex-col py-2.5 pb-6">
          <input
            required
            id="pass"
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
            className="p-3 px-4 rounded-full bg-light text-dark focus:outline-none font-medium"
          />
        </div>
        <button
          type="submit"
          className="bg-brick text-white font-semibold p-3 rounded-full focus:outline-none"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
