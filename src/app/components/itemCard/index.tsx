import Image from "next/image";
import React from "react";
import { constant } from "../constant";

type ItemCardType = {
  id: number
  title: string;
  thumbnail_url: string;
  media_type: "movie" | "tv"
  onAddToList: () => void
  onClickInfo: () => void
  onDeleteFromWatchlist: () => void
  isOnWatchlist: boolean
};
const ItemCard = ({ title, thumbnail_url, isOnWatchlist, onAddToList, onDeleteFromWatchlist }: ItemCardType) => {
  return (
    <div className="h-64 w-60 bg-base-300 rounded-md drop-shadow-md transition-all relative group hover:cursor-pointer">
      <div className="absolute opacity-0 group-hover:opacity-100 transition-all w-full h-full rounded-md">
        <div className="bg-base-300/90 w-full h-full absolute rounded-md z-50 flex flex-col p-4 justify-center items-center space-y-4">
          <h2 className="text-xl font-semibold text-center">{title}</h2>
          <section className="flex flex-row space-x-3">
            <button
              className="btn btn-sm btn-square btn-outline"
              onClick={() => isOnWatchlist ? onDeleteFromWatchlist() : onAddToList()}
            >
              {!isOnWatchlist ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </button>
            <button className="btn btn-outline btn-sm">Info</button>
          </section>
        </div>
        <Image
          src={constant.MOVIEDB_IMG + thumbnail_url}
          alt={title}
          className="object-cover h-full rounded-md"
          width={500}
          height={500}
        />
      </div>
      <div className="h-full w-full group-hover:opacity-0 transition-all">
        <div className="h-48">
          <Image
            src={constant.MOVIEDB_IMG + thumbnail_url}
            alt={title}
            className="object-cover h-full rounded-t-md"
            width={500}
            height={500}
          />
        </div>
        <div className="py-2 px-3 font-medium">{title}</div>
      </div>
    </div>
  );
};

export default ItemCard;
