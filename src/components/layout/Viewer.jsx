import disney from "./../../assets/images/viewers-disney.png";
import pixar from "./../../assets/images/viewers-pixar.png";
import marvel from "./../../assets/images/viewers-marvel.png";
import starwars from "./../../assets/images/viewers-starwars.png";
import natgeo from "./../../assets/images/viewers-national.png";

import "./../../Pages/Home.css";
import vdisney from "./../../assets/videos/1564674844-disney.mp4";
import vpixar from "./../../assets/videos/1564676714-pixar.mp4";
import vmarvel from "./../../assets/videos/1564676115-marvel.mp4";
import vstarwars from "./../../assets/videos/1608229455-star-wars.mp4";
import vnatgeo from "./../../assets/videos/1564676296-national-geographic.mp4";

const Viewer = () => {
  return (
    <div className="viewer">
      {/* ---- */}
      <div className="view-wrap">
        <img src={natgeo} alt="#" />
        <video autoPlay={true} muted loop={true} playsInline={true}>
          <source src={vnatgeo} type="video/mp4" />
        </video>
      </div>
      <div className="view-wrap">
        <img src={disney} alt="#" />
        <video autoPlay={true} muted loop={true} playsInline={true}>
          <source src={vdisney} type="video/mp4" />
        </video>
      </div>
      {/* ---- */}
      <div className="view-wrap">
        <img src={pixar} alt="#" />
        <video autoPlay={true} muted loop={true} playsInline={true}>
          <source src={vpixar} type="video/mp4" />
        </video>
      </div>
      {/* ---- */}
      <div className="view-wrap">
        <img src={marvel} alt="#" />
        <video autoPlay={true} muted loop={true} playsInline={true}>
          <source src={vmarvel} type="video/mp4" />
        </video>
      </div>
      {/* ---- */}
      <div className="view-wrap">
        <img src={starwars} alt="#" />
        <video autoPlay={true} muted loop={true} playsInline={true}>
          <source src={vstarwars} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Viewer;
