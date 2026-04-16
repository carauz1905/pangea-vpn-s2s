import { motion } from "framer-motion";
import { Server, Activity, ArrowRightLeft } from "lucide-react";

export default function SlideRole5A() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto h-full px-4 gap-12">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-sm flex flex-col gap-4"
        >
           <motion.div
            animate={{ 
              boxShadow: ["0 0 20px rgba(59,130,246,0.2)", "0 0 60px rgba(59,130,246,0.6)", "0 0 20px rgba(59,130,246,0.2)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-full h-1/3 bg-slate-900 border border-blue-500/30 rounded-2xl flex items-center p-6 gap-6"
           >
              <Server className="text-blue-400 w-10 h-10" />
              <div>
                <p className="text-xl font-bold text-slate-200">AWS c5.large</p>
                <p className="text-slate-500 font-mono text-sm">AES-NI Hardware Acceleration</p>
              </div>
           </motion.div>

           <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full h-1/3 bg-slate-900/50 border border-slate-700/50 rounded-2xl flex items-center p-6 gap-6"
           >
              <Activity className="text-cyan-400 w-10 h-10" />
              <div>
                <p className="text-xl font-bold text-slate-200">1.25 Gbps</p>
                <p className="text-slate-500 font-mono text-sm">Throughput Máximo por Túnel</p>
              </div>
           </motion.div>

           <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full h-1/3 bg-slate-900/50 border border-slate-700/50 rounded-2xl flex items-center p-6 gap-6"
           >
              <ArrowRightLeft className="text-emerald-400 w-10 h-10" />
              <div>
                <p className="text-xl font-bold text-slate-200">&lt; 30s Failover</p>
                <p className="text-slate-500 font-mono text-sm">Dual-Tunnel BGP</p>
              </div>
           </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col items-start"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-6 pb-2 leading-normal">
          Operaciones de HA y Desempeño
        </h2>
        
        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
          <p>
            El procesamiento del cifrado simétrico robusto requiere Offloading. Instanciamos hardware de tipo <strong>c5.large</strong> habilitado con el flag <strong>AES-NI</strong>.
          </p>
          <p>
            Esto delega la computación pesada al silicio en lugar de la CPU virtualizada, manteniendo la latencia baja y permitiendo ruteo sostenido de la matriz.
          </p>
          <p>
            El diseño en AWS TGW opera una conexión de doble túnel (Dual-Tunnel). En caso de corte del Carrier A, el enrutamiento dinámico (BGP) balancea las rutas y congrega el tráfico por la ruta secundaria en modo Failover en menos de 30 segundos.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
