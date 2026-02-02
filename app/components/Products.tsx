"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Products() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "features"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setItems(data);
    };
    fetchData();
  }, []);

  return (
  <section id="features" className="py-24 px-6 bg-gradient-to-b from-black via-[#0a0f1c] to-black text-white">
    <div className="max-w-6xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
        Reimagined Nike Experience
      </h2>
      <p className="opacity-70 text-lg">
        Key highlights of the AI-powered Nike website redesign.
      </p>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="p-8 rounded-2xl bg-[#111827] border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-2 transition duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
            {item.title}
          </h3>
          <p className="opacity-80">{item.desc}</p>
        </div>
      ))}
    </motion.div>
  </section>
);

}
