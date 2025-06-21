import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function PaymentPage({ onBack }) {
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    cardholderName: '',
    country: 'India'
  });
  const [showCVC, setShowCVC] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + ' / ' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      cardNumber: formatted
    }));
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    setFormData(prev => ({
      ...prev,
      expiryDate: formatted
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Panel */}
      <div className="flex-1 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 p-8 flex flex-col justify-center items-start text-white">
        <div className="mb-8">
          <button className="flex items-center text-white/80 hover:text-white mb-8" onClick={onBack}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-semibold">S</span>
              </div>
              <span className="font-medium">Score PTE</span>
            </div>
          </button>
          
          <div className="space-y-4">
            <h1 className="text-lg font-medium text-white/90">Score PTE Pass Plan</h1>
            <div className="text-5xl font-light">US$199.00</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-white p-8 flex flex-col justify-center max-w-md">
        <div className="w-full max-w-sm mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Pay with card</h2>
          
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Card Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card information
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 1234 1234 1234"
                  maxLength="19"
                  className="w-full px-3 py-3 border border-gray-300 rounded-t-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-20"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE2IiByeD0iNCIgZmlsbD0iIzAwNTFBNSIvPgo8cGF0aCBkPSJNOC45MiA4SDEyLjE2VjkuMjhIOC45MlY4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTguOTIgMTAuNTZIMTIuMTZWMTEuODRIOC45MlYxMC41NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="Visa" className="w-6 h-4" />
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE2IiByeD0iNCIgZmlsbD0iI0VCMDAxQiIvPgo8Y2lyY2xlIGN4PSI5IiBjeT0iOCIgcj0iMyIgZmlsbD0iI0ZGNUYwMCIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjgiIHI9IjMiIGZpbGw9IiNGRkY1RjAiLz4KPC9zdmc+" alt="Mastercard" className="w-6 h-4" />
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE2IiByeD0iNCIgZmlsbD0iIzAwNkZDRiIvPgo8cGF0aCBkPSJNNiA2SDhWMTBINlY2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE2IDZIMThWMTBIMTZWNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="American Express" className="w-6 h-4" />
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE2IiByeD0iNCIgZmlsbD0iIzAwMDA3NyIvPgo8cGF0aCBkPSJNOCA2SDEwVjEwSDhWNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNCA2SDE2VjEwSDE0VjZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="Union Pay" className="w-6 h-4" />
                </div>
              </div>
              
              <div className="flex">
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleExpiryChange}
                  placeholder="MM / YY"
                  maxLength="7"
                  className="flex-1 px-3 py-3 border border-gray-300 border-t-0 rounded-bl-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <div className="relative flex-1">
                  <input
                    type={showCVC ? "text" : "password"}
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    placeholder="CVC"
                    maxLength="4"
                    className="w-full px-3 py-3 border border-gray-300 border-t-0 border-l-0 rounded-br-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCVC(!showCVC)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showCVC ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Cardholder Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cardholder name
              </label>
              <input
                type="text"
                name="cardholderName"
                value={formData.cardholderName}
                onChange={handleInputChange}
                placeholder="Full name on card"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country or region
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                required
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            {/* Pay Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Pay
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <div className="mb-2">Powered by <span className="font-semibold text-gray-700">stripe</span></div>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray-700">Terms</a>
              <a href="#" className="hover:text-gray-700">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 