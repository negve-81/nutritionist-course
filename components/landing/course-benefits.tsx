"use client"

import { motion } from "framer-motion"
import { Coffee, Croissant, Sparkles, FlaskConical, Check } from "lucide-react"

const benefits = [
  { 
    icon: Coffee, 
    title: "НЕ відмовлятись від улюбленої ранкової кави",
    color: "bg-[#c8ff00]/10 border-[#c8ff00]/20"
  },
  { 
    icon: Sparkles, 
    title: "Не треба соромитися своїх маленьких слабинок — вони теж частина тебе",
    color: "bg-[#00ffc8]/10 border-[#00ffc8]/20"
  },
  { 
    icon: Croissant, 
    title: "З'їсти свій смачний круасан, без остраху стати на ваги",
    color: "bg-[#c8ff00]/10 border-[#c8ff00]/20"
  },
  { 
    icon: FlaskConical, 
    title: "Клінічний нутриціолог розповість, чому наука на нашому боці",
    color: "bg-[#00ffc8]/10 border-[#00ffc8]/20"
  },
]

export function CourseBenefits() {
  return (
    <section className="py-28 px-4 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-5 py-2 glass rounded-full text-sm font-medium text-[#c8ff00] mb-6">
            Що ви отримаєте
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Що саме ви <span className="gradient-text">дізнаєтесь</span> із курсу
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="glass rounded-2xl p-6 hover:border-[#c8ff00]/30 transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl ${benefit.color} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-[#c8ff00]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#c8ff00] mt-1 shrink-0" />
                    <p className="text-lg font-medium text-white leading-relaxed group-hover:text-[#c8ff00] transition-colors">{benefit.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Course description */}
        <motion.div
          className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl gradient-border" />
          <div className="absolute inset-[1px] rounded-3xl bg-[#141414]" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c8ff00]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#00ffc8]/5 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Як за <span className="text-[#c8ff00]">5 уроків по 10 хвилин</span> у зручний для тебе час:
            </h3>
            
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Всі ми живі люди, які люблять смачно поїсти, випити кави та розслабитися після важкого дня алкоголем.
              </p>
              
              <p>
                Це завжди приємно, але часто після цього ми відчуваємо <span className="text-red-400 font-medium">докори совісті</span>. Адже з усіх сторін ми чуємо, як це шкідливо та ніхто не розповість, як можна зробити із шкідливого корисне.
              </p>
              
              <p>
                Ми розуміємо, як важко відмовитись від маленьких радощів життя, своїх звичок та уподобань. Тому, базуючись на <span className="text-[#c8ff00] font-medium">наукових дослідженнях</span>, ми розкажемо вам, як нейтралізувати шкоду та зберегти звичний спосіб життя без відчуття провини.
              </p>
            </div>

            {/* Visual accent */}
            <div className="mt-10 flex flex-wrap gap-3">
              <motion.div 
                className="inline-flex items-center gap-2 bg-[#c8ff00]/10 border border-[#c8ff00]/20 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 bg-[#c8ff00] rounded-full" />
                <span className="text-sm text-white/80">Науковий підхід</span>
              </motion.div>
              <motion.div 
                className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 bg-red-400 rounded-full" />
                <span className="text-sm text-white/80">Без почуття провини</span>
              </motion.div>
              <motion.div 
                className="inline-flex items-center gap-2 bg-[#00ffc8]/10 border border-[#00ffc8]/20 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 bg-[#00ffc8] rounded-full" />
                <span className="text-sm text-white/80">Збережи свої звички</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
