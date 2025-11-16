'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart, Truck, Shield, Clock, Star, ChevronDown, MessageCircle, Instagram, Check } from 'lucide-react'

export default function SupplyLandingPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const testimonials = [
    {
      name: "Ana Costa",
      text: "Chegou em 3 dias aqui pra mim no RS, perfeito, original!",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Lucas Martins",
      text: "Preço muito mais barato que qualquer loja física.",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "João Ribeiro",
      text: "Pod muito saboroso, comprei 4 e já vou pedir mais.",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Vitória Gomes",
      text: "Entrega rápida e atendimento muito gente boa.",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Mateus Albuquerque",
      text: "Melhor custo benefício que já encontrei, recomendo demais!",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Camila Freitas",
      text: "Produto de qualidade, chegou bem embalado e rápido.",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Pedro Rocha",
      text: "Comprei pelo site e não me arrependo, muito bom!",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Mariana Almeida",
      text: "Atendimento nota 10, tiraram todas minhas dúvidas.",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Thiago Silva",
      text: "Já é minha terceira compra, sempre perfeito!",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Júlia Ramos",
      text: "Sabor incrível, duração excelente. Muito satisfeita!",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Rafael Santos",
      text: "Entrega super rápida pra SP, produto original mesmo.",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Beatriz Lima",
      text: "Preço justo e qualidade premium, adorei!",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Gabriel Souza",
      text: "Comprei 5 pods diferentes, todos maravilhosos.",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Larissa Oliveira",
      text: "Site confiável, rastreio funcionou perfeitamente.",
      photo: "/placeholder-avatar.jpg"
    },
    {
      name: "Felipe Carvalho",
      text: "Melhor loja de pods que já comprei, super indico!",
      photo: "/placeholder-avatar.jpg"
    }
  ]

  const faqs = [
    {
      question: "A entrega realmente chega em até 5 dias?",
      answer: "Sim! Trabalhamos com transportadoras rápidas e enviamos no mesmo dia para pedidos até 14h. A maioria das entregas chega entre 3-5 dias úteis."
    },
    {
      question: "Os pods são originais?",
      answer: "100% originais! Trabalhamos apenas com fornecedores oficiais e todos os produtos possuem garantia de autenticidade."
    },
    {
      question: "Vocês enviam para todo Brasil?",
      answer: "Sim, atendemos todos os estados brasileiros com frete calculado automaticamente no checkout."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Todos os produtos possuem garantia contra defeitos de fabricação. Se houver qualquer problema, trocamos ou reembolsamos."
    },
    {
      question: "É seguro comprar no site?",
      answer: "Totalmente seguro! Utilizamos criptografia SSL e processamento de pagamento seguro. Seus dados estão protegidos."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const scrollToWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank')
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Smoke Background Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4DD0E1] rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00BCD4] rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        {/* Logo */}
        <div className="relative z-10 mb-12 sm:mb-16">
          <img 
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/fee0ee71-349c-475e-8ecc-121019078092.png" 
            alt="SUPPLY Logo" 
            className="h-24 sm:h-32 md:h-40 w-auto drop-shadow-[0_0_25px_rgba(77,208,225,0.6)]"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#4DD0E1] to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(77,208,225,0.5)]">
              Os Melhores Pods do Brasil,
            </span>
            <br />
            <span className="text-[#4DD0E1] drop-shadow-[0_0_30px_rgba(77,208,225,0.8)]">
              Pelo Melhor Preço.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto">
            Entrega rápida para todo o Brasil – chegue na sua casa em até 5 dias.
          </p>

          <button 
            onClick={scrollToWhatsApp}
            className="group relative px-10 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#00BCD4] to-[#4DD0E1] text-black font-bold text-lg sm:text-xl rounded-2xl shadow-[0_0_40px_rgba(77,208,225,0.6)] hover:shadow-[0_0_60px_rgba(77,208,225,0.9)] transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#4DD0E1]" />
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <ShoppingCart className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Preço mais baixo",
                description: "do mercado"
              },
              {
                icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Pods originais",
                description: "qualidade premium"
              },
              {
                icon: <Truck className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Entrega ultra rápida",
                description: "3-5 dias"
              },
              {
                icon: <Clock className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Atendimento",
                description: "WhatsApp 24h"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-6 sm:p-8 rounded-3xl border border-[#4DD0E1]/20 hover:border-[#4DD0E1]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,208,225,0.3)] hover:scale-105"
              >
                <div className="text-[#4DD0E1] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-base sm:text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            <span className="bg-gradient-to-r from-[#4DD0E1] to-white bg-clip-text text-transparent">
              O Que Nossos Clientes Dizem
            </span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-8 sm:p-12 border border-[#4DD0E1]/30 shadow-[0_0_50px_rgba(77,208,225,0.2)]">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#4DD0E1] to-[#00BCD4] p-1">
                    <div className="w-full h-full rounded-full bg-[#1A1A1A] flex items-center justify-center text-3xl sm:text-4xl font-bold text-[#4DD0E1]">
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#4DD0E1] text-[#4DD0E1]" />
                    ))}
                  </div>
                  <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <p className="text-[#4DD0E1] font-bold text-lg">
                    {testimonials[activeTestimonial].name}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'w-8 bg-[#4DD0E1]' 
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#4DD0E1]/30 shadow-[0_0_50px_rgba(77,208,225,0.2)]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
              <span className="bg-gradient-to-r from-[#4DD0E1] to-white bg-clip-text text-transparent">
                Garantia & Segurança
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {[
                {
                  icon: <Shield className="w-12 h-12 sm:w-16 sm:h-16" />,
                  title: "Compra 100% Segura",
                  description: "Seus dados protegidos com criptografia SSL"
                },
                {
                  icon: <Truck className="w-12 h-12 sm:w-16 sm:h-16" />,
                  title: "Envio com Rastreio",
                  description: "Acompanhe seu pedido em tempo real"
                },
                {
                  icon: <Check className="w-12 h-12 sm:w-16 sm:h-16" />,
                  title: "Garantia Contra Defeitos",
                  description: "Troca ou reembolso garantido"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#4DD0E1]/20 to-[#00BCD4]/20 border border-[#4DD0E1]/40 mb-6 text-[#4DD0E1]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-base sm:text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            <span className="bg-gradient-to-r from-[#4DD0E1] to-white bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl border border-[#4DD0E1]/20 overflow-hidden hover:border-[#4DD0E1]/40 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-[#4DD0E1]/5 transition-colors duration-300"
                >
                  <span className="text-lg sm:text-xl font-bold text-white pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-[#4DD0E1] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-5 sm:pb-6 text-gray-400 text-base sm:text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#4DD0E1]/30 shadow-[0_0_50px_rgba(77,208,225,0.3)]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#4DD0E1] to-white bg-clip-text text-transparent">
                Pronto para Comprar?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato pelo WhatsApp agora e receba todas as informações sobre nossos produtos, preços e condições especiais!
            </p>
            <a 
              href="https://wa.me/5551995886039"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-10 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#00BCD4] to-[#4DD0E1] text-black font-bold text-lg sm:text-xl rounded-2xl shadow-[0_0_40px_rgba(77,208,225,0.6)] hover:shadow-[0_0_60px_rgba(77,208,225,0.9)] transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Chamar no WhatsApp
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-[#4DD0E1]/20 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Logo */}
            <div className="text-center md:text-left">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3eea9183-b649-4d87-bae3-cc8624c93b6f.jpg" 
                alt="SUPPLY Logo" 
                className="h-16 sm:h-20 w-auto mx-auto md:mx-0 mb-4 drop-shadow-[0_0_20px_rgba(77,208,225,0.4)]"
              />
              <p className="text-gray-400 text-sm sm:text-base">
                Os melhores pods do Brasil com entrega rápida e segura.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#4DD0E1]">Contato</h3>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-gray-400 hover:text-[#4DD0E1] transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp 24h</span>
                </a>
                <a 
                  href="https://www.instagram.com/supply.tdai?igsh=MThtMXZ2MWZhbDRybQ%3D%3D&utm_source=qr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-gray-400 hover:text-[#4DD0E1] transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@supply</span>
                </a>
              </div>
            </div>

            {/* Legal */}
            <div className="text-center md:text-right">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#4DD0E1]">Informações</h3>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <p>Política de Privacidade</p>
                <p>Termos de Uso</p>
                <p>Trocas e Devoluções</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#4DD0E1]/20 pt-8 text-center">
            <p className="text-gray-500 text-sm sm:text-base">
              © 2024 SUPPLY. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
