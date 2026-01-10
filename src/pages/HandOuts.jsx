import React from 'react';

const HandOuts = () => {
  const handouts = [
    {
      title: "PTE Speaking Templates",
      description: "Ready-to-use templates for all speaking tasks",
      type: "PDF",
      size: "2.5 MB",
      downloadUrl: "#"
    },
    {
      title: "Writing Task Templates",
      description: "Essay and summary writing templates",
      type: "PDF", 
      size: "1.8 MB",
      downloadUrl: "#"
    },
    {
      title: "Reading Tips & Tricks",
      description: "Strategies for all reading question types",
      type: "PDF",
      size: "3.2 MB", 
      downloadUrl: "#"
    },
    {
      title: "Listening Practice Guide",
      description: "Complete listening section preparation",
      type: "PDF",
      size: "2.1 MB",
      downloadUrl: "#"
    },
    {
      title: "Vocabulary Builder",
      description: "Essential PTE vocabulary list",
      type: "PDF",
      size: "1.5 MB",
      downloadUrl: "#"
    },
    {
      title: "Grammar Quick Reference",
      description: "Key grammar rules for PTE success",
      type: "PDF",
      size: "1.2 MB",
      downloadUrl: "#"
    }
  ];

  const handleDownload = (title) => {
    const searchQuery = encodeURIComponent(title);
    window.open(`https://t.me/Scorepte_explains?q=${searchQuery}`, "_blank");
  };

  return (
    <section className="min-h-screen bg-[#0D2440] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="py-20 px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="xs:text-4xl text-6xl font-black text-white mb-4">
            FREE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">HAND OUTS</span>
          </h1>
          <p className="text-lg text-white/80">
            Download our comprehensive study materials and boost your PTE preparation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid xs:grid-cols-1 grid-cols-3 gap-8">
            {handouts.map((handout, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded">
                    {handout.type} • {handout.size}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{handout.title}</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {handout.description}
                </p>

                <button
                  onClick={() => handleDownload(handout.title)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download 
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need More Resources?
            </h2>
            <p className="text-white/80 mb-6">
              Join our Telegram channel for exclusive materials, tips, and direct support from our experts.
            </p>
            <button
              onClick={() => window.open("https://t.me/Scorepte_explains", "_blank")}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
            >
              Join Telegram Channel
            </button>
          </div>
        </div>
      </div>
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </section>
  );
};

export default HandOuts;