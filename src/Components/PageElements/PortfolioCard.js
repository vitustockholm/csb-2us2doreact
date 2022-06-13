import "./PortfolioCard.css";
import { Parallax, Background } from "react-parallax";

const image1 =
  "http://cdn.home-designing.com/wp-content/uploads/2018/05/white-living-room-furniture.jpg";
const image2 =
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc020121toolbox-001-1607447196.jpg";

("https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2020/08/feature-image-81.jpg");

const Container = () => (
  <Parallax bgImage={image2} strength={200}>
    {/* <p>... Content</p> */}
    <div className="Folio_Card">
      <div className="txt">LOGO</div>
      {/* <div className="strapline">Strapline somthing</div> */}
    </div>
  </Parallax>
);

export default Container;

// export default function PortfolioCard() {
//   return (
//     <Parallax
//       bgImage={image2}
//       strength={500}
//       className={"test"}
//       bgImageSize={"(min-width: 400px) 400px, 100vw"}
//     >
//       <div className="Folio_Card">
//         <div className="txt">LOGO</div>

//         {/* <img
//         className="Port_Img"
//         src="http://cdn.home-designing.com/wp-content/uploads/2018/05/white-living-room-furniture.jpg"
//         alt="Girl in a jacket"
//       ></img>

//       <div className="txt">LOGO</div> */}
//       </div>
//     </Parallax>
//   );
// }
