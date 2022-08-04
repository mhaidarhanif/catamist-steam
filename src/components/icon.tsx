import { AppleLogo, Circle, WindowsLogo } from "phosphor-react";

export function Icon({ name }: { name: string }) {
  switch (name) {
    case "windows":
      return <WindowsLogo weight="fill" />;
    case "mac":
      return <AppleLogo weight="fill" />;
    default:
      return <Circle weight="fill" />;
  }
}
