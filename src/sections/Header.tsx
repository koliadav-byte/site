import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

type NavItem = { label: string; to: string };

const mainNavItems: NavItem[] = [
  { label: 'О нас', to: '/#what-we-do' },
  { label: 'Исследования', to: '/archive' },
  { label: 'Navigator', to: '/navigator' },
  { label: 'Доступ', to: '/#products' },
  { label: 'Контакты', to: '/#subscribe' },
];

const subNavItems: NavItem[] = [
  { label: 'Macro-View', to: '/#rubrics' },
  { label: 'Future Habitat', to: '/#rubrics' },
  { label: 'Business Intelligence', to: '/#rubrics' },
  { label: 'Heritage & Code', to: '/#rubrics' },
  { label: 'Human Centric', to: '/#rubrics' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.header-top',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
    )
      .fromTo(
        '.logo',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out' },
        0.2
      )
      .fromTo(
        '.nav-item',
        { opacity: 0 },
        { opacity: 1, duration: 0.3, stagger: 0.05, ease: 'power2.out' },
        0.3
      )
      .fromTo(
        '.header-bottom',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
        0.4
      );
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      {/* Top Header */}
      <div
        className={`header-top bg-[#0A0A0A] border-b border-gray-800 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-[#0A0A0A]/95' : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link to="/#top" className="logo flex items-center gap-3" onClick={closeMobileMenu}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#C9A962] to-[#8B7355] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-wide">VALMARK</span>
                <span className="text-[10px] text-[#C9A962] tracking-[0.2em] uppercase">
                  Think Tank
                </span>
              </div>
            </Link>

            {/* Desktop Main Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="nav-item text-sm text-gray-300 hover:text-[#C9A962] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A962] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-300" />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-300" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Header - Research Areas */}
      <div
        className={`header-bottom bg-[#111111] border-b border-gray-800 transition-all duration-300 ${
          isScrolled ? 'hidden' : 'block'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 h-[50px] overflow-x-auto scrollbar-hide">
            <span className="text-xs text-gray-500 mr-4 uppercase tracking-wider">
              Направления:
            </span>

            {subNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="nav-item whitespace-nowrap px-4 py-2 text-sm transition-all duration-300 rounded-lg group"
              >
                <span className="text-[#C9A962] font-medium">{item.label}</span>
                <span className="text-gray-500 ml-2 text-xs group-hover:text-gray-300 transition-colors">
                  Перейти
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-[#0A0A0A] z-40 overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-[#C9A962] mb-4 uppercase tracking-wider">
                Направления исследований
              </h3>
              <div className="space-y-3">
                {subNavItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className="block py-3 border-b border-gray-800"
                  >
                    <span className="text-white font-medium block">{item.label}</span>
                    <span className="text-gray-500 text-sm">Перейти к рубрикам</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#C9A962] mb-4 uppercase tracking-wider">
                Меню
              </h3>
              <div className="space-y-3">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
