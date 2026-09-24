interface LogoProps {
  className?: string;
  id?: string;
  onClick?: () => void;
}

export function Logo({ className = "w-[125px] h-[58px]", id = "header", onClick }: LogoProps) {
  const topId = `curveTop-${id}`;
  const bottomId = `curveBottom-${id}`;
  return (
    <div 
      onClick={onClick}
      className={`flex items-center justify-center cursor-pointer overflow-visible ${className}`}
    >
      <svg viewBox="0 0 200 90" className="w-full h-full text-[#1B3A6B] fill-current overflow-visible">
        {/* Top curve dipping slightly inward towards center */}
        <path id={topId} d="M 20,34 Q 100,42 180,34" fill="transparent" />
        {/* Bottom curve rising slightly inward towards center */}
        <path id={bottomId} d="M 25,80 Q 100,72 175,80" fill="transparent" />
        
        <text className="font-black text-[30px] tracking-[0.16em] uppercase select-none font-display">
          <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
            STADI
          </textPath>
        </text>
        <text className="font-black text-[30px] tracking-[0.24em] uppercase select-none font-display">
          <textPath href={`#${bottomId}`} startOffset="50%" textAnchor="middle">
            PASS
          </textPath>
        </text>
      </svg>
    </div>
  );
}
