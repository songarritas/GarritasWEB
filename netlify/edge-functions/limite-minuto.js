// Límite por IP para los formularios: máximo 4 envíos por minuto.
// Si alguien se pasa, Netlify responde 429 y el envío no llega.
export default async (request) => {
  const largo = Number(request.headers.get("content-length") || 0);
  if (largo > 9 * 1024 * 1024) return new Response("Envío demasiado grande", { status: 413 });
  const origen = request.headers.get("origin");
  if (origen && new URL(origen).host !== new URL(request.url).host) {
    return new Response("Origen no permitido", { status: 403 });
  }
  // sin respuesta propia: el envío sigue a Netlify Forms
};

export const config = {
  path: "/*",
  method: ["POST"],
  rateLimit: { windowLimit: 4, windowSize: 60, aggregateBy: ["ip", "domain"] },
};
