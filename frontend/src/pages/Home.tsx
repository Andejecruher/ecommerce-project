import { Articles } from "@/components/Articles";
import { Benefits } from "@/components/Benefits";
import { Carrusel } from "@/components/Carrusel";
import { Discount } from "@/components/Discount";
import { Discover } from "@/components/Discover";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OurProduct } from "@/components/OurProduct";
import { Product } from "@/components/Product";
import { Search } from "@/components/Search";
import { Testimonials } from "@/components/Testimonials";

export function Home() {
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
