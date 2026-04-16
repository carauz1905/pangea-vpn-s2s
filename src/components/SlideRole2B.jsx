import { motion } from "framer-motion";
import { Key, Shuffle } from "lucide-react";

export default function SlideRole2B() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 mb-6 pb-2 leading-normal">
          Encapsulación de Túnel y Claves
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Estandarización del tráfico y aseguramiento matemático para el intercambio seguro sin compartir secretos en texto plano.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {[
          {
            icon: Shuffle,
            title: "IPsec ESP (Modo Túnel)",
            desc: "Encapsulating Security Payload en modo túnel añade una nueva cabecera IP sobre la original, cifrando no solo la carga (payload) sino el origen y destino real de los paquetes, ideal para Site-to-Site."
          },
          {
            icon: Key,
            title: "IKEv2 & ECDH G19",
            desc: "IKEv2 maneja túneles resilientes mediante MOBIKE y DPD (Detección de Dead Peer). El intercambio matemático se da usando Curva Elíptica de Diffie-Hellman P-256 ofreciendo altísima seguridad computacional en milisegundos."
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
