import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function SlideHero() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-cyan-400/50 bg-slate-900/50 shadow-[0_0_40px_rgba(34,211,238,0.2)] flex items-center justify-center mb-8 backdrop-blur-sm">
          <Shield className="w-12 h-12 md:w-16 md:h-16 text-cyan-400" />
        </div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-100 to-slate-500"
        >
          Diseño e Implementación de<br className="hidden md:block"/> Infraestructura VPN Cifrada
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 pt-8 border-t border-slate-800 w-full max-w-2xl text-slate-400"
        >
          <p className="text-xl md:text-2xl font-mono text-cyan-300 mb-2">Escuela de Innovación Digital</p>
          <p className="text-base md:text-xl font-light mb-4">Técnico Superior en Ciberseguridad – D-CS-4-1</p>
          <p className="text-sm md:text-base font-mono text-slate-500">Integrantes: C. Araúz, M. Pimentel, N. Cisneros</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
