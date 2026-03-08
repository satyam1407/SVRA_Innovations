'use client';

import Image from 'next/image';

const ServicesAppsShowcase = () => {
  const items = [
    {
      image: '/public/3.png',
      alt: 'Hand holding smartphone with article',
      title: 'Mobile Development',
      description: 'Expertise in crafting user-friendly mobile app solutions.',
    },
    {
      image: '/public/4.png',
      alt: 'Smartphone with app icons',
      title: 'iOS Solutions',
      description: 'Tailored applications designed for optimal user experience.',
    },
    {
      image: '/public/5.png',
      alt: 'Hand holding smartphone with Match app',
      title: 'App Design',
      description: 'Creative designs that enhance functionality and engagement.',
    },
    {
      image: '/public/6.png',
      alt: 'Computer screen with app icons',
      title: 'User Focused',
      description: 'Applications built around user needs and preferences.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Innovative Apps
          </h2>
          <p className="text-gray-600 text-lg">
            We create cutting-edge iOS applications for diverse needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div key={index} className="group">
              <div className="relative mb-4 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={503}
                  height={360}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <span className="text-3xl text-gray-900 font-bold ml-4">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAppsShowcase;