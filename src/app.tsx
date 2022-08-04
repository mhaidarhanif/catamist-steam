import { NavigationBar, Footer } from "./components";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col dark:text-white">
      <NavigationBar />

      <main className="flex-[1]">
        <p>Content</p>
      </main>

      <Footer />
    </div>
  );
}
