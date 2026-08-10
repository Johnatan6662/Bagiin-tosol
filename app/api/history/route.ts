import OpenAI from "openai"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { question } = await req.json()

  const response = await client.chat.completions.create({
    model: "gpt-5-mini",

    messages: [
      {
        role: "system",

        content: `
        Чи Монголын түүхийн
        мэргэжилтэн.
        Чингис хааны тухай
        монгол хэлээр хариул.
        `,
      },

      {
        role: "user",

        content: question,
      },
    ],
  })

  return Response.json({
    answer: response.choices[0].message.content,
  })
}
