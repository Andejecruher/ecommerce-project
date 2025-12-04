import { CardProduct } from "@/components/ui/CardProduct";
import reloj from "@/assets/img/reloj.jpg";

const Datos = [
  {
    imagen: "reloj",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "reloj",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "reloj",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "reloj",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
];

export function RelatedItems() {
  return (
    <div className="mt-5 lg:mt-[50px] ">
      <h2 className="px-8 lg:px-35 text[#151411]  text-[18px] lg:text-[32px] font-bold leading-[130%]">
        Related Items
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3  px-6 lg:px-25 ">
        {Datos.map((card) => {
          return (
            <>
              <CardProduct
                url={reloj}
                localizador={card.localizador}
                title={card.title}
                slogan={card.slogan}
                precio={card.precio}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
