import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clsx } from "clsx";

interface Tab {
  value: string;
  name: string;
  content: any;
}

const tabs: Tab[] = [
  {
    value: "tab1",
    name: "New & Trending",
    content: "Tab one content",
  },
  {
    value: "tab2",
    name: "Top Sellers",
    content: "Tab second content",
  },
  {
    value: "tab3",
    name: "Popular Upcoming",
    content: "Tab third content",
  },
  {
    value: "tab4",
    name: "Specials",
    content: "Tab fourth content",
  },
];

export function CategoryTabs() {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List
        className={clsx("flex w-full bg-white dark:bg-gray-800")}
      >
        {tabs.map(({ name, value }) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
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

      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={`tab-content-${tab.value}`}
          value={tab.value}
        >
          <span className="text-sm text-gray-700 dark:text-gray-100">
            {tab.content}
          </span>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
