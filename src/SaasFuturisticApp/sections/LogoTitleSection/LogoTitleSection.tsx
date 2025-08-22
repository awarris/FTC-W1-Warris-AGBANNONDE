import logoDell from '../../../../assets/images/logo-dell.png';
import logoZendesk from '../../../../assets/images/logo-zendesk.png';
import logoRakuten from '../../../../assets/images/logo-rakuten.png';
import logoPacificFunds from '../../../../assets/images/logo-pacific-funds.png';
import logoNCR from '../../../../assets/images/logo-ncr.png';
import logoLattice from '../../../../assets/images/logo-lattice.png';
import logoTed from '../../../../assets/images/logo-ted.png';

export const LogoTitleSection = () => {
  const logos = [
    { name: "Dell", src: logoDell, alt: "Dell Logo" },
    { name: "Zendesk", src: logoZendesk, alt: "Zendesk Logo" },
    { name: "Rakuten", src: logoRakuten, alt: "Rakuten Logo" },
    { name: "Pacific Funds", src: logoPacificFunds, alt: "Pacific Funds Logo" },
    { name: "NCR", src: logoNCR, alt: "NCR Logo" },
    { name: "Lattice", src: logoLattice, alt: "Lattice Logo" },
    { name: "TED", src: logoTed, alt: "TED Logo" }
  ];

  return (
    <section className="flex flex-col gap-6 md:gap-8 lg:gap-10 px-4 md:px-5 py-10 md:py-12 lg:py-[60px] w-full items-center bg-[#0B0121] relative overflow-hidden">
      
      {/* Background gradient for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="relative z-10 w-full max-w-[100%] flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
        
        {/* Title */}
        <p className="text-center font-normal leading-relaxed px-4 max-w-2xl
          text-base md:text-lg lg:text-xl
          md:leading-[1.6] lg:leading-[26px]">
          <span className="text-[#ffffffcc]">Trusted by teams at over </span>
          <span className="font-medium text-[#ffffffcc]">1,000</span>
          <span className="text-[#ffffffcc]">
            {" "}of the world's leading organizations
          </span>
        </p>

        {/* Logos Container */}
        <div className="w-full flex flex-col items-center gap-6 md:gap-8">
          
          {/* Mobile: Stack logos in columns of 2-3 */}
          <div className="grid grid-cols-2 sm:hidden gap-6 w-full max-w-sm justify-items-center items-center">
            {logos.slice(0, 6).map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-8 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto max-w-[100px] object-contain filter brightness-0 invert opacity-80"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Small Mobile: 3 columns */}
          <div className="hidden sm:grid md:hidden grid-cols-3 gap-6 w-full max-w-md justify-items-center items-center">
            {logos.slice(0, 6).map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-8 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto max-w-[100px] object-contain filter brightness-0 invert opacity-80"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Tablet: Two rows */}
          <div className="hidden md:grid lg:hidden gap-6 w-full max-w-4xl">
            {/* First row - 4 logos */}
            <div className="grid grid-cols-4 gap-8 justify-items-center items-center">
              {logos.slice(0, 4).map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-10 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto max-w-[100px] object-contain filter brightness-0 invert opacity-80"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Second row - 3 logos centered */}
            <div className="grid grid-cols-3 gap-8 justify-items-center items-center max-w-2xl mx-auto">
              {logos.slice(4, 7).map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-10 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto max-w-[100px] object-contain filter brightness-0 invert opacity-80"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Single row */}
          <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 w-full max-w-6xl flex-wrap">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-12 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto max-w-[100px] object-contain filter brightness-0 invert opacity-80"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTitleSection;
