import buscar from "@/assets/logos/logobus.png";
import { CardProduct } from "@/components/ui/CardProduct";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { allProducts } from "@/services/products";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";

interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  precio_descuento?: number;
  categoria_id: number;
  stock: number;
  material?: string;
  color?: string;
  dimensiones?: string;
  peso?: number;
  imagenes?: string;
  destacado?: boolean;
  activo?: boolean;
  fecha_creacion?: Date;
}

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Producto[]>([]);
  const [search, setSearch] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
  });

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const products = await allProducts({
          search,
          limit,
          page,
          filter: activeFilter,
        });
        if (products.success) {
          setProducts(products.data.products);
          setPagination(products.data.pagination);
        } else {
          console.log(products.message);
        }
      } catch (error) {
        console.error("Error fetching popular products:", error);
        console.log("Error fetching popular products");
      }
    };

    fetchAllProducts();
  }, [search, limit, page, activeFilter]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificar si el clic fue FUERA del componente
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false); // Cerrar el filtro
      }
    };

    // Agregar el event listener cuando el componente se monta
    document.addEventListener("mousedown", handleClickOutside);

    // Remover el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();
  const handleSelect = (id?: number) => {
    if (id === undefined) return;
    console.log("Selected product:", id);
    navigate(`/products/${id}`);
  };

  return (
    <>
      <section>
        <div className="lg:flex gap-5 mt-[30px] md:mt-[50px] px-6 lg:px-25 container mx-auto">
          <div className=" h-[54px] lg:w-full lg:h-[84px] shadow-[0_4px_80px_0_rgba(175,173,181,0.20)] items-center flex flex-row justify-between ">
            <div className="w-full flex gap-3 lg:gap-[18px] items-center px-3.5 lg:px-[26px] ">
              <img src={buscar} alt="imagen" className="w-6 h-6" />
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
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
          <div className="relative hidden w-[190px] lg:block" ref={filterRef}>
            {/* BOTÓN COMPLETO */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full h-[84px] shadow-[0_4px_80px_0_rgba(175,173,181,0.20)] flex justify-center items-center gap-3 focus:outline-none relative cursor-pointer hover:shadow-[0_4px_80px_0_rgba(175,173,181,0.30)] transition-shadow"
            >
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.6625 2.625L7.5 12.5"
                  stroke="#151411"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-title-950 text-[18px] font-medium leading-[180%]">
                Filter
              </span>

              {/* INDICADOR DE FILTRO ACTIVO */}
              {activeFilter && (
                <span className="absolute top-3 right-3 w-2 h-2 bg-primary-500 rounded-full"></span>
              )}
            </button>

            {/* DROPDOWN - CORREGIDO */}
            {isFilterOpen && (
              <div
                className="absolute top-[90px] left-0 w-full bg-white shadow-lg rounded-md overflow-hidden z-20"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <button
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                    activeFilter === "destacados"
                      ? "bg-blue-50 text-blue-600"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveFilter(
                      activeFilter === "destacados" ? "" : "destacados"
                    );
                    setIsFilterOpen(false);
                    setPage(1);
                  }}
                >
                  destacados
                </button>

                <button
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                    activeFilter === "mas_baratos"
                      ? "bg-blue-50 text-blue-600"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveFilter(
                      activeFilter === "mas_baratos" ? "" : "mas_baratos"
                    );
                    setIsFilterOpen(false);
                    setPage(1);
                  }}
                >
                  mas baratos
                </button>

                <button
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                    activeFilter === "camas" ? "bg-blue-50 text-blue-600" : ""
                  }`}
                  onClick={() => {
                    setActiveFilter(activeFilter === "camas" ? "" : "camas");
                    setIsFilterOpen(false);
                    setPage(1);
                  }}
                >
                  camas
                </button>

                <button
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                    activeFilter === "mesas" ? "bg-blue-50 text-blue-600" : ""
                  }`}
                  onClick={() => {
                    setActiveFilter(activeFilter === "mesas" ? "" : "mesas");
                    setIsFilterOpen(false);
                    setPage(1);
                  }}
                >
                  mesas
                </button>

                <button
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                    activeFilter === "sillas" ? "bg-blue-50 text-blue-600" : ""
                  }`}
                  onClick={() => {
                    setActiveFilter(activeFilter === "sillas" ? "" : "sillas");
                    setIsFilterOpen(false);
                    setPage(1);
                  }}
                >
                  sillas
                </button>
              </div>
            )}
          </div>
        </div>
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
                    strokeWidth="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M6 12H18"
                    stroke="#151411"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10 17H14"
                    stroke="#151411"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                <p>Sort By</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center flex-col">
        <div className="grid grid-cols-2 lg:grid-cols-3  mt-5 lg:mt-[50px] px-6 lg:px-25 ">
          {products.map((card) => {
            return (
              <>
                <CardProduct
                  key={card.id}
                  onSelect={() => handleSelect(card.id)}
                  url={card.imagenes || ""}
                  localizador={String(card.id) || "0"}
                  title={card.nombre}
                  slogan={card.descripcion}
                  precio={`$ ${card.precio.toLocaleString("es-MX", {
                    style: "currency",
                    currency: "MXN",
                  })}`}
                />
              </>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-4 mt-6">
          {/* Selector de items por página */}
          <div className="flex items-center gap-2">
            <label htmlFor="limit-select" className="text-sm font-medium">
              Items por página:
            </label>
            <select
              id="limit-select"
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setPage(1);
              }}
              className="border rounded-md px-3 py-1 text-sm"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>

          {/* Paginación */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => {
                    if (pagination.currentPage > 1) {
                      setPage(pagination.currentPage - 1);
                    }
                  }}
                />
              </PaginationItem>
              {Array.from(
                { length: pagination.totalPages },
                (_, i) => i + 1
              ).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    className="cursor-pointer"
                    onClick={() => setPage(page)}
                    isActive={page === pagination.currentPage}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => {
                    if (pagination.currentPage < pagination.totalPages) {
                      setPage(pagination.currentPage + 1);
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}
