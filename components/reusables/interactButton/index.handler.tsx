import { watch } from "fs";
import { useState, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { WatchListInterface } from "./index.interface";

const InteractButtonHandler = () => {
  const [watchList, setWatchList] = useState<WatchListInterface[]>([]);

  useEffect(() => {
    if (localStorage.getItem("watchlist")) {
      setWatchList(JSON.parse(localStorage.getItem("watchlist")!));
    } else {
      localStorage.setItem("watchlist", JSON.stringify(watchList))
    }
  }, []);

  const addItem = (id: number, type: string | string[] | undefined) => {
    const newData = {
      item_id: `${id}_${type}`,
      detail: {
        id,
        type,
      },
    };
    const localStorageArray: WatchListInterface[] = JSON.parse(localStorage.getItem("watchlist")!)
    localStorageArray.push(newData)
    localStorage.setItem("watchlist", JSON.stringify(localStorageArray))
    setWatchList(localStorageArray);
  };

  const isListed = (id: number, type: string | string[] | undefined) => {
    const itemId = `${id}_${type}`;
    return watchList.some((item) => item.item_id === itemId)
  };

  const removeItem = (id: number, type: string | string[] | undefined) => {
    const itemId = `${id}_${type}`;
    console.log(itemId);
    const localStorageArray: WatchListInterface[] = JSON.parse(
      localStorage.getItem("watchlist")!
    );
    const newData = localStorageArray.filter(
      (element) => element.item_id !== itemId
    );
    localStorage.setItem("watchlist", JSON.stringify(newData));
    setWatchList(newData);
  };

  return {
    addItem,
    isListed,
    removeItem,
  };
};

export default InteractButtonHandler;
