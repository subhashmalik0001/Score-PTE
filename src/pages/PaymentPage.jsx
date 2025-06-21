import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import logo from '../assets/image.png';

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
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 overflow-hidden">
                <img src={logo} alt="Score PTE Logo" className="w-7 h-7 object-contain" />
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
          {/* Payment Info Box */}
          <div className="w-full mb-8">
            <div className="bg-red-800 rounded-lg px-6 py-5 text-center">
              <span className="text-white text-lg font-semibold">
                Kindly pay via TransferWise, Remitly, or Western Union
              </span>
            </div>
          </div>

          {/* Account Details Section */}
          <div className="w-full mb-8">
            <div className="bg-white border border-gray-200 rounded-lg px-6 py-5 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Receiver Account Details</h3>
              <div className="text-gray-700 text-sm space-y-1">
                <div><span className="font-semibold">Account Name:</span> John Doe</div>
                <div><span className="font-semibold">Account Number:</span> 1234567890</div>
                <div><span className="font-semibold">Bank Name:</span> Dummy Bank</div>
                <div><span className="font-semibold">IFSC Code:</span> DUMM0001234</div>
                <div><span className="font-semibold">SWIFT Code:</span> DUMMUS33</div>
                <div><span className="font-semibold">Country:</span> India</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Email */}
         

            {/* Card Information */}
            <div>
              
              
              
              <div className="flex">
               
                <div className="relative flex-1">
                 
                 
                </div>
              </div>
            </div>

            {/* Cardholder Name */}
      

            {/* Country */}
          

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