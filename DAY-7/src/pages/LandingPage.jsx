import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Zap, Shield, CreditCard, Gift, Phone, Wifi, MessageSquare, Clock, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  const { user } = useAppContext();

  // Image carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&h=400&fit=crop'
  ];

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-airtel-red to-airtel-darkRed rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Airtel Recharge</span>
            </div>
            <div className="flex items-center space-x-4">
              {user.isLoggedIn ? (
                <>
                  <span className="text-gray-700 hidden sm:block">Hi, {user.name}</span>
                  <Link
                    to="/plans"
                    className="bg-gradient-to-r from-airtel-red to-airtel-darkRed text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
                  >
                    My Plans
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-airtel-red text-sm font-semibold hover:text-airtel-darkRed transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-airtel-red to-airtel-darkRed text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Image Carousel Palette */}
      <section className="relative h-[300px] overflow-hidden bg-gray-900">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
        
        {/* Carousel Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">
              Connect Without Limits
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-200">
              Premium mobile recharge experience at your fingertips
            </p>
            <Link
              to="/plans"
              className="inline-block bg-gradient-to-r from-airtel-red to-airtel-darkRed text-white px-8 py-3 rounded-full text-base font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Explore Plans
            </Link>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-airtel-red w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-airtel-red via-airtel-darkRed to-red-900 text-white py-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-airtel-yellow rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-20 h-20 border-4 border-white/20 rounded-lg rotate-45 animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-40 right-32 w-16 h-16 border-4 border-airtel-yellow/30 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-60 right-20 w-12 h-12 bg-white/10 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">Trusted by 10 Million+ Users Worldwide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight animate-fade-in">
              Recharge Made
              <br />
              <span className="bg-gradient-to-r from-airtel-yellow via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                Effortless
              </span>
            </h1>
            <p className="text-base md:text-lg mb-8 text-gray-100 font-light leading-relaxed animate-fade-in-delay max-w-2xl mx-auto">
              Experience lightning-fast mobile recharges with <span className="font-bold text-airtel-yellow">exclusive offers</span> and instant activation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/plans"
                className="group relative bg-airtel-yellow text-airtel-red px-8 py-3 rounded-full text-base font-bold overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-airtel-yellow/50 hover:-translate-y-2 hover:scale-105"
              >
                <span className="relative z-10">View Recharge Plans</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
              <Link
                to="/plans"
                className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/50 px-8 py-3 rounded-full text-base font-bold hover:bg-white/20 transition-all duration-300 hover:border-white hover:-translate-y-1"
              >
                Browse Plans →
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-2">
                  <Users className="w-10 h-10 text-airtel-yellow" />
                </div>
                <div className="text-2xl font-bold mb-1">10M+</div>
                <div className="text-xs text-gray-200">Happy Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-2">
                  <Shield className="w-10 h-10 text-green-400" />
                </div>
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-xs text-gray-200">Secure Payments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-2">
                  <Clock className="w-10 h-10 text-blue-400" />
                </div>
                <div className="text-2xl font-bold mb-1">&lt;5 Sec</div>
                <div className="text-sm text-gray-200">Instant Activation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Why Choose Airtel Recharge?
            </h2>
            <p className="text-base text-gray-600">Experience the best-in-class recharge service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center border-2 border-transparent hover:border-airtel-red relative overflow-hidden perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-airtel-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 transform-style-3d group-hover:rotate-y-12 transition-transform duration-700">
                <div className="w-16 h-16 bg-gradient-to-br from-airtel-red to-airtel-darkRed rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-airtel-red transition-colors">Instant Recharge</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Get your recharge activated within seconds. No waiting, no delays.</p>
              </div>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center border-2 border-transparent hover:border-green-500 relative overflow-hidden perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 transform-style-3d group-hover:rotate-y-12 transition-transform duration-700">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">100% Secure</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Bank-grade encryption ensures your transactions are always safe.</p>
              </div>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center border-2 border-transparent hover:border-blue-500 relative overflow-hidden perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 transform-style-3d group-hover:rotate-y-12 transition-transform duration-700">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Multiple Payments</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Pay via UPI, Cards, Wallets - whatever suits you best.</p>
              </div>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center border-2 border-transparent hover:border-airtel-yellow relative overflow-hidden perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-airtel-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 transform-style-3d group-hover:rotate-y-12 transition-transform duration-700">
                <div className="w-16 h-16 bg-gradient-to-br from-airtel-yellow to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">Best Offers</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Exclusive cashback deals and rewards on every recharge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Plans Preview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Popular Recharge Plans
            </h2>
            <p className="text-base text-gray-600">Choose from our most loved plans</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-airtel-red hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden perspective-1000 hover:rotate-y-5">
              <div className="absolute inset-0 bg-gradient-to-br from-airtel-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">STARTER</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-airtel-red to-airtel-darkRed bg-clip-text text-transparent">₹99</span>
                  <span className="text-gray-500 text-sm">/28 days</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </span>
                    <span className="text-sm font-medium">1 GB/day Data</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </span>
                    <span className="text-sm font-medium">Unlimited Calls</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </span>
                    <span className="text-sm font-medium">100 SMS/day</span>
                  </li>
                </ul>
                <Link
                  to="/plans"
                  className="block w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg text-sm font-bold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Plan 2 - Featured */}
            <div className="bg-gradient-to-br from-airtel-red via-red-600 to-airtel-darkRed text-white rounded-2xl p-6 shadow-2xl transform scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-airtel-yellow/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-airtel-yellow to-yellow-400 text-airtel-red px-8 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  ⭐ MOST POPULAR
                </div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 mt-2">RECOMMENDED</div>
                <h3 className="text-2xl font-bold mb-3">Popular</h3>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold">₹199</span>
                  <span className="text-gray-200 text-sm">/28 days</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-airtel-yellow rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-airtel-red" />
                    </span>
                    <span className="font-semibold">1.5 GB/day Data</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-airtel-yellow rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-airtel-red" />
                    </span>
                    <span className="font-semibold">Unlimited Calls</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-airtel-yellow rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-airtel-red" />
                    </span>
                    <span className="font-semibold">Unlimited SMS</span>
                  </li>
                </ul>
                <Link
                  to="/plans"
                  className="block w-full bg-gradient-to-r from-airtel-yellow to-yellow-400 text-airtel-red py-3 rounded-lg text-sm font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-airtel-red hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden perspective-1000 hover:rotate-y-5">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">PREMIUM</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">₹299</span>
                  <span className="text-gray-500 text-sm">/56 days</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </span>
                    <span className="text-sm font-medium">2 GB/day Data</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </span>
                    <span className="text-sm font-medium">Unlimited Calls</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </span>
                    <span className="text-sm font-medium">Unlimited SMS</span>
                  </li>
                </ul>
                <Link
                  to="/plans"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg text-sm font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Select Plan
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/plans"
              className="inline-block bg-gradient-to-r from-airtel-red to-airtel-darkRed text-white px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-all"
            >
              View All Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gradient-to-br from-airtel-yellow to-yellow-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Exclusive Benefits Just for You
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Gift className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Welcome Bonus</h4>
                      <p className="text-gray-700 text-sm">Get 10% cashback on your first recharge</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Refer & Earn</h4>
                      <p className="text-gray-700 text-sm">Earn ₹50 for every friend you refer</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">Loyalty Rewards</h4>
                      <p className="text-gray-700 text-sm">Unlock exclusive rewards with every recharge</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to Start?</h3>
                <p className="text-gray-600 text-sm mb-4">Join millions of satisfied customers today!</p>
                <Link
                  to="/signup"
                  className="block w-full bg-gradient-to-r from-airtel-red to-airtel-darkRed text-white py-3 rounded-lg text-sm font-bold text-center hover:shadow-xl transition-all"
                >
                  Create Free Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-airtel-red to-airtel-darkRed rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold">Airtel Recharge</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for fast and secure mobile recharges.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/plans" className="hover:text-white transition-colors">Recharge Plans</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Airtel Recharge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
