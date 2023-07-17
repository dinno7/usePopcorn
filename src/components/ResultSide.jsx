import Loading from "./Loading";
import ThumbCard from "./ThumbCard";

export default function ResultSide({ searchResult, loading, onMovieDetail }) {
  return (
    <section className="flex flex-col bg-zinc-800 h-full w-1/2 rounded-lg mt-5 overflow-y-auto">
      {loading === true ? (
        <div className="mx-auto mt-20">
          <Loading />
        </div>
      ) : searchResult && searchResult.length > 0 ? (
        searchResult.map((r) => (
          <div onClick={() => onMovieDetail(r.imdbID)} key={r.imdbID}>
            <ThumbCard key={r.imdbID} info={r} />
          </div>
        ))
      ) : (
        <>
          <p className="font-bold text-4xl text-center p-5">
            No any result, please search something....
          </p>
        </>
      )}
    </section>
  );
}
