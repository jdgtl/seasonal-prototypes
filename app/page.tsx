import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="py-8 px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-[0.15em] text-stone-900">
            SEASONAL
          </h1>
          <p className="text-sm text-stone-500 hidden sm:block">
            UI/UX Design Exploration
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] text-stone-500 mb-6 uppercase">
          Design Concepts
        </p>
        <h1 className="text-4xl md:text-6xl font-light text-stone-900 mb-6 leading-tight">
          Three Approaches to
          <br />
          <span className="font-normal">Modern Luxury</span>
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Exploring the intersection of Minimal Scandinavian aesthetics and 
          Urban Luxury for the SEASONAL brand.
        </p>
      </section>

      {/* Concept Cards */}
      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Concept 1 */}
          <Link href="/concept1/" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-stone-200">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 p-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-extralight text-stone-400 mb-2">01</p>
                  <p className="text-xs tracking-[0.3em] text-stone-500 uppercase">Pure Nordic</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-stone-900 mb-2">Pure Nordic</h3>
                <p className="text-sm text-stone-600 mb-4">
                  Clean minimalism with warm whites, natural textures, and elegant typography.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Minimal</span>
                  <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Warm</span>
                  <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Elegant</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Concept 2 */}
          <Link href="/concept2/" className="group">
            <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold text-amber-500 mb-2">02</p>
                  <p className="text-xs tracking-[0.3em] text-amber-400 uppercase">Urban Luxe</p>
                </div>
              </div>
              <div className="p-6 border-t border-white/10">
                <h3 className="text-xl font-medium text-white mb-2">Urban Luxe</h3>
                <p className="text-sm text-white/60 mb-4">
                  Bold luxury with dramatic contrasts, amber accents, and metropolitan energy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">Bold</span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">Dramatic</span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">Modern</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Concept 3 */}
          <Link href="/concept3/" className="group">
            <div className="bg-[#f8f7f4] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-stone-200">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 via-amber-50 to-stone-300 p-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-light text-stone-600 mb-2">03</p>
                  <p className="text-xs tracking-[0.3em] text-stone-500 uppercase">Nordic City</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-stone-900 mb-2">Nordic City</h3>
                <p className="text-sm text-stone-600 mb-4">
                  The perfect fusion: Scandinavian warmth meets urban sophistication.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-stone-200 text-stone-600 text-xs rounded-full">Fusion</span>
                  <span className="px-3 py-1 bg-stone-200 text-stone-600 text-xs rounded-full">Balanced</span>
                  <span className="px-3 py-1 bg-stone-200 text-stone-600 text-xs rounded-full">Refined</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-8 border border-stone-200">
          <h2 className="text-2xl font-medium text-stone-900 mb-6">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-stone-900 mb-3 uppercase tracking-wider">Brand Direction</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                SEASONAL offers curated short-term rentals in NYC, The Hamptons, and Las Vegas. 
                The brand emphasizes tailored services, adjustable furnishings, and purpose-driven design.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-stone-900 mb-3 uppercase tracking-wider">Tech Stack</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li>• Next.js 14+ (App Router)</li>
                <li>• Tailwind CSS</li>
                <li>• TypeScript</li>
                <li>• Cloudflare Pages/Workers</li>
                <li>• Guesty API integration (ready)</li>
                <li>• Webflow CMS integration (ready)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-stone-500">
            SEASONAL UI/UX Prototypes • 2026
          </p>
        </div>
      </footer>
    </main>
  )
}
