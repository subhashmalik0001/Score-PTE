import React from 'react';
import image15 from '../assets/image 15.png';
import image16 from '../assets/image 16.png';

const PricingCard = ({ plan, price, features, isPopular = false, buttonColor = 'black', onPurchase }) => {
  const handleStartNow = () => {
    if (onPurchase) {
      onPurchase();
    } else {
      console.log(`Starting ${plan} plan!`);
    }
  };

  const handleSeeAllFeatures = () => {
    console.log(`Viewing all features for ${plan} plan`);
  
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
    <div className={`relative flex flex-col items-center justify-between w-72 h-96 p-8 ${
      plan === 'gold'
        ? 'bg-white'
      : plan === 'platinum'
        ? 'bg-gradient-to-br from-gray-100 via-gray-300 to-white'
        : 'bg-white'
    } rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      isPopular && plan === 'gold'
        ? 'border-yellow-500 shadow-yellow-200 ring-2 ring-yellow-400 ring-opacity-20'
      : plan === 'platinum'
        ? 'border-gray-400 ring-2 ring-gray-300 ring-opacity-30 shadow-gray-200'
      : isPopular
        ? 'border-blue-500 shadow-blue-100 ring-2 ring-blue-500 ring-opacity-20'
      : 'border-gray-200 hover:border-gray-300'
    }`}>
      {/* VIP Image for Gold Plan */}
      
      {/* Plan Name at the Top */}
      <h3
        className={`text-3xl font-extrabold mb-6 capitalize flex items-center justify-center relative ${
          plan === 'bronze'
            ? 'text-[#8D6E63]'
            : plan === 'silver'
            ? 'text-gray-400'
            : plan === 'gold'
            ? 'text-yellow-500'
            : plan === 'platinum'
            ? 'text-gray-800'
            : 'text-gray-800'
        }`}
        style={{ alignSelf: 'flex-start', width: '100%', textAlign: 'center' }}
      >
        <span className="flex flex-col items-center w-full">
          {plan === 'platinum' ? <span className="inline-flex items-center">{plan}</span> : plan}
          {plan === 'silver' && (
            <span className="text-sm font-semibold text-black mt-1">(65-78)</span>
          )}
          {plan === 'gold' && (
            <span className="text-sm font-semibold text-black mt-1">79+</span>
          )}
          
        </span>
        {plan === 'gold' && (
          <img src={image16} alt="VIP" className="absolute right-4 -top-8 h-16 w-14 object-contain" style={{zIndex: 1}} />
        )}
      </h3>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className={`px-4 py-1 rounded-full text-sm font-semibold shadow-lg ${
            plan === 'gold'
              ? 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-yellow-900'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
          }`}>
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-8 flex-1 flex flex-col justify-center">
      <div className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-2">
          {price}
          <span className="text-xs font-medium text-gray-500" style={{ position: 'relative', top: '0.5em' }}>AUD</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {typeof features === 'string' ? features : features}
        </p>
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

const HelpButton = () => {
  return (
    <div className="flex justify-center p-4">
      <button className="flex flex-row items-center justify-between w-full max-w-xs sm:max-w-3xl px-4 py-2 sm:py-3 bg-white border-2 border-red-700 rounded-full shadow-sm hover:bg-red-50 transition-colors duration-200 group mt-10">
        {/* Question mark icon */}
        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-700 rounded-full flex items-center justify-center mr-3">
          <span className="text-white text-sm sm:text-lg font-bold leading-none">?</span>
        </div>
        {/* Text */}
        <div className="flex-1 text-red-700 text-xs sm:text-sm md:text-base font-medium flex flex-row items-center gap-2 text-center sm:text-left leading-tight justify-center">
          <span>Not sure what to pick?</span>
          <span>Contact Support</span>
        </div>
        {/* Arrow icon */}
        <div className="flex-shrink-0 flex items-center justify-center ml-3">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-red-700 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  
  

  );
};

const PricingCards = ({ onPurchase }) => {
  const plans = [
    {
      plan: "bronze",
      price: "899",
      features: <><span className="font-extrabold text-lg text-[#8D6E63]">Strong ;</span> Error Analysis, Skill Building, Impact-driven training & More.</>,
      isPopular: false,
      buttonColor: "bronze"
    },
    {
      plan: "silver",
      price: "1,499",
      features: <><span className="font-extrabold text-lg text-gray-400">Refined ;</span>  Predication Files, Score -Driven Tips, Daily Insights & More.</>,
      isPopular: false,
      buttonColor: "purple"
    },
    {
      plan: "gold",
      price: "1,899",
      features: <><span className="font-extrabold text-lg text-yellow-500">Unmissable; </span> Surety Files, Live classes, Expert support & More.</>,
      isPopular: true,
      buttonColor: "orange"
    },
    {
      plan: "platinum",
      price: "4,799",
      features: (
        <>
          <span className="font-extrabold text-lg text-gray-800 block">Confidential,</span>
          <span className="block">Customized,</span>
          <span className="block">Credible</span>
        </>
      ),
      isPopular: false,
      buttonColor: "yellow"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-18 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <img src={image15} alt="Guarantee" className="h-20 w-20 object-contain inline-block align-middle" />
            <h1 className="text-4xl font-bold text-gray-900 mb-0">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                'SCORE MUST GROW'
              </span>{' '}
              <span className="text-gray-700">
                GUARANTEE
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-2">
            Score PTE delivers more than promises. Join with Bronze, Silver, Gold, or Platinum and experience smart tips, powerful materials, premium content and undeniable improvement that ensures your score must grow.
          </p>
        </div>
        {/* Big Box for Cards */}
        <div className="w-full flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-none flex flex-col items-center">
            {/* Navbar-like Tab Bar inside the card box */}
            <div className="w-full flex justify-start mb-10">
              <div className="bg-red-800 text-white px-8 py-4 rounded-t-2xl text-2xl font-bold tracking-wide shadow-md flex items-center">
                PTE Academic / UKVI / CORE
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:justify-center w-full">
              {plans.map((planData, index) => (
                <PricingCard
                  key={index}
                  plan={planData.plan}
                  price={planData.price}
                  features={planData.features}
                  isPopular={planData.isPopular}
                  buttonColor={planData.buttonColor}
                  onPurchase={onPurchase}
                />
              ))}
            </div>
            {/* Help Button inside the card box */}
            <div className="flex justify-center mt-8 w-full">
              <HelpButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards; 