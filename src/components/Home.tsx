import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>Fundacja Młyn Zyzaków</div>
      <div>
        <Link to={"o-fundacji"}>O Fundacji</Link>
      </div>
      <div>
        <Link to={"historia"}>Historia</Link>
      </div>
      <div>
        <Link to={"oferta"}>Oferta</Link>
      </div>
      <div>
        <Link to={"galeria"}>Galeria</Link>
      </div>
      <div>
        <Link to={"kontakt"}>Kontakt</Link>
      </div>
    </>
  );
};
