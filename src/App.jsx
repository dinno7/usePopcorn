import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ResultSide from "./components/ResultSide";
import Search from "./components/Search";
import { useEffect, useRef, useState } from "react";
import ResultCount from "./components/ResultCount";
import Playlist from "./components/Playlist";
import MovieDetail from "./components/MovieDetail";
import Loading from "./components/Loading";
function App() {
	const isMounted = useRef(false);
	const [searchResult, setsearchResult] = useState([]);
	const [playlist, setplaylist] = useState([]);
	const [selectedMovie, setselectedMovie] = useState(null);
	const [searchFetching, setsearchFetching] = useState(false);
	const [movieDetailFetching, setmovieDetailFetching] = useState(false);

	useEffect(function() {
		const initialPlaylist = localStorage.getItem("playlist");
		if (initialPlaylist && initialPlaylist?.length > 0) {
			setplaylist(JSON.parse(initialPlaylist));
		}
	}, []);
	useEffect(
		function() {
			if (isMounted.current)
				localStorage.setItem("playlist", JSON.stringify(playlist));
			else isMounted.current = true;
		},
		[playlist],
	);

	async function handleSearch(text) {
		try {
			setsearchResult([]);
			setsearchFetching(true);
			const res = await fetch(
				`https://www.omdbapi.com/?apikey=70ffaf54&s=${text}`,
			);
			const data = await res.json();
			if (data.Response === "True") {
				setsearchResult(data.Search);
			} else {
				throw new Error(data.Error);
			}
		} catch (error) {
			console.log(error.message);
			return error;
		}
		setsearchFetching(false);
	}

	async function handleFetchMovieDetail(imdbId) {
		try {
			const movieOnPlaylist = playlist.find((movie) => movie.imdbID === imdbId);
			if (movieOnPlaylist && Object.keys(movieOnPlaylist).length > 0) {
				setselectedMovie(movieOnPlaylist);
			} else {
				setmovieDetailFetching(true);
				const res = await fetch(
					`http://www.omdbapi.com/?apikey=70ffaf54&i=${imdbId}`,
				);
				const data = await res.json();
				data.Watched = false;
				if (data.Response === "True") {
					setselectedMovie(data);
				} else {
					throw new Error(data.Error);
				}
			}
		} catch (error) {
			console.log(error.message);
			return error;
		}
		setmovieDetailFetching(false);
	}

	function handleCloseMovieDetail() {
		setselectedMovie(null);
	}

	function handleAddToPlaylist() {
		setplaylist((playlist) => {
			let normalizePlaylist = new Set([...playlist, selectedMovie]);
			normalizePlaylist = [...normalizePlaylist];
			return normalizePlaylist;
		});
	}

	function handleSetUserRate(rate) {
		const movieOnPlaylist = playlist.find(
			(movie) => movie.imdbID === selectedMovie.imdbID,
		);
		if (movieOnPlaylist && Object.keys(movieOnPlaylist).length > 0) {
			setplaylist((playlist) =>
				playlist.map((movie) =>
					movie.imdbID === selectedMovie.imdbID
						? { ...movie, UserRate: rate }
						: movie,
				),
			);
		} else {
			setselectedMovie((movie) => ({ ...movie, UserRate: rate }));
		}
	}

	function handleDeleteMovieFromPlaylist(imdbID) {
		const movieOnPlaylist = playlist.find((movie) => movie.imdbID === imdbID);
		if (!movieOnPlaylist) return;
		setplaylist((playlist) =>
			playlist.filter((movie) => movie.imdbID !== imdbID),
		);
	}

	function handleToggleWatchedMovie(imdbID) {
		const movieOnPlaylist = playlist.find((movie) => movie.imdbID === imdbID);
		if (!movieOnPlaylist) return;
		setplaylist((playlist) =>
			playlist.map((movie) =>
				movie.imdbID === imdbID ? { ...movie, Watched: !movie.Watched } : movie,
			),
		);
	}

	return (
		<div className="container mx-auto pt-5 pb-32 h-screen">
			<div className="lg:hidden bg-red-300 text-red-900 p-5 mb-5 rounded-lg text-xl mx-5">
				<p>!!! - ATTENTION - !!!</p>
				<p>Please open it with desktop </p>
				<p>I do not responsive it so this project do not support mobile size</p>
			</div>
			<Navbar>
				<Search onSearch={handleSearch} />
				{playlist?.length > 0 ? (
					<ResultCount resCount={playlist?.length || 0} />
				) : (
					<p className="text-lg basis-3/12 text-right">
						Search movie & Add them to playlist
					</p>
				)}
			</Navbar>

			<Main className="px-16 flex h-full gap-5">
				<ResultSide
					searchResult={searchResult}
					loading={searchFetching}
					onMovieDetail={handleFetchMovieDetail}
				/>
				{movieDetailFetching === true ? (
					<div className="mx-auto mt-20">
						<Loading />
					</div>
				) : selectedMovie !== null ? (
					<MovieDetail
						selectedMovie={selectedMovie}
						isExistInPlaylist={
							!!playlist.find((movie) => movie.imdbID === selectedMovie.imdbID)
						}
						onCloseMovieDetail={handleCloseMovieDetail}
						onAddToPlaylist={handleAddToPlaylist}
						onSetUserRate={handleSetUserRate}
					/>
				) : (
					<Playlist
						playlist={playlist}
						onMovieDetail={handleFetchMovieDetail}
						onToggleWatchedMovie={handleToggleWatchedMovie}
						onDeleteMovieFromPlaylist={handleDeleteMovieFromPlaylist}
					/>
				)}
			</Main>
		</div>
	);
}

export default App;
