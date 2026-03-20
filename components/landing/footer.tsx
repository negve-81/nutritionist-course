"use client"

import { motion } from "framer-motion"
import { Mail, Instagram, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-20 px-4 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c8ff00]/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="grid md:grid-cols-4 gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              Володимир <span className="text-[#c8ff00]">Цоуфал</span>
            </h3>
            <p className="text-white/50 mb-6 max-w-md leading-relaxed">
              Допомагаю успішним людям оптимізувати здоров'я через науково обґрунтовані 
              стратегії харчування, без обмежувальних дієт та відмови від улюбленого.
            </p>
            <div className="flex gap-3">
              {[Instagram, Youtube, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#c8ff00]/10 hover:border-[#c8ff00]/30 hover:text-[#c8ff00] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Швидкі посилання</h4>
            <ul className="space-y-3">
              {["Про мене", "Курс", "Відгуки", "FAQ", "Контакти"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-[#c8ff00] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Юридична інформація</h4>
            <ul className="space-y-3">
              {["Політика конфіденційності", "Умови використання", "Політика повернення", "Політика cookies"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-[#c8ff00] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Володимир Цоуфал. Всі права захищені.
          </p>
          <p className="text-sm text-white/40">
            Створено з <span className="text-[#c8ff00]">любов'ю</span> до вашого здоров'я
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
