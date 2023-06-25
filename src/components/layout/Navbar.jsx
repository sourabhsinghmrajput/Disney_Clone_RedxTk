import Logo from "./../../assets/images/logo.svg";
import Home from "./../../assets/images/home-icon.svg";
import searchlogo from "./../../assets/images/search-icon.svg";
import watchlistlogo from "./../../assets/images/watchlist-icon.svg";
import orignallogo from "./../../assets/images/original-icon.svg";
import movieslogo from "./../../assets/images/movie-icon.svg";
import series from "./../../assets/images/series-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./../../API/firebase";
import { onSignOut } from "../../features/userSlice";
import { useEffect } from "react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const fetcheduser = useSelector((state) => state.user);
  const [isClicked, setIsClicked] = useState(false);
  const [user, setUser] = useState(fetcheduser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(isOpen);
  useEffect(() => {
    let locUser = localStorage.getItem("user");
    locUser = JSON.parse(locUser);
    setUser(locUser);
    if (!locUser) {
      localStorage.setItem("user", JSON.stringify(fetcheduser));
    }
  }, [fetcheduser]);
  function profileClickHandler() {
    setIsClicked((prev) => !prev);
  }
  function logoutHandler() {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(onSignOut);
        console.log("signOut");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <nav className="header">
        <img
          onClick={() => {
            navigate("/home");
          }}
          className="w-24 disney-logo"
          src={Logo}
          alt="disney-logo"
        />
        <div className="nav-container">
          <div
            onClick={() => {
              navigate("/home");
            }}
            className="nav-row"
          >
            <img src={Home} alt="#" />
            <span>HOME</span>
          </div>
          <div className="nav-row">
            <img src={searchlogo} alt="#" />
            <span>SEARCH</span>
          </div>
          <div className="nav-row">
            <img src={watchlistlogo} alt="#" />
            <span>WISHLIST</span>
          </div>
          <div className="nav-row">
            <img src={orignallogo} alt="#" />
            <span>ORIGNALS</span>
          </div>
          <div
            onClick={() => {
              navigate("/home/movies");
            }}
            className="nav-row"
          >
            <img src={movieslogo} alt="#" />
            <span>MOVIES</span>
          </div>
          <div
            onClick={() => {
              navigate("/home/tv");
            }}
            className="nav-row"
          >
            <img src={series} alt="#" />
            <span>SERIES</span>
          </div>
        </div>
        {/* hamburger menu */}

        <div className="ham-icon">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        {/* hamburger menu */}
        {user && (
          <div className="profilee" onClick={profileClickHandler}>
            <img className="profile" src={user.photo} alt="profile" />

            <p>{user.username}</p>
          </div>
        )}
      </nav>
      {isClicked && (
        <div className="profile-overlay">
          <button onClick={logoutHandler} className="logout-btn">
            Log out
          </button>
        </div>
      )}
      {isOpen && (
        <div className="mob-nav">
          <div className="mob-list">
            <div
              onClick={() => {
                navigate("/home");
              }}
              className=" mobnav-row"
            >
              <img src={Home} alt="#" />
              <span>HOME</span>
            </div>
            <div className="mobnav-row">
              <img src={searchlogo} alt="#" />
              <span>SEARCH</span>
            </div>
            <div className="mobnav-row">
              <img src={watchlistlogo} alt="#" />
              <span>WISHLIST</span>
            </div>
            <div className="mobnav-row">
              <img src={orignallogo} alt="#" />
              <span>ORIGNALS</span>
            </div>
            <div
              onClick={() => {
                navigate("/home/movies");
              }}
              className="mobnav-row"
            >
              <img src={movieslogo} alt="#" />
              <span>MOVIES</span>
            </div>
            <div
              onClick={() => {
                navigate("/home/tv");
              }}
              className="mobnav-row"
            >
              <img src={series} alt="#" />
              <span>SERIES</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
