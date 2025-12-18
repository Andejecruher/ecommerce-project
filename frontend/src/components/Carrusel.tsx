import { CardProduct } from "@/components/ui/CardProduct";
import { getPopularProducts } from "@/services/products";
import { useEffect, useState } from "react";
import Slider from "react-slick";

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

export function Carrusel() {
  const [products, setProducts] = useState<Producto[]>([]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "270px",
    slidesToShow: 2,
    speed: 500,
    arrows: false,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "0%",
          slidesToShow: 1,
          arrows: false,
          variableWidth: true, //
        },
      },
    ],
  };


  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const products = await getPopularProducts();
        if (products.success) {
          setProducts(products.data);
          alert(products.message);
        } else {
          alert(products.message);
        }
      } catch (error) {
        console.error('Error fetching popular products:', error);
        alert('Error fetching popular products');
      }
    };

    fetchPopularProducts();
  }, []);

  return (
    <section>
      <Slider {...settings}>
        {products.map((card) => {
          return (
            <>
              <CardProduct
                key={card.id}
                url={card.imagenes || ""}
                localizador={String(card.categoria_id)}
                title={card.nombre}
                slogan={card.descripcion}
                precio={`$ ${card.precio.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}`}
              />
            </>
          );
        })}
      </Slider>
    </section>
  );
}
