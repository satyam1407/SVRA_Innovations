'use client';

import Image from 'next/image';

const items = [
  {
    image: '/public/3.png',
    alt: 'Web development illustration',
    title: 'Web Development',
    description: 'Scalable, SEO-optimised web apps and portals built with React, Next.js, and Node.js.',
  },
  {
    image: '/public/4.png',
    alt: 'Mobile app development',
    title: 'Mobile Apps',
    description: 'Cross-platform iOS and Android apps with smooth UX and high performance.',
  },
  {
    image: '/public/5.png',
    alt: 'AI and automation solutions',
    title: 'AI & Automation',
    description: 'Smart integrations — chatbots, data pipelines, ML models, and workflow automation.',
  },
  {
    image: '/public/6.png',
    alt: 'QA and quality engineering',
    title: 'QA Engineering',
    description: 'Comprehensive testing strategies — manual, automated, and performance — to ship with confidence.',
  },
];

const ServicesAppsShowcase = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Build &amp; Deliver
          </h2>
          <p className="text-gray-600 text-lg">
            From concept to deployment — our teams cover every layer of your technology stack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div key={index} className="group">
              <div className="relative mb-4 overflow-hidden rounded-2xl">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <span className="text-3xl text-gray-900 font-bold ml-4">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* HR & Recruitment callout */}
        <div className="mt-16 bg-[#1A1A1A] text-white rounded-2xl px-8 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-3">HR &amp; Recruitment Services</h3>
            <p className="text-gray-300 leading-relaxed">
              Beyond technology, SVRA Innovations provides end-to-end HR management and
              specialist recruitment — sourcing top engineering, product, and business talent
              to help your company scale with the right people.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {['Talent Acquisition & Headhunting', 'HR Policy & Compliance', 'Onboarding & Workforce Management', 'Contract & Permanent Staffing'].map(s => (
              <div key={s} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                <span className="text-gray-200 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAppsShowcase;
