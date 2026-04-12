export interface AnatomyCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const ANATOMY_CARDS: AnatomyCard[] = [
  {
    id: 1,
    title: "Sutura Lamboidea / Parietooccipital",
    description:
      "Es un complejo articular que une a ambos huesos parietales al hueso occipital. Es una articulacion de tipo sinartrosis, fibrosa sutura dentada, ubicada en la region posterior del craneo.",
    image: "assets/images/1. Sutura Lamboidea.jpg",
  },
  {
    id: 2,
    title: "Sutura Coronal / Frontonparietal",
    description:
      "Es un complejo articular que integra el hueso frontal con ambos huesos parietales. Es una articulacion de tipo sinartrosis, fibrosa sutura dentada, ubicada en el plano coronal/frontal en la region del vertex.",
    image: "assets/images/2. Sutura coronal.jpg",
  },
  {
    id: 3,
    title: "Sutura Sagital / Interparietal",
    description:
      "Es una articulacion que une a ambos huesos parietales, es de clasificacion sinartrosis, de tipo fibrosa sutura, ubicada en el vertex sobre el plano sagital medial.",
    image: "assets/images/3. Sutura Sagital.jpg",
  },
  {
    id: 4,
    title: "Articulacion Acromioclavicular",
    description:
      "Es una articulacion simple que une a la clavicula y el acromion de la escapula. Se clasifica como una diartrosis, sinovial plana. Permite realizar movimientos de desplazamiento.",
    image: "assets/images/4. Acromioclavicular.jpg",
  },
  {
    id: 5,
    title: "Articulacion Esternoclavicular",
    description:
      "Es una articulacion simple que une el miembro superior al tronco a traves de la clavicula y el esternon, con pequena superficie articular del 1er cartilago costal. Es de tipo sinovial y subtipo selar aunque sus movimientos son limitados.",
    image: "assets/images/5. Esternoclavicular.jpg",
  },
];
