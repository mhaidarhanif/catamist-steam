export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex flex-wrap justify-center px-10 py-5">
      <p>&copy; {year} Catamist</p>
    </footer>
  );
}
