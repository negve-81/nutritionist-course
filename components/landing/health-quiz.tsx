"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Coffee, Wine, Candy, ChevronRight, CheckCircle2, AlertCircle, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const questions = [
  {
    id: 1,
    question: "Як часто ви п'єте каву?",
    icon: Coffee,
    options: [
      { label: "Рідко", value: 1, icon: "☕" },
      { label: "1-2 чашки на день", value: 2, icon: "☕☕" },
      { label: "3-4 чашки на день", value: 3, icon: "☕☕☕" },
      { label: "5+ чашок на день", value: 4, icon: "☕☕☕☕" },
    ]
  },
  {
    id: 2,
    question: "Як би ви описали вашу тягу до солодкого?",
    icon: Candy,
    options: [
      { label: "Майже немає", value: 1, icon: "🍬" },
      { label: "Іноді ласощі", value: 2, icon: "🍬🍬" },
      { label: "Щодня солодке", value: 3, icon: "🍬🍬🍬" },
      { label: "Постійна тяга", value: 4, icon: "🍬🍬🍬🍬" },
    ]
  },
  {
    id: 3,
    question: "Як часто ви вживаєте алкоголь?",
    icon: Wine,
    options: [
      { label: "Рідко / Ніколи", value: 1, icon: "🍷" },
      { label: "На вихідних", value: 2, icon: "🍷🍷" },
      { label: "Кілька разів на тиждень", value: 3, icon: "🍷🍷🍷" },
      { label: "Щодня", value: 4, icon: "🍷🍷🍷🍷" },
    ]
  },
]

function getResultLevel(score: number): { level: string; color: string; message: string; percentage: number } {
  if (score <= 4) {
    return { level: "Низький", color: "#c8ff00", message: "Ваші звички відносно здорові, але оптимізація завжди можлива.", percentage: 25 }
  } else if (score <= 7) {
    return { level: "Помірний", color: "#00ffc8", message: "Деякі звички можуть впливати на вашу енергію та здоров'я. Курс допоможе.", percentage: 50 }
  } else if (score <= 10) {
    return { level: "Високий", color: "#ffc800", message: "Ваше тіло під значним стресом. Цей курс створений саме для вас.", percentage: 75 }
  }
  return { level: "Критичний", color: "#ff4444", message: "Потрібне термінове втручання. Почніть трансформацію сьогодні.", percentage: 95 }
}

export function HealthQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1)
      }, 300)
    } else {
      setTimeout(() => {
        setShowResults(true)
      }, 300)
    }
  }

  const totalScore = answers.reduce((sum, val) => sum + val, 0)
  const result = getResultLevel(totalScore)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setEmail("")
    setSubmitted(false)
  }

  return (
    <section className="py-28 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c8ff00]/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-5 py-2 glass rounded-full text-sm font-medium text-[#c8ff00] mb-6">
            Інтерактивна оцінка
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Дізнайтеся рівень <span className="gradient-text">навантаження на організм</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Пройдіть цю швидку 30-секундну оцінку, щоб зрозуміти, як ваші звички впливають на здоров'я.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl gradient-border" />
          <div className="absolute inset-[1px] rounded-3xl bg-[#141414]" />
          
          <div className="relative z-10">
            {/* Progress bar */}
            {!showResults && (
              <div className="h-1 bg-white/5">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#c8ff00] to-[#00ffc8]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!showResults ? (
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#c8ff00]/10 border border-[#c8ff00]/20 mb-4">
                        {(() => {
                          const IconComponent = questions[currentQuestion].icon
                          return <IconComponent className="w-8 h-8 text-[#c8ff00]" />
                        })()}
                      </div>
                      <p className="text-sm text-white/40 mb-2">
                        Питання {currentQuestion + 1} з {questions.length}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {questions[currentQuestion].question}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={option.label}
                          onClick={() => handleAnswer(option.value)}
                          className="group relative p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#c8ff00]/30 hover:bg-white/10 transition-all duration-300 text-center"
                          whileHover={{ scale: 1.02, y: -4 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="text-3xl mb-3 block">{option.icon}</span>
                          <span className="font-medium text-white block group-hover:text-[#c8ff00] transition-colors">{option.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    {!submitted ? (
                      <>
                        <div className="mb-10">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Рівень навантаження на організм
                          </h3>
                          
                          {/* Gauge visualization */}
                          <div className="relative w-48 h-48 mx-auto mb-6">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="rgba(255,255,255,0.05)"
                                strokeWidth="12"
                              />
                              <motion.circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke={result.color}
                                strokeWidth="12"
                                strokeLinecap="round"
                                strokeDasharray={`${result.percentage * 2.51} 251`}
                                initial={{ strokeDasharray: "0 251" }}
                                animate={{ strokeDasharray: `${result.percentage * 2.51} 251` }}
                                transition={{ duration: 1, delay: 0.3 }}
                                style={{ filter: `drop-shadow(0 0 10px ${result.color}50)` }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <span className="text-3xl font-bold text-white">{result.level}</span>
                              <span className="text-sm text-white/40">Рівень</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-center gap-2 mb-4">
                            {result.level === "Низький" ? (
                              <CheckCircle2 className="w-5 h-5 text-[#c8ff00]" />
                            ) : (
                              <AlertCircle className="w-5 h-5" style={{ color: result.color }} />
                            )}
                            <p className="text-white/60">{result.message}</p>
                          </div>
                        </div>

                        <div className="glass rounded-2xl p-6 mb-6">
                          <h4 className="font-semibold text-white mb-2">
                            Отримайте персоналізований PDF з нейтралізації
                          </h4>
                          <p className="text-sm text-white/50 mb-4">
                            Введіть email, щоб отримати індивідуальний гайд на основі вашої оцінки.
                          </p>
                          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                              <Input
                                type="email"
                                placeholder="ваш@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-12 py-6 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:border-[#c8ff00]/50 focus-visible:ring-[#c8ff00]/20"
                                required
                              />
                            </div>
                            <Button 
                              type="submit"
                              className="bg-[#c8ff00] hover:bg-[#c8ff00]/90 text-black px-8 py-6 rounded-full flex items-center gap-2 glow-lime font-semibold"
                            >
                              Отримати PDF
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </form>
                        </div>

                        <button 
                          onClick={resetQuiz}
                          className="text-sm text-white/40 hover:text-[#c8ff00] transition-colors"
                        >
                          Пройти тест знову
                        </button>
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-8"
                      >
                        <div className="w-20 h-20 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/20 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-10 h-10 text-[#c8ff00]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Перевірте вашу пошту!
                        </h3>
                        <p className="text-white/60 mb-6">
                          Ваш персоналізований гайд з нейтралізації вже прямує на {email}
                        </p>
                        <Button 
                          className="bg-[#c8ff00] hover:bg-[#c8ff00]/90 text-black px-8 py-6 rounded-full font-semibold glow-lime"
                        >
                          Переглянути повний курс
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
