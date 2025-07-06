export const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 w-full">
      <p className="font-light text-sm sm:text-base text-text-secondary text-center">
        © {new Date().getFullYear()} - Andrian Smetaniuk
      </p>
    </footer>
  );
};
