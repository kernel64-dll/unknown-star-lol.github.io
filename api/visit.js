export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  const webhookUrl = "https://discord.com/api/webhooks/1399526596972384356/r9GnxGasL3W0P0dK7-zShhq35gvmpxKbuzZDZzA3TAyR3tD6f6sOG2YYHbd_uxjahoAk"; // replace this

  const userAgent = req.headers['user-agent'] || 'Unknown';

  const payload = {
    embeds: [
      {
        title: "look! someone visited the website :3 ",
        description: `\`User-Agent:\`\n${userAgent}`,
        color: 0x00ff88, // minty green stripe like in your image
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).json({ error: "Failed to send webhook." });
  }
}
