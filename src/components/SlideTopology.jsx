import { motion } from "framer-motion";
import { Network } from "lucide-react";

export default function SlideTopology() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto h-full px-4 gap-8">
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/3 flex flex-col items-start text-left"
      >
        <div className="flex items-center gap-3 mb-4">
          <Network className="text-cyan-400 w-8 h-8" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 pb-2 leading-normal">
            Topología Full Mesh
          </h2>
        </div>
        
        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
          Diseño de conectividad en malla completa conectando las delegaciones principales con infraestructura en nube, eliminando puntos únicos de fallo.
        </p>

        <ul className="space-y-4 font-mono text-sm md:text-base">
          <li className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-lg border border-slate-800">
            <span className="text-blue-400">01</span>
            <span className="text-slate-300">Conexión de Madrid (MDR-RO-01) y Lisboa (LSB-RO-01).</span>
          </li>
          <li className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-lg border border-slate-800">
            <span className="text-blue-400">02</span>
            <span className="text-slate-300">AWS Transit Gateway (TGW) en Frankfurt como concentrador VPC.</span>
          </li>
          <li className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-lg border border-slate-800">
            <span className="text-blue-400">03</span>
            <span className="text-slate-300">Conexiones IPSec altamente resilientes entre todos los nodos.</span>
          </li>
        </ul>
      </motion.div>

      {/* Right Embed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-2/3 h-[50vh] md:h-[80vh] rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-[0_0_50px_rgba(34,211,238,0.1)] relative"
      >
        <div className="absolute top-0 left-0 w-full p-3 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between z-10 backdrop-blur-sm pointer-events-none">
          <span className="font-mono text-cyan-400 text-xs">Pangea_SitetoSite.drawio</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
        </div>
        <iframe 
          frameBorder="0" 
          style={{ width: '100%', height: '100%', paddingTop: '45px' }} 
          src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&layers=1&nav=1&title=Pangea_SitetoSite.drawio&dark=1#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AGKLSvbEYIMe4zzj335Ixagwo6cscaID%26export%3Ddownload"
        ></iframe>
      </motion.div>
    </div>
  );
}
