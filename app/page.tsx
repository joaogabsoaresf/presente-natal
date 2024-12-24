'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Roulette from '@/components/roulette'
import ReactConfetti from 'react-confetti';

export default function ChristmasGift() {
  const [isOpen, setIsOpen] = useState(false)
  const [showRoulette, setShowRoulette] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowRoulette(true)
      }, 700) // Espera a animação do presente terminar
      return () => clearTimeout(timer)
    } else {
      setShowRoulette(false)
    }
  }, [isOpen])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-fixed p-4" style={{ backgroundImage: 'url(/images/background-natal.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="relative w-[366px] h-[445px]">
        {/* Lid */}
        <div
          className={`absolute top-0 w-full transition-all duration-700 ${
            isOpen ? 'translate-y-[-350px] rotate-x-180' : ''
          }`}
          style={{
            transformStyle: 'preserve-3d',
            zIndex: isOpen ? 0 : 2
          }}
        >
          {/* Top part with bow */}
          <svg width="366" height="172" viewBox="0 0 366 172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.847 92.3005H20.642C9.24173 92.3005 0 101.542 0 112.942V151.173C0 162.573 9.24173 171.815 20.642 171.815H344.847C356.248 171.815 365.489 162.573 365.489 151.173V112.942C365.489 101.542 356.248 92.3005 344.847 92.3005Z" fill="#F3703A"/>
            <path d="M216.558 92.3005H148.932V171.815H216.558V92.3005Z" fill="#D32F2F"/>
            <path d="M185.208 67.4242C185.208 67.4242 155.853 -20.6401 109.154 4.52116C62.4552 29.6824 64.3688 111.721 127.109 106.388C189.849 101.054 185.208 67.4242 185.208 67.4242Z" fill="#D32F2F"/>
            <path d="M190.582 67.4242C190.582 67.4242 219.978 -20.6401 266.677 4.52116C313.375 29.6824 311.462 111.762 248.722 106.306C185.981 100.85 190.582 67.4242 190.582 67.4242Z" fill="#D32F2F"/>
            <path d="M187.895 98.8962C203.118 98.8962 215.458 86.5556 215.458 71.3328C215.458 56.11 203.118 43.7695 187.895 43.7695C172.672 43.7695 160.332 56.11 160.332 71.3328C160.332 86.5556 172.672 98.8962 187.895 98.8962Z" fill="#AD1717"/>
          </svg>
        </div>

        {/* Box base */}
        <div className={`absolute bottom-0 w-full transition-all duration-700 ${
          isOpen ? 'translate-y-[350px]' : ''
        }`}>
          <svg width="366" height="273" viewBox="0 0 366 273" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M345.397 0H20.0923V272.743H345.397V0Z" fill="#FDB827"/>
            <path d="M216.537 0H148.911V272.743H216.537V0Z" fill="#AD1717"/>
          </svg>
        </div>
      </div>

      {showRoulette && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Roulette setShowConfetti={setShowConfetti} />
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`mt-8 bg-[#D32F2F] hover:bg-[#AD1717] text-white ${isOpen ? 'invisible' : ''}`}
      >
        {isOpen ? 'Fechar Presente' : 'Abrir Presente'}
      </Button>
      {showConfetti && <ReactConfetti />}
    </div>
  )
}

