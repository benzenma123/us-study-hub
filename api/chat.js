const PROVIDERS = {
  openai: {
    url: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-4o-mini',
  },
  groq: {
    url: 'https://api.groq.com/openai/v1/chat/completions',
    model: 'llama-3.3-70b-versatile',
  },
  together: {
    url: 'https://api.together.xyz/v1/chat/completions',
    model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messages } = req.body
  const apiKey = process.env.AI_API_KEY
  const providerName = (process.env.AI_PROVIDER || 'groq').toLowerCase()
  const provider = PROVIDERS[providerName] || PROVIDERS.groq
  const model = process.env.AI_MODEL || provider.model

  if (!apiKey) {
    return res.status(500).json({
      error: 'Missing AI_API_KEY. Set it in Vercel dashboard → Settings → Environment Variables.\n\n'
        + 'Providers:\n'
        + '  • Groq (free): console.groq.com → API Keys → set AI_PROVIDER=groq\n'
        + '  • OpenAI: platform.openai.com → API Keys → set AI_PROVIDER=openai\n'
        + '  • Together AI: api.together.xyz → API Keys → set AI_PROVIDER=together',
    })
  }

  try {
    const response = await fetch(provider.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: messages || [],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error(`${providerName} API error:`, response.status, errText)
      return res.status(response.status).json({ error: `${providerName} API error: ${response.statusText}` })
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    console.error('Chat API error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
}
