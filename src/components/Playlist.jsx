import ThumbCard from "./ThumbCard";

export default function Playlist({
  playlist,
  onMovieDetail,
  onToggleWatchedMovie,
  onDeleteMovieFromPlaylist,
}) {
  let userRatesAvg =
    playlist.length > 0
      ? playlist
        .map((movie) => movie?.UserRate || 0)
        .reduce((previous, current) => previous + current, 0) /
      playlist.length
      : 0;
  userRatesAvg = userRatesAvg.toFixed(2);

  let runtimeAvg =
    playlist.length > 0
      ? playlist
        .map((movie) => (!movie?.Watched ? movie?.Runtime?.slice(0, -4) : 0))
        .reduce((previous, current) => +previous + +current, 0)
      : 0;

  return (
    <section className="flex flex-col relative dark:bg-zinc-800 h-full w-1/2 rounded-lg mt-5 overflow-y-auto">
      {/* INFO: Playlist info */}
      <div className="dark:bg-zinc-700 w-full h-32 p-5 flex flex-col items-start justify-between">
        <h1 className="font-bold text-2xl">Your playlist</h1>
        <div className="flex justify-between items-center w-full text-lg">
          <span>#️⃣ Count: {playlist.length} Movies</span>
          <span>🌟 Your rates avg: {userRatesAvg}</span>
          <span>⏳ Total time you need: {runtimeAvg} min</span>
        </div>
      </div>
      <hr className=" border-t-4 border-zinc-400" />
      {/* INFO: List of movies in playlist */}
      {playlist && playlist.length ? (
        playlist.map((movie) => (
          <div className="relative" key={movie.imdbID}>
            <div>
              <div className="absolute top-7 right-5 flex items-center justify-start gap-3">
                <button
                  className={`rounded-lg px-2 py-1 cursor-pointer ${movie.Watched
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-zinc-600 hover:bg-zinc-500"
                    }`}
                  onClick={() => onToggleWatchedMovie(movie.imdbID)}
                >
                  {movie.Watched ? "Watched" : "Not watched"}
                </button>
                <button
                  className="rounded-lg px-2 py-1 bg-sky-600 hover:bg-sky-500 cursor-pointer"
                  onClick={() => onMovieDetail(movie.imdbID)}
                >
                  Details
                </button>
                <button
                  onClick={() => onDeleteMovieFromPlaylist(movie.imdbID)}
                  className="text-white bg-red-600 hover:bg-red-500 rounded-md w-6 h-6 flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </button>{" "}
              </div>

              <ThumbCard info={movie}>
                <p>🌟 {movie.UserRate}</p>
                <p>⏳ {movie.Runtime}</p>
              </ThumbCard>
            </div>
          </div>
        ))
      ) : (
        <p className="font-bold text-center text-3xl mt-10">
          No any movie on playlist
        </p>
      )}
    </section>
  );
}
