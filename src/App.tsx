import { useState } from 'react'

// Navigation
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d4f4f]/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img src="https://desert-greening.com/wp-content/uploads/2023/02/logo_white-1.webp" alt="Logo" className="h-10" />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Über uns</a>
            <a href="#technik" className="text-gray-300 hover:text-white transition-colors">Die Technik</a>
            <a href="#projekte" className="text-gray-300 hover:text-white transition-colors">Projekte</a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
            <a href="#spenden" className="px-4 py-2 bg-[#d4af37] hover:bg-[#c4a030] text-[#0d4f4f] font-semibold rounded-lg transition-all">
              Spenden
            </a>
          </div>

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

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#about" className="block py-2 text-gray-300 hover:text-white">Über uns</a>
            <a href="#technik" className="block py-2 text-gray-300 hover:text-white">Die Technik</a>
            <a href="#projekte" className="block py-2 text-gray-300 hover:text-white">Projekte</a>
            <a href="#team" className="block py-2 text-gray-300 hover:text-white">Team</a>
            <a href="#spenden" className="block py-2 px-4 bg-[#d4af37] text-[#0d4f4f] font-semibold rounded-lg text-center">
              Spenden
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section with Video
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d4f4f] via-[#1a5f5f] to-[#0d3d3d]" />
        <img 
          src="https://desert-greening.com/wp-content/uploads/2025/01/collage-transformed.webp" 
          alt="Desert Greening" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-lg md:text-xl text-[#c2b280] mb-4 italic">
          Zu Beginn war nur trockenes Land, Wüste und DOR, stagnierende Energiefelder und gleißende Hitze.
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Desert Greening
        </h1>
        <p className="text-xl md:text-2xl text-[#c2b280] mb-2">
          Integrale Umweltheilung nach Wilhelm Reich
        </p>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          Wiederbelebung der Natur, sanft und behutsam. Ein natürlicher Wetterzyklus entsteht.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#about" className="px-8 py-4 bg-[#228b22] hover:bg-[#1a6b1a] text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Mehr erfahren
          </a>
          <a href="#spenden" className="px-8 py-4 bg-[#d4af37] hover:bg-[#c4a030] text-[#0d4f4f] font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Jetzt Unterstützen
          </a>
        </div>

        {/* YouTube Video */}
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <div className="relative pb-[56.25%]">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/HICTotQw8G4" 
              title="Desert Greening"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

// Bekannt aus Section
function BekanntAus() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <img 
          src="https://desert-greening.com/wp-content/uploads/2025/06/bekannt-aus.png" 
          alt="Bekannt aus" 
          className="w-full max-w-4xl mx-auto opacity-70"
        />
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
              Bäume machen den Boden für den Regen aufnahmefähig. Wasser wird gespeichert, ein Mikroklima entsteht.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Eine revolutionäre Technik</strong>, die nicht nur unsere Umwelt regeneriert, sondern uns auch vor den Gefahren des Geoengineerings schützt.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Seit 2016 werden die erstaunlichen Vorteile dieser Technik im Rahmen des <strong>Modellprojekts Djanan</strong> immer deutlicher und tragen sich heute bereits von selbst. Dabei geht es nicht darum, die Natur mit Raketen in die Knie zu zwingen, sondern vielmehr um die behutsame Behandlung von Verspannungen – ähnlich wie bei einer Akupunkturbehandlung.
            </p>
            <blockquote className="border-l-4 border-[#228b22] pl-4 italic text-gray-600 my-6">
              „Aufgrund der brisanten umwelt-politischen Entwicklungen entschied ich mich, mich einer wichtigen globalen Aufgabe zu widmen, die Technik der Sphärenharmonie weltweit zum Wohle der Umwelt, Menschheit und der Natur global allen zugänglich zu machen"
            </blockquote>
            <p className="text-sm text-gray-500">— Stand 2004 – 2016</p>
          </div>
          <div className="space-y-4">
            <img 
              src="https://desert-greening.com/wp-content/uploads/2022/12/2-1.jpeg" 
              alt="Djanan Projekt" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://desert-greening.com/wp-content/uploads/2022/12/3-1.jpeg" 
                alt="Projekt Bild" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://desert-greening.com/wp-content/uploads/2022/12/2-3.png" 
                alt="Projekt Bild" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Prof. Bernd Senf Section
function BerndSenf() {
  return (
    <section className="py-16 bg-[#0d4f4f] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-xl italic text-[#c2b280] mb-4">Von</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prof. Bernd Senf</h2>
        <p className="text-lg text-gray-300 mb-8">
          Hilfe zur Selbsthilfe vor Ort.<br/>
          <strong className="text-white">Eine Vision von Marokko bis Saudi-Arabien!</strong>
        </p>
        <p className="text-2xl font-light text-[#c2b280] italic">
          „Damit der Himmel die Erde wieder küssen kann"
        </p>
      </div>
    </section>
  )
}

// Mission Section
function Mission() {
  const benefits = [
    {
      icon: '🌱',
      title: 'Erhöhung der biologischen Vielfalt',
      description: 'Wiederherstellung natürlicher Ökosysteme'
    },
    {
      icon: '🌿',
      title: 'Gesündere Pflanzen',
      description: 'Verbesserung der Vegetation und Atmosphäre'
    },
    {
      icon: '🌳',
      title: 'Bodenstabilisierung',
      description: 'Das Wurzelwerk der Bäume stabilisiert den Boden und macht ihn aufnahmefähig'
    },
    {
      icon: '🛡️',
      title: 'Neutralisierung von Geoengineering',
      description: 'Auflösung energetischer Blockaden (DOR) und Pflanzen von Bäumen'
    },
    {
      icon: '👨‍🌾',
      title: 'Bessere Lebensbedingungen',
      description: 'Erhöhte Niederschlagsmenge, landwirtschaftliche Erträge und gestärkte lokale Wirtschaft'
    },
  ]

  return (
    <section id="technik" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d4f4f] mb-4">Unsere Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Die Umwelt von Schäden des Geoengineering auf bioenergetischer Ebene heilen und Natur und Lebewesen in Einklang bringen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-[#0d4f4f] mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-[#0d4f4f] font-medium">
            Die Integrale Umweltheilung mittels Orgonenergie ist eine Chance, unseren Planeten und uns selbst zu heilen und eine nachhaltigere Zukunft zu gestalten.
          </p>
        </div>
      </div>
    </section>
  )
}

// Inspiration Gallery
function Gallery() {
  const images = [
    'https://desert-greening.com/wp-content/uploads/2023/12/insp4.webp',
    'https://desert-greening.com/wp-content/uploads/2023/12/insp5.webp',
    'https://desert-greening.com/wp-content/uploads/2023/12/insp3-1.webp',
  ]

  return (
    <section id="projekte" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d4f4f] mb-4">Das Djanan Projekt</h2>
          <p className="text-xl text-gray-600">
            Djanan wurde mit Hilfe von zahlreichen Projekten unterstützt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={src} 
                alt={`Projekt ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Team Section
function Team() {
  const team = [
    { name: 'Elisabeth', image: 'https://desert-greening.com/wp-content/uploads/2024/11/Elisabeth.webp' },
    { name: 'Andrea', image: 'https://desert-greening.com/wp-content/uploads/2024/11/Andrea.webp' },
    { name: 'Andreas Röthlisberger', image: 'https://desert-greening.com/wp-content/uploads/2024/11/Andreas-Roethlisberger-scaled-1.webp' },
    { name: 'Lis', image: 'https://desert-greening.com/wp-content/uploads/2024/11/Lis.webp' },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d4f4f] mb-4">Unser Team</h2>
          <p className="text-gray-600">Die Menschen hinter Desert Greening</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-[#0d4f4f]">{member.name}</h3>
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
        <p className="text-xl text-[#c2b280] mb-2">
          Schließe dich unserer dynamischen Bewegung der Integralen-Umweltheilung an
        </p>
        <p className="text-gray-300 mb-8">
          und helfen uns, das Gleichgewicht in unserer Umwelt wiederherzustellen.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-800 mb-8">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Ziel</p>
              <p className="text-2xl font-bold text-[#0d4f4f]">15.000 EUR</p>
              <p className="text-xs text-gray-400">Start: Dez 2022</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Ziel</p>
              <p className="text-2xl font-bold text-[#0d4f4f]">13.000 EUR</p>
              <p className="text-xs text-gray-400">Start: März 2023</p>
            </div>
          </div>

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
        </div>

        <p className="text-lg text-[#c2b280]">
          Bleiben Sie wach, gesund und bewusst
        </p>
      </div>
    </section>
  )
}

// Global Initiative Section
function GlobalInitiative() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Als weltweit tätige Initiative setzen wir uns für eine global regenerierte Umwelt ein. Mit jedem Projekt, das wir realisieren, tragen wir zur biologischen Regeneration und zum Schutz unserer Umwelt bei. Von Europa bis Asien und von Nordamerika bis Afrika – wir sind bestrebt, einen positiven Beitrag zu leisten. <strong>Seien Sie Teil unseres Engagements für eine gesunde Zukunft.</strong>
        </p>
      </div>
    </section>
  )
}

// Supporters Section
function Supporters() {
  const supporters = [
    { name: 'Seegespräche', url: 'http://www.seegespraeche.de/' },
    { name: 'NuovisoTV', url: 'http://steinzeit.nuoviso.tv/' },
    { name: 'SEKEM', url: 'http://www.sekem.com/en/index/' },
    { name: 'Penergetic', url: 'http://www.penergetic.com/' },
    { name: 'Red Med', url: 'http://www.redmed-group.com/en/' },
    { name: 'Time-to-Do', url: 'http://timetodo.ch/' },
    { name: 'Die Neue Erde', url: 'http://www.dieneueerde.de/' },
    { name: 'Mr. Water', url: 'http://www.misterwater.eu/' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-[#0d4f4f] mb-8">Unterstützt von</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {supporters.map((s, i) => (
            <a 
              key={i} 
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 hover:text-[#0d4f4f] transition-colors"
            >
              {s.name}
            </a>
          ))}
          <span className="text-gray-400">…und viele mehr</span>
        </div>
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
            <img src="https://desert-greening.com/wp-content/uploads/2023/02/logo_white-1.webp" alt="Logo" className="h-12 mb-4" />
            <p className="text-gray-300">
              Integrale Umweltheilung nach Wilhelm Reich
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-[#c2b280] transition-colors">Über uns</a></li>
              <li><a href="#technik" className="hover:text-[#c2b280] transition-colors">Die Technik</a></li>
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
          <p>© 2024 Desert Greening · Bleiben Sie wach, gesund und bewusst</p>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <BekanntAus />
      <About />
      <BerndSenf />
      <Mission />
      <Gallery />
      <Team />
      <Donate />
      <GlobalInitiative />
      <Supporters />
      <Footer />
    </div>
  )
}

export default App
