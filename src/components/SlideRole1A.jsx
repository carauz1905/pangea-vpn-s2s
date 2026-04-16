import { motion } from "framer-motion";
import { Globe, GitMerge, ShieldCheck } from "lucide-react";

export default function SlideRole1A() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 pb-2 leading-normal">
          Fundamentos Site-to-Site VPN
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Túneles cifrados que permiten la transmisión segura de datos a través de Internet, conectando múltiples sedes geográficamente dispersas como si estuvieran en una red local única.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
        {[
          {
            icon: Globe,
            title: "Infraestructura",
            desc: "Se establecen sobre internet público abaratando costes frente a líneas dedicadas."
          },
          {
            icon: ShieldCheck,
            title: "Seguridad Capa 3",
            desc: "Integridad y confidencialidad total usando IPSec frente a VPN SSL de aplicación."
          },
          {
            icon: GitMerge,
            title: "Exclusiones",
            desc: "Excluimos Remote Access VPN ya que el requerimiento es interconexión total entre sedes (Subnet a Subnet)."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-8 bg-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur"
          >
            <item.icon className="w-12 h-12 text-cyan-500 mb-6 mx-auto" />
            <h3 className="text-xl font-bold text-slate-200 mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm md:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
