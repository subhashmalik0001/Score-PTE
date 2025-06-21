import React from 'react';

const PricingCard = ({ plan, price, features, isPopular = false, buttonColor = 'black' }) => {
  const handleStartNow = () => {
    console.log(`Starting ${plan} plan!`);
    // Add your purchase logic here
  };

  const handleSeeAllFeatures = () => {
    console.log(`Viewing all features for ${plan} plan`);
    // Add navigation to features page
  };

  const getButtonStyles = (color) => {
    const styles = {
      black: 'bg-blue-500 hover:bg-blue-600 text-white',
      purple: 'bg-purple-600 hover:bg-purple-700 text-white',
      orange: 'bg-yellow-400 hover:bg-yellow-300 text-white',
      yellow: 'bg-orange-500 hover:bg-orange-600 text-white'
    };
    return styles[color] || styles.black;
  };

  return (
    <div className={`relative flex flex-col items-center justify-between w-72 h-96 p-8 bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      isPopular 
        ? 'border-blue-500 shadow-blue-100 ring-2 ring-blue-500 ring-opacity-20' 
        : 'border-gray-200 hover:border-gray-300'
    }`}>
      
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8 flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 capitalize">
          {plan}
        </h3>
        <div className="text-4xl font-extrabold text-gray-900 mb-4">
          ${price}
          
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {features}
        </p>
      </div>

      <div className="w-full space-y-3">
        <button 
          onClick={handleStartNow}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${getButtonStyles(buttonColor)}`}
        >
          Start Now
        </button>
        
        <button 
          onClick={handleSeeAllFeatures}
          className="w-full text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors duration-200 underline hover:no-underline"
        >
          See all features
        </button>
      </div>
    </div>
  );
};

const PricingCards = () => {
  const plans = [
    {
      plan: "bronze",
      price: "899",
      features: "Strong error analysis skills building impact driven training & more",
      isPopular: false,
      buttonColor: "black"
    },
    {
      plan: "silver",
      price: "1499",
      features: "Basic protection files, score-driven tips, daily insights & more",
      isPopular: false,
      buttonColor: "purple"
    },
    {
      plan: "gold",
      price: "1899",
      features: "Invisible surety files, live classes, expert support & more",
      isPopular: true,
      buttonColor: "orange"
    },
    {
      plan: "platinum",
      price: "4799",
      features: "Confidential customized, credible premium support, Enterprise-grade security, unlimited access",
      isPopular: false,
      buttonColor: "yellow"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your needs.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:justify-center">
          {plans.map((planData, index) => (
            <PricingCard
              key={index}
              plan={planData.plan}
              price={planData.price}
              features={planData.features}
              isPopular={planData.isPopular}
              buttonColor={planData.buttonColor}
            />
          ))}
        </div>
        
      
      </div>
    </div>
  );
};

export default PricingCards; 