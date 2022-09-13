/* eslint-disable @next/next/no-img-element */
import Constant from "../../constants";

const MovieCard = ({ data }) => {
  const constant = Constant();
  return (
    <div className="bg-slate-900 w-60 h-64 rounded-xl">
      <div className="h-44">
        <img
          src={constant.api.MOVIEDB_IMG + data.backdrop_path}
          className="object-cover h-full rounded-t-xl"
          alt={data.title}
        />
      </div>
      <div className="flex flex-col p-3">
        <h2 className="text-lg font-bold">{data.title || data.name}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
