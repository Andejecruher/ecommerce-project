import buscar from "@/assets/logos/logobus.png";

export function SearchPro() {
  return (
    <div className="lg:flex gap-5 mt-[30px] md:mt-[50px] px-6 lg:px-25 container mx-auto">
      <div className=" h-[54px] lg:w-full lg:h-[84px] shadow-[0_4px_80px_0_rgba(175,173,181,0.20)] items-center flex flex-row justify-between ">
        <div className="w-full flex gap-3 lg:gap-[18px] items-center px-3.5 lg:px-[26px] ">
          <img src={buscar} alt="imagen" className="w-6 h-6" />
          <input
            className="text-[#AFADB5] flex items-center w-full h-[45px] outline-0 font-medium text-[14px] sm:text-[18px] leading-[180%]"
            placeholder="Search property"
          />
        </div>
        <div>
          <button className="lg:hidden w-[100px] lg:w-[170px] h-[34px] lg:h-[54px] bg-primary-500 text-[#FFF] text-[14px] font-bold leading-[130%] ">
            Search
          </button>
          <button className="hidden lg:block w-[100px] lg:w-[170px] h-[34px] lg:h-[54px] bg-primary-500 text-[#FFF] text-[14px] font-bold leading-[130%] ">
            Find now
          </button>
        </div>
      </div>
      <div className="hidden w-[190px] lg:block h-[84px] shadow-[0_4px_80px_0_rgba(175,173,181,0.20)] ">
        <div className="flex justify-center items-center  ">
          <div className="flex mt-5 gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M6.75 2.625H23.25C24.625 2.625 25.75 3.75 25.75 5.125V7.875C25.75 8.875 25.125 10.125 24.5 10.75L19.125 15.5C18.375 16.125 17.875 17.375 17.875 18.375V23.75C17.875 24.5 17.375 25.5 16.75 25.875L15 27C13.375 28 11.125 26.875 11.125 24.875V18.25C11.125 17.375 10.625 16.25 10.125 15.625L5.375 10.625C4.75 10 4.25 8.875 4.25 8.125V5.25C4.25 3.75 5.375 2.625 6.75 2.625Z"
                stroke="#151411"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6625 2.625L7.5 12.5"
                stroke="#151411"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <button className="text-title-950 text-[18px] font-medium leading-[180%]">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
