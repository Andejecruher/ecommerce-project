import silla2 from "@/assets/img/Rectangle.png";
import { useNavigate, useParams } from "react-router";

export function DetailsProducts() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Simulación de obtención del producto por ID
  const producto = id ? { id, nombre: "White Aesthetic Chair" } : null;

  if (!producto) {
    return (
      <section className="px-6 md:px-25 mt-[50px] lg:mt-[100px]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <p className="mb-6">
            El producto que buscas no existe o ha sido removido.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#518581] text-white px-6 py-3 rounded-lg hover:bg-[#3f6a67]"
          >
            Ver todos los productos
          </button>
        </div>
      </section>
    );
  }

  const coloresDisponibles = [
    { nombre: "Blanco", clase: "bg-[#151411]" },
    { nombre: "Negro", clase: "bg-[#314443]" },
    { nombre: "Gris", clase: "bg-[#C5A26E]" },
    { nombre: "Marrón", clase: "bg-[#D8DBE0]" },
  ];

  return (
    <section>
      <div className="px-6 md:px-25 mt-[50px] lg:mt-[100px] flex flex-col lg:flex-row lg:justify-between lg:gap-[50px] ">
        <div className=" ">
          <img
            src={silla2}
            alt="imagen"
            className=" w-full  lg:w-[700px] lg:h-[700px]"
          />
        </div>
        <div>
          <h1 className="text-[#151411] text-[24px] md:text-[30px] lg:text-[44px] font-bold leading-[180%] mt-[30px]">
            White Aesthetic Chair
          </h1>
          <p className="text-[#AFADB5] text-[14px] md:text-[18px] font-medium leading-[180%]">
            Combination of wood and wool
          </p>
          <div className="mt-5">
            <h2 className="text-[#151411] text-[14px]  md:text-[18px] font-bold leading-[180%] mt-[30px] tracking-[0.14px]">
              color
            </h2>
            <div className="flex mt-[6px] lg:mt-5">
              {coloresDisponibles.map((color, index) => (
                <button
                  key={index}
                  className={`w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] ${color.clase}  border-2 border-transparent hover:border-[#151411] transition-all duration-200`}
                  aria-label={`Color ${color.nombre}`}
                  title={`Color ${color.nombre}`}
                />
              ))}
            </div>
          </div>
          <p className="text-[#AFADB5] text-[14px]  md:text-[18px] font-medium leading-[180%] mt-5 w-[327px]">
            Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
            facilisis facilisis ligula felis et a parturient aenean. Ac maecenas
            ultricies felis risus scelerisque duis posuere...
          </p>
          <h1 className="text-[#151411] text-[24px] md:text-[30px] lg:text-[44px] font-bold leading-[180%] mt-4">
            $99.98
          </h1>
          <div className="flex flex-col mt-[30px] lg:mt-[50px] lg:flex lg:flex-row lg:gap-3">
            <button className="bg-[#518581] text-[#FFF] md:w-[285px] md:h-[58px] text-[18px] font-bold items-center justify-center gap-2.5 w-[327px] p-[15px_30px] lg:mt-[12px] ">
              Buy Now
            </button>
            <button className="border-[1px]  border-[#F3F3F3] md:w-[285px] md:h-[58px] text-[#151411] font-bold text-[18px] items-center justify-center gap-2.5 w-[327px] p-[15px_30px] mt-[12px] ">
              Add to Chart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
