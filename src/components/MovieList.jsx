import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/fetchSlice";
import bgimg from "../assets/images/home-background.png";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";
import Loading from "./layout/Loading";

const MovieList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moviesarr = useSelector((state) => state.fetchedData.movies);
  const loading = useSelector((state) => state.fetchedData.loading);
  // console.log(moviesarr);

  useEffect(() => {
    dispatch(fetchMovies(1));
  }, [dispatch]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <img className="bgimgg" src={bgimg} alt="#" />
          <div className="movie_list">
            {moviesarr.map((item) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/home/movies/${item.title}`, { state: item });
                  }}
                  className="movie_tile"
                  key={item.id}
                >
                  <img
                    className="list_poster"
                    src={import.meta.env.VITE_IMG_URL_LOW + item.poster_path}
                    alt="#"
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default MovieList;

// import { useSelector } from "react-redux";
// // import { IMG_URL } from "../API/constants";
// // import styles from "./MovieList";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchMovies, fetchSeries } from "./../features/fetchSlice";

// const MovieList = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchMovies(1));
//     // dispatch(fetchSeries(1));
//   }, [dispatch]);
//   let moviesData = [];
//   moviesData = useSelector((state) => {
//     return state.fetchedData;
//   });
//   const loading = useSelector((state) => {
//     return state.fetchedData.loading;
//   });
//   moviesData = moviesData.series.results;
//   // console.log(moviesData);

//   // {
//   //   moviesData &&
//   //     moviesData.map((movie) => {
//   //       return <p key={movie.id}>{movie.title}</p>;
//   //     });
//   //   !loading && <p>Hello</p>;
//   // }
// };

// export default MovieList;
// // <img
// //   key={item.id}
// //   className={styles.listposter}
// //   src={`${IMG_URL}${item.poster_path}`}
// // />;
