const cooldownSeconds = 60; // Cooldown in seconds
const recentVisits = {}; // In-memory cooldown tracking

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket?.remoteAddress ||
    "unknown";

  const now = Date.now();
  const lastVisit = recentVisits[ip];

  if (lastVisit && now - lastVisit < cooldownSeconds * 1000) {
    return res.status(429).json({ error: "Too Many Requests (cooldown active)" });
  }

  // Update last visit timestamp
  recentVisits[ip] = now;

  const userAgent = req.headers['user-agent'] || 'Unknown';
  const timestamp = Math.floor(now / 1000); // For Discord timestamp formatting

  const webhookUrl = process.env.DISCORD_WEBHOOK;
  if (!webhookUrl) {
    return res.status(500).json({ error: "Missing Discord webhook URL in env" });
  }

  const payload = {
    embeds: [
      {
        title: "Results for kernelkidd.vercel.app:",
        description:
          `\`User-Agent:\`\n${userAgent}\n\n` +
          `🕒 Accessed at: <t:${timestamp}:F>`,
        color: 0x00ff88,
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Discord error: ${response.statusText}`);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Discord Webhook Error:", err);
    res.status(500).json({ error: "Failed to send webhook." });
  }
}
