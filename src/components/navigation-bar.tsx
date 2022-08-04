import { configNavigationBarLinks } from "../configs";

export function NavigationBar() {
  return (
    <nav className="px-10 py-5 text-xl flex flex-wrap justify-between">
      <div className="navigation-item-first flex gap-10 items-center">
        <img
          className="h-[50px]"
          src="/logo/catamist-logo.svg"
          alt="Catamist"
        />
        <ul className="navigation-links">
          {configNavigationBarLinks.map((navigationBarLink) => {
            return (
              <li key={navigationBarLink.text}>{navigationBarLink.text}</li>
            );
          })}
        </ul>
      </div>

      <div className="navigation-item-second flex gap-10 items-center">
        <ul className="navigation-links">
          <li>Login</li>
          <li>Join</li>
        </ul>
      </div>
    </nav>
  );
}
