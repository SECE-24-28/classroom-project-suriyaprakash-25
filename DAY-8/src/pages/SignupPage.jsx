import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { User, Phone, Mail, Lock, CheckCircle, ArrowRight, Home, Sparkles } from 'lucide-react';

const SignupPage = () => {
  const { login } = useAppContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isFocused, setIsFocused] = useState({
    name: false,
    phone: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.phoneNumber.length !== 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Simulate signup and auto-login
    login(formData.name, formData.phoneNumber);
    navigate('/plans');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-airtel-red/90 via-white/30 to-airtel-darkRed/85"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-80 h-80 bg-airtel-yellow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Signup Container */}
      <div className="max-w-2xl w-full relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block group">
            <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center text-airtel-red text-4xl font-bold mx-auto mb-4 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              A
            </div>
          </Link>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-6 h-6 text-airtel-yellow animate-pulse" />
            <h2 className="text-4xl font-extrabold text-white animate-fade-in" style={{animationDelay: '0.1s'}}>
              Create Account
            </h2>
            <Sparkles className="w-6 h-6 text-airtel-yellow animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
          <p className="text-white/90 text-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
            Join Airtel Recharge today
          </p>
        </div>

        {/* Signup Form Card with Glassmorphism */}
        <div className="bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/30 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setIsFocused({ ...isFocused, name: true })}
                onBlur={() => setIsFocused({ ...isFocused, name: false })}
                placeholder="Enter your full name"
                required
                className={`w-full px-4 py-3 bg-white/30 backdrop-blur-md border-2 rounded-xl focus:outline-none transition-all duration-300 text-white placeholder-white/70 ${
                  isFocused.name ? 'border-airtel-yellow shadow-lg shadow-airtel-yellow/50 scale-105' : 'border-white/40'
                }`}
              />
            </div>

            {/* Phone Number */}
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Mobile Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onFocus={() => setIsFocused({ ...isFocused, phone: true })}
                onBlur={() => setIsFocused({ ...isFocused, phone: false })}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                required
                className={`w-full px-4 py-3 bg-white/30 backdrop-blur-md border-2 rounded-xl focus:outline-none transition-all duration-300 text-white placeholder-white/70 ${
                  isFocused.phone ? 'border-airtel-yellow shadow-lg shadow-airtel-yellow/50 scale-105' : 'border-white/40'
                }`}
              />
            </div>

            {/* Email */}
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setIsFocused({ ...isFocused, email: true })}
                onBlur={() => setIsFocused({ ...isFocused, email: false })}
                placeholder="Enter your email"
                required
                className={`w-full px-4 py-3 bg-white/30 backdrop-blur-md border-2 rounded-xl focus:outline-none transition-all duration-300 text-white placeholder-white/70 ${
                  isFocused.email ? 'border-airtel-yellow shadow-lg shadow-airtel-yellow/50 scale-105' : 'border-white/40'
                }`}
              />
            </div>

            {/* Password */}
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setIsFocused({ ...isFocused, password: true })}
                onBlur={() => setIsFocused({ ...isFocused, password: false })}
                placeholder="Create a password (min 6 characters)"
                required
                minLength="6"
                className={`w-full px-4 py-3 bg-white/30 backdrop-blur-md border-2 rounded-xl focus:outline-none transition-all duration-300 text-white placeholder-white/70 ${
                  isFocused.password ? 'border-airtel-yellow shadow-lg shadow-airtel-yellow/50 scale-105' : 'border-white/40'
                }`}
              />
            </div>

            {/* Confirm Password */}
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => setIsFocused({ ...isFocused, confirmPassword: true })}
                onBlur={() => setIsFocused({ ...isFocused, confirmPassword: false })}
                placeholder="Confirm your password"
                required
                className={`w-full px-4 py-3 bg-white/30 backdrop-blur-md border-2 rounded-xl focus:outline-none transition-all duration-300 text-white placeholder-white/70 ${
                  isFocused.confirmPassword ? 'border-airtel-yellow shadow-lg shadow-airtel-yellow/50 scale-105' : 'border-white/40'
                }`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full bg-gradient-to-r from-airtel-yellow to-yellow-400 text-airtel-red py-4 px-6 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-airtel-yellow/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 mt-2"
            >
              Create Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/25 text-white font-medium backdrop-blur-md rounded-full py-1">Already have an account?</span>
            </div>
          </div>

          {/* Login Link */}
          <Link
            to="/login"
            className="group block text-center text-white bg-white/20 backdrop-blur-md py-3 px-6 rounded-xl font-bold hover:bg-white/30 hover:scale-105 transition-all duration-300 border border-white/30"
          >
            Login to your account
            <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Feature Cards Below Form */}
        <div className="grid grid-cols-3 gap-4 mt-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-gradient-to-br from-airtel-yellow to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-airtel-red" />
            </div>
            <p className="text-white font-bold text-sm">Welcome Bonus</p>
            <p className="text-white/70 text-xs mt-1">Get ₹50 on signup</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <User className="w-6 h-6 text-white" />
            </div>
            <p className="text-white font-bold text-sm">Join Community</p>
            <p className="text-white/70 text-xs mt-1">10M+ users</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <p className="text-white font-bold text-sm">Easy Process</p>
            <p className="text-white/70 text-xs mt-1">Quick setup</p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-all duration-300 hover:gap-3 group"
          >
            <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
