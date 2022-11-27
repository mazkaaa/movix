import { useState, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

const InteractButtonHandler = () => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("watchlist")) {
      setWatchList(JSON.parse(localStorage.getItem("watchlist")));
    }
  }, []);

  const addItem = (id, type) => {
    const currentData = {
      item_id: `${id}_${type}`,
      detail: {
        id,
        type,
      },
    };
    setWatchList((old) => [...old, currentData]);
  };

  const isListed = (id, type) => {
    let value = false;
    const itemId = `${id}_${type}`;
    watchList.forEach((item) => {
      if (item.item_id === itemId) {
        value = true;
      } else {
        value = false;
      }
    });
    return value;
  };

  const removeItem = (id, type) => {
    const itemId = `${id}_${type}`;
    console.log(itemId);
    setWatchList((old) => old.filter((element) => element.item_id !== itemId));
  };

  return {
    addItem,
    isListed,
    removeItem,
  };
};

export default InteractButtonHandler;
