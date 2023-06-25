import Navbar from "../components/layout/Navbar";
import bgimg from "../assets/images/home-background.png";
import "./Home.css";
import ImageSlider from "../components/layout/ImageSlider";
import Viewer from "../components/layout/Viewer";
// import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <>
      <Navbar />
      <img className="bgimg" src={bgimg} alt="#" />
      <ImageSlider />
      <Viewer />
      {/* <MovieList /> */}
    </>
  );
};

export default Home;
