import { GoogleGenAI } from "@google/genai"
import * as fs from "fs"
import * as path from "path"

const MODEL = "gemini-3.1-flash-image-preview"
const OUTPUT_DIR = path.resolve("public/dishes")

const PROMPT_TEMPLATE = `A warm overhead top-down food photo of {dish_name} ({chinese_name}),
homemade Chinese dish, served on a simple ceramic plate on a wooden table,
natural soft window light from the side, warm amber tones,
cozy and inviting aesthetic, the dish fills the frame,
shallow depth of field focusing on the food, high resolution,
minimalist presentation, steam or fresh garnishes visible,
no text, no watermark, no chopsticks, no hands`

async function generateImage(filename: string, englishName: string, chineseName: string): Promise<void> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) throw new Error("GEMINI_API_KEY env var is required")

  const ai = new GoogleGenAI({ apiKey })
  const prompt = PROMPT_TEMPLATE.replace("{dish_name}", englishName).replace("{chinese_name}", chineseName)

  console.log(`\nGenerating: ${chineseName} → ${filename}.jpg`)
  console.log(`Prompt: ${prompt.slice(0, 150)}...`)

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: { parts: [{ text: prompt }] },
    config: {
      responseModalities: ["IMAGE", "TEXT"],
    },
  })

  const parts = response.candidates?.[0]?.content?.parts ?? []
  const textResponse = parts.filter(p => p.text).map(p => p.text).join(" ")
  if (textResponse) console.log(`  Model text: ${textResponse.slice(0, 100)}`)

  for (const part of parts) {
    if (part.inlineData) {
      const ext = part.inlineData.mimeType?.includes("png") ? "png" : "jpg"
      const filepath = path.join(OUTPUT_DIR, `${filename}.${ext}`)
      const buffer = Buffer.from(part.inlineData.data!, "base64")
      fs.writeFileSync(filepath, buffer)
      console.log(`  Saved: ${filepath} (${buffer.length} bytes)`)
      return
    }
  }

  console.log("  No image data in response parts")
  throw new Error("No image generated")
}

async function main() {
  const args = process.argv.slice(2)
  if (args.length < 2) {
    console.log("Usage: npx tsx scripts/generate-images.ts <filename> <english-name> [chinese-name]")
    console.log("Example: npx tsx scripts/generate-images.ts tomato-egg 'tomato egg stir fry' 番茄炒蛋")
    process.exit(1)
  }

  const [filename, englishName, chineseName = ""] = args

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  await generateImage(filename, englishName, chineseName)
}

main().catch((err) => {
  console.error("Error:", err.message)
  process.exit(1)
})
