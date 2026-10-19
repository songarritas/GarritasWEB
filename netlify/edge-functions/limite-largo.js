// Segundo límite por IP: máximo 10 envíos cada 3 minutos (el máximo que permite Netlify).
export default async () => {};

export const config = {
  path: "/*",
  method: ["POST"],
  rateLimit: { windowLimit: 10, windowSize: 180, aggregateBy: ["ip", "domain"] },
};
