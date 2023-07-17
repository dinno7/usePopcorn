import StarRating from "./StarRating";
import PropTypes from "prop-types";
MovieDetail.prototype = {
  selectedMovie: PropTypes.object,
  isExistInPlaylist: PropTypes.bool,
  onCloseMovieDetail: PropTypes.func,
  handleAddToPlaylist: PropTypes.func,
};

export default function MovieDetail({
  selectedMovie,
  isExistInPlaylist,
  onCloseMovieDetail,
  onAddToPlaylist,
  onSetUserRate,
}) {
  return (
    <section className="flex flex-col relative dark:bg-zinc-800 h-full w-1/2 rounded-lg mt-5 overflow-x-hidden overflow-y-auto">
      {selectedMovie?.Watched && (
        <p className="absolute top-2 right-2 bg-green-600 px-3 py-1 rounded-lg">
          Watched
        </p>
      )}
      <button
        onClick={onCloseMovieDetail}
        className="dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-sky-400 dark:hover:text-white hover:scale-125 transition  rounded-full flex items-center justify-center p-[7px] text-2xl absolute left-5 top-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
      <div className="flex gap-5 dark:bg-zinc-700 h-[400px]">
        <img
          className="w-[250px]"
          width="200"
          height="250"
          src={selectedMovie.Poster}
          alt={selectedMovie.Title}
        />
        <div className="h-full py-2">
          <h2 className="text-3xl font-black">{selectedMovie.Title}</h2>
          <p className="space-x-2 mt-2">
            <span>{selectedMovie.Released}</span>
            <span>•</span>
            <span>{selectedMovie.Runtime}</span>
          </p>
          <div className="flex flex-col mt-5 pb-[6.5rem] items-start justify-center gap-5 h-full">
            <p>{selectedMovie.Genre}</p>
            <p>
              ⭐️ {selectedMovie.imdbRating} IMDb rating from{" "}
              {selectedMovie.imdbVotes} users
            </p>
            <p>🌎 Country: {selectedMovie.Country}</p>
            <p>🗓️ {selectedMovie.Year}</p>
            <p>⭕ {selectedMovie.Rated}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 px-32">
        <div className="rounded-lg bg-zinc-700 w-full mx-auto p-5">
          <StarRating
            maxRate={10}
            defaultVal={selectedMovie.UserRate || 0}
            onSetRate={onSetUserRate}
          />
          {selectedMovie?.UserRate > 0 && (
            <button
              className="block bg-sky-600 hover:bg-sky-500 text-zinc-100 p-3 rounded-lg mx-auto mt-7 text-lg disabled:bg-sky-900/60 disabled:text-zinc-300/90"
              disabled={isExistInPlaylist}
              onClick={onAddToPlaylist}
            >
              {isExistInPlaylist ? "Added to your playlist" : "Add to playlist"}
            </button>
          )}
        </div>
        {!selectedMovie?.UserRate && (
          <p className="text-lg p-3 text-justify dark:bg-zinc-900 rounded-lg mt-2">
            If you want add this movie to your playlist you must rate it first
          </p>
        )}
        <div className="space-y-5 mt-10">
          <p className="text-justify">
            <span className="font-bold text-xl">Plot</span>
            <br />
            <span className="text-lg">{selectedMovie.Plot}</span>
          </p>
          <p className="text-justify">
            <span className="font-bold text-xl">Actors</span>
            <br />
            <span className="text-lg">{selectedMovie.Actors}</span>
          </p>
          <p className="text-justify">
            <span className="text-lg">Wrote by {selectedMovie.Writer}</span>
            <br />
            <span className="text-lg">
              Directed by {selectedMovie.Director}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
