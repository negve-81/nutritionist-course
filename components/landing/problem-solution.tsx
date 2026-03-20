"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Shield, Coffee, Wine, Candy, Zap, Moon, Scale } from "lucide-react"

const problems = [
  { icon: Coffee, title: "Надмір кави", desc: "Стрибки кортизолу, втома надниркових залоз, порушення сну" },
  { icon: Wine, title: "Вплив алкоголю", desc: "Навантаження на печінку, зневоднення, виснаження нутрієнтів" },
  { icon: Candy, title: "Цукрові спади", desc: "Падіння енергії, запалення, набір ваги" },
]

const solutions = [
  { icon: Zap, title: "Стабільна енергія", desc: "Природні сполуки, що пом'якшують вплив кофеїну" },
  { icon: Moon, title: "Якісний сон", desc: "Протоколи для відновлення циркадного ритму" },
  { icon: Scale, title: "Метаболічний баланс", desc: "Стратегії нейтралізації шкоди від цукру та алкоголю" },
]

export function ProblemSolution() {
  return (
    <section className="py-28 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#c8ff00]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-5 py-2 glass rounded-full text-sm font-medium text-[#c8ff00] mb-6">
            Наука за цим
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Від <span className="text-red-400">шкоди</span> до{" "}
            <span className="gradient-text">нейтралізації</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Розуміння прихованої ціни ваших щоденних звичок — та перевірених методів їх компенсації.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem Card */}
          <motion.div
            className="glass rounded-3xl p-8 relative overflow-hidden border-red-500/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Red glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl" />
            
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Прихована шкода</h3>
            <p className="text-white/50 mb-8">Що насправді роблять щоденні звички з вашим тілом</p>
            
            <div className="space-y-4">
              {problems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 flex items-start gap-4 border border-white/5 hover:border-red-500/20 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 group-hover:border-red-500/40 transition-colors">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            className="glass rounded-3xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Green glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#c8ff00]/10 rounded-full blur-3xl" />
            
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-xl bg-[#c8ff00]/10 flex items-center justify-center border border-[#c8ff00]/20">
                <Shield className="w-6 h-6 text-[#c8ff00]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Протокол нейтралізації</h3>
            <p className="text-white/50 mb-8">Науково обґрунтовані стратегії захисту та відновлення</p>
            
            <div className="space-y-4">
              {solutions.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 flex items-start gap-4 border border-white/5 hover:border-[#c8ff00]/20 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c8ff00]/10 flex items-center justify-center shrink-0 border border-[#c8ff00]/20 group-hover:border-[#c8ff00]/40 transition-colors">
                    <item.icon className="w-6 h-6 text-[#c8ff00]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Arrow indicator */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-4 text-white/50">
            <div className="w-20 h-[1px] bg-gradient-to-r from-red-400/50 to-[#c8ff00]/50" />
            <span className="text-sm font-medium uppercase tracking-wider">Змініть свій підхід</span>
            <div className="w-20 h-[1px] bg-gradient-to-r from-[#c8ff00]/50 to-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
