import { useLocation } from "react-router";
import { IMG_URL_LOW, IMG_URL_ORIGINAL } from "../API/constants";
import styles from "./MovieDesc.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByid } from "../features/fetchSlice";
import Loading from "../components/layout/Loading";

const MovieDesc = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const Desc = useSelector((state) => state.fetchedData.currentDesc);
  const loading = useSelector((state) => state.fetchedData.loading);

  useEffect(() => {
    dispatch(fetchMoviesByid({ id: state.id, type: "movie" }));
  }, [dispatch]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className={styles.page}>
          <div className={styles.herosec}>
            <img
              className={styles.backdrop}
              src={`${IMG_URL_ORIGINAL}${Desc.backdrop_path}`}
              alt={Desc.title}
            />
            <div className={styles.blackdropfull}></div>
            <div className={styles.blur}></div>
            <div className={styles.blur1}></div>
          </div>
          <div className={styles.glass}>
            <img
              className={styles.sec1img}
              src={`${IMG_URL_LOW}${Desc.poster_path}`}
              alt={Desc.title}
            />
            <div className={styles.data}>
              <h2 className={styles.title}>{Desc.title}</h2>
              <p className={styles.overview}>{Desc.overview}</p>
              <p className={styles.sub}>
                Rating : {Math.round(Desc.vote_average * 10) / 10} / 10 stars
              </p>
              <p className={styles.sub}>Release Date : {Desc.release_date}</p>
              <p className={styles.sub}> View Count : {Desc.vote_count}</p>
              <p className={styles.sub}>Runtime : {Desc.runtime} minutes</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDesc;

// {
//     "adult": false,
//     "backdrop_path": "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
//     "belongs_to_collection": null,
//     "budget": 100000000,
//     "genres": [
//         {
//             "id": 16,
//             "name": "Animation"
//         },
//         {
//             "id": 10751,
//             "name": "Family"
//         },
//         {
//             "id": 12,
//             "name": "Adventure"
//         },
//         {
//             "id": 14,
//             "name": "Fantasy"
//         },
//         {
//             "id": 35,
//             "name": "Comedy"
//         }
//     ],
//     "homepage": "https://www.thesupermariobros.movie",
//     "id": 502356,
//     "imdb_id": "tt6718170",
//     "original_language": "en",
//     "original_title": "The Super Mario Bros. Movie",
//     "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
//     "popularity": 5480.46,
//     "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
//     "production_companies": [
//         {
//             "id": 33,
//             "logo_path": "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
//             "name": "Universal Pictures",
//             "origin_country": "US"
//         },
//         {
//             "id": 6704,
//             "logo_path": "/fOG2oY4m1YuYTQh4bMqqZkmgOAI.png",
//             "name": "Illumination",
//             "origin_country": "US"
//         },
//         {
//             "id": 12288,
//             "logo_path": "/e4dQAqZD374H5EuM0W1ljEBWTKy.png",
//             "name": "Nintendo",
//             "origin_country": "JP"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "JP",
//             "name": "Japan"
//         },
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "2023-04-05",
//     "revenue": 1254704603,
//     "runtime": 92,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "",
//     "title": "The Super Mario Bros. Movie",
//     "video": false,
//     "vote_average": 7.744,
//     "vote_count": 3360
// }
