/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import Link from "next/link";
import Layout from "../components/layout";
import Constant from "../components/constants";
import MovieCard from "../components/reusables/movieCard";
import { InferGetServerSidePropsType } from "next";
import { MoviesInterface, SeriesInterface } from "./index.interface";

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [movies, setMovies] = useState<MoviesInterface[]>([])
  const [series, setSeries] = useState<SeriesInterface[]>([]);

  const [dataLoaded, setDataLoaded] = useState(false);

  const constant = Constant();

  useEffect(() => {
    setMovies(data.movies)
    setSeries(data.series)
  }, [data]);

  useDeepCompareEffect(() => {
    if (movies.length > 0 && series.length > 0) {
      setDataLoaded(true)
    }
  }, [movies, series])

  return (
    <Layout title="Home">
      <div className="container mx-auto text-white pt-44">
        {!dataLoaded ? (
          <h1 className="text-4xl font-extrabold tracking-wide text-center">
            Loading...
          </h1>
        ) : (
          <div>
            <div className="flex flex-col">
              <h1 className="text-4xl font-extrabold tracking-wide">
                Trending Movies
              </h1>
              <div className="flex flex-row flex-wrap mt-4">
                {movies.map((item) => (
                  <Link
                    href={`/detail/${item.id}?category=movie`}
                    key={item.popularity}
                    className="mr-3 mb-3"
                  >
                    <MovieCard
                      title={item.title}
                      backdrop_path={item.backdrop_path}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col pt-24">
              <h1 className="text-4xl font-extrabold tracking-wide">
                Trending TV Series
              </h1>
              <div className="flex flex-row flex-wrap mt-4">
                {series.map((item) => (
                  <Link
                    href={`/detail/${item.id}?category=tv`}
                    key={item.popularity}
                    className="mr-3 mb-3"
                  >
                    <MovieCard
                      name={item.name}
                      backdrop_path={item.backdrop_path}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const params = new URLSearchParams()
  params.append("api_key", process.env.NEXT_PUBLIC_MOVIEDB_API_KEY!);
  params.append("page", "1");
  const constant = Constant();
  const movies = await fetch(
    `${constant.api.MOVIEDB_API_URL_V3}/trending/movie/day?api_key=${params.get(
      "api_key"
    )}&page=${params.get("page")}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIEDB_ACCESS}`,
      },
    }
  );
  const series = await fetch(
    `${constant.api.MOVIEDB_API_URL_V3}/trending/tv/day?api_key=${params.get(
      "api_key"
    )}&page=${params.get("page")}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIEDB_ACCESS}`,
      },
    }
  );

  const moviesData = await movies.json()
  const seriesData = await series.json()
  const data = {
    movies: moviesData.results,
    series: seriesData.results,
  };
  let number = 0
  return {
    props: {
      data,
    },
  };
}
