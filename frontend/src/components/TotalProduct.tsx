export function TotalProduct() {
  return (
    <section>
      <div className="mt-8 px-6 md:px-25 flex items-center lg:flex-row justify-between">
        <div className="flex gap-2 lg:gap-2.5 items-center">
          <h1 className="text-title-950 text-[18px] lg:text-[44px] font-bold leading-[180%]">
            Total Product
          </h1>

          <p className="flex items-center py-0.5 lg:py-2.5 px-2.5 lg:px-4  lg:h-[30px] rounded-2xl bg-[#F3F3F3]   text-primary-500">
            184
          </p>
        </div>
        <div className="hidden md:block">
          <div className="inline-flex h-[50px] px-5 py-[13px] flex-col justify-center items-center gap-2.5 border-[1.5px] border-[#F9F9F9]">
            <div className="flex gap-3  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 7H21"
                  stroke="#151411"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M6 12H18"
                  stroke="#151411"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M10 17H14"
                  stroke="#151411"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <p>Sort By</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
