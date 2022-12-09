import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";

interface LocalStorageInterface {
  item_id: string
  detail: {
    id: number
    type: string
  }
}
const Watchlist = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [localStorageData, setLocalStorageData] = useState<LocalStorageInterface[]>([])

  useEffect(() => {
    if (localStorage.getItem("watchlist")) {
      setLocalStorageData(JSON.parse(localStorage.getItem("watchlist")!))
    }
  }, [])
  
  return (
    <Layout title="Home">
      <div className="container mx-auto text-white pt-44 h-screen">
        {!dataLoaded ? (
          <h1 className="text-4xl font-extrabold tracking-wide text-center">
            Loading...
          </h1>
        ) : (
          <div>
            <div className="flex flex-col">
              <h1 className="text-4xl font-extrabold tracking-wide">
                Watch list
              </h1>
              <div className="flex flex-row flex-wrap mt-4"></div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Watchlist;
