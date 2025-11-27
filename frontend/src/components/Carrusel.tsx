import silla from "@/assets/img/Rectangle.png";
import { CardProduct } from "@/components/ui/CardProduct";
import Slider from "react-slick";

const CarruselCard = [
  {
    imagen: "silla",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "target",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "faro",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "sillon",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "silla",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "target",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "faro",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
  {
    imagen: "sillon",
    localizador: "Chair",
    title: "White Aesthetic Chair",
    slogan: "Combination of wood and wool",
    precio: "$63.47",
  },
];

export function Carrusel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "270px",
    slidesToShow: 2,
    speed: 500,
    arrows: false,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "0%",
          slidesToShow: 1,
          arrows: false,
          variableWidth: true, //
        },
      },
    ],
  };

  return (
    <section>
      <Slider {...settings}>
        {CarruselCard.map((card) => {
          return (
            <>
              <CardProduct
                key={card.title}
                url={silla}
                localizador={card.localizador}
                title={card.title}
                slogan={card.slogan}
                precio={card.precio}
              />
            </>
          );
        })}
      </Slider>
    </section>
  );
}
