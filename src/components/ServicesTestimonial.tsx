'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ServicesTestimonial = () => {
  return (
    <section className="bg-[#1A1A1A] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 text-2xl text-yellow-400 mb-4">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            SVRA Innovations LLC transformed our app idea into a stunning iOS application. Their expertise and dedication made the process seamless and enjoyable. Highly recommend!
          </p>

          {/* Author and image */}
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/Services/1.png"
                alt="John Doe"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-semibold">John Doe</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesTestimonial;