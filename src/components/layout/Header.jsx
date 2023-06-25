import DisneyLogo from "./../../assets/images/logo.svg";
import { auth, provider } from "./../../API/firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { onSignIn } from "./../../features/userSlice";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = async () => {
    // console.log("clicked");
    await signInWithPopup(auth, provider)
      .then(async (res) => {
        // console.log(res);
        const signindata = await {
          username: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
        };
        await dispatch(onSignIn(signindata));
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <nav className="header">
      <img className="w-24 " src={DisneyLogo} alt="disney-logo" />
      <button onClick={handleAuth} className="login-btn">
        LOGIN
      </button>
    </nav>
  );
};

export default Header;
