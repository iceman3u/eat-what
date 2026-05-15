import { NextRequest, NextResponse } from "next/server"
import { getDishes } from "@/services/dishService"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category") || undefined
  const difficulty = searchParams.get("difficulty") || undefined

  const dishes = await getDishes({ category, difficulty })
  return NextResponse.json(dishes)
}
