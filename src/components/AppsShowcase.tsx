'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AppsShowcase = () => {
  const showcaseItems = [
    {
      image: '/rest/1.png',
      alt: 'Person holding smartphone with app designs',
      title: 'Mobile Development',
      description: 'Creating seamless iOS applications for your business needs.',
    },
    {
      image: '/rest/2.png',
      alt: 'Person typing on MacBook with UI design',
      title: 'User Experience',
      description: 'Delivering intuitive and engaging designs for all users.',
    },
    {
      image: '/rest/3.png',
      alt: 'Sketches and laptop with map',
      title: 'Custom Solutions',
      description: 'Tailored app solutions that fit your unique requirements.',
    },
    {
      image: '/rest/4.png',
      alt: 'Smartphone on table with colorful app',
      title: 'Our Team',
      description: 'Dedicated professionals focused on mobile app innovation.',
    },
  ];

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Innovative Apps
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our cutting-edge mobile applications for iOS development.
          </p>
        </motion.div>

        {/* Showcase grid */}
        <motion.div
          className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className="group w-100"
              variants={itemVariants}
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={100}
                  height={80}
                  className="w-full h-auto rounded-xl object-cover transition-transform duration-300 "
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            {item.description}
          </p>
        </div>

        <span className="text-2xl text-gray-900 font-bold">
          →
        </span>
      </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Showcase grid */}


      </div>
    </motion.section>
  );
};

export default AppsShowcase;