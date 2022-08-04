import { clsx } from "clsx";

export function LinkButton({
  to,
  className,
  children,
}: {
  to: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a className={clsx("button", className)} href={to}>
      {children}
    </a>
  );
}
