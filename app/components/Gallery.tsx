"use client";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          AI Visual Concepts
        </h2>
        <p className="opacity-70 text-lg">
          Futuristic AI-generated visuals inspired by Nike’s performance culture.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <img src="/nike1.jpg" className="rounded-2xl shadow-lg object-cover h-80 w-full" />
        <img src="/nike2.jpg" className="rounded-2xl shadow-lg object-cover h-80 w-full" />
        <img src="/nike3.jpg" className="rounded-2xl shadow-lg object-cover h-80 w-full" />
      </motion.div>
    </section>
  );
}
