import { PrismaClient } from "@prisma/client"
import { dishes, steps } from "../lib/dishes"

const prisma = new PrismaClient()

function parseNumber(s: string): number {
  return parseInt(s.replace(/[^0-9]/g, ""), 10)
}

async function main() {
  console.log(`Seeding ${dishes.length} dishes...`)

  for (const dish of dishes) {
    await prisma.dish.upsert({
      where: { id: dish.id },
      update: {
        name: dish.name,
        emoji: dish.emoji,
        image: dish.image,
        difficulty: dish.difficulty,
        timeMin: parseNumber(dish.time),
        calories: parseNumber(dish.calories),
        price: parseNumber(dish.price),
        category: dish.category,
      },
      create: {
        id: dish.id,
        name: dish.name,
        emoji: dish.emoji,
        image: dish.image,
        difficulty: dish.difficulty,
        timeMin: parseNumber(dish.time),
        calories: parseNumber(dish.calories),
        price: parseNumber(dish.price),
        category: dish.category,
      },
    })

    const dishSteps = steps[dish.id] ?? []
    for (const step of dishSteps) {
      await prisma.step.upsert({
        where: { id: step.id },
        update: {
          dishId: step.dishId,
          stepNumber: step.stepNumber,
          content: step.content,
        },
        create: {
          id: step.id,
          dishId: step.dishId,
          stepNumber: step.stepNumber,
          content: step.content,
        },
      })
    }
  }

  const dishCount = await prisma.dish.count()
  const stepCount = await prisma.step.count()
  console.log(`Seed complete: ${dishCount} dishes, ${stepCount} steps`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
