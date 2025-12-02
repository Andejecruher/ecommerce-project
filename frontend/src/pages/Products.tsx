import { Gallery } from "@/components/Gallery";
import { Sala } from "@/components/Sala";
import { SearchPro } from "@/components/SearchPro";
import { Title } from "@/components/Title";
import { TotalProduct } from "@/components/TotalProduct";

export function Products() {
  return (
    <>
      <Title />
      <Sala />
      <SearchPro />
      <TotalProduct />
      <Gallery />
    </>
  );
}
