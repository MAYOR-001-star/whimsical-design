export default function HomeHeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center select-none">
      {/* 188 games sticker */}
      <div className="absolute top-4 left-6 z-30 transform -rotate-12 hover:rotate-0 transition-transform cursor-default">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EF4444] border-[3px] border-[#141414] shadow-[3px_3px_0px_#141414] flex flex-col items-center justify-center text-white">
          <span className="font-display font-extrabold text-base sm:text-lg leading-none">188</span>
          <span className="text-[10px] sm:text-xs font-semibold leading-tight">games</span>
        </div>
      </div>

      {/* Naira ₦ sticker */}
      <div className="absolute bottom-16 right-4 z-30">
        <div className="w-10 h-10 rounded-full bg-[#FDC827] border-2 border-dashed border-[#141414] shadow-[2px_2px_0px_#141414] flex items-center justify-center font-bold text-sm text-[#141414]">
          ₦
        </div>
      </div>

      {/* Clouds */}
      <div className="absolute top-10 right-28 opacity-90 animate-pulse" style={{ animationDuration: "6s" }}>
        <svg width="64" height="36" viewBox="0 0 64 36" fill="white" stroke="#141414" strokeWidth="2.5">
          <path d="M12 28h40a10 10 0 0 0 4-19 14 14 0 0 0-26-4 12 12 0 0 0-18 13 8 8 0 0 0 0 10z" />
        </svg>
      </div>

      {/* Smiling Sun */}
      <div className="absolute top-6 right-10 z-10">
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div
              key={angle}
              className="absolute w-1.5 h-3 bg-[#FDC827] border border-[#141414] rounded-full"
              style={{
                transform: `rotate(${angle}deg) translateY(-26px)`,
              }}
            />
          ))}
          {/* Sun body */}
          <div className="w-14 h-14 rounded-full bg-[#FDC827] border-[2.5px] border-[#141414] flex flex-col items-center justify-center relative">
            {/* Eyes */}
            <div className="flex gap-2.5 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
            </div>
            {/* Cheeks */}
            <div className="absolute w-10 flex justify-between px-1">
              <div className="w-2 h-1 rounded-full bg-[#F87171] opacity-70" />
              <div className="w-2 h-1 rounded-full bg-[#F87171] opacity-70" />
            </div>
            {/* Smile */}
            <div className="w-3.5 h-2 border-b-2 border-[#141414] rounded-b-full" />
          </div>
        </div>
      </div>

      {/* Sparkles ✦ */}
      <span className="absolute top-28 left-28 text-[#141414] text-sm">✦</span>
      <span className="absolute bottom-28 left-12 text-[#141414] text-lg">✦</span>

      {/* Main Illustration: Danfo bus with Jollof Pot on top */}
      <div className="relative z-20 flex flex-col items-center mt-12">
        {/* Steam curly lines */}
        <div className="flex gap-2 mb-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 18c0-3 3-4 3-7s-3-4-3-7" />
            <path d="M14 20c0-3 3-4 3-7s-3-4-3-7" />
          </svg>
        </div>

        {/* Jollof Pot on bus roof */}
        <div className="relative mb-[-4px] z-10">
          {/* Pot body */}
          <div className="w-24 h-12 bg-[#DC2626] border-[2.5px] border-[#141414] rounded-b-2xl relative flex items-center justify-center shadow-[2px_2px_0px_#141414]">
            {/* Pot rim / lid */}
            <div className="absolute -top-2 w-28 h-3 bg-[#B91C1C] border-[2px] border-[#141414] rounded-full" />
            {/* Food inside */}
            <div className="absolute top-0 w-22 h-2 bg-[#F97316] rounded-full" />
            {/* Pot handles */}
            <div className="absolute -left-2 top-2 w-2 h-4 border-2 border-[#141414] rounded-l-md bg-[#991B1B]" />
            <div className="absolute -right-2 top-2 w-2 h-4 border-2 border-[#141414] rounded-r-md bg-[#991B1B]" />
          </div>
        </div>

        {/* Danfo Bus */}
        <div className="relative w-64 sm:w-72 bg-[#FDC827] border-[3px] border-[#141414] rounded-2xl p-2.5 shadow-[4px_4px_0px_#141414]">
          {/* Roof rack */}
          <div className="absolute -top-2 left-6 right-6 h-2 border-t-[3px] border-x-[3px] border-[#141414] rounded-t-sm" />

          {/* Windows row */}
          <div className="flex gap-2 mb-2 px-1">
            <div className="flex-1 h-7 bg-white border-2 border-[#141414] rounded-md" />
            <div className="flex-1 h-7 bg-white border-2 border-[#141414] rounded-md" />
            <div className="flex-1 h-7 bg-white border-2 border-[#141414] rounded-md" />
            <div className="flex-1 h-7 bg-white border-2 border-[#141414] rounded-md" />
          </div>

          {/* Bus body with GOOD VIBES stripe */}
          <div className="bg-[#141414] py-1 px-3 rounded text-center mb-1">
            <span className="font-display font-extrabold text-[11px] sm:text-xs text-[#FDC827] tracking-wider">
              GOOD VIBES
            </span>
          </div>

          {/* Headlights and grille */}
          <div className="flex justify-between items-center px-1">
            <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#141414]" />
            <div className="flex gap-1">
              <div className="w-2.5 h-1 bg-[#141414] rounded-full" />
              <div className="w-2.5 h-1 bg-[#141414] rounded-full" />
              <div className="w-2.5 h-1 bg-[#141414] rounded-full" />
            </div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-[#141414]" />
          </div>

          {/* Wheels */}
          <div className="absolute -bottom-4 left-6 w-9 h-9 rounded-full bg-[#141414] border-2 border-[#141414] flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white border border-[#141414] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
            </div>
          </div>
          <div className="absolute -bottom-4 right-6 w-9 h-9 rounded-full bg-[#141414] border-2 border-[#141414] flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white border border-[#141414] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
            </div>
          </div>
        </div>

        {/* Road ground line */}
        <div className="w-72 sm:w-80 h-1.5 bg-[#141414] rounded-full mt-6" />
      </div>
    </div>
  );
}

