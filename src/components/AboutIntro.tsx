'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutIntro = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // triggers once when 30% visible
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Innovating Mobile Experiences for You
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              At SVRA Innovations LLC, we specialize in developing cutting-edge iOS
              applications that enhance user experiences and drive business success.
              Our passion for technology fuels our commitment to excellence.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-gray-600">Proven Success</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">15</div>
                <div className="text-gray-600">Trusted by Clients</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-100 h-100 ml-20 rounded-3xl">
            <Image
              src="/about/1.png"
              alt="Hand holding smartphone with app interface"
              width={562}
              height={480}
              className="rounded-lg object-cover w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;