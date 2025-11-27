import silla from "@/assets/img/Rectangle.png";

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
            <div className="mt-[30px] gap-3  px-2 md:px-10 flex items-center justify-center">
              <div>
                <img
                  src={silla}
                  alt="imagen "
                  className="w-60 h-[194px] md:w-[394px] md:h-[360px]"
                />
              </div>
              <span className="text-[#AFADB5] mt-3.5 text-[12px]  font-bold leading-[180%]">
                {card.localizador}
              </span>
              <h1 className="text-title-950 mt-1.5 text-[16px] font-bold leading-[145%] tracking-[0.16px]">
                {card.title}
              </h1>
              <p className="text-[#AFADB5] mt-1 text-[14px]  font-medium leading-[180%]">
                {card.slogan}
              </p>
              <h2 className="text-title-950 mt-3 text-[16px] font-bold leading-[145%] tracking-[0.16px]">
                {card.precio}
              </h2>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
