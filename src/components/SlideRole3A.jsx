import { motion } from "framer-motion";
import { ShieldX, BadgeCheck } from "lucide-react";

export default function SlideRole3A() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto h-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 mb-6 pb-2 leading-normal">
          Autenticación de Puntos Finales
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Rechazando métodos clásicos para mitigar ataques de diccionario e implementación de identidades basadas en Certificados Digitales.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 w-full mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 p-8 bg-slate-900 border border-red-900/50 rounded-3xl backdrop-blur text-left group transition-all"
        >
          <div className="p-4 bg-red-950/50 rounded-2xl text-red-500 inline-block mb-6">
            <ShieldX size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-100 mb-4">El riesgo de PSK</h3>
          <p className="text-slate-400 leading-relaxed">
            Las contraseñas pre-compartidas (Pre-Shared Keys) sufren de vulnerabilidad a ataques de fuerza bruta y diccionario offline en la negociación de IKE phase 1. Además, su ciclo de rotación entre múltiples sedes carece de escalabilidad y no permite la revocación selectiva.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1 p-8 bg-slate-900 border border-orange-500/50 rounded-3xl backdrop-blur text-left group transition-all shadow-[0_0_30px_rgba(249,115,22,0.1)]"
        >
          <div className="p-4 bg-orange-950/50 rounded-2xl text-orange-400 inline-block mb-6">
            <BadgeCheck size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-100 mb-4">Certificados Digitales x.509</h3>
          <p className="text-slate-400 leading-relaxed">
            La alternativa robusta. Las sedes autentican su identidad mutua probando de manera criptográfica la posesión de una clave privada. Asegura el no repudio, elimina el riesgo de ataques de diccionario, y proporciona un modelo escalable donde la administración está centralizada en una entidad certificadora (CA).
          </p>
        </motion.div>
      </div>
    </div>
  );
}
