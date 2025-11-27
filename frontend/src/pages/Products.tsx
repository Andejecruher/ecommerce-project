import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function Products() {
    return (
        <>
            <Header />
            <Benefits
                title="Benefits Products"
                description=" Benefits when using our services products"
                slogan="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient."
            />
            <Footer />
        </>
    );
}
