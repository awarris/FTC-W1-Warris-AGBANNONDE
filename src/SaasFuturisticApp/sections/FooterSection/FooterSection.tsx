const contactData = {
  title: "Contact",
  emails: [
    "Work inquires: work@vaultflow.com",
    "PR and speaking: press@vaultflow.com",
    "New business: newbusiness@vaultflow.com",
  ],
};

const careersData = {
  title: "Careers",
  email: "Careers@vaultflow.com",
};

const addressData = {
  title: "Address",
  address: "398 11th Street, Floor 2\nSan Francisco, CA 94103",
};

const socialData = {
  title: "Social",
  links: ["Twitter", "Instagram", "Tik Tok"],
};

export const FooterSection = () => {
  return (
    <footer className="flex flex-col items-center px-4 md:px-5 py-10 md:py-12 lg:py-16 relative w-full bg-[#0B0121]">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl">

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-8 md:gap-10">

            {/* Contact Section */}
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-white text-xl md:text-2xl tracking-[-0.24px] leading-normal">
                {contactData.title}
              </h3>
              <div className="flex flex-col gap-2">
                {contactData.emails.map((email, index) => (
                  <div key={index} className="font-light text-white text-sm md:text-base lg:text-lg tracking-[-0.18px] leading-relaxed">
                    {email}
                  </div>
                ))}
              </div>
            </div>

            {/* Careers Section */}
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-white text-xl md:text-2xl tracking-[-0.24px] leading-normal">
                {careersData.title}
              </h3>
              <div className="font-light text-white text-sm md:text-base lg:text-lg tracking-[-0.18px] leading-normal">
                {careersData.email}
              </div>
            </div>

            {/* Address Section */}
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-white text-xl md:text-2xl tracking-[-0.24px] leading-normal">
                {addressData.title}
              </h3>
              <div className="font-light text-white text-sm md:text-base lg:text-lg tracking-[-0.18px] leading-normal whitespace-pre-line">
                {addressData.address}
              </div>
            </div>

            {/* Social Section */}
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-white text-xl md:text-2xl tracking-[-0.24px] leading-normal">
                {socialData.title}
              </h3>
              <div className="flex flex-col gap-2">
                {socialData.links.map((link, index) => (
                  <a key={index} href="#" className="font-light text-white text-sm md:text-base lg:text-lg tracking-[-0.18px] leading-normal hover:text-purple-300 transition-colors duration-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Logo and Copyright Mobile */}
            <div className="flex flex-col items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#0B0121] rounded-sm"></div>
                </div>
                <div className="font-bold text-[#ebebeb] text-lg tracking-[-0.5px]">
                  Vaultflow
                </div>
              </div>
              <div className="font-light text-[#929292] text-sm text-center tracking-[-0.16px] leading-normal">
                © 2023 Vaultflow. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex gap-8 xl:gap-12">

            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-10 pl-16 md:pl-0">

              {/* Contact Section */}
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-white text-2xl tracking-[-0.24px] leading-normal">
                  {contactData.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {contactData.emails.map((email, index) => (
                    <div key={index} className="font-light text-white text-lg tracking-[-0.18px] leading-normal hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                      {email}
                    </div>
                  ))}
                </div>
              </div>

              {/* Careers Section */}
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-white text-2xl tracking-[-0.24px] leading-normal">
                  {careersData.title}
                </h3>
                <div className="font-light text-white text-lg tracking-[-0.18px] leading-normal hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                  {careersData.email}
                </div>
              </div>

              {/* Copyright Desktop */}
              <div className="font-light text-[#929292] text-base tracking-[-0.16px] leading-normal mt-auto">
                © 2023 Vaultflow. All Rights Reserved.
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-10">

              {/* Address Section */}
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-white text-2xl tracking-[-0.24px] leading-normal">
                  {addressData.title}
                </h3>
                <div className="font-light text-white text-lg tracking-[-0.18px] leading-normal whitespace-pre-line max-w-[210px]">
                  {addressData.address}
                </div>
              </div>

              {/* Social Section */}
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-white text-2xl tracking-[-0.24px] leading-normal">
                  {socialData.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {socialData.links.map((link, index) => (
                    <a key={index} href="#" className="font-light text-white text-lg tracking-[-0.18px] leading-normal hover:text-purple-300 transition-colors duration-300 w-fit">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Logo Column Desktop */}
            <div className="w-[180px] flex items-end justify-end">
              <div className="flex items-center gap-3">
                <div className="font-bold text-[#ebebeb] text-xl tracking-[-0.5px]">
                  <img src="/assets/images/logo.png" alt="valtflow-icon-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;