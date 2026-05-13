const FEEDS = [
  'https://studyinthestates.dhs.gov/taxonomy/term/117/feed',
  'https://www.ice.gov/rss/news',
  'https://travel.state.gov/_res/rss/Travel_Content.xml',
]

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  try {
    const results = await Promise.allSettled(
      FEEDS.map(async (url) => {
        const resp = await fetch(url, { signal: AbortSignal.timeout(8000) })
        const xml = await resp.text()
        const items = parseRss(xml)
        return items.slice(0, 5)
      })
    )

    const news = results
      .filter((r) => r.status === 'fulfilled')
      .flatMap((r) => r.value)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 12)

    res.status(200).json({ news, source: 'RSS feeds from DHS/ICE/Travel.state.gov' })
  } catch (err) {
    console.error('News API error:', err)
    res.status(200).json({
      news: [
        {
          title: 'Cập nhật: Quy định Visa F-1 2025-2026',
          link: 'https://studyinthestates.dhs.gov',
          date: new Date().toISOString(),
          source: 'DHS',
        },
        {
          title: 'OPT STEM Extension - Thông tin mới nhất',
          link: 'https://www.ice.gov/sevis',
          date: new Date().toISOString(),
          source: 'ICE',
        },
      ],
      source: 'Fallback data',
    })
  }
}

function parseRss(xml) {
  const items = []
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi
  let match
  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1]
    const title = extractTag(item, 'title')
    const link = extractTag(item, 'link')
    const desc = extractTag(item, 'description')
    const date = extractTag(item, 'pubDate') || extractTag(item, 'dc:date')
    if (title) {
      items.push({
        title: title.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim(),
        link: link || '',
        description: desc
          ? desc.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').replace(/<[^>]+>/g, '').slice(0, 200)
          : '',
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
      })
    }
  }
  return items
}

function extractTag(xml, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i')
  const match = regex.exec(xml)
  return match ? match[1].trim() : ''
}
