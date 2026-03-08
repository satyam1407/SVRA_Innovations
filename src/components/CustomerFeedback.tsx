'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const CustomerFeedback = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "SVRA Innovations developed an app that transformed my business operations completely. Highly recommend their services!",
      name: 'John Doe',
      location: 'Sheridan',
      stars: 5,
      image: '/Services/1.png',
      alt: 'User holding smartphone',
    },
    {
      id: 2,
      quote:
        'The iOS applications created by SVRA Innovations have significantly improved our user engagement and overall satisfaction. Their team is professional and responsive to our needs.',
      name: 'Jane Smith',
      location: 'Wyoming',
      stars: 5,
      image: '/Services/2.png',
      alt: 'iPad screen with app interface',
    },
  ];

  // Variants for container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Feedback
          </h3>
          <p className="text-gray-600 text-lg">
            See what our clients say about our innovative iOS applications.
          </p>
        </motion.div>

        {/* Testimonials grid with staggered children */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="relative bg-[#F2F2F2] p-8 rounded-lg"
              variants={itemVariants}
            >
              {/* Star rating */}
              <div className="flex gap-1 text-yellow-400 text-xl mb-4">
                {'★'.repeat(testimonial.stars)}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h6>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>

              {/* Decorative gray shape behind (already the background is gray, but we can add an extra subtle layer) */}
              <div className="absolute -z-10 inset-0 bg-[#F2F2F2] rounded-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerFeedback;