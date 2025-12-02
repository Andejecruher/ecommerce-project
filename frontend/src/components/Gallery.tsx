import { CardProduct } from "@/components/ui/CardProduct";
import mesa from "@/assets/img/mesa.jpg";

const Datos = [
  {
    imagen: "mesa",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "mesa",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "mesa",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "mesa",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "mesa",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "mesa",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "mesa",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "mesa",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "mesa",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "mesa",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3  mt-5 lg:mt-[50px] px-6 lg:px-25 ">
      {Datos.map((card) => {
        return (
          <>
            <CardProduct
              url={mesa}
              localizador={card.localizador}
              title={card.title}
              slogan={card.slogan}
              precio={card.precio}
            />
          </>
        );
      })}
    </div>
  );
}
