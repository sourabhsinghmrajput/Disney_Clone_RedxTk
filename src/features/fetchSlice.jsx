import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import {
//   BASE_URL,
//   END_URL,
//   IMG_URL_LOW,
//   POPMOVIE_URL,
//   POPSERIES_URL,
// } from "../API/constants";

const initialState = {
  movies: [],
  series: [],
  currentDesc: {},
  // error: null,
  loading: false,
  isOpening: false,
  modalData: { poster: "", title: "", id: "", genre: "" },
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page) => {
    let response = [];
    await axios
      .get(`${import.meta.env.VITE_POPMOVIE_URL}${page}`)
      .then((res) => {
        response = res.data;
        // console.log(res.data);
      })
      .catch((err) => console.log(err));

    return response;
  }
);

//base+{"movie/"}+{movie_id}+{end_url}.
export const fetchMoviesByid = createAsyncThunk(
  "movies/fetchMoviesByID",
  async (spec) => {
    let response = {};
    await axios
      .get(
        `${import.meta.env.VITE_BASE_URL}${spec.type}/${spec.id}${
          import.meta.env.VITE_END_URL
        }`
      )
      .then((res) => {
        response = res.data;
        // console.log(res.data);
      })
      .catch((err) => console.log(err));

    return response;
  }
);

export const fetchSeries = createAsyncThunk(
  "series/fetchSeries",
  async (page) => {
    const res = await axios.get(`${import.meta.env.VITE_POPSERIES_URL}${page}`);
    return res;
  }
);

export const fetchslice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpening = true;
      state.modalData.id = action.payload.id;
      state.modalData.title = action.payload.title;
      state.modalData.poster = `${import.meta.env.VITE_IMG_URL_LOW}${
        action.payload.poster
      }`;
      state.modalData.genre = action.payload.genre;
    },
    closeModal: (state) => {
      state.isOpening = false;
    },
  },
  extraReducers: (builder) => {
    //Movies
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      // state.movies = {};
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.loading = false;
    });
    //Movies By ID and TYPE.
    builder.addCase(fetchMoviesByid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMoviesByid.fulfilled, (state, action) => {
      state.currentDesc = action.payload;
      // console.log(action.payload);
      state.loading = false;
    });

    //Series
    builder.addCase(fetchSeries.fulfilled, (state, action) => {
      state.series = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchSeries.pending, (state) => {
      state.loading = true;
      // state.series = {};
    });
  },
});

export const { openModal, closeModal } = fetchslice.actions;
export default fetchslice.reducer;

//  extraReducers: {
//     //Movies
//     [fetchMovies.pending]: (state) => {
//       state.loading = true;
//       // state.movies = {};
//     },
//     [fetchMovies.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.movies = action.payload;
//     },
//     [fetchMovies.rejected]: (state) => {
//       state.loading = false;
//     },
//     //Series
//     [fetchSeries.pending]: (state) => {
//       state.loading = true;
//       // state.series = {};
//     },
//     [fetchSeries.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.series = action.payload;
//     },
//     [fetchSeries.rejected]: (state) => {
//       state.loading = false;
//     },
//   },
