export default function HomePodium() {
  return (
    <div className="relative w-full max-w-sm mx-auto flex items-end justify-center pt-16 pb-4 select-none">
      {/* 24h sticker */}
      <div className="absolute top-2 right-4 z-30">
        <div className="w-14 h-14 rounded-full bg-[#141414] border-2 border-white shadow-[2px_2px_0px_#141414] flex items-center justify-center text-white font-display font-extrabold text-base">
          24h
        </div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute top-12 left-10 text-xl text-[#141414]">✦</div>
      <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-[#F59E0B]" />

      {/* Step 2 (Left) */}
      <div className="flex flex-col items-center z-10 -mr-2">
        {/* Smiling pink blob */}
        <div className="w-14 h-14 rounded-full bg-[#F472B6] border-[2.5px] border-[#141414] flex flex-col items-center justify-center -mb-2 z-20 shadow-sm">
          <div className="flex gap-2 mb-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
          </div>
          <div className="w-3.5 h-1.5 border-b-2 border-[#141414] rounded-b-full" />
        </div>
        {/* Podium block 2 */}
        <div className="w-24 h-28 bg-[#EA580C] border-[3px] border-[#141414] rounded-t-xl flex items-center justify-center shadow-[3px_3px_0px_#141414]">
          <span className="font-display font-black text-4xl text-white">2</span>
        </div>
      </div>

      {/* Step 1 (Center) */}
      <div className="flex flex-col items-center z-20">
        {/* Crown */}
        <div className="mb-[-6px] z-30">
          <svg width="28" height="18" viewBox="0 0 28 18" fill="#EF4444" stroke="#141414" strokeWidth="2">
            <path d="M2 16 L2 4 L8 10 L14 2 L20 10 L26 4 L26 16 Z" />
          </svg>
        </div>
        {/* Smiling blob with crown */}
        <div className="w-16 h-16 rounded-full bg-white border-[2.5px] border-[#141414] flex flex-col items-center justify-center -mb-2 z-20 shadow-sm">
          <div className="flex gap-2.5 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
          </div>
          <div className="w-4 h-2 border-b-2 border-[#141414] rounded-b-full" />
        </div>
        {/* Podium block 1 */}
        <div className="w-28 h-36 bg-white border-[3px] border-[#141414] rounded-t-xl flex items-center justify-center shadow-[3px_3px_0px_#141414]">
          <span className="font-display font-black text-5xl text-[#141414]">1</span>
        </div>
      </div>

      {/* Step 3 (Right) */}
      <div className="flex flex-col items-center z-10 -ml-2">
        {/* Smiling mint blob */}
        <div className="w-14 h-14 rounded-full bg-[#86EFAC] border-[2.5px] border-[#141414] flex flex-col items-center justify-center -mb-2 z-20 shadow-sm">
          <div className="flex gap-2 mb-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
          </div>
          <div className="w-3.5 h-1.5 border-b-2 border-[#141414] rounded-b-full" />
        </div>
        {/* Podium block 3 */}
        <div className="w-24 h-20 bg-[#0D9488] border-[3px] border-[#141414] rounded-t-xl flex items-center justify-center shadow-[3px_3px_0px_#141414]">
          <span className="font-display font-black text-4xl text-white">3</span>
        </div>
      </div>
    </div>
  );
}

