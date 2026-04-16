import { motion } from "framer-motion";
import { GlobeLock, FileWarning } from "lucide-react";

export default function SlideRole4A() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-6 pb-2 leading-normal">
          Privacidad y Marco Regulatorio
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Políticas obligatorias internacionales que dictaminan el manejo de la infraestructura para interconexión Europea.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {[
          {
            icon: GlobeLock,
            title: "GDPR y Privacidad Transatlántica",
            desc: "Al tener sedes en Madrid, Lisboa y la nube en Frankfurt, la empresa procesa tráfico europeo (UE). El Reglamento General de Protección de Datos exige de manera explícita cifrado en tránsito de nivel 'State-of-the-art', lo cual cumplimos con GCM 256."
          },
          {
            icon: FileWarning,
            title: "Derechos de los Empleados",
            desc: "El diseño de la red evita la inspección profunda de paquetes (SSL Inspection) en el túnel de extremo a extremo, resguardando la privacidad y limitándose a telemetría de red bajo anonimato de metadatos."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-8 bg-slate-900 border border-slate-700/60 rounded-3xl backdrop-blur text-left group hover:border-purple-500/50 transition-all"
          >
            <div className="p-4 bg-slate-800 rounded-2xl text-purple-400 inline-block mb-6 group-hover:scale-110 transition-transform">
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
