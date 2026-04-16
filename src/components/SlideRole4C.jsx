import { motion } from "framer-motion";
import { FolderLock, Glasses } from "lucide-react";

export default function SlideRole4C() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-6 pb-2 leading-normal">
          Privilegios y Auditoría
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Políticas de acceso restrictivo y visibilidad de logs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {[
          {
            icon: FolderLock,
            title: "Zero Trust y RBAC",
            desc: "Se aplica microsegmentación. El segmento 'Ventas' en la sede de LSB-RO-01 tiene reglas de firewall estrictas, limitando el acceso hacia la nube (FRK-DB-01) únicamente al puerto 1433 (SQL), bloqueando movimientos laterales y RDP."
          },
          {
            icon: Glasses,
            title: "Visibilidad y Trazabilidad",
            desc: "Uso de SNMPv3 cifrado y exportación de syslogs hacia AWS CloudWatch. Retención mandatoria de 13 meses sobre eventos críticos como subidas/caídas de túneles IPSec, fallas IKE y denegación por geolocalización."
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
