import img from "@/assets/img/image.png";
import foto from "@/assets/img/imgen2.png";

export function OurProduct() {
  return (
    <section>
      <div className="flex flex-col mt-[103px] lg:mt-[180px] px-6 sm:flex lg:flex-row   md:px-20 lg:gap-[50px]">
        <div className="">
          <p className="text-secondary-300  text-[14px] sm:text-[18px] font-bold leading-[130%]">
            Our Product
          </p>
          <h1 className="text-title-950   max-w-[450px] text-[24px] sm:text-[30px] lg:text-[44px]  font-bold leading-[130%]">
            Crafted by talented and high quality material
          </h1>
          <p className="text-[#AFADB5] max-w-[430px] mt-4   font-medium text-[14px] sm:text-[18px] leading-[180%]">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
          <button className="flex w-full text-white lg:w-[170px] lg:h-[54px] mt-[30px] h-12 bg-primary-500 p-15px 45px justify-center items-center gap-2.5 shrink-0">
            Learn More
          </button>

          <div className="sm:hidden flex gird grid-cols-3 mt-[30px] gap-5 ">
            <div>
              <h1 className="text-title-950   text-[22px] sm:text-[30px] lg:text-[44px]  font-bold leading-[130%]">
                20+
              </h1>
              <p className="text-[#AFADB5]    font-medium text-[14px] sm:text-[18px] leading-[180%]">
                Years Experience
              </p>
            </div>
            <div>
              <h1 className="text-title-950   text-[22px] sm:text-[30px] lg:text-[44px]  font-bold leading-[130%]">
                483
              </h1>
              <p className="text-[#AFADB5]    font-medium text-[14px] sm:text-[18px] leading-[180%]">
                Happy Client
              </p>
            </div>
            <div>
              <h1 className="text-title-950   text-[22px] sm:text-[30px] lg:text-[44px]  font-bold leading-[130%]">
                150+
              </h1>
              <p className="text-[#AFADB5]     font-medium text-[14px] sm:text-[18px] leading-[180%]">
                Project Finished
              </p>
            </div>
          </div>
          <div className="mt-[50px]  ">
            <img
              src={img}
              alt="imagen"
              className="w-full lg:w-[595px] xl:w-[700px] lg:h-[239px] xl:h-[261px]"
            />
          </div>
        </div>
        <div>
          <div className="hidden  sm:flex sm:gird sm:grid-cols-3 sm:mt-[30px] sm:gap-[50px] lg:justify-end ">
            <div>
              <h1 className="text-title-950   text-[22px] sm:text-[30px] lg:text-[44px]  font-bold leading-[130%]">
                20+
              </h1>
              <p className="text-[#AFADB5]    font-medium text-[14px] sm:text-[18px] leading-[180%]">
                Years Experience
              </p>
            </div>
            <div>
              <h1 className="text-title-950   text-[22px] sm:text-[30px] lg:text-[44px]  font-bold leading-[130%]">
                483
              </h1>
              <p className="text-[#AFADB5]    font-medium text-[14px] sm:text-[18px] leading-[180%]">
                Happy Client
              </p>
            </div>
            <div>
              <h1 className="text-title-950   text-[22px] sm:text-[30px] lg:text-[44px]  font-bold leading-[130%]">
                150+
              </h1>
              <p className="text-[#AFADB5]     font-medium text-[14px] sm:text-[18px] leading-[180%]">
                Project Finished
              </p>
            </div>
          </div>

          <div className="mt-5 lg:mt-[27px]">
            <img
              src={foto}
              alt="imgaen de mueble"
              className="w-full lg:w-[598px] xl:w-[700px] lg:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
