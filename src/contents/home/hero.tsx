import { clsx } from "clsx";

export function HomeHero() {
  return (
    <div
      className={clsx(
        "bg-home-hero",
        "flex h-[420px] items-center justify-center bg-slate-900"
      )}
    >
      <div className="text-center">
        <h1 className="font-brand-bold text-8xl leading-tight">
          Catamyst
          <br />
          Festival
        </h1>
      </div>
    </div>
  );
}
