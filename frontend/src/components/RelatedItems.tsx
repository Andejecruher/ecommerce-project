import { CardProduct } from "@/components/ui/CardProduct";
import { allProducts } from "@/services/products";
import { useEffect, useState } from "react";

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

export function RelatedItems() {
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const products = await allProducts();
        if (products.success) {
          setProducts(products.data);
          console.log(products.message);
        } else {
          console.log(products.message);
        }
      } catch (error) {
        console.error("Error fetching popular products:", error);
        console.log("Error fetching popular products");
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <div className="mt-5 lg:mt-[50px] ">
      <h2 className="px-8 lg:px-35 text[#151411]  text-[18px] lg:text-[32px] font-bold leading-[130%]">
        Related Items
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3  px-6 lg:px-25 ">
        {products.map((card) => {
          return (
            <>
              <CardProduct
                url={card.imagenes || ""}
                localizador={card.id ? String(card.id) : "0"}
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
    </div>
  );
}
