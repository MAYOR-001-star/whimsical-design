import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ControllerCharacter from "@/components/controller-character";
import HomeHeroIllustration from "@/components/home-hero-illustration";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8EE]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10 w-full flex-1">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="inline-block px-3 py-1 rounded-full bg-[#141414] text-white text-[10px] sm:text-xs font-bold tracking-wider mb-4">
              ABOUT START.NG
            </span>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#141414] leading-[1.1] mb-6">
              Nigeria&apos;s home for{" "}
              <span className="inline-block bg-[#FDC827] border-[3px] border-[#141414] rounded-2xl px-3 py-0.5 shadow-[2px_2px_0px_#141414]">
                browser games.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#141414]/80 leading-relaxed font-medium mb-4 max-w-xl">
              Built by the HNG community. Every game is free to play in your
              browser with no download, and many are made in Naija: danfo rush
              hour, jollof catching, Lagos markets and more.
            </p>

            <p className="text-sm sm:text-base text-[#141414]/70 leading-relaxed font-medium mb-8 max-w-xl">
              We&apos;re also building a vibrant home for web games from creators
              across Africa. Anyone with HTML, JavaScript, three.js or Phaser
              can deploy in minutes.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/games"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FDC827] text-[#141414] font-display font-bold text-sm sm:text-base border-2 border-[#141414] shadow-[3px_3px_0px_#141414] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#141414] transition-all"
              >
                Explore games <span>→</span>
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#141414] font-display font-bold text-sm sm:text-base border-2 border-[#141414] shadow-[3px_3px_0px_#141414] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#141414] transition-all"
              >
                Build with us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <ControllerCharacter />
          </div>
        </div>

        {/* Pillars / Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#BAE6FD] rounded-3xl border-[3px] border-[#141414] shadow-[4px_4px_0px_#141414] p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white border-2 border-[#141414] flex items-center justify-center text-xl mb-4 shadow-sm">
                ⚡
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#141414] mb-2">
                Instant play
              </h3>
              <p className="text-xs sm:text-sm text-[#141414]/80 leading-relaxed font-medium">
                No app stores, no 2 GB updates. Open any game link on your
                phone or laptop and start playing in under 2 seconds.
              </p>
            </div>
          </div>

          <div className="bg-[#FBCFE8] rounded-3xl border-[3px] border-[#141414] shadow-[4px_4px_0px_#141414] p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white border-2 border-[#141414] flex items-center justify-center text-xl mb-4 shadow-sm">
                🍲
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#141414] mb-2">
                Unapologetically African
              </h3>
              <p className="text-xs sm:text-sm text-[#141414]/80 leading-relaxed font-medium">
                From Danfo buses in Lagos traffic to Suya grills in Abuja and
                Okada dodging, these games celebrate culture with humor and style.
              </p>
            </div>
          </div>

          <div className="bg-[#A7F3D0] rounded-3xl border-[3px] border-[#141414] shadow-[4px_4px_0px_#141414] p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white border-2 border-[#141414] flex items-center justify-center text-xl mb-4 shadow-sm">
                🚀
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#141414] mb-2">
                Empowering Creators
              </h3>
              <p className="text-xs sm:text-sm text-[#141414]/80 leading-relaxed font-medium">
                Push to GitHub, trigger the API, and your game gets its own
                subdomain, global leaderboard, and audience for free.
              </p>
            </div>
          </div>
        </div>

        {/* Big Illustration Section */}
        <div className="bg-[#FDC827] rounded-3xl border-[3.5px] border-[#141414] shadow-[6px_6px_0px_#141414] p-8 sm:p-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#141414] mb-4">
              Join the community
            </h2>
            <p className="text-sm sm:text-base text-[#141414]/85 leading-relaxed font-medium mb-6">
              Whether you are an aspiring game developer, a veteran indie builder,
              or someone looking for quick games to brighten your afternoon,
              start.ng is for you.
            </p>
            <Link
              href="/hangout"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#141414] font-display font-bold text-sm border-2 border-[#141414] shadow-[3px_3px_0px_#141414] hover:bg-[#FEF08A] transition-colors"
            >
              Meet everyone in The Hangout <span>→</span>
            </Link>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <HomeHeroIllustration />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
