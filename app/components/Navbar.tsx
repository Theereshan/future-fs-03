import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0d0d0d]/95 backdrop-blur-md text-white z-50 border-b border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
  src="/nike-ai-logo.png"
  alt="Nike AI Logo"
  width={75}
  height={75}
  className="drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] object-contain"
/>

          <span className="font-bold text-xl tracking-widest uppercase text-cyan-400">
            NIKE AI REBRANDED
          </span>
        </div>

        {/* Links */}
        <div className="space-x-8 hidden md:block text-sm font-medium">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#features" className="hover:text-cyan-400 transition">Features</a>
          <a href="#gallery" className="hover:text-cyan-400 transition">Gallery</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
