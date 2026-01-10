import { ArrowLeft, Shield, Truck, RefreshCcw } from "lucide-react"
import Navbar from "../components/Navbar"

const Terms = ({ onBack }) => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#0D2440] text-[#E7F0FA] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.18),transparent_65%)] pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/5 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm sm:text-base">Back to Home</span>
          </button>

          <div className="mt-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Terms & Conditions
            </h1>
            <p className="text-white/60 mt-2 text-sm sm:text-base">
              ScorePTE Terms of Service and Policies
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 relative z-10">
        {/* Top Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          {/* Intro */}
          <div className="p-6 sm:p-10 border-b border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  Important Notice
                </h2>
                <p className="text-white/70 mt-2 leading-relaxed text-sm sm:text-base">
                  Please read these terms carefully before purchasing or using ScorePTE services.
                  By accessing our platform, you agree to comply with these policies.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-400/20 rounded-2xl px-4 py-3">
                <p className="text-blue-200 text-sm">
                  Last updated:{" "}
                  <span className="text-white font-semibold">January 2026</span>
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="divide-y divide-white/10">
            {/* Consumer Protection */}
            <section className="p-6 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-blue-300" size={22} />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    Consumer Protection
                  </h2>

                  <p className="text-white/80 leading-relaxed mt-4 text-sm sm:text-base">
                    ScorePTE recognizes the importance of privacy of personal information. We hereby
                    declare that we collect, use and disclose personal information responsibly and
                    only to the extent necessary to meet consumer protection mandate and our
                    regulatory activities. We have a strong sense of confidentiality and consider
                    consumer protection as our priority.
                  </p>
                </div>
              </div>
            </section>

            {/* Delivery Policy */}
            <section className="p-6 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-green-500/15 border border-green-400/30 flex items-center justify-center flex-shrink-0">
                  <Truck className="text-green-300" size={22} />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    Delivery Policy
                  </h2>

                  <div className="mt-4 space-y-4 text-white/80 leading-relaxed text-sm sm:text-base">
                    <p>
                      ScorePTE has a cloud-based interface. The various services offered and their
                      charges are explicitly mentioned on the website. Particular service can be
                      accessed via the website once you have purchased it.
                    </p>

                    <p>
                      In case you have been given certain service(s) as a part of some promotional
                      activity then you will be given access to those mentioned service(s) only. The
                      offers and services may change without prior intimation.
                    </p>

                    <p>
                      Being an online platform, the website is prone to uncontrollable and sudden
                      issues like increased loading time, bad internet connectivity, feature
                      incompatibility, and any other technical difficulties. ScorePTE is not liable
                      for any loss occurred due to such uncontrollable problems.
                    </p>

                    <p>
                      ScorePTE website may plan and implement maintenance without any prior notice
                      on account of which the services might become unavailable for a short period
                      of time.
                    </p>

                    <p>
                      ScorePTE’s Terms and Conditions are applicable to all purchases made through
                      our website and our official Instagram and Telegram handles.
                    </p>

                    <p>
                      We provide expert tips and resources to support your preparation, but your
                      progress ultimately depends on your own efforts. Our materials and coaching
                      are designed to help you improve, not to guarantee a specific score. Results
                      may vary from person to person based on individual learning pace and practice.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cancellation & Refund Policy */}
            <section className="p-6 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-red-500/15 border border-red-400/30 flex items-center justify-center flex-shrink-0">
                  <RefreshCcw className="text-red-300" size={22} />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    Cancellation & Refund Policy
                  </h2>

                  <p className="text-white/80 leading-relaxed mt-4 text-sm sm:text-base">
                    All payments would be non-refundable, however, we would consider special
                    circumstances. So please choose carefully. If you still wish to request a
                    refund, it will be accepted ONLY upon careful consideration by the management.
                    The decision of the management will be final and the user will have to abide by
                    them.
                  </p>

                  {/* Notice box */}
                  <div className="mt-6 bg-yellow-500/10 border border-yellow-400/20 rounded-2xl p-4 sm:p-6">
                    <h3 className="text-yellow-300 font-semibold text-base sm:text-lg mb-4">
                      Please Note:
                    </h3>

                    <ul className="space-y-3 text-yellow-200 text-sm sm:text-base">
                      {[
                        `We will not consider any kind of unjustified request stating "We need a refund"`,
                        "We will not entertain refund requests without any genuine concerns",
                        "The management will decide upon the request being genuine or not",
                        "The time frame for the refund request is 'Within 24 days'",
                        "If you have raised a refund request, our experts will review it and provide you with the final decision within 180 days.",
                        "No Refunds will be processed after the above time duration has surpassed",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 w-2 h-2 rounded-full bg-yellow-300 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 bg-red-500/10 border border-red-400/20 rounded-2xl p-4 sm:p-6">
                    <p className="text-red-200 font-medium text-sm sm:text-base">
                      All the services purchased from 'ScorePTE' are on a 'no return' and 'no changes'
                      basis, which means no reschedule or refund will be made.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Contact Card */}
        <div className="mt-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
            Need Help?
          </h3>
          <p className="text-white/80 mb-5 text-sm sm:text-base">
            If you have any questions about these terms and conditions, please contact us.
          </p>

          <a
            href="https://t.me/Scorepte_explains"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors"
          >
            Contact Support
          </a>
        </div>
      </main>
    </div>
    </>
  )
}

export default Terms
