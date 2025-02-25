"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-[35vh]">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
      >
        <source src="/media/banner.mp4" type="video/mp4" />
      </video>

      {/* Overlay consistente para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white/60 z-[1]" />

      {/* Contenido principal */}
      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 h-full z-10 py-10">
        <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto text-center">
          {/* Subtítulo animado */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-lg md:text-xl mb-6 font-semibold tracking-wider"
          >
            DESCUBRE LA LIBERTAD DE VOLAR
          </motion.p>

          {/* Título principal con fondo semi-transparente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary">
              Vive la Experiencia de ser
              <span className="block mt-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Piloto por un Día
              </span>
            </h1>
          </motion.div>

          {/* Descripción con fondo semi-transparente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg mb-12"
          >
            <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Embárcate en una aventura única donde el cielo es el límite. Aprende, vuela y crea recuerdos inolvidables.
            </p>
          </motion.div>

          {/* Botones de acción animados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Reserva tu Vuelo
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/80 text-primary backdrop-blur-sm rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white shadow-lg"
            >
              Conoce Más
            </motion.a>
          </motion.div>

          {/* Indicador de scroll */}
          <motion.button
            onClick={scrollToAbout}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Desplazarse hacia abajo"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

