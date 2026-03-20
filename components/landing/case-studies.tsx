"use client"

import { motion } from "framer-motion"
import { Zap, Moon, Scale, TrendingUp } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    name: "Михайло Р.",
    role: "IT-директор, 42 роки",
    image: "/clients/mikhaylo.jpg",
    quote: "Раніше мені потрібно було 4 кави, щоб функціонувати. Тепер у мене стабільна енергія цілий день лише з однієї чашки.",
    stats: [
      { label: "Енергія", before: 35, after: 90, icon: Zap },
      { label: "Сон", before: 45, after: 85, icon: Moon },
      { label: "Фокус", before: 40, after: 88, icon: TrendingUp },
    ]
  },
  {
    name: "Софія К.",
    role: "Підприємець, 38 років",
    image: "/clients/sofia.jpg",
    quote: "Тяга до солодкого зникла. Я схудла на 5 кг без жодних обмежень.",
    stats: [
      { label: "Енергія", before: 40, after: 92, icon: Zap },
      { label: "Вага", before: 30, after: 95, icon: Scale },
      { label: "Настрій", before: 50, after: 90, icon: TrendingUp },
    ]
  },
  {
    name: "Давид Л.",
    role: "Фінансовий директор, 45 років",
    image: "/clients/david.jpg",
    quote: "Соціальне вживання алкоголю більше не впливає на мій наступний день. Протоколи нейтралізації — це справжній прорив.",
    stats: [
      { label: "Відновлення", before: 25, after: 88, icon: Zap },
      { label: "Сон", before: 35, after: 90, icon: Moon },
      { label: "Ясність", before: 45, after: 92, icon: TrendingUp },
    ]
  },
]

function StatusBar({ label, before, after, icon: Icon }: { label: string; before: number; after: number; icon: typeof Zap }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-[#c8ff00]" />
          <span className="text-white/50">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/30 text-xs">{before}%</span>
          <span className="text-white/30">→</span>
          <span className="font-semibold text-[#c8ff00]">{after}%</span>
        </div>
      </div>
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-white/10 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${before}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#c8ff00] to-[#00ffc8] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${after}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </div>
  )
}

export function CaseStudies() {
  return (
    <section className="py-28 px-4 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-5 py-2 glass rounded-full text-sm font-medium text-[#c8ff00] mb-6">
            Реальні результати
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Трансформації, що <span className="gradient-text">говорять</span> самі за себе
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Подивіться, як професіонали, такі як ви, оптимізували своє здоров'я без жертв улюбленим способом життя.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              className="glass rounded-3xl p-8 hover:border-[#c8ff00]/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#c8ff00]/30 group-hover:border-[#c8ff00] transition-colors">
                  <Image 
                    src={study.image} 
                    alt={study.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-[#c8ff00] transition-colors">{study.name}</h3>
                  <p className="text-sm text-white/50">{study.role}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-white/60 mb-8 relative pl-4 border-l-2 border-[#c8ff00]/30">
                &laquo;{study.quote}&raquo;
              </blockquote>

              {/* Stats */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                  Показники прогресу
                </h4>
                {study.stats.map((stat) => (
                  <StatusBar key={stat.label} {...stat} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/50 mb-4">
            Приєднуйтесь до 2,500+ професіоналів, які трансформували своє ставлення до звичок.
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-[#c8ff00]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatDelay: 2 }}
              />
            ))}
          </div>
          <p className="text-sm text-white/40 mt-2">Середній рейтинг 4.9/5</p>
        </motion.div>
      </div>
    </section>
  )
}
