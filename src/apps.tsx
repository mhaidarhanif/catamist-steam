import { NavigationBar } from "./components";

export default function App() {
  return (
    <div className="dark:text-white">
      <NavigationBar />

      <main>
        <p>Content</p>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
