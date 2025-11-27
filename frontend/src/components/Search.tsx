import sofa from "@/assets/img/imagecopy.png";
import busque from "@/assets/logos/logobus.png";

export function Search() {
  return (
    <section>
      <div className="mt-[30px] lg:mt-[50px] lg:flex lg:flex-col lg:items-center ">
        <div className="w-full m-auto px-6 lg:px-0 lg:max-w-[810px] lg:absolute z-10 bg-[#FFF] lg:mt-[-21px]">
          <div className="px-6 h-[54px] lg:h-[84px] shadow-[0_4px_80px_0_rgba(175,173,181,0.20)] items-center flex flex-row justify-between ">
            <div className=" flex gap-3 items-center px-3.5 lg:px-[26px] ">
              <img src={busque} alt="imagen" className="w-6 h-6" />
              <p className="text-[#AFADB5] flex items-center   font-medium text-[14px] sm:text-[18px] leading-[180%]">
                Search property
              </p>
            </div>
            <div>
              <button className="w-[100px] lg:w-[170px] h-[34px] lg:h-[54px] bg-primary-500 text-[#FFF] text-[14px] font-bold leading-[130%] ">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[30px] lg:relative z-0 ">
          <img src={sofa} alt="imagen" className="px-6 lg:px-25" />
        </div>
      </div>
    </section>
  );
}
