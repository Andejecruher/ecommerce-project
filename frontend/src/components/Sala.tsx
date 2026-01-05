import tele from "@/assets/img/Sala.png";
import image from "@/assets/img/image.png";
import faro from "@/assets/img/faro.jpg";
import plantas from "@/assets/img/plantas.jpg";
import Slider from "react-slick";
import { useState, useRef } from "react";

const Cardimages = [
  { url: tele },
  { url: image },
  { url: faro },
  { url: plantas },
];

function CardProduct({ url }: { url: string }) {
  return (
    <div className="relative">
      <img
        src={url}
        className="h-[180px] md:h-[400px] w-full lg:h-[500px] lg:w-full mt-[30px] lg:mt-[50px] object-cover"
        alt="Slide image"
      />
    </div>
  );
}

export function Sala() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const goToNext = () => sliderRef.current?.slickNext();
  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToSlide = (index: number) => sliderRef.current?.slickGoTo(index);

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <Slider ref={sliderRef} {...settings}>
          {Cardimages.map((card, index) => (
            <CardProduct key={index} url={card.url} />
          ))}
        </Slider>

        <div className="hidden md:block">
          {/* Anterior */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-[300px] -translate-y-1/2 z-[60] flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Siguiente */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-[300px] -translate-y-1/2 z-[60] flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Paginación */}
        <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 z-[60]">
          <div className="flex items-center gap-2">
            {Cardimages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "bg-white w-2 h-2"
                    : "bg-white/40 w-2 h-2 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute top-[70px] px-6 md:px-[132px] md:top-auto md:bottom-[80px] lg:bottom-[100px] z-40">
        <div className="inline-flex px-2.5 py-1.5 md:px-4 md:py-2 rounded-full bg-primary-500">
          <span className="text-white text-[10px] md:text-[14px]">
            Discount
          </span>
        </div>

        <h1 className="text-white text-[16px] md:text-[30px] lg:text-[44px] font-bold mt-3.5">
          Ramadhan Sale Offer
        </h1>

        <p className="text-white w-60 md:w-full lg:w-[420px] text-[12px] md:text-[24px] font-medium mt-1 md:mt-5">
          Get 40% off for the first transaction on Lalasia
        </p>
      </div>
    </div>
  );
}
