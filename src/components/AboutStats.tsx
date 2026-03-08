'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'backOut' } },
  };

  return (
    <motion.section
      className="bg-white py-16 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column: text and button */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Innovating Mobile Experiences Daily
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              At SVRA Innovations LLC, we specialize in developing cutting-edge iOS
              applications that enhance user experiences and drive engagement. Our
              passion for technology fuels our commitment to excellence.
            </p>
            <Link
              href="/about"
              className="inline-block border border-gray-900 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-900 hover:text-white transition"
            >
              Explore
            </Link>

            {/* Unleash your Genius text */}
            <div className="text-center md:text-left my-5">
              <h3 className="text-2xl font-bold text-gray-900">
                Unleash your Genius
              </h3>
              <p className="text-gray-600">
                Turn your data into beautiful, powerful mobile apps
              </p>
            </div>

            {/* Stats card – dark background as in original */}
            <motion.div
              className="bg-[#1A1A1A] text-white p-6 rounded-none"
              variants={itemVariants}
            >
              <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                <motion.div variants={statVariants}>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-gray-300 text-sm">Proven Success</div>
                </motion.div>
                <motion.div variants={statVariants}>
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-gray-300 text-sm">Trusted by Users</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: image */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative max-w-md mx-auto md:mx-0">
              <Image
                src="/aboutstats/1.png"
                alt="Mobile app interface showing modern design"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutStats;