'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const } },
};

const AboutStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
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
          {/* Left column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Full-Service Technology Partner
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              At SVRA Innovations LLC, we combine deep technical expertise with
              business insight to deliver web applications, mobile apps, AI integrations,
              QA engineering, HR solutions, and talent recruitment — all under one roof.
              Our passion for innovation drives outcomes that matter.
            </p>
            <Link
              href="/about"
              className="inline-block border border-gray-900 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-900 hover:text-white transition"
            >
              Learn About Us
            </Link>

            {/* Tagline */}
            <div className="text-center md:text-left my-5">
              <h3 className="text-2xl font-bold text-gray-900">
                Unleash Your Potential
              </h3>
              <p className="text-gray-600">
                Technology that scales with your business — from idea to production
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="bg-[#1A1A1A] text-white p-6 rounded-none"
              variants={itemVariants}
            >
              <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                <motion.div variants={statVariants}>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-gray-300 text-sm">Projects Delivered</div>
                </motion.div>
                <motion.div variants={statVariants}>
                  <div className="text-3xl font-bold">6+</div>
                  <div className="text-gray-300 text-sm">Service Verticals</div>
                </motion.div>
                <motion.div variants={statVariants}>
                  <div className="text-3xl font-bold">5★</div>
                  <div className="text-gray-300 text-sm">Client Satisfaction</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: image */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative max-w-md mx-auto md:mx-0">
              <Image
                src="/aboutstats/1.png"
                alt="SVRA Innovations team delivering technology solutions"
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
