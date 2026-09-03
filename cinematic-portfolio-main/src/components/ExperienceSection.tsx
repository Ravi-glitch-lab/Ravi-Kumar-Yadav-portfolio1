// src/components/ExperienceSection.tsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: '2024 - PRESENT',
    title: 'BSC. CSIT',
    organization: 'ISMT COLLEGE • TINKUNE, KATHMANDU, NEPAL',
    description:
      'Currently pursuing BSc. CSIT while strengthening my knowledge of software development, programming, databases, web technologies and modern computing concepts.',
  },
  {
    id: '02',
    year: 'CURRENT PROJECT',
    title: 'HOSTELHUB SAAS',
    organization: 'SAAS / HOSTEL MANAGEMENT PLATFORM',
    description:
      'Currently working on HostelHub, an upcoming SaaS platform designed for hostel owners to manage properties, rooms, residents, payments and operations while providing super-admin control over hostels and subscriptions.',
  },
  {
    id: '03',
    year: 'PROJECT DEVELOPMENT',
    title: 'HOSTEL CRM',
    organization: 'HOSTEL MANAGEMENT SYSTEM',
    description:
      'Developed a hostel CRM focused on simplifying daily hostel operations with room and floor management, resident records, payments, notifications and administrative controls.',
  },
  {
    id: '04',
    year: 'WEB DEVELOPMENT',
    title: 'BUTTERFLY COSMETICS',
    organization: 'COSMETICS / E-COMMERCE WEBSITE',
    description:
      'Designed and developed a cosmetics website focused on product presentation, brand discovery, category browsing and a clean responsive shopping experience.',
  },
  {
    id: '05',
    year: 'APPLICATION PROJECT',
    title: 'JANAKPUR BOLTS APP',
    organization: 'SPORTS / DIGITAL APPLICATION',
    description:
      'Created a digital application project for Janakpur Bolts with a focus on modern interface design, structured content and an engaging sports-oriented user experience.',
  },
  {
    id: '06',
    year: '2022 - 2024',
    title: '+2 COMPUTER SCIENCE',
    organization:
      'CASPIAN VALLEY SECONDARY SCHOOL & COLLEGE • KUMARIPATI, LALITPUR, NEPAL',
    description:
      'Completed higher secondary education with Computer Science, building my early foundation in computing, programming concepts and technology.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">

        {/* SECTION LABEL */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            04 / MY JOURNEY
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* SECTION HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              LEARNING. BUILDING.
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              MOVING FORWARD.
            </span>
          </h2>

          <p
            className="mt-5 max-w-xl text-xs sm:text-sm font-light text-[#A8988B] leading-[1.8]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            My journey combines formal computer science education with
            hands-on development of real websites, management systems and
            software products.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative w-full">

          {/* BACKGROUND TRACK */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />

          {/* ANIMATED GOLD TRACK */}
          <motion.div
            style={{
              height: lineHeight,
            }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-50px',
                }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                }}
                className="relative flex flex-col md:flex-row items-start group"
              >

                {/* DESKTOP YEAR */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.16em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* TIMELINE NODE */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">

                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />

                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />

                </div>

                {/* CONTENT */}
                <div className="ml-14 md:ml-12 pl-2">

                  {/* MOBILE YEAR */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.16em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-1 leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                    }}
                  >
                    {stop.title}
                  </h3>

                  <span
                    className="block text-[10px] font-medium tracking-[0.18em] uppercase text-[#8C6D4F] mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {stop.organization}
                  </span>

                  <p
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] max-w-lg group-hover:text-[#D5CBC0] transition-colors"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {stop.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;