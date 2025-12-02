import tele from "@/assets/img/Sala.png";

export function Sala() {
  return (
    <div>
      <div className="relative">
        <div className="">
          <img
            src={tele}
            alt="imagen"
            className="h-[180px] md:h-full w-full  lg:h-[500px] lg:w-full mt-[30px] lg:mt-[50px]"
          />
        </div>
      </div>
      <div className="absolute top-[330px] px-6 md:px-[132px] md:-top-[-600px] lg:-top-[-520px]">
        <div className="inline-flex px-2.5  py-1.5 md:px-4 md:py-2  justify-center items-center gap-2.5 rounded-full  bg-primary-500">
          <button className="text-white text-[10px] md:text-[14px] ">
            Discount
          </button>
        </div>
        <h1 className="text-[#FFF] text-[16px] md:text-[30px] lg:text-[44px] font-bold leading-[145%] tracking-[0.16px] mt-3.5">
          Ramadhan Sale Offer
        </h1>
        <p className="text-[#FFFFFF] w-60 md:w-full lg:w-[420px] text-[12px] md:text-[24px] font-medium leading-[180%] mt-1 md:mt-5">
          Get 40% off for the first transaction on Lalasia
        </p>
      </div>
    </div>
  );
}
