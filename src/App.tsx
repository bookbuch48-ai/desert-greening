import { useState } from 'react'

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d4f4f] via-[#1a5f5f] to-[#0d3d3d]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920')] bg-cover bg-center opacity-30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Desert Greening
        </h1>
        <p className="text-xl md:text-2xl text-[#c2b280] mb-4 font-light">
          Integrale Umweltheilung nach Wilhelm Reich
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Wir verwandeln Wüsten in blühende Landschaften – durch die sanfte Kraft der Orgonenergie und im Einklang mit der Natur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#mission" className="px-8 py-4 bg-[#228b22] hover:bg-[#1a6b1a] text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Unsere Mission
          </a>
          <a href="#spenden" className="px-8 py-4 bg-[#d4af37] hover:bg-[#c4a030] text-[#0d4f4f] font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Jetzt Unterstützen
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

// Stats Section
function Stats() {
  const stats = [
    { number: '2016', label: 'Projektstart' },
    { number: '1000+', label: 'Bäume gepflanzt' },
    { number: '50ha', label: 'Begrünte Fläche' },
    { number: '100+', label: 'Unterstützer' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0d4f4f] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4f4f] mb-6">
              Über das Projekt
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Zu Beginn war nur trockenes Land, Wüste und DOR – stagnierende Energiefelder und gleißende Hitze. Durch die Arbeit mit Orgonenergie nach Wilhelm Reich entsteht ein natürlicher Wetterzyklus.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Seit 2016 werden die erstaunlichen Vorteile dieser Technik im Rahmen des Modellprojekts <strong>Djanan</strong> immer deutlicher. Es geht nicht darum, die Natur zu zwingen, sondern um die behutsame Behandlung von Verspannungen – ähnlich wie bei einer Akupunkturbehandlung.
            </p>
            <blockquote className="border-l-4 border-[#228b22] pl-4 italic text-gray-600 my-6">
              "Aufgrund der brisanten umwelt-politischen Entwicklungen entschied ich mich, die Technik der Sphärenharmonie weltweit zum Wohle der Umwelt und Menschheit zugänglich zu machen."
            </blockquote>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800" 
              alt="Grüne Oase in der Wüste" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#0d4f4f] text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Prof. Bernd Senf</div>
              <div className="text-[#c2b280]">Wissenschaftliche Begleitung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Mission Section
function Mission() {
  const benefits = [
    {
      icon: '🌱',
      title: 'Erhöhte Biodiversität',
      description: 'Wiederherstellung natürlicher Ökosysteme und Artenvielfalt'
    },
    {
      icon: '💧',
      title: 'Natürlicher Wasserkreislauf',
      description: 'Bäume speichern Wasser und schaffen ein Mikroklima'
    },
    {
      icon: '🛡️',
      title: 'Schutz vor Geoengineering',
      description: 'Neutralisierung von Schäden und energetischen Blockaden'
    },
    {
      icon: '👨‍🌾',
      title: 'Bessere Lebensbedingungen',
      description: 'Erhöhte landwirtschaftliche Erträge und Einkommensmöglichkeiten'
    },
  ]

  return (
    <section id="mission" className="py-20 bg-[#0d4f4f] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Mission</h2>
          <p className="text-xl text-[#c2b280] max-w-3xl mx-auto">
            Die Umwelt von Schäden auf bioenergetischer Ebene heilen und Natur sowie Lebewesen in Einklang bringen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Project Gallery
function Projects() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600', alt: 'Vorher: Wüste' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600', alt: 'Nachher: Grüne Landschaft' },
    { src: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=600', alt: 'Baumpflanzung' },
    { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600', alt: 'Naturschutz' },
  ]

  return (
    <section id="projekte" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d4f4f] mb-4">Das Djanan Projekt</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eine Vision von Marokko bis Saudi-Arabien – damit der Himmel die Erde wieder küssen kann.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white p-4 font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Donation Section
function Donate() {
  const [amount, setAmount] = useState<number | null>(null)
  const amounts = [25, 50, 100, 250]

  return (
    <section id="spenden" className="py-20 bg-gradient-to-br from-[#228b22] to-[#0d4f4f] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Unterstützen Sie uns</h2>
        <p className="text-xl text-[#c2b280] mb-8">
          Jeder Beitrag hilft, unsere Vision einer grüneren Welt zu verwirklichen.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {amounts.map((a) => (
              <button
                key={a}
                onClick={() => setAmount(a)}
                className={`py-4 px-6 rounded-lg font-semibold transition-all ${
                  amount === a 
                    ? 'bg-[#0d4f4f] text-white shadow-lg scale-105' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {a}€
              </button>
            ))}
          </div>
          
          <div className="mb-6">
            <input
              type="number"
              placeholder="Anderer Betrag"
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#0d4f4f] focus:outline-none text-center text-xl"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <button className="w-full py-4 bg-[#d4af37] hover:bg-[#c4a030] text-[#0d4f4f] font-bold text-xl rounded-lg transition-all transform hover:scale-[1.02] shadow-lg">
            Jetzt Spenden {amount ? `(${amount}€)` : ''}
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Sichere Zahlung via PayPal, Kreditkarte oder Überweisung
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 bg-white/20 rounded-full p-1">
          <div className="bg-[#d4af37] h-4 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <p className="mt-4 text-[#c2b280]">
          <span className="text-2xl font-bold text-white">9.750€</span> von 15.000€ erreicht
        </p>
      </div>
    </section>
  )
}

// Supporters Section
function Supporters() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-[#0d4f4f] mb-8">Unterstützt von</h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-70">
          {['SEKEM', 'Penergetic', 'Red Med', 'Time-to-Do', 'NuovisoTV'].map((name) => (
            <div key={name} className="text-xl font-semibold text-gray-600 hover:text-[#0d4f4f] transition-colors cursor-pointer">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d4f4f] mb-4">Kontakt</h2>
          <p className="text-xl text-gray-600">
            Schließen Sie sich unserer Bewegung der Integralen Umweltheilung an.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#0d4f4f] focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#0d4f4f] focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Ihre Nachricht"
            rows={5}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#0d4f4f] focus:outline-none"
          ></textarea>
          <button className="w-full py-4 bg-[#0d4f4f] hover:bg-[#0a3d3d] text-white font-semibold rounded-lg transition-all">
            Nachricht Senden
          </button>
        </form>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0d4f4f] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Desert Greening</h3>
            <p className="text-gray-300">
              Integrale Umweltheilung nach Wilhelm Reich. Für eine grünere Zukunft.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-[#c2b280] transition-colors">Über uns</a></li>
              <li><a href="#mission" className="hover:text-[#c2b280] transition-colors">Mission</a></li>
              <li><a href="#projekte" className="hover:text-[#c2b280] transition-colors">Projekte</a></li>
              <li><a href="#spenden" className="hover:text-[#c2b280] transition-colors">Spenden</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Ihre E-Mail"
                className="flex-1 p-3 rounded-l-lg text-gray-800"
              />
              <button className="px-4 bg-[#d4af37] hover:bg-[#c4a030] rounded-r-lg font-semibold">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-gray-400">
          <p>© 2024 Desert Greening. Bleiben Sie wach, gesund und bewusst.</p>
        </div>
      </div>
    </footer>
  )
}

// Navigation
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d4f4f]/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-bold text-xl">🌿 Desert Greening</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Über uns</a>
            <a href="#mission" className="text-gray-300 hover:text-white transition-colors">Mission</a>
            <a href="#projekte" className="text-gray-300 hover:text-white transition-colors">Projekte</a>
            <a href="#kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</a>
            <a href="#spenden" className="px-4 py-2 bg-[#d4af37] hover:bg-[#c4a030] text-[#0d4f4f] font-semibold rounded-lg transition-all">
              Spenden
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#about" className="block py-2 text-gray-300 hover:text-white">Über uns</a>
            <a href="#mission" className="block py-2 text-gray-300 hover:text-white">Mission</a>
            <a href="#projekte" className="block py-2 text-gray-300 hover:text-white">Projekte</a>
            <a href="#kontakt" className="block py-2 text-gray-300 hover:text-white">Kontakt</a>
            <a href="#spenden" className="block py-2 px-4 bg-[#d4af37] text-[#0d4f4f] font-semibold rounded-lg text-center">
              Spenden
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

// Main App
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Mission />
      <Projects />
      <Donate />
      <Supporters />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
