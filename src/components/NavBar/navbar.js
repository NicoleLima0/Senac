import styles from "./navbar.css";
import imgLogo  from "../../assets/coca.jpg";

export default function NavBar({nome}) {



  return (
    <nav className="navbar" >
      <div>
      <img src={imgLogo}/>
      </div>
      <div className="lista">
        <div className="item">Home</div>
        <div className="item">Sobre</div>
        <div className="item">Tech Stack</div>
        <div className="item">Projetos</div>
        <div className="item">Contatos</div>
        <div>
          {nome}
        </div>
      </div>
    </nav>
  );
}
