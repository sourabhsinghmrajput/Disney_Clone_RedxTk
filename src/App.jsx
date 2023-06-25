import "./App.css";
import Home from "./Pages/Home";
import MovieDesc from "./Pages/MovieDesc";
import Movies from "./Pages/Movies";
import OnBoardingPage from "./Pages/OnBoardingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/loading" element={<Loading />} /> */}
        <Route path="/" element={<OnBoardingPage />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/movies" element={<Movies />}></Route>
        {/* <Route path="/home/tv" element={<Movies />}></Route> */}
        <Route path="/home/:content/:id" element={<MovieDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
