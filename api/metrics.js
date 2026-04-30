export default async function handler(req, res) {
  const endpoint = process.env.ANALYTICS_ENDPOINT || "https://example.com";

  try {
    const r = await fetch(endpoint, {
      method: "GET",
      headers: {
        "user-agent": "Mozilla/5.0",
        "x-forwarded-for": req.headers["x-forwarded-for"] || "127.0.0.1"
      }
    });

    const text = await r.text();

    res.status(200).json({
      status: "ok",
      cache: "hit",
      data: text.substring(0, 150)
    });

  } catch (e) {
    res.status(500).json({
      status: "error"
    });
  }
}
