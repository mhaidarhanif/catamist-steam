import type { Game } from "../data";

export function formatGamePrice(game: Game) {
  const price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: game.currency,
    maximumFractionDigits: 0,
  }).format(game.price);

  return price;
}
