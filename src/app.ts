// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  { id: 1, name: "Beni", sex: "male", age: 18, health: 80 },
  { id: 2, name: "Baba", sex: "female", age: 16, health: 90 },
  { id: 3, name: "Boszi", sex: "female", age: 17, health: 100 },
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  { id: 1, name: "Hiszti", wings: 2, wheels: 0, clan: "Bird" },
  { id: 2, name: "Bangyi", wings: 4, wheels: 2, clan: "Szitakötő" },
  { id: 3, name: "Szende", wings: 0, wheels: 4, clan: "Cat" },
];
