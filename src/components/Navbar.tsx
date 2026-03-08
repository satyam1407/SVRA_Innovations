'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms & conditions', href: '/terms' },
  ];

  // Custom CSS variables from the original header
  const headerStyle = {
    '--nav-link-font-weight': '400',
    '--nav-link-text-color': 'rgb(86, 88, 94)',
    '--nav-link-text-color-hover': 'rgb(13, 20, 26)',
    '--header-height-mobile': '66px',
    '--width': '1240px',
    '--padding-top': '21px',
    '--padding': '21px 16px 21px 16px',
    '--padding-right': '16px',
    '--padding-bottom': '21px',
    '--padding-left': '16px',
    '--m-padding-top': '24px',
    '--m-padding': '24px 16px 24px 16px',
    '--m-padding-right': '16px',
    '--m-padding-bottom': '24px',
    '--m-padding-left': '16px',
    '--logo-width': '148px',
    '--cartIconSize': '24px',
    '--link-spacing': '32px',
    '--m-logo-width': '55px',
    '--m-link-spacing': '20px',
    '--element-spacing': '21px',
    '--contrastBackgroundColor': 'rgb(224, 224, 224)',
    '--background-color': '#ffffff',
  } as React.CSSProperties;

  return (
    <motion.header
      className="block-header w-full bg-white sticky top-0 z-50"
      style={headerStyle}
      data-v-efc1d71f=""
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background div (solid white) */}
      <div className="background absolute inset-0 bg-white" style={{ backgroundColor: 'var(--background-color)' }} data-v-efc1d71f=""></div>

      {/* Desktop layout */}
      <div
        className="block-header-layout-desktop hidden md:flex items-center justify-between relative"
        style={{
          padding: 'var(--padding)',
          maxWidth: 'var(--width)',
          margin: '0 auto',
        }}
        data-v-a07a4ffe=""
      >
        {/* Logo */}
        <Link href="/" className="block-header-logo block-header__logo text-black font-semibold" data-v-4ae1c879="">
          SVRA Innovations
        </Link>

        {/* Navigation links */}
        <nav className="block-header__nav" data-v-efc1d71f="">
          <ul className="block-header__nav-links flex items-center gap-[var(--link-spacing)]" data-qa="builder-siteheader-emptyspace">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name} className="block-header-item" data-v-6773ab13="">
                  <div
                    className={`item-content-wrapper block-header-item__item ${
                      isActive ? 'item-content-wrapper--active' : ''
                    }`}
                    data-qa={`navigation-item-${item.name.toLowerCase()}`}
                  >
                    <Link
                      href={item.href}
                      className={`item-content ${
                        isActive ? 'border-b-2 border-gray-900' : ''
                      }`}
                      style={{
                        color: 'var(--nav-link-text-color)',
                        fontWeight: 'var(--nav-link-font-weight)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--nav-link-text-color-hover)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--nav-link-text-color)')}
                    >
                      {item.name}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right side (empty in original) */}
        <div className="block-header-layout-desktop__right-side"></div>
      </div>

      {/* Mobile layout */}
      <div
        className="block-header-layout-mobile md:hidden relative"
        style={{
          padding: 'var(--m-padding)',
        }}
        data-v-a07a4ffe=""
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="block-header-logo block-header__logo" data-v-4ae1c879="">
            <span className="text-black font-semibold">SVRA Innovations</span>
          </Link>

          {/* Hamburger button */}
          <button
            type="button"
            className="burger block-header__hamburger-menu flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            title="Menu"
            style={{ '--165ebbac': 'var(--nav-link-text-color)' } as React.CSSProperties}
            data-qa="builder-siteheader-btn-hamburger"
          >
            <span className={`burger__bun w-6 h-0.5 bg-black mb-1.5 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`burger__meat w-6 h-0.5 bg-black mb-1.5 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`burger__bun w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div
            className="block-header-layout-mobile__dropdown absolute top-full left-0 w-full bg-white shadow-lg"
            style={{ zIndex: 40 }}
          >
            <nav className="block-header__nav" data-v-efc1d71f="">
              <ul className="block-header__nav-links flex flex-col py-2" data-qa="builder-siteheader-emptyspace">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name} className="block-header-item" data-v-6773ab13="">
                      <div
                        className={`item-content-wrapper block-header-item__item px-4 py-2 ${
                          isActive ? 'bg-gray-100 border-l-4 border-gray-900' : ''
                        }`}
                        data-qa={`navigation-item-${item.name.toLowerCase()}`}
                      >
                        <Link
                          href={item.href}
                          className="item-content block w-full"
                          style={{
                            color: 'var(--nav-link-text-color)',
                            fontWeight: 'var(--nav-link-font-weight)',
                          }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;