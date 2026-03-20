"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

const specialists = [
  {
    id: 1,
    name: "Володимир Цоуфал",
    role: "Клінічний нутриціолог",
    specialization: "Експерт з нейтралізації шкідливих звичок",
    description: "16+ років досвіду у клінічній нутриціології. Автор наукових публікацій та міжнародний спікер.",
    credentials: ["Сертифікований нутриціолог", "Науковець", "Спікер"],
    image: "/specialists/volodymyr-tsufal.jpg"
  },
  {
    id: 2,
    name: "Юрій Цемах",
    role: "Спортивний нутриціолог",
    specialization: "Health-Coach, ex-професійний футболіст",
    description: "Спеціаліст у застосуванні нутриційних стратегій для спортсменів та активних людей.",
    credentials: ["Спортивний нутриціолог", "Health-Coach", "Ex-професійний спортсмен"],
    image: "/specialists/yurii-tsemakh.jpg"
  }
]

export function Specialists() {
  return (
    <section className="py-28 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
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
          <span className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-sm font-medium text-[#c8ff00] mb-6">
            <Users className="w-4 h-4" />
            Наша команда експертів
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Навчатися у <span className="gradient-text">найкращих</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Спеціалісти з різним досвідом, але з однією метою — допомогти вам побудувати здоровіші звички.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {specialists.map((specialist, index) => (
            <motion.div
              key={specialist.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group h-full glass rounded-3xl overflow-hidden hover:border-[#c8ff00]/30 transition-all duration-500">
                {/* Image container */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                  <img 
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-[#c8ff00]/0 group-hover:bg-[#c8ff00]/5 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-[#c8ff00] transition-colors">
                      {specialist.name}
                    </h3>
                    <p className="text-lg font-semibold text-[#c8ff00] mb-2">
                      {specialist.role}
                    </p>
                    <p className="text-sm text-[#00ffc8] font-medium">
                      {specialist.specialization}
                    </p>
                  </div>

                  <p className="text-white/60 leading-relaxed">
                    {specialist.description}
                  </p>

                  {/* Credentials */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {specialist.credentials.map((credential) => (
                      <span 
                        key={credential}
                        className="inline-flex items-center px-3 py-1.5 bg-[#c8ff00]/10 text-white/80 text-xs font-medium rounded-full border border-[#c8ff00]/20 hover:border-[#c8ff00]/40 transition-colors"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
