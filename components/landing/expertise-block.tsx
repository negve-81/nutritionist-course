"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { GraduationCap, Users, Award, BookOpen } from "lucide-react"

const stats = [
  { icon: GraduationCap, value: 16, suffix: "+", label: "Років досвіду", description: "У клінічній нутриціології та оптимізації здоров'я" },
  { icon: Users, value: 2500, suffix: "+", label: "Студентів трансформовано", description: "Життя змінені завдяки доказовим методам" },
  { icon: Award, value: 98, suffix: "%", label: "Рівень успіху", description: "Студентів відзначають покращення енергії" },
  { icon: BookOpen, value: 5, suffix: "", label: "Модулів", description: "Комплексна програма, що охоплює всі аспекти" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function ExpertiseBlock() {
  return (
    <section className="py-28 px-4 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#c8ff00]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00ffc8]/5 rounded-full blur-[120px]" />
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
            Чому довіряти Володимиру
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Підкріплено <span className="gradient-text">наукою</span> та{" "}
            <span className="text-[#c8ff00]">досвідом</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            З понад десятиліттям клінічної практики та тисячами історій успіху — 
            ви в руках експерта.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-3xl p-8 hover:border-[#c8ff00]/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c8ff00] to-[#00ffc8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-black" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-[#c8ff00] transition-colors">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-sm text-white/50">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Credentials bar */}
        <motion.div
          className="mt-16 glass rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm">
            <span className="flex items-center gap-2 hover:text-[#c8ff00] transition-colors cursor-pointer">
              <span className="w-2 h-2 bg-[#c8ff00] rounded-full" />
              Сертифікований клінічний нутриціолог
            </span>
            <span className="flex items-center gap-2 hover:text-[#c8ff00] transition-colors cursor-pointer">
              <span className="w-2 h-2 bg-[#c8ff00] rounded-full" />
              Автор наукових публікацій
            </span>
            <span className="flex items-center gap-2 hover:text-[#c8ff00] transition-colors cursor-pointer">
              <span className="w-2 h-2 bg-[#c8ff00] rounded-full" />
              Міжнародний спікер
            </span>
            <span className="flex items-center gap-2 hover:text-[#c8ff00] transition-colors cursor-pointer">
              <span className="w-2 h-2 bg-[#c8ff00] rounded-full" />
              Ведучий подкасту про здоров'я
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
