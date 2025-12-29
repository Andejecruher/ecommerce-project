import logo from "@/assets/logos/logo.png";

export function Footer() {
  return (
    <footer>
      <div className="p-6 sm:px-25 sm:py-22  ">
        <div className="gap-[30px] flex flex-col max-w-auto lg:flex-row lg:justify-between lg:items-center border-t-2 border-[#ECE4DE] pt-7 md:pt-20">
          <div className=" sm:flex sm:justify-between sm:items-center">
            <div className="flex-col  ">
              <img src={logo} alt="Logo" />

              <p className="mt-7 sm:mt-9 max-w-[400px] text-[#AFADB5] sm:text-title-950  font-medium text-[14px] sm:text-[18px] leading-[180%] ">
                Lalasia is digital agency that help you make better experience
                iaculis cras in.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3  sm:gap-20 md:justify-start ">
            <ul className="inline-flex flex-col items-start gap-2 sm:gap-3">
              <li className="text-title-950  sm:mb-4 text-[16px] sm:text-[20px] font-bold leading-[130%]">
                Product
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text-[14px] sm:text-[18px] font-medium leading-[180%]">
                New Arrivals
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text[14px] sm:text-[18px] font-medium leading-[180%]">
                Best Selling
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text-[14px] sm:text-[18px] font-medium leading-[180%]">
                Home Decor
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text-[14px] sm:text-[18px] font-medium leading-[180%]">
                Kitchen Set
              </li>
            </ul>

            <ul className="inline-flex flex-col items-start gap-2 sm:gap-3 ">
              <li className="text-title-950  sm:mb-4 text-[16px] sm:text-[20px] font-bold leading-[130%]">
                Services
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text-[14px] sm:text-[18px] font-medium leading-[180%]">
                Catalog
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text-[14px] sm:text-[18px] font-medium leading-[180%]">
                Blog
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text-[14px] sm:text-[18px] font-medium leading-[180%]">
                FaQ
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text-[14px] sm:text-[18px] font-medium leading-[180%]">
                Pricing
              </li>
            </ul>

            <ul className="inline-flex flex-col items-start gap-2 sm:gap-3">
              <li className="text-title-950  sm:mb-4 text-[16px] sm:text-[20px] font-bold leading-[130%]">
                Follow Us
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text[14px] sm:text-[18px] font-medium leading-[180%]">
                Facebook
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text-[14px] sm:text-[18px] font-medium leading-[180%]">
                Instagram
              </li>
              <li className="text-[#AFADB5] sm:text-title-950  text-[14px] sm:text-[18px] font-medium leading-[180%]">
                Twitter
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
