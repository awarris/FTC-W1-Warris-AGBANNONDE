
export const FeaturesSection = () => {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-16 lg:gap-20 px-4 md:px-5 py-12 md:py-16 lg:py-20 relative w-full bg-[#0B0121]">

      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-10 md:gap-16 lg:gap-20">

        {/* Header Section */}
        <header className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6 w-full max-w-2xl px-4" style={{
          backgroundImage: "url('./assets/images/feature-section.png')"
        }}>
          <div className="flex items-center justify-center relative">
            <h2 className="font-medium text-[#ebebeb] text-center tracking-tight leading-tight
              text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              md:tracking-[-0.16px] lg:tracking-[-0.24px] xl:tracking-[-0.32px]
              md:leading-[1.2] lg:leading-[1.2] xl:leading-[57.6px]">
              Features that work for your future.
            </h2>
          </div>

          <p className="font-normal text-[#ebebeb] text-center tracking-[0] leading-relaxed
            text-sm md:text-base lg:text-lg
            opacity-90">
            Check out our amazing features and experience the power of Vaultflow for yourself.
          </p>
        </header>

        {/* Features Container */}
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-20 w-full max-w-6xl">


          {/* Bottom Feature Card - Code Collaboration */}
          <div className="w-full">
            <div className="hidden md:block relative p-6 md:p-8 lg:p-12 rounded-2xl lg:rounded-[20px] 
              bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm 
              border border-white/10 hover:border-white/20
              shadow-[inset_0px_0.5px_0px_#ffffff80,0px_-2px_40px_#bb9bff26,0px_-2px_10px_#e9dfff4c] 
              transition-all duration-300 hover:shadow-[inset_0px_0.5px_0px_#ffffff80,0px_-2px_60px_#bb9bff40,0px_-2px_15px_#e9dfff60]
              group hover:scale-[1.01]">
              <img
                src="./assets/images/feature-section-desktop.png"
                alt="Analytics Dashboard Preview"
                className="w-full h-full object-contain md:object-cover"
              />

            </div>

            <img
              src="./assets/images/feature-section-mobile.png"
              alt="Analytics Dashboard Preview"
              className="w-full h-full object-cover sm:object-contain md:hidden block"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;