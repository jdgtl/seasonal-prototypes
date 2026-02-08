import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/90 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-light tracking-[0.2em] text-stone-800">
              SEASONAL
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/destinations" className="text-sm tracking-wide text-stone-600 hover:text-stone-900 transition-colors">
                Destinations
              </Link>
              <Link href="/residences" className="text-sm tracking-wide text-stone-600 hover:text-stone-900 transition-colors">
                Residences
              </Link>
              <Link href="/experiences" className="text-sm tracking-wide text-stone-600 hover:text-stone-900 transition-colors">
                Experiences
              </Link>
              <button className="px-6 py-2.5 bg-stone-800 text-stone-50 text-sm tracking-wide hover:bg-stone-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100 to-stone-50" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-stone-500 mb-6 uppercase">
            Curated Homes For Every Season
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-stone-800 leading-[1.1] mb-8">
            A Home For
            <br />
            <span className="italic font-light">Every Season</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Tailored services, adjustable furnishings and purpose-driven design 
            ensure every stay is convenient, comfortable and accommodating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-stone-800 text-stone-50 text-sm tracking-widest hover:bg-stone-700 transition-all">
              EXPLORE RESIDENCES
            </button>
            <button className="px-10 py-4 border border-stone-300 text-stone-700 text-sm tracking-widest hover:border-stone-800 hover:text-stone-900 transition-all">
              OUR STORY
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafaf9] to-transparent" />
      </section>

      {/* Destinations Grid */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-stone-500 mb-4 uppercase">Destinations</p>
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800">
            A New Visit Awaits
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {['City', 'Beach & Lake', 'Mountain'].map((destination, i) => (
            <div key={destination} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-stone-200 mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-light text-stone-800 mb-2">{destination}</h3>
              <p className="text-stone-600 font-light">
                {i === 0 ? 'Urban sophistication in the heart of the city' : 
                 i === 1 ? 'Serene waterside escapes for relaxation' : 
                 'Elevated retreats with breathtaking views'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm tracking-[0.3em] text-stone-500 mb-4 uppercase">Curated Homes</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-stone-800">
                Residences Fit for Purpose
              </h2>
            </div>
            <Link href="/residences" className="hidden md:block text-sm tracking-wide text-stone-600 hover:text-stone-900 transition-colors border-b border-stone-300 pb-1">
              View All Residences
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: 'West Village Gem', location: 'New York City', type: 'City Residence' },
              { name: 'The Diplomat', location: 'New York City', type: 'City Residence' },
            ].map((property) => (
              <div key={property.name} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-stone-200 mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-500 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm tracking-wide text-stone-500 mb-2">{property.type}</p>
                    <h3 className="text-2xl font-light text-stone-800 mb-1">{property.name}</h3>
                    <p className="text-stone-600">{property.location}</p>
                  </div>
                  <button className="px-6 py-2 border border-stone-300 text-stone-700 text-sm tracking-wide hover:border-stone-800 hover:text-stone-900 transition-all">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] text-stone-500 mb-12 uppercase">What Our Guests Say</p>
        <blockquote className="text-3xl md:text-4xl font-extralight text-stone-800 leading-relaxed mb-8">
          "The place is amazing. The location is tucked back from the street and the street itself 
          is quaint, quiet, historical and beautiful. NYC can feel crowded and small, but our house 
          feels bright, airy and roomy."
        </blockquote>
        <div className="text-stone-600">
          <p className="font-medium">Beth</p>
          <p className="text-sm">West Village Gem, New York City</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6">
            Ready to Find Your Seasonal Home?
          </h2>
          <p className="text-lg text-stone-400 mb-12 font-light">
            Whatever the reason for your stay, find a perfectly suited home and experience.
          </p>
          <button className="px-12 py-4 bg-stone-50 text-stone-900 text-sm tracking-widest hover:bg-white transition-all">
            START EXPLORING
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <p className="text-2xl font-light tracking-[0.2em] text-stone-800 mb-6">SEASONAL</p>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                A curated collection of homes designed for every season of life.
              </p>
            </div>
            <div>
              <p className="text-sm tracking-wide text-stone-800 mb-4">Explore</p>
              <ul className="space-y-3 text-sm text-stone-600">
                <li><Link href="/destinations" className="hover:text-stone-900">Destinations</Link></li>
                <li><Link href="/residences" className="hover:text-stone-900">Residences</Link></li>
                <li><Link href="/experiences" className="hover:text-stone-900">Experiences</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm tracking-wide text-stone-800 mb-4">Company</p>
              <ul className="space-y-3 text-sm text-stone-600">
                <li><Link href="/about" className="hover:text-stone-900">About</Link></li>
                <li><Link href="/contact" className="hover:text-stone-900">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-stone-900">Careers</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm tracking-wide text-stone-800 mb-4">Connect</p>
              <ul className="space-y-3 text-sm text-stone-600">
                <li><a href="#" className="hover:text-stone-900">Instagram</a></li>
                <li><a href="#" className="hover:text-stone-900">Twitter</a></li>
                <li><a href="#" className="hover:text-stone-900">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>&copy; 2026 SEASONAL. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-stone-800">Privacy</Link>
              <Link href="/terms" className="hover:text-stone-800">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
