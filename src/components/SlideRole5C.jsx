import { motion } from "framer-motion";
import { Bug, Thermometer } from "lucide-react";

export default function SlideRole5C() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-6 pb-2 leading-normal">
          Mantenimiento Continuo
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Estrategias operacionales para sostener la postura de seguridad criptográfica en el tiempo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {[
          {
            icon: Bug,
            title: "Simulación y Pentesting",
            desc: "Frecuencia Semestral. Los analistas ejecutan pruebas de estrés simulando ataques de degradación (downgrades de algoritmos IKE), ataques de repetición (Replay) y escaneo continuo de vulnerabilidades en los endpoints IPSec."
          },
          {
            icon: Thermometer,
            title: "Triage y Parcheo",
            desc: "Política 'Critical-First'. Si sale una vulnerabilidad zero-day en el concentrador VPN, el equipo asume un SLA agresivo de máximo 48 horas para desplegar el parche crítico a través de canales automatizados sin afectar uptime (mediante Blue-Green del HA)."
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
