import Header from "./_components/Header";
import Contacto from "./_components/Contacto";
import { Bio } from "./_components/Bio";
import { PortfolioCarousel } from "./_components/PortfolioCarousel";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Bio />
      <PortfolioCarousel />
      <Contacto />
      <Footer />
    </div>
  );
}
