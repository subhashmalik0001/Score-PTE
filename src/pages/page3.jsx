import React from "react";
import {
  Fingerprint,
  Target,
  DollarSign,
  Video,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "SCORE 79+ WITH",
    highlight: "SURETY FILES.",
    bgGradient: "from-blue-500/10 to-purple-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20"
  },
  {
    icon: Target,
    title: "Unbeatable",
    highlight: "Strategy",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-400",
    borderColor: "border-green-500/20"
  },
  {
    icon: DollarSign,
    title: "Elevated Pricing,",
    highlight: "Elevated Experience.",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/20"
  },
  {
    icon: Video,
    title: "Live Classes.",
    highlight: "Plus Watch Later.",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20"
  },
  {
    icon: Clock,
    title: "SUPPORT THAT NEVER",
    highlight: "SLEEPS.",
    bgGradient: "from-red-500/10 to-rose-500/10",
    iconColor: "text-red-400",
    borderColor: "border-red-500/20"
  },
];

const Page3 = () => {
  return (
    <section className="w-full bg-[#0D2440] py-16 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
      
      {/* ================= SCROLL ANIMATION ================= */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      {/* ================= SCROLL CONTAINER ================= */}
      <div
        className="flex w-max gap-4 xs:gap-6 sm:gap-8 px-4 xs:px-5 sm:px-6"
        style={{
          animation: "scroll 25s linear infinite",
        }}
      >
        {[...features, ...features].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.bgGradient} w-64 xs:w-72 sm:w-80 h-40 xs:h-44 sm:h-48 rounded-2xl 
                         border ${item.borderColor} backdrop-blur-sm
                         hover:scale-105 transition-all duration-300
                         flex flex-col justify-center items-start p-4 xs:p-6 sm:p-8
                         shadow-lg hover:shadow-2xl`}
            >
              <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 ${item.iconColor} mb-4 xs:mb-5 sm:mb-6 p-2 xs:p-2.5 sm:p-3 bg-white/10 rounded-xl backdrop-blur-sm`}>
                <Icon className="w-full h-full" />
              </div>

              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white leading-tight mb-1 xs:mb-1.5 sm:mb-2">
                {item.title}
              </h3>

              <p className={`text-base xs:text-lg sm:text-xl font-bold ${item.iconColor}`}>
                {item.highlight}
              </p>
            </div>
          );
        })}
      </div>
      
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </section>
  );
};

export default Page3;




























