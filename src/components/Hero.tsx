'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen md:h-150 min-h-[300px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://images.pexels.com/videos/7277940/pexels-photo-7277940.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
      >
        <source
          src="https://videos.pexels.com/video-files/7277940/7277940-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="max-w-4xl text-4xl font-semibold  leading-tight md:text-5xl lg:text-6xl">
          Innovative iOS App Development Solutions
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl">
          Transforming ideas into exceptional mobile applications for your business needs.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Learn
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;