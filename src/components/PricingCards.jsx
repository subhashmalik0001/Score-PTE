import React from 'react';
import { openRazorpayCheckout } from '../lib/razorpay';
import image15 from '../assets/image 15.png';
import image16 from '../assets/image 16.png';
import mapImage from '../assets/map.png';

const PricingCard = ({ plan, price, features, isPopular = false, buttonColor = 'black' }) => {
  // Keep display in AUD for all users
  const getDisplayPrice = () => {
    return price;
  };

  const getCurrency = () => {
    return 'AUD';
  };

  const handleStartNow = async () => {
    try {
      const numericAmount = Number(String(price).replace(/[^0-9.]/g, ''));
      if (!numericAmount || Number.isNaN(numericAmount)) {
        console.error('Invalid amount:', price);
        return;
      }

      // Always charge in AUD (amount in cents)
      const amountPaise = Math.round(numericAmount * 100); // AUD cents
      const currency = 'AUD';

      // Frontend-only Razorpay Checkout
      await openRazorpayCheckout({
        amountPaise,
        currency,
        name: 'Score PTE',
        description: `Purchase ${plan} plan`,
        // For test purposes, orderId is optional; remove or set if you have pre-created order
        notes: { plan },
        themeColor: '#000000',
        onSuccess: (resp) => console.log('Payment successful', resp),
        onError: (err) => {
          console.error('Payment failed', err);
          alert('Payment failed');
        },
      });
    } catch (e) {
      console.error('Razorpay init error', e);
      alert(e?.message || 'Payment init failed');
    }
  };

  const getButtonStyles = (color) => {
    const styles = {
      black: 'bg-blue-500 hover:bg-blue-600 text-white',
      purple: 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200 hover:from-gray-400 hover:to-gray-300 text-white',
      orange: 'bg-yellow-400 hover:bg-yellow-300 text-white',
      yellow: 'bg-gradient-to-br from-gray-200 via-gray-400 to-gray-100 hover:from-gray-300 hover:to-white text-gray-800',
      bronze: 'bg-[#8D6E63] hover:bg-[#795548] text-white',
    };
    return styles[color] || styles.black;
  };

  return (
    <div className={`relative flex flex-col items-center justify-between w-72 h-96 p-8 rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1
      ${isPopular ? 'border-blue-500 shadow-blue-100 ring-2 ring-blue-500 ring-opacity-20' : 'border-gray-200 hover:border-gray-300'}
      ${plan === 'platinum' ? 'bg-gradient-to-br from-gray-100 via-gray-300 to-white' : 'bg-white'}
    `}>
      <h3 className={`text-3xl font-extrabold mb-6 capitalize flex items-center justify-center relative ${plan === 'gold' ? 'text-yellow-500' : 'text-gray-800'}`}
        style={{ alignSelf: 'flex-start', width: '100%', textAlign: 'center' }}>
        <span className="flex flex-col items-center w-full">
          {plan}
          {plan === 'gold' && <span className="text-sm font-semibold text-black mt-1">79+</span>}
        </span>
        {plan === 'gold' && <img src={image16} alt="VIP" className="absolute right-4 -top-8 h-16 w-14 object-contain" style={{ zIndex: 1 }} />}
      </h3>

      <div className="text-center mb-8 flex-1 flex flex-col justify-center">
        <div className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-2">
          {getDisplayPrice()}
          <span className="text-xs font-medium text-gray-500" style={{ position: 'relative', top: '0.5em' }}>{getCurrency()}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{features}</p>
      </div>

      <div className="w-full space-y-3">
        <button
          onClick={handleStartNow}
          className={`w-full py-2 px-3 sm:py-3 sm:px-6 rounded-lg font-semibold text-xs sm:text-sm uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${getButtonStyles(buttonColor)}`}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
};

const PTEConsultationCTA = () => (
  <div className="w-full max-w-6xl mx-auto p-4">
    <div className="bg-amber-800 rounded-2xl px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
      <div className="max-w-4xl">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
          Not ready yet? Book your FREE PTE Consultation today!
        </h2>
        <p className="text-white text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed opacity-95">
          Receive expert advice on your current skills, personalized guidance on achieving your target score, and a
          clear roadmap to better prepare for your PTE exam. Why wait? Take the first step towards success now!
        </p>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-lg transition-colors duration-200 cursor-pointer"
          onClick={() => window.open('https://t.me/Scorepte_explains', '_blank')}
        >
          Save my slot
        </button>
      </div>
    </div>
  </div>
);

const PricingCards = () => {
  const plans = [
    { plan: "bronze", price: "899", features: "Strong; Error Analysis, Skill Building, Impact-driven training & More.", buttonColor: "bronze" },
    { plan: "silver", price: "1,499", features: "Refined; Predication Files, Score-Driven Tips, Daily Insights & More.", buttonColor: "purple" },
    { plan: "gold", price: "1,899", features: "Unmissable; Surety Files, Live classes, Expert support & More.", buttonColor: "orange", isPopular: true },
    { plan: "platinum", price: "4,799", features: "Confidential, Customized, Credible", buttonColor: "yellow" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-18 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <img src={image15} alt="Guarantee" className="h-20 w-20 object-contain inline-block align-middle" />
            <h1 className="text-4xl font-bold text-gray-900 mb-0">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">'SCORE MUST GROW'</span>{' '}
              <span className="text-gray-700">GUARANTEE</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-2">
            Score PTE delivers more than promises. Join with Bronze, Silver, Gold, or Platinum and experience smart tips, powerful materials, premium content and undeniable improvement that ensures your score must grow.
          </p>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-none flex flex-col items-center">
            <div className="w-full flex justify-start mb-10">
              <div className="bg-red-800 text-white px-8 py-4 rounded-t-2xl text-2xl font-bold tracking-wide shadow-md flex items-center">
                PTE Academic / UKVI / CORE
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:justify-center w-full">
              {plans.map((planData, index) => (
                <PricingCard key={index} {...planData} />
              ))}
            </div>

            <div className="flex justify-center mt-8 w-full">
              <PTEConsultationCTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
