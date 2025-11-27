export function CardProduct({
    url,
    localizador,
    title,
    slogan,
    precio,
}: {
    url: string;
    localizador: string;
    title: string;
    slogan: string;
    precio: string;
}) {

    return (
        <div className="mt-[30px] px-2 md:px-10 flex flex-col">
            <div>
                <img
                    src={url}
                    alt="imagen "
                    className="w-60 h-[194px] md:w-full md:h-[360px]"
                />
            </div>
            <span className="text-[#AFADB5] mt-3.5 text-[12px]  font-bold leading-[180%]">
                {localizador}
            </span>
            <h1 className="text-title-950 mt-1.5 text-[16px] font-bold leading-[145%] tracking-[0.16px]">
                {title}
            </h1>
            <p className="text-[#AFADB5] mt-1 text-[14px]  font-medium leading-[180%]">
                {slogan}
            </p>
            <h2 className="text-title-950 mt-3 text-[16px] font-bold leading-[145%] tracking-[0.16px]">
                {precio}
            </h2>
        </div>
    );
}
