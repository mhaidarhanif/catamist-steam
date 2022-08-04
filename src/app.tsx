import { NavigationBar, Footer } from "./components";
import { RouteHome } from "./routes";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col dark:text-white">
      <NavigationBar />

      <RouteHome />

      <Footer />
    </div>
  );
}
