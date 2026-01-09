import React from "react";
import { motion } from 'framer-motion';
import { Instagram, Send, Mail, MapPin, Phone, ExternalLink, Heart } from 'lucide-react';

const Page10 = ({ onTermsClick }) => {
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "/about" },
    { name: "PTE Core", href: "/pte-core" },
    { name: "PTE Academic", href: "/pte-academic" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/scorepte_explains?igsh=MTQycWVmdThhMTJ3ZQ==",
      icon: Instagram,
      color: "text-pink-400 hover:text-pink-300"
    },
    {
      name: "Telegram",
      href: "https://t.me/Scorepte_explains",
      icon: Send,
      color: "text-blue-400 hover:text-blue-300"
    }
  ];

  return (
    <div className="w-full bg-[#0D2440] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="text-white px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-1"
            >
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  Invest
                </h1>
                <h2 className="text-3xl md:text-4xl font-light text-white/80">
                  In Scores
                </h2>
              </div>
              
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Empowering students worldwide to achieve their PTE dreams with cutting-edge technology and proven strategies.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>infoscorepteexplains@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {footerLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white/60 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              {/* Support Section */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Get Support</h4>
                <motion.a
                  href="https://t.me/Scorepte_explains"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 bg-blue-500/20 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-xl hover:bg-blue-500/30 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Join Telegram
                </motion.a>
              </div>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl font-bold text-white mb-6">Stay Connected</h3>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:bg-white/10`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Newsletter */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-3">Newsletter</h4>
                <p className="text-white/60 text-sm mb-4">
                  Get the latest PTE tips and success stories delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-blue-400"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              
              <div className="flex xs:flex-col items-center gap-6 text-sm text-white/60">
                <span
                  // onClick={onTermsClick}
                  className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </span>
                <span>Privacy Policy</span>
                <span>@Scorepte_explains</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay -z-10" />
    </div>
  );
};

export default Page10;