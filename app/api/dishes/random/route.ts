import { NextResponse } from "next/server"
import { getRandomDish } from "@/services/dishService"

export async function GET() {
  const dish = await getRandomDish()

  if (!dish) {
    return NextResponse.json({ error: "No dishes available" }, { status: 404 })
  }

  return NextResponse.json(dish)
}
