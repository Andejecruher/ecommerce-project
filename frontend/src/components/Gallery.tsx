import mesa from "@/assets/img/mesa.jpg";
import { CardProduct } from "@/components/ui/CardProduct";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const handleSelect = (title: string) => {
    console.log("Selected product:", title);
    navigate(`/products/${12}`);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3  mt-5 lg:mt-[50px] px-6 lg:px-25 ">
      {Datos.map((card) => {
        return (
          <>
            <CardProduct
              onSelect={() => handleSelect(card.title)}
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
