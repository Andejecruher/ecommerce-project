export function Discount() {
  return (
    <section>
      <div className="flex flex-col gap-4 mt-[100px] px-6 lg:px-25 md:flex-row md:justify-between">
        <h1 className="text-title-950   text-[24px] md:text-[30px] lg:text-[44px]  font-bold leading-[130%]">
          Join with me for get special discount
        </h1>
        <div className="bg-primary-500  flex w-45 h-12 py-4 px-4 justify-center items-center gap-2.5">
          <button className="text-[#FFF] flex items-center justify-center text-[14px] md:text-[18px] font-bold">
            Learn More
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="12"
            viewBox="0 0 27 12"
            fill="none"
          >
            <path
              d="M20.709 0.75L25.7504 5.80833L20.709 10.8667"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M0.75 5.80835L25.6666 5.80835"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
