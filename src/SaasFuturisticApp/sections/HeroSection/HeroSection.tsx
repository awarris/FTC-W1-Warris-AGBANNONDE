export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center px-4 md:px-5 py-10 md:py-12 lg:py-[60px] relative w-full">
      <div className="items-center gap-3 md:gap-4 lg:gap-4 p-6 md:p-8 lg:p-[60px] rounded-2xl lg:rounded-[20px] shadow-[inset_0px_0.5px_0px_#ffffff80,0px_-2px_40px_#bb9bff26,0px_-2px_10px_#e9dfff4c] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)] flex flex-col w-full max-w-[320px] sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1200px] relative border-0 backdrop-blur-sm">
        
        <div className="flex flex-col w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[768px] items-center gap-4 md:gap-5 lg:gap-6 relative">
          
          {/* Main Title */}
          <h1 className="relative w-full font-bold text-[#ebebeb] text-center tracking-tight leading-tight
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl
            sm:tracking-[-0.5px] md:tracking-[-0.8px] lg:tracking-[0] xl:tracking-[0]
            sm:leading-[1.2] md:leading-[1.2] lg:leading-[1.2] xl:leading-[57.6px]
            drop-shadow-lg">
            Our powerful analytics provides invaluable insights.
          </h1>

          {/* Description */}
          <p className="relative w-full font-normal text-[#ebebeb] text-center tracking-[0] leading-relaxed opacity-90
            text-sm sm:text-base md:text-lg lg:text-lg
            sm:leading-[1.5] md:leading-[1.6] lg:leading-[27px]">
            Unlock the power of data with our cutting-edge analytics product.
            Get instant insights with our user-friendly Analytics Dashboard, and
            take advantage of our innovative digital credit tokens to reward
            your customers and incentivize engagement.
          </p>

          {/* Animated Button */}
          <button className="group relative px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-[#ebebeb] 
            bg-transparent text-[#ebebeb] font-medium text-sm md:text-base tracking-[0] leading-6
            transition-all duration-500 ease-out
            hover:bg-[#ebebeb] hover:text-[#0b0121] hover:border-[#ebebeb]
            hover:shadow-lg hover:shadow-white/20 hover:scale-105
            active:scale-95 active:transition-transform active:duration-100
            focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent
            overflow-hidden">
            
            {/* Background animation overlay */}
            <span className="absolute inset-0 bg-[#ebebeb] transform scale-x-0 group-hover:scale-x-100 
              transition-transform duration-500 ease-out origin-left rounded-full"></span>
            
            {/* Button text */}
            <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-[#0b0121]">
              Download the app
            </span>
            
            {/* Shine effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
              transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;