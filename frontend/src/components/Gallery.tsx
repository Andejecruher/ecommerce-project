import { CardProduct } from "@/components/ui/CardProduct";
import { allProducts } from "@/services/products";
import { useNavigate } from "react-router";
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

export function Gallery() {
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

  const navigate = useNavigate();
  const handleSelect = (id?: number) => {
    if (id === undefined) return;
    console.log("Selected product:", id);
    navigate(`/products/${id}`);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3  mt-5 lg:mt-[50px] px-6 lg:px-25 ">
      {products.map((card) => {
        return (
          <>
            <CardProduct
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
  );
}
