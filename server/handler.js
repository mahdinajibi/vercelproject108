import { settings } from "./config.js";

export default async function handler(req, res) {
  const target = settings.TARGET_URL;

  try {
    const response = await fetch(target, {
      method: req.method,
      headers: {
        "x-forwarded-host": "ghost-layer"
      }
    });

    const data = await response.text();

    res.status(200).send({
      status: "ok",
      payload: data.slice(0, 200) // محدود شده
    });

  } catch (err) {
    res.status(500).send({
      status: "error",
      message: err.message
    });
  }
}
