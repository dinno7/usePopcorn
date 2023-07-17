export default function ThumbCard({ info, children }) {
  if (!info) return <p>No any result</p>;
  return (
    <div className="flex gap-5 p-5 dark:hover:bg-zinc-700 transition-colors duration-200 cursor-pointer">
      <div className="basis-2/12">
        <img
          className=" w-[90px]"
          width="100"
          height="150"
          src={info.Poster}
          alt="Inception"
        />
      </div>
      <div className="flex-grow flex flex-col items-start justify-between py-1">
        <h3 className="font-bold text-3xl">{info.Title}</h3>
        <div className="flex gap-3 w-full">
          <p className="capitalize">🎥 {info.Type}</p>
          <p>🗓️ {info.Year}</p>
          <a
            href={`https://www.imdb.com/title/${info.imdbID}`}
            target="_blank"
            rel="noreferrer"
          >
            🔗IMDB
          </a>
          <div className="flex gap-3 ml-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
