import Header from "./../components/layout/Header";
import backgroundimg from "./../assets/images/login-background.jpg";
import grplogo from "./../assets/images/cta-logo-one.svg";
import grplogo2 from "./../assets/images/cta-logo-two.png";
import "./OnBoardingPage.css";
import { useNavigate } from "react-router";
// import ss from "./../c";

const OnBoardingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="parent">
        <img className="bgimg" src={backgroundimg} alt="bg-login" />
        <div className="center">
          <img src={grplogo} alt="a" />
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="blue-big-btn"
          >
            GET ALL THERE
          </button>
          <p className="login-desc">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img src={grplogo2} alt="a" />
        </div>
      </div>
    </>
  );
};

export default OnBoardingPage;
