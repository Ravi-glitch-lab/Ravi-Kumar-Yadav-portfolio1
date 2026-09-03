// src/components/ContactSection.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const EMAIL = 'raweeyadav11@gmail.com';
  const GITHUB = 'https://github.com/Ravi-glitch-lab';
  const LINKEDIN =
    'https://www.linkedin.com/in/ravi-kumar-yadav-30848b421/';
  const INSTAGRAM =
    'https://www.instagram.com/saksham_____ydv_?igsi=MThjeDRtMGYxZXVlNg==';
  const FACEBOOK = 'https://www.facebook.com/share/1brVGNjaqC/';
  const X = 'https://x.com/rabiy5899';
  const WHATSAPP = 'https://wa.me/qr/K2I35SMSBWLIF1';

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Ravi,\n\nMy name is ${formData.name || 'Visitor'}.\nEmail: ${
        formData.email || 'Not provided'
      }\n\n${
        formData.message ||
        'I visited your portfolio and would like to connect.'
      }`
    );

    window.open(`${WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-1/3 left-[10%] w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="absolute bottom-0 right-[10%] w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT ================= */}

          <div className="lg:col-span-5">
            {/* SECTION LABEL */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="flex items-center space-x-4 mb-5"
            >
              <span
                className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                05 / CONTACT
              </span>

              <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
            </motion.div>

            {/* HEADLINE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mb-7"
            >
              <h2
                className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
                  LET&apos;S BUILD
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  SOMETHING GREAT.
                </span>
              </h2>
            </motion.div>

            <p
              className="text-xs sm:text-sm font-light text-[#A8988B] leading-[1.8] max-w-md mb-8"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Have a project idea, collaboration opportunity or simply want
              to connect? Send me a message through email or WhatsApp.
            </p>

            {/* CONTACT DETAILS */}
            <div className="space-y-3 mb-9">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center justify-between gap-4 p-4 border border-[#8C6D4F]/25 bg-[#0D0B09] hover:border-[#D4AF37]/60 transition-all"
              >
                <div>
                  <span className="block text-[9px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                    EMAIL
                  </span>

                  <span
                    className="text-xs sm:text-sm text-[#E8DFD8] group-hover:text-[#F7E7C4]"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {EMAIL}
                  </span>
                </div>

                <span className="text-[#D4AF37]">↗</span>
              </a>

              <div className="p-4 border border-[#8C6D4F]/25 bg-[#0D0B09]">
                <span className="block text-[9px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                  LOCATION
                </span>

                <span
                  className="text-xs sm:text-sm text-[#E8DFD8]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Kathmandu, Nepal
                </span>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-3">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-[#8C6D4F]/40 text-[10px] tracking-[0.18em] uppercase text-[#CFC1B5] hover:border-[#D4AF37] hover:text-[#F7E7C4] hover:bg-[#16120E] transition-all"
              >
                GitHub ↗
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-[#8C6D4F]/40 text-[10px] tracking-[0.18em] uppercase text-[#CFC1B5] hover:border-[#D4AF37] hover:text-[#F7E7C4] hover:bg-[#16120E] transition-all"
              >
                LinkedIn ↗
              </a>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-[#8C6D4F]/40 text-[10px] tracking-[0.18em] uppercase text-[#CFC1B5] hover:border-[#D4AF37] hover:text-[#F7E7C4] hover:bg-[#16120E] transition-all"
              >
                Instagram ↗
              </a>

              {/* FACEBOOK */}
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-[#8C6D4F]/40 text-[10px] tracking-[0.18em] uppercase text-[#CFC1B5] hover:border-[#D4AF37] hover:text-[#F7E7C4] hover:bg-[#16120E] transition-all"
              >
                Facebook ↗
              </a>

              {/* X */}
              <a
                href={X}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-[#8C6D4F]/40 text-[10px] tracking-[0.18em] uppercase text-[#CFC1B5] hover:border-[#D4AF37] hover:text-[#F7E7C4] hover:bg-[#16120E] transition-all"
              >
                X ↗
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-[#D4AF37]/60 text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-7 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* TOP LIGHT */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

            {/* CORNERS */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]/60" />

            <div className="mb-7">
              <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                // SEND A MESSAGE
              </span>

              <h3
                className="text-3xl sm:text-4xl text-white mt-2 uppercase"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                START A CONVERSATION.
              </h3>
            </div>

            <form onSubmit={handleEmail} className="space-y-6">
              {/* NAME / EMAIL */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // YOUR NAME
                  </span>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your name"
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3.5 outline-none rounded-sm transition-colors"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  />
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // YOUR EMAIL
                  </span>

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter your email"
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3.5 outline-none rounded-sm transition-colors"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  />
                </div>
              </div>

              {/* MESSAGE */}

              <div>
                <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                  // MESSAGE
                </span>

                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell me about your idea..."
                  className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                />
              </div>

              {/* BUTTONS */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="w-full py-4 border border-[#D4AF37]/70 bg-[#15110D] hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  SEND BY EMAIL ↗
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-4 border border-[#8C6D4F]/50 bg-[#100D0B] hover:border-[#D4AF37] hover:text-[#D4AF37] text-[#D5CBC0] text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  SEND ON WHATSAPP ↗
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="pt-12 mt-16 border-t border-[#8C6D4F]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            RAVI KUMAR YADAV // PORTFOLIO 2026
          </span>

          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • KATHMANDU, NEPAL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;