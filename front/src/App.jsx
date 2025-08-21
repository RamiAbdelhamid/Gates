import React, { useState, lazy, Suspense } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Shield, Zap, Settings, Users, Award, Star } from 'lucide-react';

// Lazy load components for better performance
const AboutUs = lazy(() => Promise.resolve({ 
  default: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Security Gate Electronics
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 15 years of experience in the security electronics industry, Security Gate Electronics Company has been at the forefront of providing cutting-edge security solutions for homes, businesses, and industrial facilities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to innovation, quality, and customer satisfaction has made us a trusted partner for thousands of clients across the region.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide reliable, innovative, and cost-effective security solutions that protect what matters most to our clients while delivering exceptional service and support.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Security First</h3>
              <p className="text-gray-600">Uncompromising commitment to your safety and security needs</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Premium products from trusted manufacturers worldwide</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional installation and 24/7 customer support</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <ul className="space-y-2">
                <li className="flex items-center"><Star className="w-5 h-5 mr-2" /> 15+ Years Experience</li>
                <li className="flex items-center"><Star className="w-5 h-5 mr-2" /> Licensed & Insured</li>
                <li className="flex items-center"><Star className="w-5 h-5 mr-2" /> 24/7 Support</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center"><Star className="w-5 h-5 mr-2" /> Free Consultations</li>
                <li className="flex items-center"><Star className="w-5 h-5 mr-2" /> Warranty Coverage</li>
                <li className="flex items-center"><Star className="w-5 h-5 mr-2" /> Competitive Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}));

const ContactUs = lazy(() => Promise.resolve({
  default: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+962 6 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-600">+962 79 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-red-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@securitygate.jo</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">Al-Abdali District, Amman, Jordan</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-gray-600">Sun-Thu: 8AM-6PM, Fri: 8AM-2PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Support</h3>
                <p className="mb-4">Need immediate assistance? Our emergency hotline is available 24/7</p>
                <p className="text-xl font-bold">🚨 +962 77 999 8888</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Our Location</h4>
                  <p className="text-gray-600">Al-Abdali District</p>
                  <p className="text-gray-600">Amman, Jordan</p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Interactive map would be embedded here</p>
                    <p className="text-sm text-gray-600">showing our exact location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Smart Security Camera System",
      image: "🎥",
      price: "Starting from $299",
      description: "4K Ultra HD cameras with night vision, motion detection, and smartphone app integration. Perfect for home and business surveillance.",
      features: ["4K Resolution", "Night Vision", "Motion Detection", "Mobile App", "Cloud Storage"]
    },
    {
      id: 2,
      name: "Biometric Access Control",
      image: "🔐",
      price: "Starting from $799",
      description: "Advanced fingerprint and facial recognition system for secure access control. Ideal for offices and restricted areas.",
      features: ["Fingerprint Scanner", "Face Recognition", "RFID Support", "Real-time Monitoring", "Multi-user Management"]
    },
    {
      id: 3,
      name: "Smart Alarm System",
      image: "🚨",
      price: "Starting from $199",
      description: "Wireless alarm system with sensors, sirens, and mobile notifications. Complete home security solution.",
      features: ["Wireless Sensors", "Mobile Alerts", "24/7 Monitoring", "Battery Backup", "Easy Installation"]
    },
    {
      id: 4,
      name: "Gate Automation System",
      image: "🚪",
      price: "Starting from $599",
      description: "Automated gate opening system with remote control, safety sensors, and manual override features.",
      features: ["Remote Control", "Safety Sensors", "Manual Override", "Weather Resistant", "Professional Installation"]
    },
    {
      id: 5,
      name: "Intercom System",
      image: "📞",
      price: "Starting from $149",
      description: "Video intercom system for buildings and homes. See and communicate with visitors before granting access.",
      features: ["Video Display", "Two-way Audio", "Door Release", "Night Vision", "Recording Capability"]
    },
    {
      id: 6,
      name: "Fire Detection System",
      image: "🔥",
      price: "Starting from $399",
      description: "Advanced fire detection and alarm system with smoke, heat, and carbon monoxide sensors.",
      features: ["Smoke Detection", "Heat Sensors", "CO Monitoring", "Emergency Alerts", "Professional Monitoring"]
    }
  ];

  const NavBar = () => (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => {
              setActiveSection('home');
              setIsMobileMenuOpen(false);
            }}
          >
            Security Gate Electronics
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize font-medium transition-colors duration-200 hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {section === 'home' ? 'Home' : section === 'about' ? 'About Us' : 'Contact Us'}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-lg border-t border-gray-200">
            {['home', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                }`}
              >
                {section === 'home' ? 'Home' : section === 'about' ? 'About Us' : 'Contact Us'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Secure Your
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Future</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
          Advanced security solutions for homes, businesses, and industrial facilities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <a 
            href="tel:+96261234567" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Phone className="inline w-5 h-5 mr-2" />
            Call Now
          </a>
          <a 
            href="https://wa.me/962791234567" 
            className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="inline w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
          {product.image}
        </div>
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Popular
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-blue-600 font-semibold text-lg mb-3">{product.price}</p>
        <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-800">Key Features:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="tel:+96261234567"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="inline w-4 h-4 mr-2" />
            Call to Order
          </a>
          <a 
            href="https://wa.me/962791234567"
            className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="inline w-4 h-4 mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );

  const ProductsSection = () => (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of security solutions designed to protect what matters most to you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Security Gate Electronics
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in security solutions for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+96261234567" className="text-blue-400 hover:text-blue-300">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://wa.me/962791234567" className="text-green-400 hover:text-green-300">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:info@securitygate.jo" className="text-red-400 hover:text-red-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => setActiveSection('home')} className="hover:text-white">Home</button></li>
              <li><button onClick={() => setActiveSection('about')} className="hover:text-white">About Us</button></li>
              <li><button onClick={() => setActiveSection('contact')} className="hover:text-white">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Security Cameras</li>
              <li>Access Control</li>
              <li>Alarm Systems</li>
              <li>Gate Automation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>📞 +962 6 123 4567</p>
              <p>📱 +962 79 123 4567</p>
              <p>📧 info@securitygate.jo</p>
              <p>📍 Al-Abdali District, Amman</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Security Gate Electronics Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <>
      <HeroSection />
      <ProductsSection />
    </>
  );

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main>
        {activeSection === 'home' && <HomePage />}
        {activeSection === 'about' && (
          <Suspense fallback={<LoadingSpinner />}>
            <AboutUs />
          </Suspense>
        )}
        {activeSection === 'contact' && (
          <Suspense fallback={<LoadingSpinner />}>
            <ContactUs />
          </Suspense>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;