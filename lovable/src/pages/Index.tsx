import { useState, useCallback } from "react";
import FlashCard from "@/components/FlashCard";
import { ANATOMY_CARDS } from "@/data/cards";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Index = () => {
  const [deck, setDeck] = useState(() => shuffle(ANATOMY_CARDS));
  const [index, setIndex] = useState(0);

  const current = deck[index];
  const total = deck.length;

  const handleNext = useCallback(() => {
    setIndex((prev) => {
      if (prev >= total - 1) {
        setDeck(shuffle(ANATOMY_CARDS));
        return 0;
      }
      return prev + 1;
    });
  }, [total]);

  const handleReshuffle = () => {
    setDeck(shuffle(ANATOMY_CARDS));
    setIndex(0);
  };

  return (
    <div className="relative min-h-dvh overflow-hidden">
      {/* Background orbs */}
      <div
        className="bg-orb-1 pointer-events-none fixed -right-24 -top-20 h-80 w-80 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at center, hsl(18 75% 50% / 0.3), transparent)",
        }}
        aria-hidden
      />
      <div
        className="bg-orb-2 pointer-events-none fixed -bottom-24 -left-20 h-72 w-72 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle at center, hsl(205 70% 40% / 0.25), transparent)",
        }}
        aria-hidden
      />

      <main className="mx-auto grid min-h-dvh max-w-[520px] grid-rows-[auto_1fr_auto] gap-3 px-4 pb-6 pt-[max(14px,env(safe-area-inset-top))]">
        {/* Header */}
        <header className="animate-card-enter">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Estudio
          </p>
          <h1
            className="text-2xl font-extrabold leading-tight text-foreground md:text-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Anatomía Cards
          </h1>
          <p className="text-sm font-semibold text-muted-foreground">
            Card {Math.min(index + 1, total)} de {total}
          </p>
        </header>

        {/* Card */}
        <section className="grid place-items-center" aria-live="polite">
          <div className="animate-card-enter w-full max-w-[430px]" key={current.id}>
            <FlashCard card={current} onNext={handleNext} />
          </div>
        </section>

        {/* Footer */}
        <footer className="flex justify-center">
          <button
            type="button"
            onClick={handleReshuffle}
            className="rounded-xl border border-foreground/20 bg-foreground/10 px-4 py-2.5 text-sm font-bold text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/20"
          >
            🔀 Mezclar de nuevo
          </button>
        </footer>
      </main>
    </div>
  );
};

export default Index;
