"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Shield, User, Mail, Phone, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const benefits = [
  "5 комплексних відео-модулів",
  "Завантажувані гайди з нейтралізації",
  "Доступ до приватної спільноти",
  "Щотижневі живі Q&A сесії",
  "Довічні оновлення включено",
  "30-денна гарантія повернення коштів",
]

export function CTASection() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSuccess(true)
  }

  function handleOpenChange(val: boolean) {
    setOpen(val)
    if (!val) {
      setTimeout(() => {
        setSuccess(false)
        setForm({ name: "", email: "", phone: "" })
      }, 300)
    }
  }

  return (
    <>
      <section className="py-28 px-4 bg-[#0f0f0f] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-[#c8ff00]/5 rounded-full blur-[150px]"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-[#00ffc8]/5 rounded-full blur-[120px]"
            animate={{ 
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full text-sm font-medium text-[#c8ff00] mb-8"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8ff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8ff00]"></span>
              </span>
              Обмежена пропозиція — Реєструйтесь зараз
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Готові трансформувати своє{" "}
              <span className="gradient-text">ставлення</span> до{" "}
              <span className="text-[#c8ff00]">звичок</span>?
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Приєднуйтесь до науково обґрунтованої програми, яка допомагає успішним людям 
              оптимізувати здоров{"'"}я без відмови від улюбленого способу життя.
            </p>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            className="relative rounded-3xl p-8 md:p-12 max-w-2xl mx-auto overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl gradient-border" />
            <div className="absolute inset-[1px] rounded-3xl bg-[#141414]" />
            
            {/* Glow effect */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#c8ff00]/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <p className="text-sm text-white/50 mb-3 uppercase tracking-wider">Повний доступ до курсу</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-white/40 line-through">799 грн</span>
                  <span className="text-5xl md:text-6xl font-bold text-white">299 <span className="text-2xl text-white/60">грн</span></span>
                </div>
                <p className="text-sm text-[#c8ff00] font-medium">Економія 500 грн — Пропозиція скоро закінчиться</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#c8ff00]" />
                    </div>
                    <span className="text-sm text-white/70">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full bg-[#c8ff00] hover:bg-[#c8ff00]/90 text-black py-7 text-lg font-semibold rounded-full glow-lime transition-all duration-500 hover:scale-[1.02] hover:glow-lime-strong group"
                onClick={() => setOpen(true)}
              >
                Записатись та почати сьогодні
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>

              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-white/40">
                <Shield className="w-4 h-4" />
                <span>30-денна гарантія повернення коштів — без зайвих питань</span>
              </div>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="flex items-center gap-2 hover:text-[#c8ff00] transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Безпечна оплата
            </span>
            <span className="flex items-center gap-2 hover:text-[#c8ff00] transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Рейтинг 4.9/5
            </span>
            <span className="flex items-center gap-2 hover:text-[#c8ff00] transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              2,500+ студентів
            </span>
          </motion.div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">
          {success ? (
            <motion.div
              className="flex flex-col items-center justify-center py-14 px-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-20 h-20 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-[#c8ff00]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Дякуємо!</h3>
              <p className="text-white/60 leading-relaxed">
                Ваша заявка прийнята. Ми зв{"'"}яжемося з вами найближчим часом і надішлемо деталі на вказану пошту.
              </p>
              <Button
                className="mt-8 bg-[#c8ff00] hover:bg-[#c8ff00]/90 text-black rounded-full px-8 font-semibold"
                onClick={() => handleOpenChange(false)}
              >
                Закрити
              </Button>
            </motion.div>
          ) : (
            <>
              <div className="bg-gradient-to-br from-[#1f1f1f] to-[#141414] px-8 pt-8 pb-6 border-b border-white/10">
                <DialogHeader>
                  <DialogTitle className="text-white text-xl font-bold text-center">
                    Записатись на курс
                  </DialogTitle>
                  <DialogDescription className="text-white/50 text-center text-sm mt-1">
                    Залиште свої дані — ми зв{"'"}яжемося з вами для підтвердження
                  </DialogDescription>
                </DialogHeader>
              </div>

              <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4 bg-[#141414]">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    name="name"
                    placeholder="Ваше ім'я"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="pl-10 h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:border-[#c8ff00]/50 focus-visible:ring-[#c8ff00]/20"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="pl-10 h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:border-[#c8ff00]/50 focus-visible:ring-[#c8ff00]/20"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Номер телефону"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="pl-10 h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:border-[#c8ff00]/50 focus-visible:ring-[#c8ff00]/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#c8ff00] hover:bg-[#c8ff00]/90 text-black rounded-full text-base font-semibold glow-lime transition-all duration-500 hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 mt-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Відправляємо...
                    </>
                  ) : (
                    "Записатись"
                  )}
                </Button>

                <p className="text-xs text-center text-white/30 leading-relaxed">
                  Натискаючи кнопку, ви погоджуєтесь з умовами використання та політикою конфіденційності
                </p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
