import React, { useCallback, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { PrizeModal } from './prize-modal';

const data = [
    { option: 'BMW 0KM 🚙', style: { backgroundColor: '#FF5733', textColor: '#FFF' } },
    { option: 'Jogo da Vida 🎲', style: { backgroundColor: '#33C4FF', textColor: '#FFF' } },
    { option: 'Tente De Novo 🔄', style: { backgroundColor: '#8E44AD', textColor: '#FFF' } },
    { option: 'Misterioso 🎁', style: { backgroundColor: '#28B463', textColor: '#FFF' } },
    { option: 'Nada :(', style: { backgroundColor: '#E74C3C', textColor: '#FFF' } },
    { option: 'R$1.000.000,00 💸', style: { backgroundColor: '#FFD700', textColor: '#000' } },
];

export default function Roulette({ setShowConfetti }: { setShowConfetti: (show: boolean) => void }) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [rightChoice, setRightChoice] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpinClick = () => {
    if (!mustSpin) {
      if (attempts === 0) {
        setPrizeNumber(2);
        setAttempts(1);
      } else {
        setPrizeNumber(3);
        setMustSpin(true);
        setTimeout(() => {
          setRightChoice(true);
        }, 12500); // Assuming the wheel takes 3 seconds to stop spinning
      }
      setMustSpin(true);
    }
  };

  const handleDiscoverPrize = useCallback(() => {
    setShowConfetti(true);
    setIsModalOpen(true);
    setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#333', marginBottom: '20px', backgroundColor: '#FFF' }} className='p-4 rounded-lg'>🎡 Descubra o presente! 🎉</h1>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          fontSize={18}
          textColors={data.map((item) => item.style.textColor)}
          backgroundColors={data.map((item) => item.style.backgroundColor)}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        {!rightChoice && (
          <button
            onClick={handleSpinClick}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#FF5733',
              color: '#FFF',
              fontSize: '18px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            GIRAR
          </button>
        )}
      {rightChoice && (
        <button
        onClick={handleDiscoverPrize}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: '#FFF',
            fontSize: '18px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          DESCOBRIR PRESENTE
        </button>
      )}
      </div>
      <PrizeModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}
