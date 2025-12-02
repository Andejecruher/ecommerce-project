interface TituloDescripcionProps {
  titulo: string;
  descripcion: string;
}

const TituloDescripcion: React.FC<TituloDescripcionProps> = ({
  titulo,
  descripcion,
}) => {
  return (
    <div className="flex flex-col items-center px-6">
      <h1 className="text-title-950 text-center text-[26px]  md:text-[64px] font-bold leading-[130%]">
        {titulo}
      </h1>
      <p className="text-[#AFADB5] lg:max-w-[740px] md:max-w-[500px]  mt-5 text-center text-[14px] md:text-[18px] font-medium leading-[180%] ">
        {descripcion}
      </p>
    </div>
  );
};

export default TituloDescripcion;
