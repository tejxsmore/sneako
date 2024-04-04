import Link from "next/link";
import { sql } from "@vercel/postgres";

export default async function Navbar() {
  const bags = await sql`SELECT * FROM bag`;
  const bag = bags.rows;

  const favorites = await sql`SELECT * FROM favorite`;
  const favorite = favorites.rows;

  return (
    <div>
      <div className="flex justify-between p-6">
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-xl text-dark sm:text-4xl sm:text-gray font-bold"
          >
            SNEAKO
          </Link>
          <div className="space-x-3 hidden sm:block text-sm font-sm">
            <Link
              href="/shop"
              className="p-2 px-6 border border-brick bg-white text-brick rounded-full"
            >
              Shop
            </Link>
            <Link
              href="/shop/airmax"
              className="p-2 px-6 border border-gray bg-white rounded-full"
            >
              Airmax
            </Link>
            <Link
              href="/shop/airforce"
              className="p-2 px-6 border border-gray bg-white rounded-full"
            >
              Airforce
            </Link>
            <Link
              href="/shop/airjordan"
              className="p-2 px-6 border border-gray bg-white rounded-full"
            >
              Airjordan
            </Link>
          </div>
        </div>

        <div className="flex space-x-3 items-center justify-end">
          <Link href="/auth/signin">
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
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
          <Link href="/shop/favorite" className="flex">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            {favorite.length != 0 && (
              <p className="text-xs text-white bg-brick p-[2px] px-1 rounded-full h-[18px] min-w-[15px]">
                {favorite.length}
              </p>
            )}
          </Link>
          <Link href="/shop/bag" className="flex">
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {bag.length != 0 && (
              <p className="text-xs text-white bg-brick p-[2px] px-1 rounded-full h-[18px] min-w-[15px]">
                {bag.length}
              </p>
            )}
          </Link>
        </div>
      </div>
      <div className="px-6 py-2 space-x-3 block sm:hidden text-sm font-sm overflow-auto">
        <Link
          href="/shop"
          className="p-2 px-6 border border-brick bg-white text-brick rounded-full"
        >
          Shop
        </Link>
        <Link
          href="/shop/airmax"
          className="p-2 px-6 border border-gray bg-white rounded-full"
        >
          Airmax
        </Link>
        <Link
          href="/shop/airforce"
          className="p-2 px-6 border border-gray bg-white rounded-full"
        >
          Airforce
        </Link>
        <Link
          href="/shop/airjordan"
          className="p-2 px-6 border border-gray bg-white rounded-full"
        >
          Airjordan
        </Link>
      </div>
    </div>
  );
}
