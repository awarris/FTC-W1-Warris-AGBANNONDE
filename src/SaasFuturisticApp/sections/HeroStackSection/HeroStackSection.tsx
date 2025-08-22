export const HeroStackSection = () => {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-16 lg:gap-20 pt-20 md:pt-32 lg:pt-[170px] pb-10 md:pb-16 lg:pb-20 px-4 md:px-5 relative w-full bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: "url('/assets/images/hero_background.jpg')"
      }}>
      
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      
      <div className="flex flex-col w-full max-w-[320px] sm:max-w-[480px] md:max-w-[768px] lg:max-w-[960px] items-center gap-10 md:gap-16 lg:gap-20 relative z-10">
        
        {/* Content Section */}
        <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6 w-full">
          
          {/* Badge */}
          <div className="px-4 md:px-5 lg:px-[19.81px] py-2 md:py-2.5 lg:py-[9.91px] rounded-full border border-[#ffffff4c] bg-transparent backdrop-blur-sm">
            <span className="font-normal text-[#f2f4f8] text-sm md:text-base lg:text-[17.3px] text-center tracking-[0] leading-relaxed whitespace-nowrap">
              We just raised $20M in Series B. Learn more
            </span>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6 w-full">
            
            {/* Main Title */}
            <h1 className="relative w-full bg-gradient-to-b from-[#ececec] to-[#ececec00] bg-clip-text text-transparent font-medium text-center tracking-tight leading-tight
              text-4xl md:text-5xl lg:text-6xl xl:text-[80px]
              md:tracking-[-1px] lg:tracking-[-1.5px] xl:tracking-[-2.40px]
              md:leading-[1.1] lg:leading-[1.0] xl:leading-[80px]">
              Modern analytics
              <br />
              for the modern world
            </h1>

            {/* Description */}
            <div className="flex w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] items-center justify-center">
              <p className="font-normal text-[#ebebeba6] text-center tracking-[0] leading-relaxed
                text-sm md:text-base lg:text-lg
                md:leading-[1.6] lg:leading-[1.6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex sm:flex-col md:flex-row justify-center items-center gap-3 md:gap-4 pt-2 md:pt-3 lg:pt-4 w-full sm:w-auto">
            <button className="w-full sm:w-full md:w-auto px-5 md:px-8 py-1.5 md:py-2 bg-[#ebebeb] rounded-full text-[#0b081c] font-medium text-sm md:text-base tracking-[0] leading-6 hover:bg-[#d4d4d4] transition-all duration-300 ease-out hover:shadow-lg hover:scale-105 active:scale-95">
              Download the app
            </button>

            {/* Bouton caché sur mobile */}
            <button className="hidden md:flex w-full md:w-auto px-5 md:px-6 py-1.5 md:py-2 rounded-full border border-[#ebebeb] text-[#ebebeb] font-medium text-sm md:text-base tracking-[0] leading-6 bg-transparent hover:bg-[#ebebeb] hover:text-[#0b081c] transition-all duration-300 ease-out hover:shadow-lg hover:scale-105 active:scale-95 backdrop-blur-sm">
              Talk to an expert
            </button>
          </div>
        </div>

        {/* Card/Image Section */}
        <div className="flex flex-col h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[472px] items-center justify-center w-full rounded-2xl lg:rounded-3xl shadow-[0px_-2px_40px_#bb9bff26,0px_-2px_10px_#e9dfff4c,inset_0px_0.5px_0px_#ffffff80] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 overflow-hidden">
          
          <img 
            src="/assets/images/hero_stack_image.png" 
            alt="Analytics Dashboard Preview" 
            className="w-full h-full object-contain md:object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroStackSection;