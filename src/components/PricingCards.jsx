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
      yellow: 'bg-orange-500 hover:bg-orange-600 text-white',
      bronze: 'bg-[#cd7f32] hover:bg-[#b87333] text-white',
    };
    return styles[color] || styles.black;
  };

  return (
    <div className={`relative flex flex-col items-center justify-between w-72 h-96 p-8 bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      isPopular 
        ? 'border-blue-500 shadow-blue-100 ring-2 ring-blue-500 ring-opacity-20' 
        : 'border-gray-200 hover:border-gray-300'
    }`}>
      {/* VIP Image for Gold Plan */}
      {plan === 'gold' && (
        <img src={image16} alt="VIP" className="absolute top-0 right-0 h-20 w-20 object-contain z-20 -translate-y-2 translate-x-2" style={{top: 0, right: 0}} />
      )}
      {/* Plan Name at the Top */}
      <h3
        className={`text-3xl font-extrabold mb-6 capitalize ${
          plan === 'bronze'
            ? 'text-[#cd7f32]'
            : plan === 'silver'
            ? 'text-gray-400'
            : plan === 'gold'
            ? 'text-yellow-500'
            : plan === 'platinum'
            ? 'text-orange-500'
            : 'text-gray-800'
        }`}
        style={{ alignSelf: 'flex-start', width: '100%', textAlign: 'center' }}
      >
        {plan}
      </h3>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-8 flex-1 flex flex-col justify-center">
      <div className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-2">
          ${price}
          <span className="text-xs font-medium text-gray-500" style={{ position: 'relative', top: '0.5em' }}>USD</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {typeof features === 'string' ? features : features}
        </p>
      </div>

      <div className="w-full space-y-3">
        <button 
          onClick={handleStartNow}
          className={`w-full py-2 px-4 sm:py-3 sm:px-6 rounded-lg font-semibold text-xs sm:text-sm uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${getButtonStyles(buttonColor)}`}
        >
          Purchase Now
        </button>
        
       
      </div>
    </div>
  );
};

const HelpButton = () => {
  return (
    <button className="flex items-center justify-between w-full max-w-2xl px-6 py-4 bg-white border-2 border-red-700 rounded-full shadow-sm hover:bg-red-50 transition-colors duration-200 group mt-12">
      {/* Question mark icon */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">?</span>
        </div>
        {/* Text content */}
        <span className="text-red-700 text-lg font-semibold">
          Not sure what to pick? Contact Support
        </span>
      </div>
      {/* Arrow icon */}
      <div className="flex-shrink-0 ml-4">
        <svg 
          className="w-6 h-6 text-red-700 group-hover:translate-x-1 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </div>
    </button>
  );
};

const PricingCards = ({ onPurchase }) => {
  const plans = [
    {
      plan: "bronze",
      price: "899",
      features: <><span className="font-extrabold text-lg text-[#cd7f32]">Strong</span> error analysis skills building impact driven training & more</>,
      isPopular: false,
      buttonColor: "bronze"
    },
    {
      plan: "silver",
      price: "1499",
      features: <><span className="font-extrabold text-lg text-gray-400">Basic</span> protection files, score-driven tips, daily insights & more</>,
      isPopular: false,
      buttonColor: "purple"
    },
    {
      plan: "gold",
      price: "1899",
      features: <><span className="font-extrabold text-lg text-yellow-500">Invisible</span> surety files, live classes, expert support & more</>,
      isPopular: true,
      buttonColor: "orange"
    },
    {
      plan: "platinum",
      price: "4799",
      features: <><span className="font-extrabold text-lg text-orange-500">Confidential</span> customized, credible premium support, Enterprise-grade security, unlimited access</>,
      isPopular: false,
      buttonColor: "yellow"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-18 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <img src={image15} alt="Guarantee" className="h-12 w-12 object-contain inline-block" />
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
            Score PTE delivers more than promises. Join with Bronze, Silver, or Gold and experience smart tips, powerful materials, premium content and undeniable improvement that ensures your score must grow.
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