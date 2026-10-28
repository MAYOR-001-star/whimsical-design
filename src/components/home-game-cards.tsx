"use client";

import Link from "next/link";

interface HomeGame {
  id: string;
  title: string;
  author: string;
  bgColor: string;
  renderIllustration: () => React.ReactNode;
}

const HOME_GAMES: HomeGame[] = [
  {
    id: "danfo-defense",
    title: "Danfo Defense",
    author: "emmyanz",
    bgColor: "bg-[#BAE6FD]",
    renderIllustration: () => (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Sun */}
        <div className="absolute top-3 right-6 w-8 h-8 rounded-full bg-[#FDC827] border-2 border-[#141414]" />
        {/* Danfo Bus mini */}
        <div className="relative z-10 w-28 bg-[#FDC827] border-2 border-[#141414] rounded-lg p-1.5 shadow-[2px_2px_0px_#141414] translate-x-[-12px]">
          <div className="flex gap-1 mb-1">
            <div className="w-4 h-3 bg-white border border-[#141414] rounded-sm" />
            <div className="w-4 h-3 bg-white border border-[#141414] rounded-sm" />
            <div className="w-4 h-3 bg-white border border-[#141414] rounded-sm" />
          </div>
          <div className="h-1.5 bg-[#141414] rounded-sm" />
          <div className="flex justify-between -mb-2 mt-1 px-1">
            <div className="w-3.5 h-3.5 rounded-full bg-[#141414] border border-white" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#141414] border border-white" />
          </div>
        </div>
        {/* Exhaust bubbles */}
        <div className="absolute left-32 top-14 flex gap-1">
          <div className="w-2 h-2 rounded-full border border-[#141414] border-dashed" />
          <div className="w-1.5 h-1.5 rounded-full border border-[#141414] border-dashed" />
        </div>
        {/* Little red monster / blob */}
        <div className="relative z-10 w-6 h-6 rounded-full bg-[#EF4444] border-2 border-[#141414] flex items-center justify-center translate-x-2 translate-y-2">
          <div className="w-1 h-1 rounded-full bg-[#141414]" />
        </div>
        {/* Road line */}
        <div className="absolute bottom-4 left-0 right-0 h-1 bg-[#141414]" />
      </div>
    ),
  },
  {
    id: "jollof-rush",
    title: "Jollof Rush",
    author: "Y_Aisha",
    bgColor: "bg-[#F87171]",
    renderIllustration: () => (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Floating rice grains */}
        <div className="absolute top-5 left-10 w-1.5 h-2.5 rounded-full bg-white rotate-45" />
        <div className="absolute top-7 right-14 w-1.5 h-2.5 rounded-full bg-white -rotate-12" />
        <div className="absolute top-4 right-24 w-1.5 h-2.5 rounded-full bg-white rotate-12" />
        {/* Smiling pot */}
        <div className="relative z-10 w-28 h-16 bg-[#141414] border-2 border-[#141414] rounded-b-2xl flex flex-col items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
          {/* Rice in pot */}
          <div className="absolute -top-3 w-24 h-4 bg-[#F97316] border-2 border-[#141414] rounded-full" />
          {/* Eyes & Smile */}
          <div className="flex gap-3 mb-1 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
          <div className="w-2.5 h-1 border-b-2 border-white rounded-b-full" />
          {/* Pot handles */}
          <div className="absolute -left-2 top-3 w-2 h-4 border-2 border-[#141414] rounded-l-md bg-white" />
          <div className="absolute -right-2 top-3 w-2 h-4 border-2 border-[#141414] rounded-r-md bg-white" />
        </div>
        {/* Spoon */}
        <div className="absolute right-6 top-8 w-16 h-2 bg-[#FDC827] border-2 border-[#141414] rounded-full rotate-45" />
      </div>
    ),
  },
  {
    id: "puff-puff-catch",
    title: "Puff Puff Catch",
    author: "Cee",
    bgColor: "bg-[#FBCFE8]",
    renderIllustration: () => (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Sparkle */}
        <span className="absolute top-4 left-6 text-xs text-[#141414]">✦</span>
        <span className="absolute bottom-5 right-8 text-xs text-[#141414]">✦</span>
        {/* Sun */}
        <div className="absolute top-4 left-10 w-7 h-7 rounded-full bg-[#FDC827] border-2 border-[#141414]" />
        {/* Bowl */}
        <div className="relative z-10 w-32 h-14 bg-[#78350F] border-[2.5px] border-[#141414] rounded-b-3xl flex items-center justify-center mt-6">
          {/* Puff puff balls */}
          <div className="absolute -top-5 flex gap-1">
            <div className="w-7 h-7 rounded-full bg-[#D97706] border-2 border-[#141414] shadow-sm -rotate-6" />
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] border-2 border-[#141414] shadow-sm -mt-2" />
            <div className="w-7 h-7 rounded-full bg-[#D97706] border-2 border-[#141414] shadow-sm rotate-6" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "suya-catcher",
    title: "Suya Catcher",
    author: "Vivian",
    bgColor: "bg-[#DDD6FE]",
    renderIllustration: () => (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Spices / dots */}
        <div className="absolute top-4 right-10 w-2 h-2 rounded-full bg-[#EF4444]" />
        <div className="absolute bottom-4 left-8 w-2 h-2 rounded-full bg-[#FDC827]" />
        {/* Skewer with meat chunks */}
        <div className="relative z-10 flex items-center rotate-[-25deg]">
          <div className="w-48 h-1.5 bg-[#78350F] border border-[#141414] rounded-full absolute" />
          <div className="flex gap-2 relative z-10 pl-6">
            <div className="w-7 h-6 rounded-md bg-[#991B1B] border-2 border-[#141414]" />
            <div className="w-7 h-6 rounded-md bg-[#7F1D1D] border-2 border-[#141414]" />
            <div className="w-7 h-6 rounded-md bg-[#991B1B] border-2 border-[#141414]" />
            <div className="w-8 h-8 rounded-full border-2 border-[#141414] bg-white flex items-center justify-center text-[10px] font-bold">
              🧅
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "okada-dodge",
    title: "Okada Dodge",
    author: "Abdul-Baaqi",
    bgColor: "bg-[#A7F3D0]",
    renderIllustration: () => (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Hills */}
        <div className="absolute bottom-6 left-0 right-0 flex">
          <div className="w-28 h-10 rounded-t-full bg-[#6EE7B7] border-t-2 border-[#141414]" />
          <div className="w-32 h-14 rounded-t-full bg-[#34D399] border-t-2 border-[#141414] -ml-6" />
        </div>
        {/* Okada with rider */}
        <div className="relative z-10 flex flex-col items-center -translate-x-3">
          {/* Helmet */}
          <div className="w-5 h-5 rounded-full bg-[#FDC827] border-2 border-[#141414] mb-[-4px] relative z-20" />
          {/* Body */}
          <div className="w-6 h-4 bg-[#EF4444] border-2 border-[#141414] rounded-sm mb-[-2px]" />
          {/* Bike */}
          <div className="w-16 h-6 bg-[#141414] rounded flex justify-between items-end px-0.5">
            <div className="w-5 h-5 rounded-full bg-white border-2 border-[#141414]" />
            <div className="w-5 h-5 rounded-full bg-white border-2 border-[#141414]" />
          </div>
        </div>
        {/* Traffic cone */}
        <div className="relative z-10 translate-x-8 translate-y-3">
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[18px] border-b-[#F97316] relative">
            <div className="absolute top-2 -left-1.5 w-3 h-1 bg-white" />
          </div>
          <div className="w-5 h-1.5 bg-[#141414] rounded-sm -mt-0.5" />
        </div>
        {/* Road line */}
        <div className="absolute bottom-4 left-0 right-0 h-1 bg-[#141414]" />
      </div>
    ),
  },
  {
    id: "zobo-sort",
    title: "Zobo Sort",
    author: "Aishajoda",
    bgColor: "bg-[#FEF08A]",
    renderIllustration: () => (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <span className="absolute top-4 left-6 text-xs text-[#141414]">✦</span>
        <span className="absolute top-4 right-6 text-xs text-[#141414]">✦</span>
        {/* Shelf with 3 bottles */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex gap-3 items-end mb-[-2px]">
            {/* Bottle 1 */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-2 bg-white border border-[#141414]" />
              <div className="w-6 h-12 rounded-t-lg bg-[#831843] border-2 border-[#141414]" />
            </div>
            {/* Bottle 2 */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-2 bg-white border border-[#141414]" />
              <div className="w-6 h-12 rounded-t-lg bg-[#991B1B] border-2 border-[#141414]" />
            </div>
            {/* Bottle 3 */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-2 bg-white border border-[#141414]" />
              <div className="w-6 h-12 rounded-t-lg bg-[#581C87] border-2 border-[#141414]" />
            </div>
          </div>
          {/* Wooden shelf */}
          <div className="w-36 h-2.5 bg-[#78350F] border-2 border-[#141414] rounded-sm" />
        </div>
      </div>
    ),
  },
];

export default function HomeGameCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {HOME_GAMES.map((game) => (
        <div
          key={game.id}
          className="group bg-white rounded-3xl border-[3px] border-[#141414] shadow-[4px_4px_0px_#141414] overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#141414]"
        >
          {/* Illustration Area */}
          <div className={`h-40 sm:h-44 ${game.bgColor} border-b-[3px] border-[#141414] relative`}>
            {game.renderIllustration()}
          </div>

          {/* Card Info Area */}
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="font-display font-extrabold text-lg text-[#141414] leading-tight group-hover:text-[#D97706] transition-colors">
                {game.title}
              </h3>
              <p className="text-xs text-[#141414]/60 font-medium">by {game.author}</p>
            </div>

            {/* Play Button Icon */}
            <Link
              href={`/games`}
              className="w-9 h-9 rounded-full bg-[#FDC827] border-2 border-[#141414] shadow-[2px_2px_0px_#141414] flex items-center justify-center transition-transform group-hover:scale-110"
              aria-label={`Play ${game.title}`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#141414" className="translate-x-[1px]">
                <polygon points="6,4 20,12 6,20" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

