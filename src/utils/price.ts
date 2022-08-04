import type { Game } from "../data";

export function formatGamePrice(game: Game) {
  const price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    maximumSignificantDigits: 1,
    currency: game.currency,
  }).format(game.price);

  return price;
}
