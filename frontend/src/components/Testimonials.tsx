import Slider from "react-slick";

const TestimonialsCards = [
  {
    slogan:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    title: "Janne Cooper",
    rating: "4.3",
    avatar: "https://i.pravatar.cc/300",
  },
  {
    slogan:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    title: "Janne Cooper",
    rating: "4.3",
    avatar: "https://i.pravatar.cc/300",
  },
  {
    slogan:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    title: "Janne Cooper",
    rating: "4.3",
    avatar: "https://i.pravatar.cc/300",
  },
  {
    slogan:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    title: "Janne Cooper",
    rating: "4.3",
    avatar: "https://i.pravatar.cc/300",
  },
  {
    slogan:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    title: "Janne Cooper",
    rating: "4.3",
    avatar: "https://i.pravatar.cc/300",
  },
  {
    slogan:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    title: "Janne Cooper",
    rating: "4.3",
    avatar: "https://i.pravatar.cc/300",
  },
];

export function Testimonials() {
  const settings = {
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 2,      // Muestra 1 slide completo (el del centro)
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    dots: false,
    arrows: true,
    focusOnSelect: true,
  };
  return (
    <section>
      <div className="px-6 xl:px-[392px] flex flex-col items-center mt-25 lg:mt-[180px]">
        <p className="text-secondary-300   text-[14px] sm:text-[18px] font-bold leading-[130%]">
          Testimonials
        </p>
        <h1 className="text-title-950  text-[24px] sm:text-[30px] lg:text-[44px] mt-2 sm:mt-3 font-bold leading-[130%]">
          What our customer say
        </h1>
        <p className="text-[#AFADB5] w-[327px] lg:w-[656px]  mt-[18px] md:mt-[30px] font-medium text-[14px] sm:text-[18px]  leading-[180%]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          <br />
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {TestimonialsCards.map((card) => {
            return (
              <div>
                <div className="flex sm:mt-5 shadow-[0_4px_100px_0_rgba(175,173,181,0.10)]  px-4 flex-col  bg-white max-w-[545px] max-h-[275px] mr-5">
                  <div className=" flex items-center justify-center mt-[18px]  sm:mt-[26px]  w-11 h-11 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M10.7865 15.5065H4.53317C4.63984 9.27988 5.8665 8.25321 9.69317 5.98655C10.1332 5.71988 10.2798 5.15988 10.0132 4.70655C9.75984 4.26655 9.1865 4.11988 8.7465 4.38655C4.23984 7.05321 2.6665 8.67988 2.6665 16.4265V23.6132C2.6665 25.8932 4.51984 27.7332 6.7865 27.7332H10.7865C13.1332 27.7332 14.9065 25.9599 14.9065 23.6132V19.6132C14.9065 17.2799 13.1332 15.5065 10.7865 15.5065Z"
                        fill="url(#paint0_linear_29_1086)"
                      />
                      <path
                        d="M25.2129 15.5065H18.9596C19.0663 9.27988 20.2929 8.25321 24.1196 5.98655C24.5596 5.71988 24.7063 5.15988 24.4396 4.70655C24.1729 4.26655 23.6129 4.11988 23.1596 4.38655C18.6529 7.05321 17.0796 8.67988 17.0796 16.4399V23.6265C17.0796 25.9065 18.9329 27.7465 21.1996 27.7465H25.1996C27.5463 27.7465 29.3196 25.9732 29.3196 23.6265V19.6265C29.3329 17.2799 27.5596 15.5065 25.2129 15.5065Z"
                        fill="url(#paint1_linear_29_1086)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_29_1086"
                          x1="16.7647"
                          y1="174.701"
                          x2="-14.8267"
                          y2="173.396"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.25249" stopColor="#40B4A6" />
                          <stop offset="0.637527" stopColor="#A6D8D2" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_29_1086"
                          x1="31.1779"
                          y1="174.798"
                          x2="-0.413784"
                          y2="173.494"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.25249" stopColor="#40B4A6" />
                          <stop offset="0.637527" stopColor="#A6D8D2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className=" mt-4 sm:mt-6 text-[#AFADB5] text-[14px] md:text-[18px] ">
                    {card.slogan}
                  </p>

                  <div className="mb-[18px] mt-[18px] flex justify-between ">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={card.avatar}
                        alt="logo de eclipse"
                        className="w-7 h-7 rounded-full "
                      />
                      <h1 className=" text-title-950  font-bold text-[14px] md:text-[20px] leading-[130%]">
                        {card.title}
                      </h1>
                    </div>
                    <div className="flex gap-2.5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill="#FFB23F"
                            stroke="#FFB23F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h1 className="text-title-950 fond-['Eudoxus_Sans'] font-bold text-[14px] leanding-[130%]">
                        {card.rating}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
