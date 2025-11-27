import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Benefits } from "@/components/Benefits";
import { OurProduct } from "@/components/OurProduct";
import { Testimonials } from "@/components/Testimonials";
import { Articles } from "@/components/Articles";
import { Product } from "@/components/Product";
import { Carrusel } from "@/components/Carrusel";
import { Discount } from "@/components/Discount";
import { Discover } from "@/components/Discover";
import { Search } from "@/components/Search";

export function BaseLayout() {
  return (
    <>
      <Header />

      <Discover />
      <Search />
      <Benefits
        title="Benefits"
        description=" Benefits when using our services"
        slogan="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient."
      />
      <Product />
      <Carrusel />
      <OurProduct />
      <Testimonials />
      <Articles />
      <Discount />
      <Footer />
    </>
  );
}
