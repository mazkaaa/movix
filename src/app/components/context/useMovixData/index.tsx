'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export type DataSavedType = {
  id: number;
  title: string;
  thumbnail_url: string;
  media_type: "movie" | "tv";
};

const MovixDataContext = createContext<{
  addToWatchlist: ({ id, media_type }: DataSavedType) => void;
  isHaveInWatchlist: (id: number) => boolean;
  deleteFromWatchlist: (id: number) => void;
  data: DataSavedType[];
}>({
  addToWatchlist: ({ id, media_type }: DataSavedType) => {},
  isHaveInWatchlist: (id: number) => false,
  deleteFromWatchlist: (id: number) => {},
  data: {} as DataSavedType[],
});

export const MovixDataProvider = ({ children }: any) => {
  const [data, setData] = useState<DataSavedType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (data.length === 0) {
      if (localStorage.getItem("movix")) {
        setData(JSON.parse(localStorage.getItem("movix")!));
      } else {
        setData([]);
      }
    }
  }, [])

  useEffect(() => {
    if (loading) {
      localStorage.setItem("movix", JSON.stringify(data))
      setLoading(false)
    }
  }, [data.length, loading])

  const addToWatchlist = ({id, media_type, thumbnail_url, title}: DataSavedType) => {
    setData((old) => [...old, {
      id: id,
      title: title,
      media_type: media_type,
      thumbnail_url: thumbnail_url,
    }])
    setLoading(true)
    toast.success("Successfully adding item to watchlist!");
  }

  const isHaveInWatchlist = (id: number) => {
    return data.some((item) => item.id === id);
  };

  const deleteFromWatchlist = (id: number) => {
    if (data.some((item) => item.id === id)) {
      setData((old) => old.filter((item) => item.id !== id));
      setLoading(true);
      toast.success("Successfully removing item from watchlist!")
    }
  }

  return (
    <MovixDataContext.Provider
      value={{
        addToWatchlist,
        isHaveInWatchlist,
        deleteFromWatchlist,
        data
      }}
    >
      {children}
    </MovixDataContext.Provider>
  );
}

export const useMovixData = () => useContext(MovixDataContext);
