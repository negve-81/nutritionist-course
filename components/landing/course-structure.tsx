"use client"

import { motion } from "framer-motion"
import { BookOpen, CheckCircle2, FileText, Gift } from "lucide-react"

const lectures = [
  {
    number: 1,
    title: "Вступ: Міфи про шкідливе",
    points: [
      "Чому ми віримо в страшилки про їжу",
      "Як формується почуття провини за 'неідеальні' звички",
      "5 принципів усвідомленого підходу до харчування"
    ],
    bonus: "чек-лист «Ознаки харчової тривожності»"
  },
  {
    number: 2,
    title: "Алкоголь, кава, цукор і сіль: вороги чи союзники?",
    points: [
      "Як ці продукти реально впливають на організм",
      "Що робить їх шкідливими / нейтральними / навіть корисними",
      "Як мінімізувати шкоду — конкретні біохакінг-прийоми"
    ],
    bonus: "таблиця 'Як нейтралізувати шкідливі ефекти'"
  },
  {
    number: 3,
    title: "Молочка, глютен, мучне: розвінчуємо міфи",
    points: [
      "Коли варто обмежувати, а коли — ні",
      "Альтернативи без самообману",
      "Як слухати тіло і не потрапити в пастку дієтичних трендів"
    ],
    bonus: "міні-тест «Чи справді тобі шкодить глютен?»"
  },
  {
    number: 4,
    title: "Як дезактивувати шкідливий вплив звичок",
    points: [
      "Фізичні, нутріцевтичні та поведінкові прийоми 'нейтралізації'",
      "Як підтримати печінку, мікрофлору, нервову систему",
      "Щоденна практика: 'Компенсація без фанатизму'"
    ],
    bonus: "чек-лист «Мій набір антистресу»"
  },
  {
    number: 5,
    title: "Нове ставлення до себе і своїх слабкостей",
    points: [
      "Як перейти від самокритики до турботи",
      "Формула балансу: 80/20",
      "Як зберегти результат без обмежень"
    ],
    bonus: "PDF-гайд «Мій особистий план гармонійного харчування»",
    isFinal: true
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function CourseStructure() {
  return (
    <section className="py-28 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c8ff00]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00ffc8]/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-5 py-2 glass rounded-full text-sm font-medium text-[#c8ff00] mb-6">
            Програма навчання
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Структура <span className="gradient-text">курсу</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            За 5 лекцій у зручний для тебе час я навчу вас перетворювати шкідливу їжу у корисну
          </p>
        </motion.div>

        <div className="space-y-6">
          {lectures.map((lecture, index) => (
            <motion.div
              key={lecture.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 md:p-8 hover:border-[#c8ff00]/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Lecture number */}
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c8ff00] to-[#00ffc8] flex items-center justify-center text-black font-bold text-xl glow-lime"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {lecture.number}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-balance group-hover:text-[#c8ff00] transition-colors">
                      Лекція {lecture.number}. {lecture.title}
                    </h3>

                    <div className="space-y-3 mb-6">
                      {lecture.points.map((point, idx) => (
                        <div key={idx} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#c8ff00] flex-shrink-0 mt-0.5" />
                          <p className="text-white/60 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>

                    {/* Bonus material */}
                    <div className="flex items-start gap-3 bg-[#c8ff00]/5 border border-[#c8ff00]/10 rounded-xl p-4">
                      <FileText className="w-5 h-5 text-[#c8ff00] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-[#c8ff00]">Додатково:</p>
                        <p className="text-sm text-white/50">{lecture.bonus}</p>
                      </div>
                    </div>

                    {/* Bonus offer for last lecture */}
                    {lecture.isFinal && (
                      <div className="flex items-start gap-3 bg-[#00ffc8]/5 border border-[#00ffc8]/10 rounded-xl p-4 mt-4">
                        <Gift className="w-5 h-5 text-[#00ffc8] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-[#00ffc8]">Бонус:</p>
                          <p className="text-sm text-white/50">20% знижка на індивідуальну онлайн-консультацію</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Course info */}
        <motion.div
          className="mt-16 relative rounded-2xl p-8 md:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-2xl gradient-border" />
          <div className="absolute inset-[1px] rounded-2xl bg-[#141414]" />
          
          <div className="relative z-10 flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-[#c8ff00] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Як це працює?</h3>
              <p className="text-white/60 leading-relaxed">
                Всі ми живі люди, які люблять смачно поїсти, випити кави та розслабитися після важкого дня алкоголем. Це завжди приємно, але часто після цього ми відчуваємо докори совісті. Ми розуміємо, як важко відмовитись від маленьких радощів життя. Тому, базуючись на наукових дослідженнях, ми розкажемо вам, як нейтралізувати шкоду та зберегти звичний спосіб життя без відчуття провини.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
