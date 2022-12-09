/* eslint-disable @next/next/no-img-element */
import Constant from "../../constants";
import { MovieCardInterface } from "./index.interface";

const MovieCard = (props: MovieCardInterface) => {
  const constant = Constant();
  return (
    <div className="bg-slate-900 w-60 h-64 rounded-md">
      <div className="h-44">
        <img
          src={constant.api.MOVIEDB_IMG + props.backdrop_path}
          className="object-cover h-full rounded-t-md"
          alt={props.title}
        />
      </div>
      <div className="flex flex-col p-3">
        <h2 className="font-bold">{props.title || props.name}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
