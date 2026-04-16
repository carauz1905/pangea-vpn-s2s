import { motion } from "framer-motion";
import { BookOpenCheck, Bookmark } from "lucide-react";

export default function SlideRole4B() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-6 pb-2 leading-normal">
          Estándares y Esquemas Nacionales
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Cumplimiento obligatorio de normativas vigentes en la arquitectura S2S.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {[
          {
            icon: Bookmark,
            title: "Esquema Nacional de Seguridad (ENS)",
            desc: "Al conectar con la sede de Madrid, la infraestructura exige conformidad con los controles del ENS (Categoría Medio/Alto), validando no solo las políticas, sino los niveles de cifrado y contingencia técnica."
          },
          {
            icon: BookOpenCheck,
            title: "Guías NIST SP 800-77",
            desc: "Las configuraciones del IPSec y la negación de algoritmos deprecados como 3DES o MD5 siguen rígidamente los lineamientos del Instituto Nacional de Estándares y Tecnología para VPNs IPSec seguras."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-8 bg-slate-900 border border-slate-700/60 rounded-3xl backdrop-blur text-left group hover:border-pink-500/50 transition-all"
          >
            <div className="p-4 bg-slate-800 rounded-2xl text-pink-400 inline-block mb-6 group-hover:scale-110 transition-transform">
              <item.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
