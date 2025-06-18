import { ArrowLeft } from "lucide-react"

const Terms = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
          <p className="text-gray-600 mt-2">ScorePTE Terms of Service and Policies</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Consumer Protection Section */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-1 h-8 bg-blue-600 mr-4"></div>
              Consumer Protection
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                ScorePTE recognizes the importance of privacy of personal information. We hereby declare that we
                collect, use and disclose personal information responsibly and only to the extent necessary to meet
                consumer protection mandate and our regulatory activities. We have a strong sense of confidentiality and
                consider consumer protection as our priority.
              </p>
            </div>
          </div>

          {/* Delivery Policy Section */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-1 h-8 bg-green-600 mr-4"></div>
              Delivery Policy
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                ScorePTE has a cloud-based interface. The various services offered and their charges are explicitly
                mentioned on the website. Particular service can be accessed via the website once you have purchased it.
                You can access only those service(s) that you have purchased from the website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In case you have been given certain service(s) as a part of some promotional activity then you will be
                given access to those mentioned service(s) only. The offers and services may change without prior
                intimation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Being an online platform, the website is prone to uncontrollable and sudden issues like increased
                loading time, bad internet connectivity, feature incompatibility, and any other technical difficulties.
                ScorePTE is not liable for any loss occurred due to such uncontrollable problems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                ScorePTE website may plan and implement maintenance without any prior notice on account of which the
                services might become unavailable for a short period of time.
              </p>
            </div>
          </div>

          {/* Cancellation & Refund Policy Section */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-1 h-8 bg-red-600 mr-4"></div>
              Cancellation & Refund Policy
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                All payments would be non-refundable, however, we would consider special circumstances. So please choose
                carefully. If you still wish to request a refund, it will be accepted ONLY upon careful consideration by
                the management. The decision of the management will be final and the user will have to abide by them.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Please Note:</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    We will not consider any kind of unjustified request stating "We need a refund"
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    We will not entertain refund requests without any genuine concerns
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    The management will decide upon the request being genuine or not
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    The time frame for the refund request is 'Within 3 days'
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    No Refunds will be processed after the above time duration has surpassed
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                <p className="text-red-700 font-medium">
                  All the services purchased from 'ScorePTE' are on a 'no return' and 'no changes' basis, which means no
                  reschedule or refund will be made.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
          <p className="text-blue-100 mb-4">
            If you have any questions about these terms and conditions, please contact us.
          </p>
          <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

export default Terms 