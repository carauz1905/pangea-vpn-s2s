import { motion } from "framer-motion";
import { HardDrive, CloudCog } from "lucide-react";

export default function SlideRole5B() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-6 pb-2 leading-normal">
          Hardening y Resiliencia
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Estandarización de componentes y procesos de recuperación de desastres (DRP).
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {[
          {
            icon: CloudCog,
            title: "Baselines de Configuración",
            desc: "Todas las piezas de infraestructura de red y los concentradores son instanciados usando plantillas restrictivas basadas en los estándares del CIS (Center for Internet Security)."
          },
          {
            icon: HardDrive,
            title: "Respaldo y Cadena de Trust",
            desc: "Las configuraciones de los Firewalls sufren copias de seguridad incrementales cifradas. Adicionalmente, el material más sensible (la CA Root) jamás se expone, alojándose en un entorno Air-Gapped o en un Cloud HSM de FIPS 140-2."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-8 bg-slate-900 border border-slate-700/60 rounded-3xl backdrop-blur text-left group hover:border-blue-500/50 transition-all"
          >
            <div className="p-4 bg-slate-800 rounded-2xl text-blue-400 inline-block mb-6 group-hover:scale-110 transition-transform">
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
