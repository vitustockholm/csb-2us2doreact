import "./ServicesCardTest.css";

export default function ServiceCard(props) {
  return (
    <div>
      <div className="Service_Card">
        <div className="SerIMGdiv">
          <img className="Ser_Img" src={props.img} alt="Girl in a jacket"></img>
        </div>
        <div className="Ser_Text">
          <h2 className="serHeading">
            {props.head}
            {/* <div className="Underline"></div> */}
          </h2>

          {props.children}
          <div className="Servline"></div>
        </div>
      </div>
    </div>
  );
}
