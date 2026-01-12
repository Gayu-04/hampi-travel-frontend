import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import Explore from "../components/Explore";
import Faq from "../components/Faq";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Packages />
      <Explore />
      <Faq />
    </>
  );
}

export default Home;
