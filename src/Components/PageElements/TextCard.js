import "./TextCard.css";

export default function TextCard(props) {
  return (
    <div className="text_Card">
      <div id={props.id}>
        <h1 className="text_heading">{props.name}</h1>
        <div className="line"></div>
        <div className="text_body">{props.children}</div>
      </div>
    </div>
  );
}
