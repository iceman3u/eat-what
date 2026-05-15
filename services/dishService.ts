import { prisma } from "@/lib/prisma"
import type { Prisma } from "@prisma/client"

export async function getDishes(options?: {
  category?: string
  difficulty?: string
}) {
  const where: Prisma.DishWhereInput = {}
  if (options?.category) where.category = options.category
  if (options?.difficulty) where.difficulty = options.difficulty

  return prisma.dish.findMany({ where, orderBy: { id: "asc" } })
}

export async function getDishById(id: string) {
  return prisma.dish.findUnique({
    where: { id },
    include: { steps: { orderBy: { stepNumber: "asc" } } },
  })
}

export async function getRandomDish() {
  const count = await prisma.dish.count()
  if (count === 0) return null

  const skip = Math.floor(Math.random() * count)
  return prisma.dish.findFirst({
    skip,
    include: { steps: { orderBy: { stepNumber: "asc" } } },
  })
}
