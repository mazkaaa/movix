/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import Link from "next/link";
import Layout from "../components/layout";
import Constant from "../components/constants";
import MovieCard from "../components/reusables/movieCard";

export default function Home({ data }) {
  const [trending, setTrending] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  const constant = Constant();

  useDeepCompareEffect(() => {
    setTrending({
      movies: data.movies.results,
      series: data.series.results,
    });
    setDataLoaded(true);
  }, [data]);

  useEffect(() => {
    if (dataLoaded) {
      console.log(trending);
    }
  }, [dataLoaded, trending]);

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
                {trending.movies.map((item) => (
                  <Link
                    href={`/detail/${item.id}?category=movie`}
                    key={item.popularity}
                  >
                    <a className="my-2 mr-4">
                      <MovieCard data={item} />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col pt-24">
              <h1 className="text-4xl font-extrabold tracking-wide">
                Trending TV Series
              </h1>
              <div className="flex flex-row flex-wrap mt-4">
                {trending.series.map((item) => (
                  <Link
                    href={`/detail/${item.id}?category=tv`}
                    key={item.popularity}
                  >
                    <a className="my-2 mr-4">
                      <MovieCard data={item} />
                    </a>
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
  const constant = Constant();
  const movies = await fetch(
    `${
      constant.api.MOVIEDB_API_URL_V3
    }/trending/movie/day?${new URLSearchParams({
      api_key: process.env.NEXT_PUBLIC_MOVIEDB_API_KEY,
      page: 1,
    })}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIEDB_ACCESS}`,
      },
    }
  );
  const series = await fetch(
    `${constant.api.MOVIEDB_API_URL_V3}/trending/tv/day?${new URLSearchParams({
      api_key: process.env.NEXT_PUBLIC_MOVIEDB_API_KEY,
      page: 1,
    })}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIEDB_ACCESS}`,
      },
    }
  );
  const data = {
    movies: await movies.json(),
    series: await series.json(),
  };
  return {
    props: {
      data,
    },
  };
}
