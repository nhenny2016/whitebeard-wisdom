"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleArrowRight as ArrowRightCircle, Zap, LockKeyhole, FingerprintPattern as Fingerprint, Menu, X } from "lucide-react";

const navLinks = ["Vault", "Plans", "Install", "News", "Help"];

const VaultShieldLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" overflow="visible" viewBox="0 0 256 256">
    <path d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z" fill="#192837"/>
  </svg>
);

const easeCurve = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: easeCurve,
    },
  }),
};

const slideIn = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.45,
      ease: easeCurve,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.35,
      ease: easeCurve,
    },
  },
};

const staggerItem = (i: number) => ({
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.18 + i * 0.07,
      duration: 0.4,
      ease: easeCurve,
    },
  },
});

export default function VaultShieldPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Font imports via style tag for this demo */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        @font-face {
          font-family: 'Helvetica Now Display Bold';
          src: url('https://db.onlinewebfonts.com/c/04e6981992c0e2e7642af2074ebe3901?family=Helvetica+Now+Display+Bold') format('woff2');
          font-weight: bold;
          font-style: normal;
        }

        .vaultshield-container {
          --font-heading: 'Helvetica Now Display Bold', sans-serif;
          --font-body: 'Inter', sans-serif;
          --color-text: #192837;
          --color-accent: #7342E2;
          --color-login-bg: #F2F2EE;
          font-family: var(--font-body);
          color: var(--color-text);
        }

        .vaultshield-heading {
          font-family: var(--font-heading);
        }

        .vaultshield-body {
          font-family: var(--font-body);
        }
      `}</style>

      <div className="vaultshield-container relative w-full min-h-screen">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4" type="video/mp4" />
        </video>

        {/* Navbar */}
        <nav className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          <VaultShieldLogo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "#F2F2EE", color: "#192837" }}
            >
              Sign In
            </button>
            <button
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "#7342E2" }}
            >
              Start For Free
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8" style={{ paddingTop: "clamp(40px, 8vw, 72px)" }}>
          <div className="max-w-[560px]">
            {/* Heading */}
            <motion.h1
              className="vaultshield-heading mb-6"
              style={{
                fontSize: "clamp(1.65rem, 5vw, 3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "#192837",
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Zap size={24} color="#192837" style={{ display: "inline", verticalAlign: "middle", position: "relative", top: -2 }} />{" "}
              Lock Down Your Passwords{" "}
              <LockKeyhole size={24} color="#192837" style={{ display: "inline", verticalAlign: "middle", position: "relative", top: -2 }} />{" "}
              with Ironclad Security{" "}
              <Fingerprint size={24} color="#192837" style={{ display: "inline", verticalAlign: "middle", position: "relative", top: -2 }} />
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="max-w-[560px]"
              style={{
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                lineHeight: 1.65,
                opacity: 0.8,
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Zero stress, total control. VaultShield keeps you covered with unbreakable storage, one-tap access, and pro-grade tools for your non-stop world.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="mt-8 flex items-center justify-between font-semibold"
              style={{
                backgroundColor: "#7342E2",
                color: "white",
                borderRadius: "50px",
                padding: "17px 24px",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                boxShadow: "0 4px 24px rgba(115,66,226,0.28)",
                minWidth: "210px",
                gap: "32px",
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Get It Free</span>
              <ArrowRightCircle size={20} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Sheet */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-40"
                style={{
                  backgroundColor: "rgba(25,40,55,0.35)",
                  backdropFilter: "blur(4px)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              {/* Sheet */}
              <motion.div
                className="fixed right-0 top-0 z-50 overflow-y-auto"
                style={{
                  width: "min(88vw, 360px)",
                  height: "100dvh",
                  backgroundColor: "#CFC8C5",
                  boxShadow: "-12px 0 48px rgba(25,40,55,0.18)",
                }}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Sheet Header */}
                <div className="flex items-center justify-between p-5 border-b border-black/10">
                  <VaultShieldLogo />
                  <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                    <X size={24} />
                  </button>
                </div>

                {/* Sheet Nav Links */}
                <div className="p-5">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link}
                      href="#"
                      className="block py-3 text-lg font-medium"
                      variants={staggerItem(i)}
                      initial="hidden"
                      animate="visible"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>

                {/* Sheet CTAs */}
                <div className="p-5 pt-0 flex flex-col gap-3">
                  <button
                    className="w-full px-5 py-3 rounded-full text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    style={{ backgroundColor: "#F2F2EE", color: "#192837" }}
                  >
                    Sign In
                  </button>
                  <button
                    className="w-full px-5 py-3 rounded-full text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    style={{ backgroundColor: "#7342E2" }}
                  >
                    Start For Free
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
