import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../../../../assets/images/logo.png';

export const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About us", href: "#about" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-center px-6 py-4 relative w-full bg-[#0B0121]">
      <div className="flex w-full max-w-[1200px] items-center justify-between relative">
        {/* Logo */}
        <a href="/" className="inline-flex items-center relative flex-[0_0_auto] z-50">
          <div className="flex items-center gap-2">
            <div className="font-bold text-[#ebebeb] text-xl tracking-[-0.5px]">
              <img src={logo} alt="valtflow-icon-1" className="h-8 w-auto" />
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative px-4 py-2 font-normal text-[#ebebeb] text-base tracking-[0] leading-6 whitespace-nowrap transition-all duration-300 ease-out hover:text-white group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 bg-[#ebebeb] text-[#0b081c] rounded-full font-medium text-base transition-all duration-300 ease-out hover:bg-white hover:shadow-lg hover:scale-105 active:scale-95">
              Download the app
            </button>
            <button className="px-6 py-2.5 border border-[#ebebeb] text-[#ebebeb] bg-transparent rounded-full font-medium text-base transition-all duration-300 ease-out hover:bg-[#ebebeb] hover:text-[#0b081c] hover:shadow-lg hover:scale-105 active:scale-95">
              Talk to an expert
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden z-50 p-2 text-[#ebebeb] hover:text-white transition-colors duration-300 ease-out"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`bg-[#20035E] p-1 border border-[#20035E] rounded-sm absolute inset-0 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
              size={30}
            />
            <X
              className={`bg-[#20035E] p-1 border border-[#20035E] rounded-sm absolute inset-0 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`}
              size={30}
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 ease-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          onClick={closeMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 right-0 bg-[#0B0121] border-b border-purple-500/20 z-40 transition-all duration-500 ease-out ${isMenuOpen
            ? 'translate-y-0'
            : '-translate-y-full'
            }`}
        >
          {/* Mobile Menu Header - Spacer for proper content positioning */}
          <div className="h-16"></div>

          {/* Mobile Menu Content */}
          <div className={`px-6 py-8 space-y-6 transition-opacity duration-300 ease-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}>
            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-4 text-[#ebebeb] text-lg font-medium rounded-lg transition-all duration-300 ease-out hover:bg-purple-500/10 hover:text-white hover:translate-x-2 ${isMenuOpen
                    ? `animate-slide-down`
                    : ''
                    }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className={`space-y-4 pt-6 border-t border-purple-500/20 ${isMenuOpen
              ? `animate-slide-down`
              : ''
              }`}
              style={{
                animationDelay: `${navigationItems.length * 100 + 100}ms`,
                animationFillMode: 'forwards'
              }}>
              <button
                onClick={closeMenu}
                className="w-full px-6 py-2 border border-[#ebebeb] text-[#ebebeb] bg-transparent rounded-full font-medium text-base transition-all duration-300 ease-out hover:bg-[#ebebeb] hover:text-[#0b081c] active:scale-95"
              >
                Talk to an expert
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default NavbarSection;