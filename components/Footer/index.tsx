export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-50 py-8 flex items-center justify-center backdrop-blur bg-muted/70 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.5)]">
      <span className="text-xs sm:text-sm text-muted-foreground">
        ©Feito Por <b>{`<Gabriel/>`}</b>.
      </span>
    </footer>
  );
}
