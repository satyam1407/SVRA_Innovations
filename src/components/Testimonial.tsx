'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const Services: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="bg-[#1A1A1A] text-white py-20 md:py-28"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <motion.div variants={item} className="relative w-full h-[320px] md:h-[460px]">
          <Image
            src="/Services/8.png"
            alt="MacBook with code"
            fill
            className="object-cover rounded-xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={item} className="space-y-8">
          
          {/* Stars */}
          <motion.div
            variants={item}
            className="text-2xl tracking-widest text-yellow-400"
          >
            ★★★★★
          </motion.div>

          {/* Testimonial Text */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl leading-relaxed text-gray-200"
          >
            SVRA Innovations LLC transformed my app idea into a stunning
            iOS application. Highly recommend their services!
          </motion.p>

          {/* Author */}
          <motion.div
            variants={item}
            className="flex items-center gap-4"
          >
            <div className="relative w-12 h-12">
              <Image
                src="/Services/9.png"
                alt="Author avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <p className="uppercase tracking-wider text-sm font-semibold text-white">
              ANGHEL EUGEN
            </p>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
