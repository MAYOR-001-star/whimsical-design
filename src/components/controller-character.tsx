export default function ControllerCharacter() {
  return (
    <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center select-none">
      {/* Sparkles around controller */}
      <span className="absolute top-4 left-6 text-xl text-[#FDC827]">✦</span>
      <span className="absolute top-8 right-8 text-base text-[#86EFAC]">✦</span>
      <span className="absolute bottom-6 right-10 text-sm text-[#F472B6]">✦</span>

      {/* Controller Body */}
      <div className="relative w-56 h-36 bg-white border-[3.5px] border-[#141414] rounded-[44px] shadow-[6px_6px_0px_#141414] p-4 flex items-center justify-between">
        {/* Left: D-Pad */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="w-12 h-4 bg-[#141414] rounded-sm absolute" />
          <div className="w-4 h-12 bg-[#141414] rounded-sm absolute" />
        </div>

        {/* Center: Face */}
        <div className="flex flex-col items-center justify-center -translate-y-1">
          {/* Eyes */}
          <div className="flex gap-4 mb-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#141414] relative">
              <div className="w-1 h-1 rounded-full bg-white absolute top-0.5 left-0.5" />
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#141414] relative">
              <div className="w-1 h-1 rounded-full bg-white absolute top-0.5 left-0.5" />
            </div>
          </div>
          {/* Cheeks & Smile */}
          <div className="relative flex items-center justify-center">
            <div className="w-2 h-1 rounded-full bg-[#F87171] absolute -left-3" />
            <div className="w-4 h-2 border-b-2 border-[#141414] rounded-b-full" />
            <div className="w-2 h-1 rounded-full bg-[#F87171] absolute -right-3" />
          </div>
        </div>

        {/* Right: Colored Action Buttons */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-[1.5px] border-[#141414] absolute top-0" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#3B82F6] border-[1.5px] border-[#141414] absolute bottom-0" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#F59E0B] border-[1.5px] border-[#141414] absolute left-0" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#10B981] border-[1.5px] border-[#141414] absolute right-0" />
        </div>
      </div>
    </div>
  );
}

