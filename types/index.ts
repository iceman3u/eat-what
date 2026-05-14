export interface Dish {
  id: string
  name: string
  emoji: string
  image: string
  difficulty: "简单" | "中等" | "困难"
  time: string
  calories: string
  price: string
  category: string
}

export interface Step {
  id: string
  dishId: string
  stepNumber: number
  content: string
}
