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
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="flex-1 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-start text-white min-h-[40vh] lg:min-h-screen">
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <button className="flex items-center text-white/80 hover:text-white mb-6 lg:mb-8" onClick={onBack}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 overflow-hidden">
                <div className="w-7 h-7 bg-white/40 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-800">SP</span>
                </div>
              </div>
              <span className="font-medium">Score PTE</span>
            </div>
          </button>
          <div className="space-y-4">
            <h1 className="text-lg sm:text-xl font-medium text-white/90">Score PTE Pass Plan</h1>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-light">US$199.00</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-white p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <div className="w-full max-w-sm mx-auto">
          {/* Payment Info Box */}
          <div className="w-full mb-6 lg:mb-8">
            <div className="bg-red-800 rounded-lg px-4 sm:px-6 py-4 sm:py-5 text-center">
              <span className="text-white text-sm sm:text-base lg:text-lg font-semibold leading-tight">
                Kindly pay via TransferWise, Remitly, or Western Union
              </span>
            </div>
          </div>

          {/* Account Details Section */}
          <div className="w-full mb-6 lg:mb-8">
            <div className="bg-white border border-gray-200 rounded-lg px-4 sm:px-6 py-4 sm:py-5 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Receiver Account Details</h3>
              <div className="text-gray-700 text-xs sm:text-sm space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold min-w-0 sm:min-w-[120px]">Account Name:</span>
                  <span className="break-all">John Doe</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold min-w-0 sm:min-w-[120px]">Account Number:</span>
                  <span className="break-all">1234567890</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold min-w-0 sm:min-w-[120px]">Bank Name:</span>
                  <span className="break-all">Dummy Bank</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold min-w-0 sm:min-w-[120px]">IFSC Code:</span>
                  <span className="break-all">DUMM0001234</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold min-w-0 sm:min-w-[120px]">SWIFT Code:</span>
                  <span className="break-all">DUMMUS33</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold min-w-0 sm:min-w-[120px]">Country:</span>
                  <span className="break-all">India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Pay Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              Pay
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 lg:mt-8 text-center text-xs sm:text-sm text-gray-500">
            <div className="mb-2">Powered by <span className="font-semibold text-gray-700">Score PTE</span></div>
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