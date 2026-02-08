import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f4]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-xl font-medium tracking-[0.15em] text-stone-900">
              SEASONAL
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/destinations" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
                Destinations
              </Link>
              <Link href="/residences" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
                Residences
              </Link>
              <Link href="/experiences" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
                Experiences
              </Link>
              <button className="px-6 py-2.5 bg-stone-900 text-[#f8f7f4] text-sm hover:bg-stone-800 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.4em] text-stone-500 mb-6 uppercase">
                Curated Short-Term Rentals
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 leading-[1.05] mb-8">
                Where Nordic
                <br />
                <span className="font-normal">Meets Urban</span>
              </h1>
              <p className="text-lg text-stone-600 mb-10 max-w-lg leading-relaxed">
                A refined collection of residences blending Scandinavian simplicity 
                with metropolitan sophistication. Designed for modern living.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3.5 bg-stone-900 text-[#f8f7f4] text-sm tracking-wider hover:bg-stone-800 transition-all">
                  EXPLORE RESIDENCES
                </button>
                <button className="px-8 py-3.5 border border-stone-300 text-stone-700 text-sm tracking-wider hover:border-stone-900 hover:text-stone-900 transition-all">
                  WATCH FILM
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-12 mt-16 pt-8 border-t border-stone-200">
                {[
                  { num: '8', label: 'Residences' },
                  { num: '3', label: 'Cities' },
                  { num: '4.9', label: 'Rating' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-light text-stone-900">{stat.num}</p>
                    <p className="text-sm text-stone-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Image Grid */}
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm" />
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-sm" />
                </div>
                <div className="pt-12">
                  <div className="aspect-[3/4] bg-gradient-to-br from-stone-300 to-stone-400 rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Property Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm" />
            <div>
              <p className="text-xs tracking-[0.4em] text-stone-500 mb-4 uppercase">
                Featured Residence
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">
                West Village Gem
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                A sun-drenched townhouse in one of Manhattan's most coveted neighborhoods. 
                Thoughtfully renovated with warm oak floors, bespoke furnishings, and 
                floor-to-ceiling windows overlooking tree-lined streets.
              </p>
              <div className="flex gap-8 mb-10">
                {[
                  { num: '3', label: 'Bedrooms' },
                  { num: '2.5', label: 'Baths' },
                  { num: '6', label: 'Guests' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-light text-stone-900">{stat.num}</p>
                    <p className="text-sm text-stone-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <button className="px-8 py-3.5 bg-stone-900 text-[#f8f7f4] text-sm tracking-wider hover:bg-stone-800 transition-all">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] text-stone-500 mb-4 uppercase">Destinations</p>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900">
            Choose Your Setting
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'New York City', count: '5 residences', color: 'from-stone-300 to-stone-400' },
            { name: 'The Hamptons', count: '2 residences', color: 'from-amber-100 to-amber-200' },
            { name: 'Las Vegas', count: '1 residence', color: 'from-orange-100 to-orange-200' },
          ].map((dest) => (
            <div key={dest.name} className="group cursor-pointer">
              <div className={`aspect-[3/4] bg-gradient-to-br ${dest.color} mb-6 rounded-sm group-hover:shadow-xl transition-shadow duration-500`} />
              <p className="text-xs tracking-[0.2em] text-stone-500 mb-2 uppercase">{dest.count}</p>
              <h3 className="text-2xl font-light text-stone-900">{dest.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-stone-900 text-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] text-stone-400 mb-6 uppercase">
                The SEASONAL Experience
              </p>
              <h2 className="text-4xl md:text-5xl font-light mb-12 leading-tight">
                Every Detail
                <br />
                Considered
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Thoughtful Design', desc: 'Each space curated with intention, blending form and function.' },
                  { title: 'Premium Locations', desc: 'Handpicked neighborhoods offering the best of each city.' },
                  { title: 'Seamless Stays', desc: 'From booking to checkout, every moment is effortless.' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full border border-stone-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-normal mb-1">{feature.title}</h3>
                      <p className="text-stone-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-stone-800 to-stone-700 rounded-sm" />
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.4em] text-stone-500 mb-4 uppercase">Curated Homes</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900">
              Residences
            </h2>
          </div>
          <Link href="/residences" className="hidden md:block text-sm text-stone-600 hover:text-stone-900 border-b border-stone-300 pb-1">
            View All
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'West Village Gem', location: 'New York City', type: 'Townhouse' },
            { name: 'The Diplomat #1', location: 'New York City', type: 'Apartment' },
            { name: 'The Diplomat #4', location: 'New York City', type: 'Penthouse' },
          ].map((property) => (
            <div key={property.name} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 to-stone-300 mb-6 rounded-sm overflow-hidden">
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="text-xs tracking-[0.2em] text-stone-500 mb-2 uppercase">{property.type}</p>
              <h3 className="text-xl font-normal text-stone-900 mb-1">{property.name}</h3>
              <p className="text-sm text-stone-600">{property.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] text-stone-500 mb-12 uppercase">What Our Guests Say</p>
        <blockquote className="text-2xl md:text-3xl font-light text-stone-900 leading-relaxed mb-8">
          "A wonderful host who communicated in a very timely manner before our arrival, 
          welcomed us warmly, stayed in touch during our stay to make sure we were OK, 
          and provided us with everything we could possibly wish for."
        </blockquote>
        <div className="text-stone-600">
          <p className="font-normal">Marion</p>
          <p className="text-sm">The Diplomat #1, New York City</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#e8e6e1]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">
            Find Your Seasonal Home
          </h2>
          <p className="text-lg text-stone-600 mb-10">
            Whether it's a week or a season, discover a space designed for how you live.
          </p>
          <button className="px-10 py-4 bg-stone-900 text-[#f8f7f4] text-sm tracking-wider hover:bg-stone-800 transition-all">
            START EXPLORING
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-8 bg-stone-900 text-[#f8f7f4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <p className="text-xl tracking-[0.15em] mb-6">SEASONAL</p>
              <p className="text-stone-400 text-sm leading-relaxed">
                Curated residences for every season of life.
              </p>
            </div>
            <div>
              <p className="text-sm tracking-wider mb-4 text-stone-300">Explore</p>
              <ul className="space-y-3 text-sm text-stone-400">
                <li><Link href="/destinations" className="hover:text-[#f8f7f4]">Destinations</Link></li>
                <li><Link href="/residences" className="hover:text-[#f8f7f4]">Residences</Link></li>
                <li><Link href="/experiences" className="hover:text-[#f8f7f4]">Experiences</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm tracking-wider mb-4 text-stone-300">Company</p>
              <ul className="space-y-3 text-sm text-stone-400">
                <li><Link href="/about" className="hover:text-[#f8f7f4]">About</Link></li>
                <li><Link href="/contact" className="hover:text-[#f8f7f4]">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-[#f8f7f4]">Careers</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm tracking-wider mb-4 text-stone-300">Connect</p>
              <ul className="space-y-3 text-sm text-stone-400">
                <li><a href="#" className="hover:text-[#f8f7f4]">Instagram</a></li>
                <li><a href="#" className="hover:text-[#f8f7f4]">Twitter</a></li>
                <li><a href="#" className="hover:text-[#f8f7f4]">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>&copy; 2026 SEASONAL. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-stone-300">Privacy</Link>
              <Link href="/terms" className="hover:text-stone-300">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
