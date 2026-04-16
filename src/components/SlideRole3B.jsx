import { motion } from "framer-motion";
import { Server, CheckCircle2 } from "lucide-react";

export default function SlideRole3B() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 mb-6 pb-2 leading-normal">
          Infraestructura de Clave Pública
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Protección asimétrica y validación en tiempo real de identidades en todo el ecosistema Pangea de AWS.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {[
          {
            icon: Server,
            title: "Criptografía Asimétrica: RSA 4096-bit",
            desc: "Las identidades de los firewalls (MDR-RO-01 y LSB-RO-01) y contenedores TGW se firman usando asimétrico RSA de alta densidad. La Clave Raíz de la CA está aislada físicamente (Air-gapped) o protegida por HSM."
          },
          {
            icon: CheckCircle2,
            title: "Validación por OCSP",
            desc: "Online Certificate Status Protocol permite consultar la revocación de un certificado en microsegundos, asegurando que si una sede se compromete, el túnel es derribado al instante sin esperar listas CRL."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-8 bg-slate-900 border border-slate-700/60 rounded-3xl backdrop-blur text-left group hover:border-orange-500/50 transition-all"
          >
            <div className="p-4 bg-slate-800 rounded-2xl text-red-400 inline-block mb-6 group-hover:scale-110 transition-transform">
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
