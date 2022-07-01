import { Promos } from "./Promos";
import { Top5 } from "./Top5";
import { Galeria } from "./Galeria";
import { Footer } from "../base/Footer";
import { Categorias } from "./Categorias.js";

export const Home = () => {
  return (
    <div className="main">
      <Galeria />
      <Top5 />
      <Promos />
      <Categorias />
      <Footer />
    </div>
  );
};
