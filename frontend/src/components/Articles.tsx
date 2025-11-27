import flor from "@/assets/img/imgtrick.png";
import escritorio from "@/assets/img/escritorio.jpg";
import eclipse25 from "@/assets/img/Ellipse 25.svg";
import espejo from "@/assets/img/espejo.jpg";
import plantas from "@/assets/img/plantas.jpg";

export function Articles() {
  return (
    <section>
      <div className="xl:flex xl:flex-row xl:px-25 lg:flex lg:items-center gap-[50px] mt-25 lg:mt-[180px]">
        <div className="px-4">
          <p className="text-secondary-300  text-[14px] sm:text-[18px] font-bold leading-[130%]">
            Articles
          </p>
          <h1 className="text-title-950 lg:w-[550px] lg:mt-3.5 text-[24px] md:text-[30px] lg:text-[44px]  font-bold leading-[130%]">
            The best furniture comes from Lalasia
          </h1>
          <p className="text-[#AFADB5] max-w-[430px] mt-4 lg:mt-[30px]  font-medium text-[14px] sm:text-[18px] leading-[180%]">
            Pellentesque etiam blandit in tincidunt at donec.
          </p>
          <div className="mt-[30px]">
            <img
              src={flor}
              alt="imagen"
              className="w-[527px] h-[200px] md:w-[500px] lg:w-[650px] lg:h-[540px]"
            />
          </div>
        </div>
        <div className="mt-5 px-4 w-[275px] lg:w-[500px]">
          <div className="flex flex-row gap-3.5 items-center justify-center ">
            <div className="w-[196px] h-[110px] md:w-[260px] md:h-[260px]">
              <img
                src={escritorio}
                alt="imagen del escritotio"
                className="w-[196px] h-[110px] md:w-[260px] md:h-[260px]"
              />
            </div>
            <div>
              <p className="text-[#AFADB5] text-[12px] md:text-[18px] font-bold leading-[180%]">
                Tips and Trick
              </p>
              <h1 className="text-title-950 text-[16px]  font-bold leading-[130%] mt-1">
                6 ways to give your home minimalistic vibes
              </h1>
              <div className="flex gap-2 mt-4">
                <img
                  src={eclipse25}
                  alt="el primer eclipse"
                  className="w-[18px] h-[18px]"
                />
                <h1 className="text-title-950 text-[12px] font-bold leading-[180%]">
                  By Jerremy Jean
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3.5  mt-5 items-center justify-center">
            <div className="w-[196px] h-[110px] md:w-[260px] md:h-[260px]">
              <img
                src={espejo}
                alt="imagen del escritotio"
                className="w-[196px] h-[110px] md:w-[260px] md:h-[260px]"
              />
            </div>
            <div>
              <p className="text-[#AFADB5] text-[12px] font-bold leading-[180%]">
                Design Inspiration
              </p>
              <h1 className="text-title-950 text-[16px]  font-bold leading-[130%] mt-1">
                How to make your interiors cooler and more stylish
              </h1>
              <div className="flex gap-2 mt-4">
                <img
                  src={eclipse25}
                  alt="el primer eclipse"
                  className="w-[18px] h-[18px]"
                />
                <h1 className="text-title-950 text-[12px] font-bold leading-[180%]">
                  By Michaela Augus
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3.5 mt-5 items-center justify-center">
            <div className="w-[196px] h-[110px] md:w-[260px] md:h-[260px]">
              <img
                src={plantas}
                alt="imagen del escritotio"
                className="w-[196px] h-[110px] md:w-[260px] md:h-[260px]"
              />
            </div>
            <div>
              <p className="text-[#AFADB5] text-[12px] font-bold leading-[180%]">
                Tips and Trick
              </p>
              <h1 className="text-title-950 text-[16px]  font-bold leading-[130%] mt-1">
                Elements to add character to your space
              </h1>
              <div className="flex gap-2 mt-4">
                <img
                  src={eclipse25}
                  alt="el primer eclipse"
                  className="w-[18px] h-[18px]"
                />
                <h1 className="text-title-950 text-[12px] font-bold leading-[180%]">
                  By Kim Gurameh
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
