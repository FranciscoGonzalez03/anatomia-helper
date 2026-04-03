import { useState } from "react";
import type { AnatomyCard } from "@/data/cards";

interface FlashCardProps {
  card: AnatomyCard;
  onNext: () => void;
}

const FlashCard = ({ card, onNext }: FlashCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleClick = () => {
    if (!flipped) {
      setFlipped(true);
    } else {
      setFlipped(false);
      // Small delay so flip-back animation starts before next card renders
      setTimeout(onNext, 150);
    }
  };

  // Reset state when card changes
  const [prevId, setPrevId] = useState(card.id);
  if (card.id !== prevId) {
    setPrevId(card.id);
    setFlipped(false);
    setImgError(false);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="perspective-1200 w-full max-w-[430px] cursor-pointer border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      style={{ aspectRatio: "3/4" }}
      aria-label={flipped ? "Tap para siguiente" : "Tap para revelar"}
    >
      <div
        className={`preserve-3d card-flip-transition relative h-full w-full ${
          flipped ? "card-flipped" : ""
        }`}
      >
        {/* Front */}
        <div className="backface-hidden absolute inset-0 overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
          <div className="grid h-full grid-rows-[1fr_auto]">
            {imgError ? (
              <div className="flex items-center justify-center bg-muted">
                <span className="text-sm font-semibold text-muted-foreground">
                  Imagen no disponible
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center bg-muted/35 p-3">
                <img
                  src={card.image}
                  alt="Imagen anatómica"
                  className="h-full w-full object-contain object-center"
                  draggable={false}
                  onError={() => setImgError(true)}
                />
              </div>
            )}
            <span className="animate-hint-pulse py-3 text-center text-sm font-bold text-muted-foreground">
              Tap para revelar
            </span>
          </div>
        </div>

        {/* Back */}
        <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col gap-3 overflow-hidden rounded-2xl bg-card-back p-6 shadow-[var(--shadow-card)]">
          <div className="flex-1" />
          <span className="self-start rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-card-back-foreground">
            Respuesta
          </span>
          <h2
            className="text-2xl font-extrabold leading-tight text-card-back-foreground md:text-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {card.title}
          </h2>
          <p
            className="text-base leading-relaxed text-card-back-foreground/85 md:text-lg"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {card.description}
          </p>
          <div className="mt-auto" />
          <span className="animate-hint-pulse rounded-b-2xl py-3 text-center text-sm font-bold text-card-back-foreground/70">
            Tap para siguiente
          </span>
        </div>
      </div>
    </button>
  );
};

export default FlashCard;
