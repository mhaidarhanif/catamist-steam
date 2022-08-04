import { HomeCategory, HomeHero } from "../contents/home";

export function RouteHome() {
  return (
    <main className="flex-[1]">
      <HomeHero />
      <HomeCategory />
    </main>
  );
}
