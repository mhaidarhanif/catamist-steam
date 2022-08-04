export type Category = {
  value: string;
  name: string;
  games: Game[];
};

export type Game = {
  name: string;
  price: number;
  currency: string;
  tags: string[];
  platforms: string[];
  thumbnailImageUrl: string;
};

export const dataCategories: Category[] = [
  {
    value: "tab1",
    name: "New & Trending",
    games: [
      {
        name: "GigaBash",
        price: 300000,
        currency: "IDR",
        tags: ["Action", "Fighting"],
        platforms: ["windows"],
        thumbnailImageUrl:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1546400/capsule_184x69.jpg",
      },
      {
        name: "PlateUp!",
        price: 100000,
        currency: "IDR",
        tags: ["Management", "Building"],
        platforms: ["windows", "mac"],
        thumbnailImageUrl:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1599600/capsule_184x69.jpg?t=1659621691",
      },
    ],
  },
  {
    value: "tab2",
    name: "Top Sellers",
    games: [
      {
        name: "Stray",
        price: 150000,
        currency: "IDR",
        tags: ["Adventure", "Cyberpunk"],
        platforms: ["windows"],
        thumbnailImageUrl:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/capsule_184x69.jpg?t=1658671406",
      },
      {
        name: "Marvel’s Spider-Man Remastered",
        price: 900000,
        currency: "IDR",
        tags: ["Action", "Superhero"],
        platforms: ["windows", "mac"],
        thumbnailImageUrl:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/capsule_184x69.jpg?t=1659553008",
      },
    ],
  },
  {
    value: "tab4",
    name: "Specials",
    games: [
      {
        name: "Rust",
        price: 150000,
        currency: "IDR",
        tags: ["Survival", "Crafting"],
        platforms: ["windows", "mac"],
        thumbnailImageUrl:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/capsule_184x69_alt_assets_17.jpg",
      },
      {
        name: "Raft",
        price: 110000,
        currency: "IDR",
        tags: ["Survival", "Multiplayer"],
        platforms: ["windows"],
        thumbnailImageUrl:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/648800/capsule_184x69.jpg",
      },
    ],
  },
];
