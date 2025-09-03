import { Bio, Footer, Header, PortfolioCarousel } from "./_components";
import Contacto from "./_components/Contacto";

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
