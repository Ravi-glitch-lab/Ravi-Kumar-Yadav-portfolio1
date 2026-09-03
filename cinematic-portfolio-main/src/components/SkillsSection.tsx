import React from 'react';
import { motion } from 'framer-motion';

const bentoCategories = [
  {
    title: 'FRONTEND DEVELOPMENT',
    badge: 'USER EXPERIENCE',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
    description:
      'Building modern and responsive interfaces with a strong focus on usability, clean layouts, smooth interactions and consistent visual design across devices.',
    stat: 'RESPONSIVE UI',
    colSpan: 'lg:col-span-7',
  },

  {
    title: 'BACKEND DEVELOPMENT',
    badge: 'APPLICATION LOGIC',
    items: [
      'PHP',
      'MySQL',
      'REST APIs',
      'Authentication',
      'CRUD Systems',
    ],
    description:
      'Developing backend systems for dashboards, management platforms and database-driven applications with structured authentication and practical business logic.',
    stat: 'FULL STACK',
    colSpan: 'lg:col-span-5',
  },

  {
    title: 'DATABASE & SYSTEMS',
    badge: 'DATA MANAGEMENT',
    items: [
      'MySQL',
      'SQL',
      'Database Design',
      'Admin Panels',
      'CRM Systems',
    ],
    description:
      'Designing structured databases and management systems for user records, rooms, payments, administration and other application workflows.',
    stat: 'MYSQL',
    colSpan: 'lg:col-span-5',
  },

  {
    title: 'SOFTWARE & UI/UX',
    badge: 'PRODUCT BUILDING',
    items: [
      'UI/UX Design',
      'PHP',
      'JavaScript',
      'Python',
      'VS Code',
    ],
    description:
      'Combining software development and interface design to transform ideas into practical websites, applications, CRM systems and SaaS products.',
    stat: 'BUILD & DESIGN',
    colSpan: 'lg:col-span-7',
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="
        relative
        w-full
        min-h-screen
        bg-black
        text-[#E8DFD8]
        pt-20
        pb-28
        px-6
        sm:px-12
        lg:px-20
        overflow-hidden
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          top-[30%]
          left-[15%]
          w-[30rem]
          h-[30rem]
          bg-[#D4AF37]/5
          rounded-full
          blur-[170px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[10%]
          right-[15%]
          w-[28rem]
          h-[28rem]
          bg-[#8C6D4F]/5
          rounded-full
          blur-[160px]
          pointer-events-none
        "
      />

      {/* Decorative dot */}
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[28%]
          left-1/2
          w-2
          h-2
          rounded-full
          bg-[#F3DBB3]
          shadow-[0_0_15px_#D4AF37]
          pointer-events-none
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto w-full relative z-10">

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
            duration: 0.7,
          }}
          className="flex items-center gap-4 mb-8"
        >
          <span
            className="
              text-[11px]
              font-medium
              tracking-[0.35em]
              uppercase
              text-[#D4AF37]
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            03 / TECH STACK
          </span>

          <div
            className="
              w-20
              h-[1px]
              bg-gradient-to-r
              from-[#D4AF37]
              via-[#8C6D4F]/50
              to-transparent
            "
          />
        </motion.div>

        {/* ================= TITLE ================= */}

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
          className="mb-14"
        >
          <h2
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[5.5rem]
              uppercase
              leading-[0.85]
              tracking-tight
              select-none
            "
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-b
                from-white
                via-[#D5CBC0]
                to-[#605448]
              "
            >
              TECHNOLOGY I USE.
            </span>

            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-b
                from-[#F7E7C4]
                via-[#C99E5D]
                to-[#543B1A]
                drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]
              "
            >
              IDEAS I BUILD.
            </span>
          </h2>
        </motion.div>

        {/* ================= SKILL GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-6
            w-full
          "
        >
          {bentoCategories.map((block, index) => (
            <motion.div
              key={block.title}

              /*
                IMPORTANT:
                No parent "hidden" variant anymore.

                This prevents the cards from becoming permanently
                invisible after the Projects ScrollStack.
              */

              initial={{
                opacity: 1,
                y: 0,
              }}

              whileHover={{
                y: -7,
                scale: 1.01,
              }}

              transition={{
                duration: 0.3,
              }}

              className={`
                ${block.colSpan}

                relative
                min-h-[260px]

                p-7
                sm:p-9

                rounded-xl

                border
                border-[#8C6D4F]/40

                bg-gradient-to-br
                from-[#15110E]
                via-[#0D0B09]
                to-[#080706]

                overflow-hidden

                shadow-[0_20px_60px_rgba(0,0,0,0.8)]

                hover:border-[#D4AF37]/80
                hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]

                transition-all
                duration-500

                group
              `}
            >
              {/* NUMBER */}

              <span
                className="
                  absolute
                  -right-2
                  -bottom-7

                  text-[8rem]
                  sm:text-[10rem]

                  leading-none

                  text-[#D4AF37]/[0.025]

                  pointer-events-none
                  select-none
                "
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                0{index + 1}
              </span>

              {/* TOP GOLD LIGHT */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-[1px]

                  bg-gradient-to-r
                  from-transparent
                  via-[#D4AF37]/70
                  to-transparent

                  opacity-40
                  group-hover:opacity-100

                  transition-opacity
                  duration-500
                "
              />

              {/* TOP LEFT CORNER */}

              <div
                className="
                  absolute
                  top-0
                  left-0

                  w-5
                  h-5

                  border-t
                  border-l

                  border-[#D4AF37]/50

                  group-hover:border-[#D4AF37]

                  transition-colors
                "
              />

              {/* BOTTOM RIGHT CORNER */}

              <div
                className="
                  absolute
                  bottom-0
                  right-0

                  w-5
                  h-5

                  border-b
                  border-r

                  border-[#D4AF37]/50

                  group-hover:border-[#D4AF37]

                  transition-colors
                "
              />

              {/* ================= META ================= */}

              <div
                className="
                  relative
                  z-10

                  flex
                  items-center
                  justify-between
                  gap-3

                  mb-5
                "
              >
                <span
                  className="
                    text-[9px]
                    sm:text-[10px]

                    font-mono

                    tracking-[0.2em]
                    sm:tracking-[0.25em]

                    uppercase

                    text-[#D4AF37]
                  "
                >
                  {block.badge}
                </span>

                <span
                  className="
                    text-[8px]
                    sm:text-[10px]

                    font-mono

                    px-2.5
                    py-1

                    whitespace-nowrap

                    border
                    border-[#8C6D4F]/40

                    text-[#C4B5A5]

                    bg-[#17130F]

                    group-hover:border-[#D4AF37]/60
                    group-hover:text-[#F7E7C4]

                    transition-all
                  "
                >
                  {block.stat}
                </span>
              </div>

              {/* ================= CARD TITLE ================= */}

              <h3
                className="
                  relative
                  z-10

                  text-3xl
                  sm:text-4xl

                  tracking-wide

                  text-white

                  mb-4

                  group-hover:text-[#F7E7C4]

                  transition-colors
                  duration-300
                "
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                {block.title}
              </h3>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  relative
                  z-10

                  text-xs
                  sm:text-sm

                  text-[#A8988B]

                  font-light

                  leading-[1.8]

                  mb-7

                  max-w-xl

                  group-hover:text-[#CFC1B5]

                  transition-colors
                  duration-300
                "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {block.description}
              </p>

              {/* ================= TECH TAGS ================= */}

              <div
                className="
                  relative
                  z-10

                  flex
                  flex-wrap

                  gap-2

                  pt-5

                  border-t
                  border-[#8C6D4F]/25
                "
              >
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      sm:px-3.5

                      py-1.5

                      text-[9px]
                      sm:text-[10.5px]

                      font-medium

                      tracking-[0.12em]
                      sm:tracking-[0.16em]

                      uppercase

                      rounded-sm

                      border
                      border-[#8C6D4F]/35

                      bg-[#171310]

                      text-[#E8D7C5]

                      group-hover:border-[#D4AF37]/50

                      hover:bg-[#D4AF37]
                      hover:text-black

                      transition-all
                      duration-300
                    "
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* HOVER GLOW */}

              <div
                className="
                  absolute
                  -bottom-24
                  -right-24

                  w-64
                  h-64

                  rounded-full

                  bg-[#D4AF37]/0

                  group-hover:bg-[#D4AF37]/[0.06]

                  blur-[80px]

                  transition-all
                  duration-700

                  pointer-events-none
                "
              />

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;