import { getMovies, getTv } from "./components/constant/api"
import ItemCardSection from "./components/itemCardSection";


export default async function Home() {
  const moviesData = getMovies()
  const tvData = getTv()

  const movies = await moviesData
  const tv = await tvData


  return (
    <>
      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl font-medium">Trending Movies</h2>
        <ItemCardSection movieData={movies} />
      </div>
      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl font-medium">Trending TV Series</h2>
        <ItemCardSection tvData={tv} />
      </div>
    </>
  );
}
