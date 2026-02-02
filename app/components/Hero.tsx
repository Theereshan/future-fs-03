export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-[#0a0f1c] to-black text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Nike, Reimagined by AI
      </h1>

      <p className="max-w-2xl text-lg md:text-xl opacity-80">
        A bold, futuristic redesign blending performance, innovation,
        and immersive digital storytelling.
      </p>
<a href="#about">
  <button className="mt-10 bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:shadow-[0_0_35px_rgba(34,211,238,0.9)]">
    Explore the Future of Sport
  </button>
</a>

    </section>
  );
}
