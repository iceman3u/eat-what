import type { Dish } from "@/types"

let lastDishId: string | null = null

export function getRandomDish(list: Dish[]): Dish {
  const pool = list.length > 1 ? list.filter((d) => d.id !== lastDishId) : list
  const pick = pool[Math.floor(Math.random() * pool.length)]
  lastDishId = pick.id
  return pick
}

export function pickRandomN(list: Dish[], n: number): Dish[] {
  const shuffled = [...list].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}
