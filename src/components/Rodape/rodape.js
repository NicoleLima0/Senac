import "./rodape.css";

export default function Rodape({ item1, item2, item3, item4, item5 }) {
  return (
    <>
      <div className="rodape">
        <div className="container1">
          <div>Titulo 1</div>
          <div> {item1}</div>
          <div> {item2}</div>
          <div> {item3} </div>
        </div>
        <div className="container2">
          <div>Titulo 2</div>
          <div>{item4}</div>
          <div>{item5}</div>
        </div>
      </div>
    </>
  );
}
