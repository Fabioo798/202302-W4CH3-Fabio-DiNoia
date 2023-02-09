import { CardStructure } from "../model/card";

export const MOCK_CARDS: CardStructure[] = [
  {
    name: "Joffrey",
    family: "Baratheon",
    age: 12,
    isLive: true,
    throneYears: 1,
    sentence: "vais a morir todos",
    picture: "media/joffrey.jpg",
  },
  {
    name: "Jaime",
    family: "Lannister",
    age: 25,
    isLive: true,
    weapon: "sword",
    dexterity: 9,
    sentence: "Primero pego y luego pregunto",
    picture: "media/jaime.jpg",
  },
  {
    name: "Daenerys",
    family: "Targaryen",
    age: 20,
    isLive: true,
    weapon: "Drakaris",
    dexterity: 5,
    sentence: "Primero pego y luego pregunto",
    picture: "media/daenerys.jpg",
  },
  {
    name: "Tyron",
    family: "Lannister",
    age: 30,
    isLive: true,
    advisor: "Daenerys",
    sentence: "No sé por qué, pero creo que voy a morir pronto",
    picture: "media/tyrion.jpg",
  },
  {
    name: "Bronn",
    family: "HighTower",
    age: 35,
    isLive: true,
    servant: "Jaime",
    grade: 8,
    sentence: "Soy un loser",
    picture: "media/bronn.jpg",
  },
];