import React from 'react';
import image15 from '../assets/image 15.png';
import image16 from '../assets/image 16.png';
import mapImage from '../assets/map.png';

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

const PTEConsultationCTA = () => {
  return (
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
            onClick={() => alert("Booking consultation slot!")}
          >
            Save my slot
          </button>
        </div>
      </div>
    </div>
  )
}

const locations = [
  { title: 'New York, USA', description: 'Our hub in North America.', top: '35%', left: '28%' },
  { title: 'London, UK', description: 'Connecting Europe.', top: '28%', left: '46%' },
  { title: 'Sydney, Australia', description: 'Oceania operations.', top: '75%', left: '87%' },
  { title: 'Dubai, UAE', description: 'Middle East gateway.', top: '48%', left: '60%' },
  { title: 'Mumbai, India', description: 'South Asia center.', top: '55%', left: '68%' },
  { title: 'Johannesburg, South Africa', description: 'Africa network.', top: '80%', left: '52%' },
  { title: 'Toronto, Canada', description: 'Canadian presence.', top: '25%', left: '22%' },
  { title: 'Singapore', description: 'Southeast Asia hub.', top: '65%', left: '78%' },
  { title: 'Berlin, Germany', description: 'Central Europe.', top: '30%', left: '52%' },
];

function InteractiveMap() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-10 w-full max-w-none flex flex-col items-center mt-8 overflow-hidden">
      <header className="text-center mb-8 w-full">
        <h1 className="text-4xl font-bold text-blue-600 uppercase">Our Global Network</h1>
        <p className="text-gray-600 mt-2">Foastring a Global Community of Excellence</p>
      </header>

      <div className="relative w-full max-w-5xl mx-auto">
        <img src={mapImage} alt="World Map" className="w-full max-w-2xl mx-auto" style={{ minHeight: '220px' }} />

        {locations.map((loc, index) => (
          <span
            key={index}
            className="absolute flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 w-16 h-16 z-0"
            style={{
              top: loc.top,
              left: loc.left,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <svg className="w-8 h-8 sm:w-6 sm:h-6" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.11 11.54 8.09 12.37a1 1 0 0 0 1.23 0C13.89 22.54 21 16.25 21 11c0-4.97-4.03-9-9-9zm0 18.88C9.14 18.07 5 13.98 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 2.98-4.14 7.07-7 9.88z" fill="#EF4444"/>
              <circle cx="12" cy="11" r="3.5" fill="#EF4444" stroke="#fff" strokeWidth="2"/>
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

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
              <PTEConsultationCTA />
            </div>
          </div>
        </div>
        {/* Interactive Map section OUTSIDE the card box */}
        <div className="flex justify-center mt-8 w-full">
          <InteractiveMap />
        </div>
      </div>
    </div>
  );
};

export default PricingCards; 