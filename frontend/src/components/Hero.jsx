import HampiBg from '../assets/hampibg.png';
function Hero() {
  return (
    <section className={`py-60 text-white bg-cover bg-center`} style={{ backgroundImage: `url(${HampiBg})` }}>
      <div className="max-w-8xl mx-auto px-5">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight transform -translate-y-20">
          Hampi - Gokarna -<br /> Murudeshwar
        </h1>
        
        <button
  onClick={() =>
    document
      .getElementById("Packages")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-white text-sky-500 px-6 py-3 rounded-3xl font-semibold hover:bg-gray-200 transform -translate-y-20"
>
  Book Now
</button>
      </div>
    </section>
  );
}

export default Hero;
