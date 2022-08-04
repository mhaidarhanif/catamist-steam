import { LinkButton } from "../components";
import { configNavigationBarLinks } from "../configs";

export function NavigationBar() {
  return (
    <nav className="flex flex-wrap justify-between px-10 py-5 text-xl">
      <div className="navigation-item-first flex items-center gap-10">
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

      <div className="navigation-item-second flex items-center gap-10">
        <LinkButton to="/about">Download</LinkButton>
        <ul className="navigation-links">
          <li>Login</li>
          <li>Join</li>
        </ul>
      </div>
    </nav>
  );
}
