import { useState } from "react";
// Removed Razorpay import
import PayPalModal from "./PayPalModal";

const PricingCard = ({ plan, price, currency, subtitle, description, features, highlight }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTelegram = () => {
    window.open("https://t.me/Scorepte_explains", "_blank");
  };

  const handlePayment = () => {
    const numericAmount = Number(String(price).replace(/[^0-9.]/g, ""));
    if (!numericAmount || Number.isNaN(numericAmount)) {
      openTelegram();
      return;
    }
    setIsModalOpen(true);
  };

  const handleSuccess = (details) => {
    setIsModalOpen(false);
    alert(`Payment successful! Thank you ${details.payer.name.given_name}. Our team will contact you shortly.`);
  };

  return (
    <div
      className={`relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 ${highlight ? "ring-2 ring-purple-500/30 shadow-xl" : ""
        }`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
      <p className="text-white/60 text-sm mb-6">{subtitle}</p>

      <div className="text-center mb-6">
        <span className="text-4xl font-black text-white">{price}</span>
        <span className="text-white/60 ml-2">{currency}</span>
      </div>

      <p className="text-white/80 text-sm mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
            <span className="text-green-400 mt-0.5">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handlePayment}
        className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${highlight
            ? "bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 text-black hover:from-yellow-500 hover:via-amber-500 hover:to-yellow-700 shadow-lg shadow-yellow-500/30"
            : "bg-white/10 border border-yellow-400/40 text-yellow-300 hover:bg-yellow-400/10"
          }`}
      >
        Purchase Now
      </button>


      <button
        onClick={openTelegram}
        className="mt-3 w-full text-xs text-white/60 hover:text-white transition-colors"
      >
        Need help? Chat on Telegram
      </button>

      {isModalOpen && (
        <PayPalModal
          amount={price}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
};

const ConsultationCTA = () => (
  <div className="w-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-10 text-white mt-16 backdrop-blur-sm">
    <h2 className="xs:text-3xl text-4xl font-bold mb-4">
      Not sure which plan is right for you?
    </h2>
    <p className="text-lg text-white/80 mb-6 max-w-3xl">
      Get expert evaluation, personalized strategy, and a clear roadmap
      to reach your desired PTE score faster.
    </p>
    <button
      onClick={() => window.open("https://t.me/Scorepte_explains", "_blank")}
      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
    >
      Book Free Consultation
    </button>
  </div>
);

const PricingCards = () => {
  const resourcePlans = [
    {
      plan: "Quick Revision",
      price: "159",
      currency: "AUD",
      subtitle: "Last-minute prep? This is your perfect guide!",
      description: "From 50s to 90s – we make it happen.",
      features: [
        "Ideal for limited preparation time",
        "Super tips and smart strategies",
        "Boost confidence and stay focused",
        "Designed to help aim for 79+ scores",
        "Last-minute file to maximize performance",
        "Includes 10% high-yield prediction files",
        "Covers only high-repeat exam content",
        "Learn quickly, feel ready, perform confidently",
      ],
    },
    {
      plan: "Signature Templates",
      price: "199",
      currency: "AUD",
      subtitle: "Original Templates for Maximum Scoring",
      description: "Customized templates designed to avoid AI-detected repetition.",
      features: [
        "Expert-created original templates",
        "Center-tested for real exams",
        "No repeated or overused formats",
        "Designed specifically for 79+ scores",
        "Aligned with latest PTE AI scoring",
        "Updated with recent exam trends",
        "Easy to learn and apply confidently",
        "Trusted by high-scoring candidates",
        "Built for superior maximum performance",
      ],
    },
    {
      plan: "Prediction Files",
      price: "299",
      currency: "AUD",
      subtitle: "Based on Exam Date, Center & Time Slot",
      description: "Created from real test-taker experience.",
      features: [
        "Highest repeat-rate questions included",
        "Limited and focused (not 400+ pages)",
        "Designed to maximize scores quickly",
        "Easy to follow under exam pressure",
        "Regularly updated with latest trends",
        "Center-tested and slot-specific",
        "Original content – no copies",
        "Boosts confidence and reduces stress",
      ],
    },

  ];

  const personalTrainingPlans = [
    {
      plan: "Premium Package",
      price: "695",
      currency: "AUD",
      subtitle: "Refined & Score-Driven Preparation",
      description: "Prediction files, score-driven tips, daily insights & more.",
      highlight: true,
      features: [
        "AI scoring for instant feedback",
        "Human review of speaking and writing",
        "Score prediction for exam readiness",
        "Practice tests with detailed analysis",
        "Personalized improvement tips",
        "Progress tracking with performance dashboard",
        "Sample answers for reference",
        "Recorded video sessions for self-review",
      ],
    },
    {
      plan: "Premium Plus",
      price: "1395",
      currency: "AUD",
      subtitle: "Confidential, Customized, Credible",
      description: "All Premium features included.",
      highlight: true,
      features: [
        "Confidential one-on-one expert coaching",
        "Advanced AI scoring analytics",
        "Priority human evaluation",
        "Customized study plan",
        "Exclusive high-level mock tests",
        "Personal templates for speaking and writing",
        "Detailed error analysis for improvement",
        "24/7 expert support",
        "Confidential score improvement strategies",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-[#0D2440] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

      <div className="py-20 px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="xs:text-4xl text-6xl font-black text-white mb-4">
            SCORE MUST GROW <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">GUARANTEE</span>
          </h1>
          <p className="text-lg text-white/80 mb-6">
            Score PTE delivers more than promises. Join Premium or Premium Plus and experience personal training, smart tips, powerful materials, and premium content. Our Premium resources, including quick revision guides, signature templates, and prediction files, make your preparation smarter, faster, and more effective – ensuring your score must grow.
          </p>
          <p className="text-lg text-white/80">
            Choose a plan that fits your goal and start your PTE success journey today.
          </p>
        </div>

        <div className="min-w-full px-[5%] xs:px-[2%] space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Resources</h2>
            <div className="grid xs:grid-cols-1  grid-cols-3 gap-8">
              {resourcePlans.map((plan, i) => (
                <PricingCard key={i} {...plan} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Personal Training</h2>
            <div className="grid xs:grid-cols-1 grid-cols-2 gap-8 max-w-4xl mx-auto">
              {personalTrainingPlans.map((plan, i) => (
                <PricingCard key={i} {...plan} />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <ConsultationCTA />
        </div>

        {/* Payment Help Warning */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-900 text-sm font-bold">!</span>
              </div>
              <div>
                <p className="text-yellow-200 text-sm leading-relaxed">
                  If you face any difficulty with online payment, our team is available to help you instantly on telegram
                </p>
                <button
                  onClick={() => window.open("https://t.me/Scorepte_explains", "_blank")}
                  className="mt-3 text-yellow-400 hover:text-yellow-300 text-sm font-medium underline transition-colors"
                >
                  Get Payment Help →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </section>
  );
};

export default PricingCards;