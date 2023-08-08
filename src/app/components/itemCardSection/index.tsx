'use client'
import React from 'react'
import { MoviesType, TvType } from '../constant/api'
import ItemCard from '../itemCard'
import { DataSavedType, useMovixData } from '../context/useMovixData'
type ItemCardSectionType = {
  movieData?: MoviesType[]
  tvData?: TvType[]
  watchlistData?: DataSavedType[]
}
const ItemCardSection = ({movieData, tvData, watchlistData}: ItemCardSectionType) => {
  const {addToWatchlist, isHaveInWatchlist, deleteFromWatchlist} = useMovixData()

  return (
    <div className="flex flex-row flex-wrap justify-start gap-4">
      {movieData !== undefined ? (
        <>
          {movieData.map((item, index) => (
            <ItemCard
              id={item.id}
              title={item.title}
              thumbnail_url={item.backdrop_path}
              media_type="movie"
              key={index}
              onAddToList={() =>
                addToWatchlist({
                  id: item.id,
                  media_type: item.media_type,
                  thumbnail_url: item.backdrop_path,
                  title: item.title,
                })
              }
              onClickInfo={() => {}}
              isOnWatchlist={isHaveInWatchlist(item.id)}
              onDeleteFromWatchlist={() => deleteFromWatchlist(item.id)}
            />
          ))}
        </>
      ) : tvData !== undefined ? (
        <>
          {tvData.map((item, index) => (
            <ItemCard
              id={item.id}
              title={item.name}
              thumbnail_url={item.backdrop_path}
              media_type="tv"
              key={index}
              onAddToList={() =>
                addToWatchlist({
                  id: item.id,
                  media_type: item.media_type,
                  thumbnail_url: item.backdrop_path,
                  title: item.name,
                })
              }
              onClickInfo={() => {}}
              isOnWatchlist={isHaveInWatchlist(item.id)}
              onDeleteFromWatchlist={() => deleteFromWatchlist(item.id)}
            />
          ))}
        </>
      ) : watchlistData !== undefined ? (
        <>
          {watchlistData.map((item, index) => (
            <ItemCard
              id={item.id}
              title={item.title}
              thumbnail_url={item.thumbnail_url}
              media_type={item.media_type}
              key={index}
              onAddToList={() => {}}
              onClickInfo={() => {}}
              isOnWatchlist={isHaveInWatchlist(item.id)}
              onDeleteFromWatchlist={() => deleteFromWatchlist(item.id)}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default ItemCardSection