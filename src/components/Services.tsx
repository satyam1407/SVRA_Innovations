'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="bg-[#F3F3F3] py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Innovative App Solutions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We specialize in developing cutting-edge iOS applications tailored to meet your
            business needs.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 lg:gap-16"
          variants={containerVariants}
        >
          
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="relative">
            
            {/* Image */}
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/Services/1.png"
                alt="User Centric Design"
                width={700}
                height={450}
                className="w-full h-[320px] md:h-[380px] object-cover"
              />
            </div>

            {/* Overlapping Content */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[85%] bg-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                User-Centric Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on intuitive design principles to ensure your app is
                user-friendly and visually appealing.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="relative">
            
            {/* Image */}
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/Services/service2.png"
                alt="Custom App Development"
                width={700}
                height={450}
                className="w-full h-[320px] md:h-[380px] object-cover"
              />
            </div>

            {/* Overlapping Content */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[85%] bg-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Custom App Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team creates personalized iOS applications that enhance user
                experience and drive engagement for businesses.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Extra spacing to compensate for overlap */}
        <div className="h-20 md:h-28"></div>
      </div>
    </motion.section>
  );
};

export default Services;
