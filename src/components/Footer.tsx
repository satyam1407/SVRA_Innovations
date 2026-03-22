'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Brand column */}
          <div>
            <h5 className="text-lg font-bold mb-3">SVRA Innovations</h5>
            <p className="text-sm text-gray-400 mb-4">
              End-to-end technology solutions — web, mobile, AI, QA, HR, and recruitment — for businesses that want to grow.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.0726C24 5.44354 18.629 0.0725708 12 0.0725708C5.37097 0.0725708 0 5.44354 0 12.0726C0 18.0619 4.38823 23.0264 10.125 23.9274V15.5414H7.07661V12.0726H10.125V9.4287C10.125 6.42144 11.9153 4.76031 14.6574 4.76031C15.9706 4.76031 17.3439 4.99451 17.3439 4.99451V7.94612H15.8303C14.34 7.94612 13.875 8.87128 13.875 9.82015V12.0726H17.2031L16.6708 15.5414H13.875V23.9274C19.6118 23.0264 24 18.0619 24 12.0726Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644ZM23.9157 7.05277C23.8247 5.13063 23.3856 3.42801 21.9775 2.02522C20.5747 0.622429 18.8721 0.183388 16.9499 0.0870135C14.9689 -0.0254238 9.03112 -0.0254238 7.05008 0.0870135C5.1333 0.178034 3.43068 0.617075 2.02253 2.01986C0.614389 3.42265 0.180703 5.12527 0.0843279 7.04742C-0.0281093 9.02845 -0.0281093 14.9662 0.0843279 16.9472C0.175349 18.8694 0.614389 20.572 2.02253 21.9748C3.43068 23.3776 5.12794 23.8166 7.05008 23.913C9.03112 24.0254 14.9689 24.0254 16.9499 23.913C18.8721 23.822 20.5747 23.3829 21.9775 21.9748C23.3803 20.572 23.8193 18.8694 23.9157 16.9472C24.0281 14.9662 24.0281 9.03381 23.9157 7.05277Z" />
                </svg>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h5 className="text-lg font-bold mb-3">Services</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Web Development', 'Mobile Apps', 'AI & Automation', 'QA Engineering', 'HR Solutions', 'Recruitment'].map(s => (
                <li key={s}>
                  <Link href="/services" className="hover:text-white transition">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h5 className="text-lg font-bold mb-3">Contact</h5>
            <address className="not-italic space-y-2 text-sm text-gray-400">
              <p>30 N Gould St Ste R</p>
              <p>Sheridan, WY 82801, USA</p>
              <p className="pt-1">+1-646-583-0743</p>
              <p>+46 766923482</p>
              <p>+1 (661) 247-8780</p>
              <p className="pt-1">
                <a href="mailto:info@svrainnovations.com" className="underline hover:text-white transition">
                  info@svrainnovations.com
                </a>
              </p>
            </address>
          </div>

          {/* Quick links column */}
          <div>
            <h5 className="text-lg font-bold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: 'Home',     href: '/' },
                { label: 'About',   href: '/about' },
                { label: 'Services',href: '/services' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms & Conditions', href: '/terms' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2"
        >
          <span>© {new Date().getFullYear()} SVRA Innovations LLC. All rights reserved. | Powered by SVRA</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition">Privacy</Link>
            <Link href="/terms"   className="hover:text-gray-300 transition">Terms</Link>
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
