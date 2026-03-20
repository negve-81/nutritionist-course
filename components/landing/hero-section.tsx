"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Coffee, Wine, Candy, Cigarette, Salad, ArrowDown, Play, User, Mail, Phone, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useRef } from "react"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const floatingBadges = [
  { icon: Coffee, label: "Кава", delay: 0.3, position: "top-[60%] -left-4 md:-left-12" },
  { icon: Wine, label: "Алкоголь", delay: 0.5, position: "top-[40%] -right-4 md:-right-12" },
  { icon: Candy, label: "Солодке", delay: 0.7, position: "bottom-16 left-8 md:left-12" },
]

const topics = [
  { icon: Coffee, label: "Кава" },
  { icon: Wine, label: "Алкоголь" },
  { icon: Cigarette, label: "Куріння" },
  { icon: Candy, label: "Солодке" },
  { icon: Salad, label: "Сіль" },
]

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 noise-bg">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#c8ff00]/10 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00ffc8]/8 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-sm font-medium text-white/90 mb-8"
            >
              <span className="w-2 h-2 bg-[#c8ff00] rounded-full animate-pulse" />
              Онлайн-курс від клінічного нутриціолога
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
            >
              <span className="font-light text-white/80">Як із</span>{" "}
              <span className="gradient-text">шкідливого</span>
              <br />
              <span className="font-light text-white/80">зробити</span>{" "}
              <span className="relative">
                корисне
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#c8ff00]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed"
            >
              Не можеш кинути каву, алкоголь чи солодке? <span className="font-semibold text-[#c8ff00]">Не треба!</span> Просто навчися нейтралізувати їх дію.
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-base text-white/50 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              5 простих методик від клінічного нутриціолога, як не шкодити собі своїми звичками й отримувати задоволення без почуття провини.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-[#c8ff00] hover:bg-[#c8ff00]/90 text-black px-8 py-7 text-lg font-semibold rounded-full glow-lime transition-all duration-500 hover:scale-105 hover:glow-lime-strong group"
                onClick={() => setOpen(true)}
              >
                Почати трансформацію
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 hover:border-[#c8ff00]/50 px-8 py-7 text-lg rounded-full transition-all duration-300 group"
                asChild
              >
                <a href="https://www.instagram.com/reels/DHGzRB1NKDO/" target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 mr-2 group-hover:text-[#c8ff00] transition-colors" />
                  Дивитись трейлер
                </a>
              </Button>
            </motion.div>

            {/* Course format */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <div className="glass rounded-2xl p-5 max-w-xl mx-auto lg:mx-0">
                <p className="text-sm font-medium text-white/70 mb-4">5 відео по 10 хвилин у зручний для тебе час:</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {topics.map((topic, index) => (
                    <motion.div 
                      key={topic.label} 
                      className="inline-flex items-center gap-2 bg-white/5 hover:bg-[#c8ff00]/10 px-4 py-2 rounded-full text-sm text-white/80 border border-white/10 hover:border-[#c8ff00]/30 transition-all duration-300 cursor-pointer group"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <topic.icon className="w-4 h-4 text-[#c8ff00] group-hover:scale-110 transition-transform" />
                      {topic.label}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-6 mt-8 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8ff00]/30 to-[#00ffc8]/20 border-2 border-[#0a0a0a] flex items-center justify-center text-xs font-medium text-white/80"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">2,500+ студентів</p>
                <p className="text-sm text-white/50">Змінили свої звички</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with floating badges */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#c8ff00]/20 to-[#00ffc8]/10 rounded-3xl blur-2xl" />
              
              {/* Main image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="/hero-specialist.jpg"
                  alt="Клінічний нутриціолог - Експерт з нейтралізації шкідливих звичок"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <motion.div 
                className="absolute -inset-1 rounded-3xl border border-[#c8ff00]/20 -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Floating glassmorphism badges */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className={`absolute ${badge.position} z-20`}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -8, 0],
                    scale: 1
                  }}
                  transition={{ 
                    opacity: { delay: badge.delay, duration: 0.8 },
                    y: { delay: badge.delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
                    scale: { delay: badge.delay, duration: 0.6 }
                  }}
                >
                  <div className="glass rounded-2xl p-4 flex items-center gap-3 hover:border-[#c8ff00]/30 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c8ff00]/20 to-[#c8ff00]/5 flex items-center justify-center border border-[#c8ff00]/20 group-hover:border-[#c8ff00]/50 transition-colors">
                      <badge.icon className="w-6 h-6 text-[#c8ff00]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{badge.label}</p>
                      <p className="text-xs text-white/50">Навчись нейтралізувати</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-xs text-white/40 uppercase tracking-widest group-hover:text-[#c8ff00] transition-colors">Scroll</span>
          <ArrowDown className="w-5 h-5 text-white/40 group-hover:text-[#c8ff00] transition-colors" />
        </motion.div>
      </motion.div>

      {/* Contact Form Modal */}
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
                    Почати трансформацію
                  </DialogTitle>
                  <DialogDescription className="text-white/50 text-center text-sm mt-1">
                    Залиште свої дані — ми зв{"'"}яжемося з вами для консультації
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
                    "Відправити заявку"
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
    </section>
  )
}
