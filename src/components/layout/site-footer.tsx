export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div>
          <p className="font-semibold tracking-tight text-zinc-950">
            E-commerce Storefront
          </p>

          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
            A demo storefront for premium gaming peripherals and accessories.
          </p>
        </div>

        <div className="text-sm text-zinc-500 md:text-right">
          <p>Portfolio project · No real purchases are processed.</p>

          <p className="mt-2">
            © {new Date().getFullYear()} E-commerce Storefront
          </p>
        </div>
      </div>
    </footer>
  );
}
