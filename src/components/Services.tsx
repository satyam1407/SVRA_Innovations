// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const Services = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <motion.section
//       className="bg-[#F3F3F3] py-20 md:py-28"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={containerVariants}
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <motion.div
//           className="text-center max-w-3xl mx-auto mb-16"
//           variants={itemVariants}
//         >
//           <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
//             End-to-End Digital Solutions
//           </h2>
//           <p className="text-gray-600 text-lg leading-relaxed">
//             From design and development to talent and automation — we cover every
//             dimension of your digital journey.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           className="grid md:grid-cols-2 gap-10 lg:gap-16"
//           variants={containerVariants}
//         >
//           {/* Card 1 */}
//           <motion.div variants={itemVariants} className="relative">
//             <div className="rounded-3xl overflow-hidden">
//               <Image
//                 src="/Services/1.png"
//                 alt="Web and Mobile Development"
//                 width={700}
//                 height={450}
//                 className="w-full h-[320px] md:h-[380px] object-cover"
//               />
//             </div>
//             <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[85%] bg-white rounded-2xl shadow-xl p-8 text-center">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-3">
//                 Web &amp; Mobile Development
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Scalable, performant web applications and cross-platform mobile apps
//                 tailored to your business goals — built with modern frameworks.
//               </p>
//             </div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div variants={itemVariants} className="relative">
//             <div className="rounded-3xl overflow-hidden">
//               <Image
//                 src="/Services/service2.png"
//                 alt="AI, QA and Business Solutions"
//                 width={700}
//                 height={450}
//                 className="w-full h-[320px] md:h-[380px] object-cover"
//               />
//             </div>
//             <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[85%] bg-white rounded-2xl shadow-xl p-8 text-center">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-3">
//                 AI, QA &amp; Business Solutions
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Intelligent AI integrations, rigorous quality assurance, HR management,
//                 and strategic recruitment — ensuring your business runs at its best.
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Extra spacing to compensate for overlap */}
//         <div className="h-20 md:h-28"></div>
//       </div>
//     </motion.section>
//   );
// };

// export default Services;



'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    index: '01',
    title: 'Digital Access',
    description: 'Assign secure digital access to tenants, staff, or guests — instantly and remotely.',
  },
  {
    index: '02',
    title: 'Time-Based Entry',
    description: 'Set custom access windows by date and time for granular, scheduled control.',
  },
  {
    index: '03',
    title: 'Full Property Control',
    description: 'Control property entry, shared spaces, mailrooms, gyms, and more from a single system.',
  },
  {
    index: '04',
    title: 'Unified Dashboard',
    description: 'Manage everything from one dashboard — users, permissions, logs, and real-time activity.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const HowItWorks = () => {
  return (
    <section className="bg-[#F3F3F3] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mb-16 md:mb-20"
        >
          {/* <div className="flex items-center gap-3 mb-5"> */}
            {/* <span className="block w-8 h-px bg-[#1A1A1A]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1A1A1A]/50">
              Process
            </span> */}
          {/* </div> */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] tracking-tight leading-tight">
              How It <span className="font-bold italic">Works</span>
            </h2>
            {/* <p className="text-sm text-[#1A1A1A]/50 max-w-xs leading-relaxed">
              Four simple steps — from access setup to full property management.
            </p> */}
          </div>
        </motion.div>

        {/* ── Main layout: Image + Steps ── */}
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-8 lg:gap-12 items-start">

          {/* Left — stacked images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Primary image */}
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/Services/1.png"
                alt="Smart access control interface"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 40vw"
              />
            </div>

            {/* Secondary image — offset bottom-right */}
            <div className="absolute -bottom-8 -right-6 w-[55%] rounded-2xl overflow-hidden aspect-square ring-4 ring-[#F3F3F3]">
              <Image
                src="/Services/service2.png"
                alt="Property dashboard"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>

            {/* Floating stat pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-6 -right-5 bg-[#1A1A1A] text-white rounded-2xl px-5 py-4 shadow-2xl"
            >
              <p className="text-2xl font-bold leading-none">100%</p>
              <p className="text-[11px] text-white/50 tracking-wider uppercase mt-1">Digital Control</p>
            </motion.div>
          </motion.div>

          {/* Right — step cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 gap-4 lg:gap-5"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.index}
                variants={fadeUp}
                className={`group relative bg-white rounded-2xl p-7 flex flex-col gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  /* Offset odd cards slightly for visual rhythm */
                  i % 2 !== 0 ? 'sm:mt-6' : ''
                }`}
              >
                {/* Index + title row */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl font-bold text-[#1A1A1A]/8 leading-none select-none">
                    {step.index}
                  </span>
                  {/* Hover arrow */}
                  <span className="w-8 h-8 rounded-full bg-[#F3F3F3] flex items-center justify-center text-[#1A1A1A]/30 group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 11L11 2M11 2H4M11 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent line — slides in on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-[#1A1A1A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom rule ── */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 flex items-center justify-between"
        >
          <div className="h-px flex-1 bg-[#1A1A1A]/10" />
          <span className="mx-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]/30">
            Simple. Secure. Scalable.
          </span>
          <div className="h-px flex-1 bg-[#1A1A1A]/10" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default HowItWorks;