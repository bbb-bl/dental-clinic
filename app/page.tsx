'use client';

import { 
  Smile, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award,
  Shield,
  Star,
  ChevronRight,
  Check,
  Calendar,
  Users,
  Heart,
  Sparkles
} from 'lucide-react';

export default function Home() {
  const treatments = [
    {
      icon: Smile,
      title: 'General Dentistry',
      description: 'Comprehensive oral health care including cleanings, exams, and preventive treatments.',
      price: 'From €60',
    },
    {
      icon: Sparkles,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile.',
      price: 'From €250',
    },
    {
      icon: Award,
      title: 'Cosmetic Dentistry',
      description: 'Veneers, bonding, and smile makeovers to enhance your natural beauty.',
      price: 'From €400',
    },
    {
      icon: Shield,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions with natural-looking results.',
      price: 'From €1,200',
    },
    {
      icon: Heart,
      title: 'Orthodontics',
      description: 'Braces and clear aligners to straighten teeth and improve bite alignment.',
      price: 'From €2,500',
    },
    {
      icon: Users,
      title: 'Emergency Care',
      description: 'Same-day appointments for urgent dental issues and pain relief.',
      price: 'From €80',
    },
  ];

  const features = [
    { icon: Award, text: 'Over 15 years of experience' },
    { icon: Shield, text: 'State-of-the-art equipment' },
    { icon: Star, text: '5-star patient reviews' },
    { icon: Heart, text: 'Gentle, caring approach' },
  ];

  const priceList = [
    { service: 'Dental Examination', price: '€60' },
    { service: 'Dental Cleaning (Hygiene)', price: '€80' },
    { service: 'Tooth Filling (Composite)', price: '€90 - €150' },
    { service: 'Root Canal Treatment', price: '€300 - €600' },
    { service: 'Tooth Extraction', price: '€80 - €200' },
    { service: 'Teeth Whitening (Professional)', price: '€250 - €450' },
    { service: 'Dental Crown (Porcelain)', price: '€600 - €900' },
    { service: 'Dental Implant (Complete)', price: '€1,200 - €2,500' },
    { service: 'Veneers (Per Tooth)', price: '€400 - €800' },
    { service: 'Invisalign Treatment', price: '€2,500 - €5,000' },
    { service: 'Traditional Braces', price: '€2,500 - €4,500' },
    { service: 'Emergency Dental Visit', price: '€80 - €150' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-dental-blue to-dental-accent p-2 rounded-lg">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-dental-blue font-display">BrightSmile</h1>
                <p className="text-xs text-gray-600">Dental Clinic</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-dental-blue transition">Services</a>
              <a href="#prices" className="text-gray-700 hover:text-dental-blue transition">Prices</a>
              <a href="#about" className="text-gray-700 hover:text-dental-blue transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-dental-blue transition">Contact</a>
            </div>
            <a href="#contact" className="bg-dental-blue text-white px-6 py-3 rounded-lg hover:bg-dental-light transition flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-dental-cream via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display leading-tight">
                Your Perfect <span className="gradient-text">Smile</span> Starts Here
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience world-class dental care with our team of expert dentists. 
                We combine advanced technology with compassionate care to give you the smile you deserve.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-dental-blue text-white px-8 py-4 rounded-lg hover:bg-dental-light transition flex items-center space-x-2 text-lg font-semibold">
                  <span>Schedule Appointment</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#prices" className="border-2 border-dental-blue text-dental-blue px-8 py-4 rounded-lg hover:bg-dental-blue hover:text-white transition text-lg font-semibold">
                  View Prices
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-dental-accent/10 p-2 rounded-lg">
                      <feature.icon className="w-5 h-5 text-dental-blue" />
                    </div>
                    <span className="text-sm text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-dental-blue via-dental-light to-dental-accent flex items-center justify-center">
                  <Smile className="w-48 h-48 text-white/20" />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Star className="w-8 h-8 text-green-600 fill-current" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600">Patient Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Our Treatments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-gray-200 hover:border-dental-accent hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-dental-blue/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-dental-blue group-hover:scale-110 transition-all duration-300">
                  <treatment.icon className="w-8 h-8 text-dental-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{treatment.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{treatment.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-dental-blue">{treatment.price}</span>
                  <ChevronRight className="w-5 h-5 text-dental-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-dental-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No hidden fees. Just honest, upfront pricing for quality dental care.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-dental-blue to-dental-light p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Price List</h3>
              <p className="text-blue-100">All prices are indicative and may vary based on individual needs</p>
            </div>
            <div className="divide-y divide-gray-200">
              {priceList.map((item, index) => (
                <div key={index} className="p-6 hover:bg-blue-50 transition-colors flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-lg text-gray-900 font-medium">{item.service}</span>
                  </div>
                  <span className="text-xl font-bold text-dental-blue">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-6 text-center">
              <p className="text-gray-600 mb-4">Have questions about pricing or insurance?</p>
              <a href="#contact" className="inline-flex items-center space-x-2 bg-dental-blue text-white px-6 py-3 rounded-lg hover:bg-dental-light transition">
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Why Choose BrightSmile?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience, our team is dedicated to providing exceptional dental care 
                in a comfortable, modern environment. We use the latest technology and techniques to ensure 
                the best possible outcomes for our patients.
              </p>
              <div className="space-y-4">
                {[
                  'Experienced and certified dental professionals',
                  'State-of-the-art digital equipment',
                  'Flexible payment plans available',
                  'Emergency appointments available',
                  'Multilingual staff (English, Spanish, Catalan)',
                  'Child-friendly environment'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-dental-blue to-dental-light p-8 rounded-2xl text-white">
                <Users className="w-12 h-12 mb-4" />
                <p className="text-4xl font-bold mb-2">10,000+</p>
                <p className="text-blue-100">Happy Patients</p>
              </div>
              <div className="bg-gradient-to-br from-dental-accent to-dental-light p-8 rounded-2xl text-white mt-6">
                <Award className="w-12 h-12 mb-4" />
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-blue-100">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-dental-light to-dental-accent p-8 rounded-2xl text-white -mt-6">
                <Star className="w-12 h-12 mb-4 fill-current" />
                <p className="text-4xl font-bold mb-2">4.9/5</p>
                <p className="text-blue-100">Average Rating</p>
              </div>
              <div className="bg-gradient-to-br from-dental-blue/90 to-dental-blue p-8 rounded-2xl text-white">
                <Shield className="w-12 h-12 mb-4" />
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-blue-100">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-dental-cream to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Visit Us</h2>
            <p className="text-xl text-gray-600">We're here to help you smile with confidence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-dental-blue/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-dental-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Address</p>
                      <p className="text-gray-600">Carrer de Barcelona, 45</p>
                      <p className="text-gray-600">08190 Sant Cugat del Vallès</p>
                      <p className="text-gray-600">Barcelona, Spain</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-dental-blue/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-dental-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <p className="text-gray-600">+34 936 745 123</p>
                      <p className="text-gray-600">+34 691 234 567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-dental-blue/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-dental-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <p className="text-gray-600">info@brightsmile-dental.com</p>
                      <p className="text-gray-600">appointments@brightsmile-dental.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-dental-blue/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-dental-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Opening Hours</p>
                      <div className="space-y-1 text-gray-600">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-red-600 font-semibold mt-2">Emergency: 24/7 Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Book an Appointment</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent outline-none"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Treatment</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent outline-none">
                      <option>General Check-up</option>
                      <option>Teeth Cleaning</option>
                      <option>Teeth Whitening</option>
                      <option>Dental Implants</option>
                      <option>Orthodontics</option>
                      <option>Emergency</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent outline-none"
                      placeholder="Any additional information..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-dental-blue text-white px-6 py-4 rounded-lg hover:bg-dental-light transition font-semibold text-lg"
                  >
                    Submit Appointment Request
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="bg-white p-4 rounded-2xl shadow-lg h-full">
                <div className="aspect-square bg-gradient-to-br from-dental-blue to-dental-accent rounded-xl flex items-center justify-center relative overflow-hidden">
                  <MapPin className="w-32 h-32 text-white/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-2xl font-bold mb-2">Find Us Here</p>
                      <p className="text-blue-100">Sant Cugat del Vallès</p>
                      <p className="text-blue-100">Barcelona, Spain</p>
                      <a 
                        href="https://maps.google.com/?q=Sant+Cugat+del+Vallès+Barcelona" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 bg-white text-dental-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-6 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Easy to Reach</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>5 min walk from FGC Sant Cugat station</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Free parking available nearby</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Wheelchair accessible entrance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dental-blue text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Smile className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">BrightSmile</h3>
                  <p className="text-sm text-blue-200">Dental Clinic</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm">
                Your trusted partner for comprehensive dental care in Sant Cugat del Vallès.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#prices" className="hover:text-white transition">Prices</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li>General Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Orthodontics</li>
                <li>Dental Implants</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-blue-200">
                <li>+34 936 745 123</li>
                <li>info@brightsmile-dental.com</li>
                <li>Sant Cugat del Vallès</li>
                <li>Barcelona, Spain</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-blue-200">
            <p>&copy; 2026 BrightSmile Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
