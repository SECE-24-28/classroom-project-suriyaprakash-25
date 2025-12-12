import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const PaymentPage = () => {
  const { user, addRecharge, addNotification } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state?.plan;

  // If no plan selected, show default plan
  const defaultPlan = {
    id: 0,
    name: 'Custom',
    price: 0,
    validity: 0,
    data: 'N/A',
    calls: 'N/A',
    sms: 'N/A'
  };

  const selectedPlan = plan || defaultPlan;

  const [paymentData, setPaymentData] = useState({
    phoneNumber: user.phoneNumber || '',
    paymentMethod: 'upi',
    upiId: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // Validate payment details
    if (paymentData.paymentMethod === 'upi' && !paymentData.upiId) {
      alert('Please enter UPI ID');
      return;
    }

    if (paymentData.paymentMethod === 'card') {
      if (!paymentData.cardNumber || !paymentData.cardName || !paymentData.cardExpiry || !paymentData.cardCvv) {
        alert('Please fill all card details');
        return;
      }
    }

    // Process payment (simulation)
    addRecharge({
      phoneNumber: paymentData.phoneNumber,
      plan: plan.name,
      amount: plan.price,
      validity: plan.validity,
      status: 'Success',
    });

    addNotification('Payment successful! Your recharge is activated.', 'success');
    
    // Redirect to plans page
    setTimeout(() => {
      navigate('/plans');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-airtel-red to-airtel-darkRed shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-airtel-red font-bold text-xl">A</span>
              </div>
              <span className="text-white text-xl font-bold">Airtel Recharge</span>
            </Link>
            <Link
              to="/plans"
              className="text-white hover:text-airtel-yellow transition-colors"
            >
              ← Back to Plans
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Complete Payment</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Plan Name:</span>
                    <span className="font-semibold text-gray-800">{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Mobile Number:</span>
                    <span className="font-semibold text-gray-800">{paymentData.phoneNumber}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Data:</span>
                    <span className="font-semibold text-gray-800">{selectedPlan.data}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Validity:</span>
                    <span className="font-semibold text-gray-800">{selectedPlan.validity} Days</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="text-xl font-bold text-gray-800">Total Amount:</span>
                  <span className="text-3xl font-bold text-airtel-red">₹{selectedPlan.price}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">✓ Plan Benefits</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• {selectedPlan.calls} Voice Calls</li>
                  <li>• {selectedPlan.sms} SMS</li>
                  <li>• {selectedPlan.data} High-Speed Data</li>
                  <li>• Valid for {selectedPlan.validity} Days</li>
                </ul>
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Details</h2>

              <form onSubmit={handlePayment} className="space-y-5">
                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={paymentData.phoneNumber}
                    onChange={handleChange}
                    maxLength="10"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-airtel-red focus:outline-none text-gray-800"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentData({ ...paymentData, paymentMethod: 'upi' })}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        paymentData.paymentMethod === 'upi'
                          ? 'bg-airtel-red text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      UPI
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentData({ ...paymentData, paymentMethod: 'card' })}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        paymentData.paymentMethod === 'card'
                          ? 'bg-airtel-red text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentData({ ...paymentData, paymentMethod: 'wallet' })}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        paymentData.paymentMethod === 'wallet'
                          ? 'bg-airtel-red text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Wallet
                    </button>
                  </div>
                </div>

                {/* UPI Payment */}
                {paymentData.paymentMethod === 'upi' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      UPI ID
                    </label>
                    <input
                      type="text"
                      name="upiId"
                      value={paymentData.upiId}
                      onChange={handleChange}
                      placeholder="example@upi"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-airtel-red focus:outline-none text-gray-800"
                    />
                  </div>
                )}

                {/* Card Payment */}
                {paymentData.paymentMethod === 'card' && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="16"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-airtel-red focus:outline-none text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={paymentData.cardName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-airtel-red focus:outline-none text-gray-800"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={paymentData.cardExpiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          maxLength="5"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-airtel-red focus:outline-none text-gray-800"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cardCvv"
                          value={paymentData.cardCvv}
                          onChange={handleChange}
                          placeholder="123"
                          maxLength="3"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-airtel-red focus:outline-none text-gray-800"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Wallet Payment */}
                {paymentData.paymentMethod === 'wallet' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <p className="text-blue-800 font-semibold">Select your wallet</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <button type="button" className="bg-white py-2 px-4 rounded border hover:bg-gray-50">
                        Paytm
                      </button>
                      <button type="button" className="bg-white py-2 px-4 rounded border hover:bg-gray-50">
                        PhonePe
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-airtel-red to-airtel-darkRed text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Pay ₹{selectedPlan.price}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  🔒 Secure payment powered by SSL encryption
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
