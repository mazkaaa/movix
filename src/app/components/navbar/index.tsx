'use client'
import Link from 'next/link';
import React from 'react'
import { useMovixData } from '../context/useMovixData';

const Navbar = () => {
  const {data} = useMovixData()
  return (
    <div className="navbar bg-base-300 rounded-lg drop-shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Movix</a>
      </div>
      <div className="flex-none space-x-4">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/watchlist"}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </span>
              Watchlist <span className="badge">{data.length}</span>
            </Link>
          </li>
        </ul>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-md w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar