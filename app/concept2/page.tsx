import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              SEASONAL
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/destinations" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Destinations
              </Link>
              <Link href="/residences" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Residences
              </Link>
              <Link href="/experiences" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Experiences
              </Link>
              <button className="px-6 py-2.5 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        
        <div className="relative z-10 w-full px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6">
                  Luxury Short-Term Rentals
                </p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
                  Live
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                    Seasonally
                  </span>
                </h1>
                <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
                  Premium residences in the world's most desirable destinations. 
                  Designed for those who demand excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-white text-black font-semibold hover:bg-white/90 transition-all">
                    Explore Residences
                  </button>
                  <button className="px-8 py-4 border border-white/30 text-white font-semibold hover:border-white hover:bg-white/5 transition-all">
                    Watch Film
                  </button>
                </div>
              </div>
              
              {/* Stats */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { number: '8', label: 'Curated Residences' },
                    { number: '3', label: 'Cities' },
                    { number: '4.9', label: 'Guest Rating' },
                    { number: '100%', label: 'Verified' },
                  ].map((stat) => (
                    <div key={stat.label} className="border-l-2 border-amber-500/50 pl-6">
                      <p className="text-5xl font-bold text-white mb-2">{stat.number}</p>
                      <p className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-white/50" />
        </div>
      </section>

      {/* Featured Property - Full Bleed */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-neutral-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Featured Residence
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">West Village Gem</h2>
            </div>
            <p className="text-white/50 hidden md:block">New York City</p>
          </div>
          
          <div className="aspect-[21/9] bg-neutral-800 rounded-lg overflow-hidden mb-8">
            <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800" />
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-bold">3</p>
                <p className="text-white/50 text-sm">Bedrooms</p>
              </div>
              <div>
                <p className="text-3xl font-bold">2</p>
                <p className="text-white/50 text-sm">Bathrooms</p>
              </div>
              <div>
                <p className="text-3xl font-bold">6</p>
                <p className="text-white/50 text-sm">Guests</p>
              </div>
            </div>
            <button className="px-8 py-3 bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Destinations
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Setting
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            From urban sophistication to serene escapes, find the perfect backdrop for your next chapter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'New York City', properties: '5 Residences', image: 'from-neutral-800 to-neutral-700' },
            { name: 'The Hamptons', properties: '2 Residences', image: 'from-amber-900/30 to-neutral-800' },
            { name: 'Las Vegas', properties: '1 Residence', image: 'from-purple-900/30 to-neutral-800' },
          ].map((dest) => (
            <div key={dest.name} className="group cursor-pointer relative overflow-hidden rounded-lg">
              <div className={`aspect-[3/4] bg-gradient-to-br ${dest.image} group-hover:scale-105 transition-transform duration-700`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-amber-400 text-sm font-semibold mb-2">{dest.properties}</p>
                <h3 className="text-2xl font-bold">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6">
                The SEASONAL Experience
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Every Detail
                <br />
                Considered
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Curated Furnishings', desc: 'Each residence features carefully selected furniture and art that reflects its unique character.' },
                  { title: 'Concierge Service', desc: 'From restaurant reservations to private chefs, our team ensures every need is met.' },
                  { title: 'Flexible Stays', desc: 'Whether it\'s a week or a season, stay on your terms with fully-equipped homes.' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-white/50">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="text-amber-500 text-6xl mb-8">"</div>
        <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8 text-white/90">
          An amazing location, and a charming apartment. The host was extremely 
          friendly and communicative. I'd recommend the experience to any solo 
          traveler, wanting to experience Greenwich Village.
        </blockquote>
        <div>
          <p className="font-semibold text-lg">Julian</p>
          <p className="text-white/50">The Diplomat #4, New York City</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-r from-amber-500 to-amber-600 text-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience SEASONAL?
          </h2>
          <p className="text-xl text-black/70 mb-10">
            Join our community of discerning travelers who choose exceptional stays.
          </p>
          <button className="px-12 py-4 bg-black text-white font-semibold hover:bg-black/80 transition-colors">
            Browse Residences
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <p className="text-2xl font-bold mb-6">SEASONAL</p>
              <p className="text-white/50 text-sm leading-relaxed">
                Premium short-term rentals for the modern traveler.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4 text-white/70">Explore</p>
              <ul className="space-y-3 text-sm text-white/50">
                <li><Link href="/destinations" className="hover:text-white">Destinations</Link></li>
                <li><Link href="/residences" className="hover:text-white">Residences</Link></li>
                <li><Link href="/experiences" className="hover:text-white">Experiences</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4 text-white/70">Company</p>
              <ul className="space-y-3 text-sm text-white/50">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/press" className="hover:text-white">Press</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4 text-white/70">Connect</p>
              <ul className="space-y-3 text-sm text-white/50">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
            <p>&copy; 2026 SEASONAL. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white/70">Privacy</Link>
              <Link href="/terms" className="hover:text-white/70">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
