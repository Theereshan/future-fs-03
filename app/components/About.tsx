"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-black">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Fresh Take on Nike’s Digital Future
          </h2>
          <p className="text-lg leading-relaxed opacity-80">
            This AI-powered redesign reimagines Nike’s digital presence with a
            futuristic interface, bold typography, and immersive storytelling.
            The goal was to strengthen the emotional connection between athlete
            and innovation through a high-performance digital experience.
          </p>
        </div>

        <img
          src="/nike-about.jpg"
          alt="AI generated futuristic Nike athlete concept"
          className="rounded-2xl shadow-xl object-cover h-80 w-full"
        />
      </motion.div>
    </section>
  );
}
