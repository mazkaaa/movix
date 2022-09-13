import { useState, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

const InteractButtonHandler = () => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("watchlist")) {
      setWatchList(JSON.parse(localStorage.getItem("watchlist")));
    }
  }, []);

  useDeepCompareEffect(() => {
    if (watchList.length > 0) {
      localStorage.setItem("watchlist", JSON.stringify(watchList));
    }
  }, [watchList]);

  const addItem = (id, type) => {
    const tempArray = [];
    tempArray.push(...watchList);
    tempArray.push({
      item_id: `${id}_${type}`,
      detail: {
        id,
        type,
      },
    });
    setWatchList(tempArray);
  };

  const isListed = (id, type) => {
    const itemId = `${id}_${type}`;
  };

  const removeItem = (id, type) => {
    const itemId = `${id}_${type}`;
    setWatchList((old) => old.filter((item) => item.item_id !== itemId));
  };

  return {
    addItem,
    isListed,
    removeItem,
  };
};

export default InteractButtonHandler;
