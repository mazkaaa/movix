/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Constant from "../../components/constants";
import InteractButton from "../../components/reusables/interactButton";

const Movie = (props) => {
  const { category } = props.query;
  const constant = Constant();

  const [data, setData] = useState({
    title: "",
    genres: [],
    description: "",
    poster_path: "",
  });

  useEffect(() => {
    console.log(props.data);
    const genreList = [];
    props.data.genres.forEach((item) => {
      genreList.push(item.name);
    });
    setData({
      title: props.data.title || props.data.original_name,
      genres: genreList,
      description: props.data.overview,
      poster_path: props.data.poster_path,
    });
  }, []);

  return (
    <Layout title={props.id}>
      <div className="container mx-auto text-white pt-44 h-screen">
        <div className="flex flex-row">
          <div className="w-1/2">
            <div className="flex justify-end h-3/4">
              <img
                alt={props.data.title}
                src={constant.api.MOVIEDB_IMG + data.poster_path}
                className="rounded-xl mr-6"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col h-full ml-6 items-start">
              <h1 className="text-4xl text-white font-bold">{data.title}</h1>
              <div className="pt-4">
                <div className="w-3/4">
                  <h3>{data.genres.join(", ")}</h3>
                  <p className="pt-2">{data.description}</p>
                </div>
                <div className="mt-4">
                  <InteractButton data={props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { query } = context;
  const constant = Constant();

  const detailResult = await fetch(
    `${constant.api.MOVIEDB_API_URL_V3}/${
      query.category
    }/${id}?${new URLSearchParams({
      api_key: process.env.NEXT_PUBLIC_MOVIEDB_API_KEY,
    })}`,
    {
      method: "GET",
    }
  );

  const data = await detailResult.json();
  return {
    props: {
      id,
      query,
      data,
    },
  };
}

export default Movie;
