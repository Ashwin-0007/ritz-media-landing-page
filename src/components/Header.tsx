export default function Header() {
  const links = ['Work', 'About', 'Get In Touch'];

  return (
    <header
      className="relative h-[83px] w-[1440px] bg-navy-header flex items-center justify-between px-[50px]"
    >
      {/* Logo */}
      <a href="#" className="block nav-link-hover transition-opacity duration-200 hover:opacity-80">
        <img
          src="/assets/header-logo.png"
          alt="Ritz Media World"
          className="h-[43px] w-[246px] object-contain"
        />
      </a>

      {/* Nav */}
      <nav className="flex items-center gap-[49px]">
        {links.map((label) => (
          <a
            key={label}
            href="#"
            className="nav-link-hover font-montserrat font-normal text-[16px] leading-[20px] text-white uppercase tracking-wide whitespace-nowrap"
          >
            {label}
          </a>
        ))}
        <button
          aria-label="Menu"
          className="ml-[8px] flex items-center justify-center w-[34px] h-[34px] btn-icon-hover"
        >
          <img
            src="/assets/hamburger.png"
            alt="Menu"
            className="w-full h-full object-contain"
          />
        </button>
      </nav>
    </header>
  );
}
