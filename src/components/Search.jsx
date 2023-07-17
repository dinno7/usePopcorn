import { useState } from "react";

export default function Search({ onSearch }) {
  const [searchQuery, setsearchQuery] = useState();
  function submit(e) {
    e.preventDefault();
    if (!searchQuery) return;
    onSearch(searchQuery);
  }
  return (
    <form className="relative basis-4/12" onSubmit={submit}>
      <input
        className="peer w-full h-full bg-sky-500 placeholder-sky-200 text-indigo-50 px-3 py-2 rounded-lg focus:outline-none"
        type="text"
        value={searchQuery}
        onChange={(e) => setsearchQuery(e.target.value)}
        placeholder="Search for movie"
      />
      <button className="text-sky-200  peer-focus:text-sky-100 absolute right-3 top-1/2 -translate-y-1/2">
        <svg
          width="20px"
          height="20px"
          viewBox="0 -0.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns: xlink="http://www.w3.org/1999/xlink"
        >
          <title>search_left [#1504]</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-299.000000, -280.000000)"
              fill="currentColor"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M264,138.586 L262.5153,140 L258.06015,135.758 L259.54485,134.343 L264,138.586 Z M251.4,134 C247.9266,134 245.1,131.309 245.1,128 C245.1,124.692 247.9266,122 251.4,122 C254.8734,122 257.7,124.692 257.7,128 C257.7,131.309 254.8734,134 251.4,134 L251.4,134 Z M251.4,120 C246.7611,120 243,123.582 243,128 C243,132.418 246.7611,136 251.4,136 C256.0389,136 259.8,132.418 259.8,128 C259.8,123.582 256.0389,120 251.4,120 L251.4,120 Z"
                  id="search_left-[#1504]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </form>
  );
}
