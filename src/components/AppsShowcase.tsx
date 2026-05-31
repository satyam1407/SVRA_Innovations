// "use client";

// import { motion, Variants } from "framer-motion";
// import Image from "next/image";

// const AppsShowcase = () => {
//   const showcaseItems = [
//     {
//       image: "/rest/1.png",
//       alt: "Person holding smartphone with app designs",
//       title: "Residential",
//       description:
//         "Creating seamless iOS applications for your business needs.",
//     },
//     {
//       image: "/rest/2.png",
//       alt: "Person typing on MacBook with UI design",
//       title: "Commercial",
//       description: "Delivering intuitive and engaging designs for all users.",
//     },
//     {
//       image: "/rest/3.png",
//       alt: "Sketches and laptop with map",
//       title: "Multifamily",
//       description: "Tailored app solutions that fit your unique requirements.",
//     },
//     {
//       image: "/rest/4.png",
//       alt: "Smartphone on table with colorful app",
//       title: "Amenities",
//       description: "Dedicated professionals focused on mobile app innovation.",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.section
//       className="bg-white py-16 md:py-20"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={containerVariants}
//     >
//       <div className="container mx-auto px-4">
//         {/* Section header */}
//         <motion.div
//           className="text-center max-w-3xl mx-auto mb-12"
//           variants={itemVariants}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Built for Every Space
//           </h2>
//           {/* <p className="text-gray-600 text-lg">
//             Explore our cutting-edge mobile applications for iOS development.
//           </p> */}
//         </motion.div>

//         {/* Showcase grid */}
//         <motion.div
//           className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
//           variants={containerVariants}
//         >
//           {showcaseItems.map((item, index) => (
//             <motion.div
//               key={index}
//               className="group w-100"
//               variants={itemVariants}
//             >
//               <div className="relative mb-4 overflow-hidden rounded-xl">
//                 <Image
//                   src={item.image}
//                   alt={item.alt}
//                   width={100}
//                   height={80}
//                   className="w-full h-auto rounded-xl object-cover transition-transform duration-300 "
//                 />
//               </div>
//               <div className="mt-4 flex items-center justify-center gap-4">
//                 {/* <div className="bg-red-500"> */}
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {item.title}
//                   </h3>
//                   {/* <p className="text-gray-600 text-sm mt-1">
//             {item.description}
//           </p> */}
//                 </div>

//                 {/* <span className="text-2xl text-gray-900 font-bold">
//           →
//         </span> */}
//               {/* </div> */}
//             </motion.div>
//           ))}
//         </motion.div>
//         {/* Showcase grid */}
//       </div>
//     </motion.section>
//   );
// };

// export default AppsShowcase;



"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const showcaseItems = [
  {
    image: "/newpic/11.jpeg",
    alt: "Person holding smartphone with app designs",
    title: "Residential",
    tag: "Living Spaces",
    index: "01",
  },
  {
    image: "/newpic/12.jpeg",
    alt: "Person typing on MacBook with UI design",
    title: "Commercial",
    tag: "Work Environments",
    index: "02",
  },
  {
    image: "/newpic/3.jpeg",
    alt: "Sketches and laptop with map",
    title: "Multifamily",
    tag: "Shared Housing",
    index: "03",
  },
  {
    image: "/newpic/14.jpeg",
    alt: "Smartphone on table with colorful app",
    title: "Amenities",
    tag: "Common Areas",
    index: "04",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const AppsShowcase = () => {
  return (
    <section className="bg-[#F7F6F2] py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-16 md:mb-20"
        >
          {/* Overline */}
          {/* <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-[#1A1A1A]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1A1A1A]/50">
              Our Coverage
            </span>
          </div> */}

          {/* Heading — split weight */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] leading-tight tracking-tight">
              Built for{" "}
              <span className="font-bold italic">Every Space</span>
            </h2>
            {/* <p className="text-sm text-[#1A1A1A]/50 max-w-xs leading-relaxed">
              Tailored access-control solutions across every property type and use case.
            </p> */}
          </div>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.index}
              variants={cardVariants}
              /* Offset every other card downward for visual rhythm */
              className={`group flex flex-col ${i % 2 !== 0 ? "lg:mt-10" : ""}`}
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl bg-[#E0DED8] aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {/* Index badge — top left */}
                <span className="absolute top-4 left-4 text-[11px] font-bold tracking-[0.18em] text-white/70 uppercase bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {item.index}
                </span>

                {/* Tag pill — top right, appears on hover */}
                <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-wider uppercase text-white/80 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {item.tag}
                </span>

                {/* Bottom text block */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-none">
                    {item.title}
                  </h3>
                  {/* Animated underline on hover */}
                  <div className="mt-2 h-px w-0 bg-white/60 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom rule + counter ── */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 flex items-center justify-between"
        >
          <div className="h-px flex-1 bg-[#1A1A1A]/12" />
          <span className="mx-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]/35">
            {showcaseItems.length} Property Types
          </span>
          <div className="h-px flex-1 bg-[#1A1A1A]/12" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default AppsShowcase;