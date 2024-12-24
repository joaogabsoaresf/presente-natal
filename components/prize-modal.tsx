import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from 'next/image';

interface PrizeModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const links = [
  {
    title: "Itinerário",
    url: "https://www.hoteis.com/trips/72060299071139/details/YWUwNTAzMzctN2NiNi02NjU5LWI4NDAtY2RiYjc5YzE2NTk1O2M0YTc0MmM4LWVhNGMtNDJlZi1hOGUzLWI2MjdiOGNhYTc4YV8wOzA/trip-itinerary.pdf"
  },
  {
    title: "Hotel",
    url: "https://www.hoteis.com/ho674282112/athos-hotel-teresopolis-brasil/?langid=1046"
  }
]

export function PrizeModal({ isOpen, setIsOpen }: PrizeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Parabéns! 🎉</DialogTitle>
          <DialogDescription>
            Você ganhou o prêmio misterioso! 🎁
          </DialogDescription>
        </DialogHeader>
        <div className="p-4 text-center mx-auto">
          <Image src="/images/viagem.png" alt="Prize" width={200} height={200} />
        </div>
        <p className="text-center text-lg">VOCÊS GANHARAM UM FINAL DE SEMANA EM TERESÓPOLIS</p>
        <p className="text-center text-lg">Para mais detalhes do seu presente, acesse os links abaixo:</p>
        <div className="flex justify-center flex-wrap gap-2">
          {links.map((link) => (
            <a key={link.title} target="_blank" href={link.url} className="text-blue-500">{link.title}</a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

