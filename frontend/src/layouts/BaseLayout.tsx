import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Benefits } from "@/components/Benefits";
import { OurProduct } from "@/components/OurProduct";
import { Testimonials } from "@/components/Testimonials";
import { Articles } from "@/components/Articles";
export function BaseLayout() {
  return (
    <>
      <Header />
      <Benefits
        title="Benefits"
        description=" Benefits when using our services"
        slogan="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient."
      />
      <OurProduct />
      <Testimonials />
      <Articles />
      <Footer />
    </>
  );
}
