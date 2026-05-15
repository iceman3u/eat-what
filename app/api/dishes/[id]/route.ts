import { NextRequest, NextResponse } from "next/server"
import { getDishById } from "@/services/dishService"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const dish = await getDishById(id)

  if (!dish) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  return NextResponse.json(dish)
}
