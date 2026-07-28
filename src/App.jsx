import { motion } from 'framer-motion'
import ShoeScene from './ShoeScene'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative">
      <nav className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6 md:p-10">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#d4af37]">AURA</motion.h1>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-gray-400">
          <a href="#" className="hover:text-white transition">COLLECTION</a>
          <a href="#" className="hover:text-white transition">TECHNOLOGY</a>
          <a href="#" className="hover:text-white transition">ABOUT</a>
        </motion.div>
        <motion.button initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="px-5 py-2 border border-gray-700 rounded-full text-xs tracking-wider hover:bg-white hover:text-black transition-all duration-300">SHOP NOW</motion.button>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><ShoeScene /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl">
            <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-[#d4af37] tracking-[0.4em] text-[10px] md:text-xs mb-4 font-medium">NEW ARRIVAL // 2026</motion.p>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 tracking-tight">
              STEP <br/>INTO THE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">FUTURE.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="text-gray-400 text-sm md:text-base max-w-sm mb-8 leading-relaxed">Engineered for performance. Designed for the streets. Experience unparalleled comfort with our latest aerodynamic silhouette.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex gap-4">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-black text-xs md:text-sm font-semibold rounded-full hover:bg-[#d4af37] transition-all duration-300 shadow-lg shadow-white/5">Explore Collection</button>
              <button className="px-6 md:px-8 py-3 md:py-4 border border-gray-600 text-xs md:text-sm rounded-full hover:border-white transition-all duration-300 tracking-wider">View in AR</button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default App
