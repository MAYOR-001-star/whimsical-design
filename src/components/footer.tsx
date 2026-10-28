import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#181816] text-[#A3A398] pt-14 pb-12 px-6 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-12">
          {/* Left Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-full bg-[#FDC827] border-2 border-white/90 shadow-[2px_2px_0px_#000] flex items-center justify-center">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="#141414"
                  className="translate-x-[1px]"
                >
                  <polygon points="5,3 20,12 5,21" />
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                start<span className="text-[#FDC827]">.ng</span>
              </span>
            </Link>
            <p className="text-xs text-[#A3A398] leading-relaxed">
              Nigeria&apos;s home for browser games, made by the community and by
              creators across Africa.
            </p>
          </div>

          {/* Right Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            {/* Play */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-bold text-[#FDC827] text-sm mb-1">Play</h4>
              <Link href="/games" className="hover:text-white transition-colors">
                All games
              </Link>
              <Link href="/tournament" className="hover:text-white transition-colors">
                Daily tournament
              </Link>
              <Link href="/leaderboard" className="hover:text-white transition-colors">
                Leaderboard
              </Link>
              <Link href="/categories" className="hover:text-white transition-colors">
                Categories
              </Link>
              <Link href="/hangout" className="hover:text-white transition-colors">
                The Hangout
              </Link>
            </div>

            {/* Make games */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-bold text-[#FDC827] text-sm mb-1">Make games</h4>
              <Link href="/creators" className="hover:text-white transition-colors">
                Independent creators
              </Link>
              <Link href="/docs" className="hover:text-white transition-colors">
                Build a game
              </Link>
              <Link href="/docs#ai" className="hover:text-white transition-colors">
                Docs for your AI (.md)
              </Link>
            </div>

            {/* About */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-bold text-[#FDC827] text-sm mb-1">About</h4>
              <Link href="/about" className="hover:text-white transition-colors">
                About start.ng
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Dotted Divider */}
        <div className="pt-6 border-t border-dotted border-[#3A3A34] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#73736C]">
          <span>© 2026 start.ng</span>
          <span>Games from Nigeria and across Africa.</span>
        </div>
      </div>
    </footer>
  );
}
