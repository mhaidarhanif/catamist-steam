import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clsx } from "clsx";

import { dataCategories } from "../data";
import { formatGamePrice } from "../utils";

export function CategoryTabs() {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List
        className={clsx("flex w-full bg-white dark:bg-gray-800")}
      >
        {dataCategories.map(({ name, value }) => (
          <TabsPrimitive.Trigger
            key={`category-trigger-${value}`}
            value={value}
            className={clsx(
              "group",
              "border-gray-300 dark:border-gray-900",
              "radix-state-active:border-b-gray-700 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-gray-50 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-700 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-900",
              "flex-1 px-3 py-2.5",
              "focus:radix-state-active:border-b-red",
              "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <span
              className={clsx(
                "font-body text-md",
                "text-gray-700 dark:text-gray-100"
              )}
            >
              {name}
            </span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {dataCategories.map((category) => (
        <TabsPrimitive.Content
          className="py-5"
          key={`category-content-${category.value}`}
          value={category.value}
        >
          <div className="flex flex-col gap-5">
            {category.games.map((game) => {
              return (
                <div
                  key={game.name}
                  className="game hover: flex w-full bg-slate-900 hover:bg-slate-700"
                >
                  <img src={game.thumbnailImageUrl} alt={game.name} />

                  <div className="game-details flex w-full items-center justify-between py-2 px-4">
                    <div>
                      <h4 className="font-bold">{game.name}</h4>
                      <div>
                        {game.platforms.map((platform) => (
                          <span>{platform}</span>
                        ))}
                      </div>
                      <p>{game.tags.join(", ")}</p>
                    </div>

                    <div className="game-price">
                      <p>{formatGamePrice(game)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
