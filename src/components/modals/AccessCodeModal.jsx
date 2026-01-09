import { X, CheckCircle, Lock } from 'lucide-react'

const AccessCodeModal = ({ 
  isOpen, 
  onClose, 
  selectedItem, 
  accessCode, 
  setAccessCode, 
  validationStatus, 
  errorMessage, 
  isValidating, 
  onSubmit 
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all duration-300 scale-100 animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          {validationStatus === 'success' ? (
            <div className="mb-4 animate-in fade-in-50 duration-500">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Access Granted! 🎉
              </h3>
              <p className="text-sm text-gray-600">
                You can now access <strong>{selectedItem?.name}</strong>
              </p>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <Lock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="xs:text-2xl text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    Premium
                  </span>{' '}
                  <span className="text-black">Starts Here.</span>
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Enter your access code to unlock <strong>{selectedItem?.name}</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-center font-mono"
                  disabled={isValidating}
                  autoFocus
                />
                {validationStatus === 'error' && (
                  <div className="text-red-500 text-sm mt-2 animate-pulse bg-red-50 p-2 rounded border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <button
                  onClick={onSubmit}
                  disabled={isValidating}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium transform hover:scale-105"
                >
                  {isValidating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Validating...
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Don't have a code? Contact Support{' '}
                  <a href="https://t.me/Scorepte_explains"
                    className="text-blue-700 transition inline-flex items-center gap-1"
                  >
                    <svg
                      width="20"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-blue-700"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Telegram
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccessCodeModal