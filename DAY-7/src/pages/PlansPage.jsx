import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Phone, Wifi, MessageSquare, Calendar, CheckCircle, ArrowRight, Zap, Star, Home } from 'lucide-react';

const PlansPage = () => {
  const { user, logout } = useAppContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('individual');

  const plans = [
    {
      id: 1,
      name: 'Airtel Max 551',
      price: 551,
      validity: 28,
      data: '90 GB + Unlimited Night Data',
      dataDetail: '12 AM to 6 AM',
      rollover: 'upto 200 GB rollover data',
      calls: 'Unlimited',
      callsDetail: 'Local, STD, National Roaming',
      sms: '3000 SMS/Month',
      smsDetail: 'Local, STD, National Roaming',
      fiveG: true,
      benefits: 'Choose any 2 complimentary benefits',
      featured: false,
      badge: 'STARTER',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Airtel Max 751',
      price: 751,
      validity: 28,
      data: '150 GB + Unlimited Night Data',
      dataDetail: '12 AM to 6 AM',
      rollover: 'upto 200 GB rollover data',
      calls: 'Unlimited',
      callsDetail: 'Local, STD, National Roaming',
      sms: '3000 SMS/Month',
      smsDetail: 'Local, STD, National Roaming',
      fiveG: true,
      benefits: 'Choose any 3 complimentary benefits',
      featured: true,
      badge: 'POPULAR',
      color: 'white',
    },
    {
      id: 3,
      name: 'REDX 1201',
      price: 1201,
      validity: 28,
      data: 'Unlimited Data',
      dataDetail: 'unlimited 5G data in 5G coverage area',
      rollover: null,
      calls: 'Unlimited',
      callsDetail: 'Local, STD, National Roaming',
      sms: '3000 SMS/Month',
      smsDetail: 'Local, STD, National Roaming',
      fiveG: true,
      benefits: 'Fully Loaded',
      featured: false,
      badge: 'PREMIUM',
      color: 'dark',
    },
    {
      id: 4,
      name: 'Super Value',
      price: 399,
      validity: 56,
      data: '2.5 GB/day',
      dataDetail: 'High speed data',
      rollover: 'upto 100 GB rollover data',
      calls: 'Unlimited',
      callsDetail: 'Local, STD, National Roaming',
      sms: '100 SMS/day',
      smsDetail: 'Local, STD, National Roaming',
      fiveG: true,
      benefits: null,
      featured: false,
      badge: 'VALUE',
      color: 'green',
    },
    {
      id: 5,
      name: 'Ultra Pack',
      price: 599,
      validity: 84,
      data: '3 GB/day',
      dataDetail: 'High speed 4G/5G data',
      rollover: 'upto 150 GB rollover data',
      calls: 'Unlimited',
      callsDetail: 'Local, STD, National Roaming',
      sms: 'Unlimited',
      smsDetail: 'Local, STD, National Roaming',
      fiveG: true,
      benefits: null,
      featured: false,
      badge: 'RECOMMENDED',
      color: 'purple',
    },
    {
      id: 6,
      name: 'Max Unlimited',
      price: 999,
      validity: 84,
      data: '4 GB/day',
      dataDetail: 'Ultra high speed data',
      rollover: 'upto 250 GB rollover data',
      calls: 'Unlimited',
      callsDetail: 'Local, STD, National Roaming',
      sms: 'Unlimited',
      smsDetail: 'Local, STD, National Roaming',
      fiveG: true,
      benefits: 'Premium benefits included',
      featured: false,
      badge: 'MAX',
      color: 'red',
    },
  ];

  const familyPlans = [
    {
      id: 7,
      name: 'Family Basic 899',
      price: 899,
      validity: 28,
      data: '2GB/day per member (4 members)',
      dataDetail: 'Total 240 GB for family',
      rollover: 'upto 100 GB rollover data',
      calls: 'Unlimited',
      callsDetail: 'Local, STD, National Roaming',
      sms: '3000 SMS/Month per member',
      smsDetail: 'Local, STD, National Roaming',
      fiveG: true,
      benefits: 'Family sharing enabled',
      featured: false,
      badge: 'FAMILY',
      color: 'blue',
    },
    {
      id: 8,
      name: 'Family Premium 1299',
      price: 1299,
      validity: 28,
      data: '3GB/day per member (4 members)',
      dataDetail: 'Total 360 GB for family',
      rollover: 'upto 150 GB rollover data',
      calls: 'Unlimited',
      callsDetail: 'Local, STD, National Roaming',
      sms: 'Unlimited',
      smsDetail: 'Local, STD, National Roaming',
      fiveG: true,
      benefits: 'Choose any 2 complimentary benefits per member',
      featured: true,
      badge: 'POPULAR',
      color: 'white',
    },
    {
      id: 9,
      name: 'Family Max 1999',
      price: 1999,
      validity: 56,
      data: 'Unlimited Data per member',
      dataDetail: 'unlimited 5G data for all 4 members',
      rollover: null,
      calls: 'Unlimited',
      callsDetail: 'Local, STD, National Roaming',
      sms: 'Unlimited',
      smsDetail: 'Local, STD, National Roaming',
      fiveG: true,
      benefits: 'Fully Loaded for Family',
      featured: false,
      badge: 'PREMIUM',
      color: 'dark',
    },
  ];

  const currentPlans = activeTab === 'individual' ? plans : familyPlans;

  const handlePlanSelect = (plan) => {
    // Navigate to payment with plan details
    navigate('/payment', { state: { plan } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-airtel-red to-airtel-darkRed shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-airtel-red font-bold text-xl">A</span>
              </div>
              <span className="text-white text-xl font-bold">Airtel Recharge</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center gap-2 bg-white text-airtel-red px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Choose Your <span className="bg-gradient-to-r from-airtel-red to-pink-600 bg-clip-text text-transparent">Perfect Plan</span>
          </h1>
          <p className="text-gray-600 text-xl">Unlock unlimited possibilities with our premium recharge plans</p>
          
          {/* Plan Tabs */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setActiveTab('individual')}
              className={`px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                activeTab === 'individual'
                  ? 'bg-gradient-to-r from-airtel-red to-airtel-darkRed text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Individual plans
            </button>
            <button 
              onClick={() => setActiveTab('family')}
              className={`px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                activeTab === 'family'
                  ? 'bg-gradient-to-r from-airtel-red to-airtel-darkRed text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Family plans
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden perspective-1000 hover:-translate-y-3 animate-fade-in ${
                plan.color === 'dark'
                  ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
                  : 'bg-white border-2 border-gray-200 hover:border-airtel-red'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge/Benefits Header */}
              {plan.benefits && (
                <div className={`py-3 px-6 font-bold text-sm text-center ${
                  plan.color === 'dark'
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900'
                    : 'bg-gradient-to-r from-airtel-yellow to-yellow-400 text-gray-900'
                }`}>
                  {plan.benefits}
                </div>
              )}

              <div className="p-8">
                {/* 5G Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-sm font-bold ${plan.color === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                    unlimited 5G
                  </span>
                  {plan.featured && (
                    <span className="ml-auto">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </span>
                  )}
                </div>

                {/* Plan Name */}
                <h3 className={`text-3xl font-bold mb-2 ${plan.color === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.color === 'dark' ? 'text-white' : 'text-airtel-red'}`}>
                    ₹{plan.price}
                  </span>
                  <span className={`text-lg ${plan.color === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${plan.color === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

                {/* Features List */}
                <div className="space-y-5 mb-8">
                  {/* Calls */}
                  <div className="flex items-start gap-3">
                    <Phone className={`w-5 h-5 mt-1 flex-shrink-0 ${plan.color === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                    <div>
                      <p className={`font-semibold ${plan.color === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {plan.calls}
                      </p>
                      <p className={`text-sm ${plan.color === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {plan.callsDetail}
                      </p>
                    </div>
                  </div>

                  {/* Data */}
                  <div className="flex items-start gap-3">
                    <Wifi className={`w-5 h-5 mt-1 flex-shrink-0 ${plan.color === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                    <div>
                      <p className={`font-semibold ${plan.color === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {plan.data}
                      </p>
                      {plan.dataDetail && (
                        <p className={`text-sm ${plan.color === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {plan.dataDetail}
                        </p>
                      )}
                      {plan.rollover && (
                        <p className={`text-sm mt-1 ${plan.color === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {plan.rollover}
                        </p>
                      )}
                      {plan.fiveG && (
                        <div className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          plan.color === 'dark' 
                            ? 'bg-blue-900/30 text-blue-300' 
                            : 'bg-blue-50 text-blue-700'
                        }`}>
                          unlimited 5G data in 5G coverage area
                        </div>
                      )}
                    </div>
                  </div>

                  {/* SMS */}
                  <div className="flex items-start gap-3">
                    <MessageSquare className={`w-5 h-5 mt-1 flex-shrink-0 ${plan.color === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                    <div>
                      <p className={`font-semibold ${plan.color === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {plan.sms}
                      </p>
                      <p className={`text-sm ${plan.color === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {plan.smsDetail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits Icons */}
                {plan.id <= 3 && (
                  <div className="flex gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      plan.color === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                    }`}>
                      <Zap className="w-6 h-6 text-airtel-red" />
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      plan.color === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                    }`}>
                      <Star className="w-6 h-6 text-yellow-500" />
                    </div>
                    {plan.id === 3 && (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        plan.color === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                      }`}>
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                    )}
                  </div>
                )}

                {/* Expand Details */}
                {plan.color === 'dark' && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-400">with the plan you will get</p>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    plan.color === 'dark'
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                      : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                  }`}
                >
                  proceed with ₹{plan.price} plan
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-airtel-red/0 to-pink-600/0 group-hover:from-airtel-red/5 group-hover:to-pink-600/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <Zap className="w-12 h-12 text-airtel-red mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-6">
              Our experts are here to help you find the perfect plan for your needs. 
              Get personalized recommendations based on your usage patterns.
            </p>
            <button className="bg-gradient-to-r from-airtel-red to-pink-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Talk to an Expert
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Airtel Recharge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PlansPage;
