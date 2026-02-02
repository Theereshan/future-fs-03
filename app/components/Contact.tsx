export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white text-black text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The Future of Nike’s Digital Experience
        </h2>

        <p className="text-lg opacity-80 mb-10">
          This AI-driven redesign demonstrates how Nike’s online presence can
          evolve into a more immersive, performance-focused, and personalized
          digital journey for athletes worldwide.
        </p>

        <a href="#about">
          <button className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:shadow-[0_0_35px_rgba(34,211,238,0.9)]">
            View AI Case Study
          </button>
        </a>
      </div>
    </section>
  );
}
