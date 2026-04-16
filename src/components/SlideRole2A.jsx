import { motion } from "framer-motion";
import { Lock, ShieldCheck } from "lucide-react";

export default function SlideRole2A() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 mb-6 pb-2 leading-normal">
          Confidencialidad e Integridad
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Selección de algoritmos modernos mitigando vulnerabilidades clásicas de la criptografía simétrica.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {[
          {
            icon: Lock,
            title: "Cifrado: AES-256-GCM",
            desc: "Galois/Counter Mode es un algoritmo AEAD que permite cifrado e integridad simultáneos. Es inmune a los padding oracle attacks de las clásicas VPNs IPsec CBC. Longitud de clave de 256 bits provee seguridad post-cuántica."
          },
          {
            icon: ShieldCheck,
            title: "Integridad: HMAC-SHA-256",
            desc: "Complemento robusto para autenticación de mensajes calculando un Hash con clave y evitando ataques de interceptación y alteración de payload."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-8 bg-slate-900 border border-slate-700/60 rounded-3xl backdrop-blur text-left group hover:border-cyan-500/50 transition-all"
          >
            <div className="p-4 bg-slate-800 rounded-2xl text-emerald-400 inline-block mb-6 group-hover:scale-110 transition-transform">
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
