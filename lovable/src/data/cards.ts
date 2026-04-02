export interface AnatomyCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const ANATOMY_CARDS: AnatomyCard[] = [
  {
    id: 1,
    title: "Articulacion de la rodilla",
    description:
      "Une femur, tibia y rotula. Permite flexion y extension, y tiene rotacion limitada cuando esta flexionada.",
    image: "assets/images/meme1.jpg",
  },
  {
    id: 2,
    title: "Articulacion del hombro",
    description:
      "La glenohumeral ofrece gran rango de movimiento. Su estabilidad depende de ligamentos, capsula y manguito rotador.",
    image: "assets/images/meme2.jpg",
  },
  {
    id: 3,
    title: "Articulacion de la cadera",
    description:
      "Relacion entre acetabulo y cabeza del femur. Es estable para carga y locomocion, con movilidad en varios planos.",
    image: "assets/images/meme3.jpg",
  },
];
