'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  'Smart Access Control',
  'Mobile Access Management',
  'Custom Hardware Solutions',
  'Property Integration',
  'Time-Based Entry',
  'User & Permission Management',
  'Multi-Property Support',
  'Security & Monitoring',
  'Digital Keys & Credentials',
  'Maintenance & Support',
];

const quickLinks = [
  { label: 'Home',              href: '/' },
  { label: 'About',             href: '/about' },
  { label: 'Services',          href: '/services' },
  { label: 'Contact',           href: '/contact' },
  { label: 'Privacy Policy',    href: '/privacy' },
  { label: 'Terms & Conditions',href: '/terms' },
];

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.0726C24 5.44354 18.629 0.0725708 12 0.0725708C5.37097 0.0725708 0 5.44354 0 12.0726C0 18.0619 4.38823 23.0264 10.125 23.9274V15.5414H7.07661V12.0726H10.125V9.4287C10.125 6.42144 11.9153 4.76031 14.6574 4.76031C15.9706 4.76031 17.3439 4.99451 17.3439 4.99451V7.94612H15.8303C14.34 7.94612 13.875 8.87128 13.875 9.82015V12.0726H17.2031L16.6708 15.5414H13.875V23.9274C19.6118 23.0264 24 18.0619 24 12.0726Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644ZM23.9157 7.05277C23.8247 5.13063 23.3856 3.42801 21.9775 2.02522C20.5747 0.622429 18.8721 0.183388 16.9499 0.0870135C14.9689 -0.0254238 9.03112 -0.0254238 7.05008 0.0870135C5.1333 0.178034 3.43068 0.617075 2.02253 2.01986C0.614389 3.42265 0.180703 5.12527 0.0843279 7.04742C-0.0281093 9.02845 -0.0281093 14.9662 0.0843279 16.9472C0.175349 18.8694 0.614389 20.572 2.02253 21.9748C3.43068 23.3776 5.12794 23.8166 7.05008 23.913C9.03112 24.0254 14.9689 24.0254 16.9499 23.913C18.8721 23.822 20.5747 23.3829 21.9775 21.9748C23.3803 20.572 23.8193 18.8694 23.9157 16.9472C24.0281 14.9662 24.0281 9.03381 23.9157 7.05277Z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4 py-14 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.6fr_2fr_1fr_1fr] gap-10 xl:gap-12"
        >
          {/* ── Brand ── */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-2 block">
                Technology Partner
              </span>
              <h5 className="text-xl font-bold tracking-tight leading-snug">
                SVRA Innovations LLC
              </h5>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              We believe access should be effortless and secure. From homes to shared spaces, SVRA Innovations helps communities move smarter. Stay connected. Follow our journey.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 mt-1">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Services (2-col grid) ── */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
                Services
              </h5>
              {/* <Link
                href="/services"
                className="text-xs text-white/40 hover:text-white transition-colors underline underline-offset-4"
              >
                View all →
              </Link> */}
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-white/55 hover:text-white transition-colors duration-150 flex items-start gap-1.5 group"
                  >
                    <span className="mt-[5px] w-1 h-1 rounded-full bg-white/25 group-hover:bg-white/70 flex-shrink-0 transition-colors duration-150" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact ── */}
          <motion.div variants={itemVariants}>
            <h5 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Contact
            </h5>
            <address className="not-italic space-y-3 text-sm text-white/55">
              <div className="space-y-0.5">
                <p>1510 Sycamore St</p>
                <p>Wilmington, DE 19805</p>
                <p>USA</p>
              </div>
              <a
                href="tel:+13026880186"
                className="block hover:text-white transition-colors"
              >
                +1 (302) 688-0186
              </a>
              <a
                href="mailto:info@svrainnovations.com"
                className="block hover:text-white transition-colors break-all"
              >
                info@svrainnovations.com
              </a>
            </address>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div variants={itemVariants}>
            <h5 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30"
        >
          <span>
            © {new Date().getFullYear()} SVRA Innovations LLC. All rights reserved.
          </span>
          <span className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-white/70 transition-colors">Terms & Conditions</Link>
            <span>Powered by SVRA</span>
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;