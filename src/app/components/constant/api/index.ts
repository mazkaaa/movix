import { constant } from "..";

export type MoviesType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: "movie";
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TvType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: "tv";
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[]
}

const fetchMovies = async () => {
  const res = await fetch(constant.API_URL + "3/trending/movie/day", {
    headers: {
      Authorization: "Bearer " + constant.API_ACCESS_TOKEN,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json()
}

const fetchTv = async () => {
  const res = await fetch(constant.API_URL + "3/trending/tv/day", {
    headers: {
      Authorization: "Bearer " + constant.API_ACCESS_TOKEN,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json()
}

export async function getMovies() {
  const res = await fetchMovies()
  const result: MoviesType[] = res.results
  return result
}

export async function getTv() {
  const res = await fetchTv()
  const result: TvType[] = res.results
  return result
}
