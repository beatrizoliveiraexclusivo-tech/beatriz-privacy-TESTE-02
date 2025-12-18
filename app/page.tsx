"use client"

import { Instagram, ImageIcon, Lock, Heart, ChevronUp, Globe, X, MessageCircle, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export default function ProfilePage() {
  const [showFullBio, setShowFullBio] = useState(false)
  const [promotionsOpen, setPromotionsOpen] = useState(true)
  const [activeTab, setActiveTab] = useState<"posts" | "media">("posts")
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null)

  const openCheckout = (url: string) => {
    setCheckoutUrl(url)
  }

  const closeCheckout = () => {
    setCheckoutUrl(null)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {checkoutUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
            <button
              onClick={closeCheckout}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-200 animate-in zoom-in-50 delay-300"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#FF8C5A] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium">Carregando checkout...</p>
              </div>
            </div>
            <iframe
              src={checkoutUrl}
              className="w-full h-full border-0 relative z-10 bg-white"
              title="Checkout"
              allow="payment"
              onLoad={(e) => {
                const loadingDiv = e.currentTarget.previousElementSibling as HTMLElement
                if (loadingDiv) {
                  loadingDiv.style.display = "none"
                }
              }}
            />
          </div>
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-5xl">
          <div className="flex-1"></div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center">
            <span className="text-black">privacy</span>
            <span className="text-[#FF8C5A] ml-0.5">.</span>
          </h1>
          <div className="flex-1 flex justify-end">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Globe className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="w-full max-w-5xl mx-auto px-4 pt-6">
          <Card className="bg-white rounded-3xl shadow-sm border-0 overflow-hidden p-0">
            {/* Cover Image com Stats */}
            <div className="relative">
              <div className="w-full h-72 bg-gradient-to-br from-orange-200 via-pink-200 to-orange-100">
                <img src="/images/previa-204.jpg" alt="Cover" className="w-full h-full object-cover" />
              </div>

              <div className="absolute top-4 right-6 flex items-center gap-4 text-white text-sm drop-shadow-lg">
                <div className="flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4" />
                  <span className="font-medium">87</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4" />
                  <span className="font-medium">105</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  <span className="font-medium">8</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 fill-white" />
                  <span className="font-medium">9.5K</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-6 transform translate-y-1/2">
                <div className="w-28 h-28 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                  <img src="/images/previa3.jpg" alt="Beatriz oliveira" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="px-6 pt-16 pb-6">
              {/* Badge verificado estilo Instagram */}
              <div className="flex items-center gap-2 mb-0.5">
                <h2 className="text-2xl font-bold text-black">Beatriz oliveira</h2>
                <svg className="w-6 h-6 drop-shadow-md" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="verifiedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4A9FF5" />
                      <stop offset="100%" stopColor="#1877F2" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="11" fill="url(#verifiedGradient)" />
                  <circle cx="12" cy="12" r="11" fill="url(#verifiedGradient)" opacity="0.2" />
                  <path
                    d="M10.5 15.25L6.75 11.5L8 10.25L10.5 12.75L16 7.25L17.25 8.5L10.5 15.25Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-base mb-3">@beatrizlima</p>

              <div className="text-gray-800 text-base leading-relaxed mb-1">
                <p className={showFullBio ? "" : "line-clamp-2"}>
                  Novinha, peituda 😏 e cheia de vontade de te deixar maluco. Adoro provocar e te deixar duro só com um
                  olhar 👀 Tenho carinha de anjo 😇, mas a mente mais safadinha que você vai encontrar. Se tá pronto pra
                  brincar, é só chegar bem perto 🔥
                </p>
              </div>
              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="text-[#FF8C5A] text-base font-medium hover:underline mb-4"
              >
                {showFullBio ? "Ler menos" : "Ler mais"}
              </button>

              <div className="flex gap-3 mb-6">
                <a
                  href="https://www.instagram.com/beatriz_oliveira.sx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>

              {/* Assinaturas */}
              <div className="mb-4">
                <h3 className="text-base font-semibold text-black mb-3">Assinaturas</h3>
                <div className="relative">
                  <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] md:text-xs font-bold px-2 md:px-4 py-0.5 md:py-1 rounded-full shadow-lg animate-pulse whitespace-nowrap">
                      🔥 OFERTA ESPECIAL
                    </div>
                  </div>
                  <Button
                    onClick={() =>
                      (window.location.href =
                        "https://app.pushinpay.com.br/service/pay/A039FDBC-B645-4A1E-8E8C-E0CA1D113497")
                    }
                    className="w-full h-14 md:h-16 rounded-full bg-gradient-to-r from-[#FF9B6A] via-[#FF8C5A] to-[#FF7B5A] hover:from-[#FF8C5A] hover:via-[#FF7B5A] hover:to-[#FF6B4A] text-black font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-300 flex items-center justify-between px-4 md:px-6 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-shimmer"></div>
                    <span className="relative z-10 text-sm md:text-base">1 mês</span>
                    <span className="relative z-10 text-lg md:text-xl font-extrabold">R$ 18,97</span>
                  </Button>
                  <div className="mt-3 bg-gradient-to-r from-[#FFF4E6] to-[#FFE8D6] rounded-2xl p-4 border border-[#FFB399] border-opacity-60 shadow-sm">
                    <div className="text-center space-y-1">
                      <div className="text-3xl mb-1">🎁</div>
                      <h4 className="text-[#FF8C5A] font-bold text-sm">Bônus Exclusivo</h4>
                      <p className="text-gray-800 text-sm leading-relaxed">🔶 Inclui uma video chamada comigo!</p>
                      <div className="flex items-center justify-center gap-1.5 mt-2 pt-2 border-t border-[#FFB399] border-opacity-40">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <p className="text-gray-800 text-sm font-medium">Meu contato no WhatsApp pessoal !!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setPromotionsOpen(!promotionsOpen)}
                  className="w-full flex items-center justify-between text-base font-semibold text-black mb-3"
                >
                  <span>Promoções</span>
                  <ChevronUp className={`w-5 h-5 transition-transform ${promotionsOpen ? "" : "rotate-180"}`} />
                </button>
                {promotionsOpen && (
                  <div className="space-y-3">
                    <Button
                      onClick={() =>
                        (window.location.href =
                          "https://app.pushinpay.com.br/service/pay/A039FEBC-D659-46FF-BA6C-1637461E637D")
                      }
                      className="w-full h-14 rounded-full bg-gradient-to-r from-[#FF9B6A] to-[#FF7B5A] hover:from-[#FF8C5A] hover:to-[#FF6B4A] text-black font-semibold text-base shadow-sm border-0 flex items-center justify-between px-6"
                    >
                      <span>3 meses</span>
                      <span>R$ 39,97</span>
                    </Button>
                    <Button
                      onClick={() =>
                        (window.location.href =
                          "https://app.pushinpay.com.br/service/pay/A039FF02-95A1-4495-850A-3026FB01E2D0")
                      }
                      className="w-full h-14 rounded-full bg-gradient-to-r from-[#FF9B6A] to-[#FF7B5A] hover:from-[#FF8C5A] hover:to-[#FF6B4A] text-black font-semibold text-base shadow-sm border-0 flex items-center justify-between px-6"
                    >
                      <span>6 meses (20% off )</span>
                      <span>R$ 59,90</span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        <div className="w-full max-w-5xl mx-auto px-4 mt-4">
          <Card className="bg-white rounded-3xl shadow-sm border-0 p-0 overflow-hidden">
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setActiveTab("posts")}
                className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                  activeTab === "posts" ? "text-[#FF8C5A]" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <span>153 Postagens</span>
                </div>
                {activeTab === "posts" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8C5A]" />}
              </button>
              <button
                onClick={() => setActiveTab("media")}
                className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                  activeTab === "media" ? "text-[#FF8C5A]" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  <span>192 Mídias</span>
                </div>
                {activeTab === "media" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8C5A]" />}
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="/images/previa3.jpg"
                    alt="Beatriz oliveira"
                    className="object-cover object-center"
                  />
                  <AvatarFallback>BO</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  {/* Badge verificado estilo Instagram */}
                  <div className="flex items-center gap-1.5">
                    <p className="font-semibold text-sm text-black">Beatriz oliveira</p>
                    <svg className="w-4 h-4 drop-shadow-sm" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="verifiedGradientSmall" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4A9FF5" />
                          <stop offset="100%" stopColor="#1877F2" />
                        </linearGradient>
                      </defs>
                      <circle cx="12" cy="12" r="11" fill="url(#verifiedGradientSmall)" />
                      <path
                        d="M10.5 15.25L6.75 11.5L8 10.25L10.5 12.75L16 7.25L17.25 8.5L10.5 15.25Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500">@beatrizlima</p>
                </div>
                <button className="p-1">
                  <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                  </svg>
                </button>
              </div>

              {/* Locked Content */}
              <div className="bg-[#FAF9F8] rounded-2xl p-16 flex flex-col items-center justify-center min-h-[320px]">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-6">
                  <Lock className="w-10 h-10 text-gray-400" />
                </div>
                <div className="flex items-center gap-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4" />
                    <span>87</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4" />
                    <span>105</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4" />
                    <span>9.5K</span>
                  </div>
                </div>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </button>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Bookmark className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="h-12"></div>
      </main>
    </div>
  )
}
