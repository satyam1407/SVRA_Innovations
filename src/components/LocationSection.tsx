'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const LocationSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Left column: text */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              SVRA Innovations LLC is located in NY, USA, where we
              develop innovative iOS applications to enhance mobile experiences.
            </p>

            <div className="space-y-2">
              <h6 className="font-semibold text-gray-900">Address</h6>
              <p className="text-gray-600">30 N Gould St</p>
              <p className="text-gray-600">Sheridan, Wyoming</p>
            </div>

            <div className="mt-6 space-y-1">
              <p className="text-gray-600">+1-646-583-0743</p>
              <p className="text-gray-600">+46 766923482</p>
              <p className="text-gray-600">+1 (661) 247-8780</p>
              <p className="text-gray-600">
                <a
                  href="mailto:contact@matrixinnovations.tech"
                  className="underline hover:text-gray-900 transition"
                >
                  contact@matrixinnovations.tech
                </a>
              </p>
            </div>
          </div>

          {/* Right column: map/image */}
          <div className="h-80 md:h-auto">
            <Image
              src="/Services/9.png"
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

export default LocationSection;