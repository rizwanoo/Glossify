import React from 'react';

interface BrandLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  theme = 'dark',
  showSubtitle = false,
  size = 'md'
}) => {
  // Official downloaded high-resolution Instagram logo asset
  const logoSrc = '/glossify-original-logo.jpg';

  const badgeSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center gap-3 font-sans select-none ${className}`}>
      {/* Official Circular Glossify BH Brand Badge */}
      <div className={`relative flex items-center justify-center shrink-0 rounded-full overflow-hidden bg-white shadow-md border-2 border-[#E52332]/40 ${badgeSizes[size]}`}>
        <img
          src={logoSrc}
          alt="GLOSSIFY Car Wash &amp; Polishing Bahrain"
          className="w-full h-full object-cover rounded-full"
          loading="eager"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black tracking-tight uppercase font-display ${textSizes[size]}`}>
            <span className="text-[#E52332]">G</span>
            <span className={isDark ? 'text-white' : 'text-[#17191D]'}>LOSSIFY</span>
          </span>
          <span className="text-[#E52332] font-black tracking-wider text-xs px-1.5 py-0.5 rounded bg-[#E52332]/10 border border-[#E52332]/30">
            BH
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[10px] tracking-wider uppercase font-semibold leading-tight mt-0.5 ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            Mobile Car Wash &amp; Polish · Bahrain
          </span>
        )}
      </div>
    </div>
  );
};
