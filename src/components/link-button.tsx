export function LinkButton({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <a className="button" href={to}>
      {children}
    </a>
  );
}
