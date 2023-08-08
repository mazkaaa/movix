'use client'
import { useMovixData } from "../components/context/useMovixData";
import ItemCardSection from "../components/itemCardSection";

export default function Watchlist() {

  const {data} = useMovixData()

  return (
    <>
      <div
        className={
          "flex flex-col space-y-6 " +
          (data.length === 0
            ? "justify-center items-center"
            : "justify-start items-start")
        }
      >
        {data.length === 0 ? (
          <>
            <h2 className="text-3xl font-medium">You dont have any movie or tv series in watchlist :(</h2>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-medium">Watchlist</h2>
            <ItemCardSection watchlistData={data} />
          </>
        )}
      </div>
    </>
  );
}
