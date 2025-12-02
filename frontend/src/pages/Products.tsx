import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { Sala } from "@/components/Sala";
import { SearchPro } from "@/components/SearchPro";
import { TotalProduct } from "@/components/TotalProduct";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";

export function Products() {
  return (
    <>
      <Header />
      <Title />
      <Sala />
      <SearchPro />
      <TotalProduct />
      <Gallery />
      <Footer />
    </>
  );
}
