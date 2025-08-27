// src/components/LandingPage.jsx
import React from "react";
import { Facebook, Instagram, ArrowRight, Phone } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";

const JET = "#2F3132";       // dark charcoal
const CLARET = "#8E2740";    // brand red
const PEACH = "#EBBE95";     // brand peach

const LOGO_PUBLIC_PATH = "/tokyo-tei-logo.png"; // public path
const WAVES_SVG_PATH = "/seigaiha.svg";         // public path
const CIRCLE_IMG_PATH = "/katsu.webp";       // public path

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const riseIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function LandingPage() {
  const nav = [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: JET }}>
        {/* =================== PEACH CREST HERO with Seigaiha pattern =================== */}
        <section
          id="home"
          className="relative w-full overflow-hidden flex flex-col items-center justify-center py-16 sm:py-20 md:py-24"
          style={{ backgroundColor: PEACH }}
        >
          {/* Seigaiha waves (SVG from /public) */}
          <motion.div
            aria-hidden
            className="absolute inset-0 opacity-20 pointer-events-none z-0"
            style={{
              backgroundImage: `url('${WAVES_SVG_PATH}')`,
              backgroundRepeat: "repeat",
              backgroundSize: "120px 120px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.8 }}
          />
          {/* Soft claret halo behind crest */}
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-[8%] -translate-x-1/2 w-[420px] h-[420px] rounded-full blur-2xl opacity-45 pointer-events-none z-0"
            style={{ background: `radial-gradient(circle, ${CLARET}, transparent 65%)` }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.7 }}
          />

          {/* Crest with PEACH background disk (NO border/ring) */}
          <motion.div
            className="relative z-10 grid place-items-center rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.18)] overflow-hidden"
            style={{ width: "232px", height: "232px", backgroundColor: PEACH }}
            variants={riseIn}
            initial="hidden"
            animate="show"
          >
            <img
              src={LOGO_PUBLIC_PATH}
              alt="Tokyo Tei crest"
              className="w-full h-full object-cover scale-[1.35]" // zoom fills circle
            />
          </motion.div>

          {/* Title + Info */}
          <motion.h1
            className="mt-8 text-[30px] sm:text-[38px] md:text-[46px] font-extrabold uppercase tracking-[0.12em] text-[#1c1c1c]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Tokyo Tei
          </motion.h1>

          <motion.p
            className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-[#1c1c1c]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.05 }}
          >
            est 1935 • Wailuku, HI
          </motion.p>

          <motion.p
            className="mt-8 text-sm sm:text-base text-[#1c1c1c]/80"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
          >
            Japanese Restaurant • Family-Owned Since 1935
          </motion.p>

          {/* CTAs with tuned reactivity */}
          <motion.div
            className="relative z-10 mt-6 flex flex-wrap gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
          >
            <motion.a
              href="#menu"
              className="px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{ backgroundColor: CLARET }}
              whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.22)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 26 }}
            >
              View Menu
            </motion.a>
            <motion.a
              href="tel:8082429630"
              className="inline-flex items-center gap-2 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] border border-[#1c1c1c] text-[#1c1c1c] cursor-pointer select-none hover:bg-[#1c1c1c] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
              whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.22)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 26 }}
            >
              <Phone className="w-4 h-4" /> 808-242-9630
            </motion.a>
          </motion.div>

          {/* Divider with gradient + medallion */}
          <div className="relative mt-10 w-11/12 sm:w-4/5 max-w-[980px]">
            <motion.div
              aria-hidden
              className="h-[2px] w-full rounded-full"
              style={{
                backgroundImage: `linear-gradient(90deg, transparent, ${CLARET}, ${PEACH}, ${CLARET}, transparent)`,
                backgroundSize: "200% 100%",
              }}
              initial={{ backgroundPosition: "0% 50%" }}
              whileHover={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: PEACH, boxShadow: `0 0 0 2px ${CLARET}` }} />
            </div>
          </div>
        </section>

        {/* =================== DARK NAV BAR (under hero) =================== */}
        {/* Gradient border above nav */}
        <div
          className="h-1 w-full"
          style={{
            backgroundImage: `linear-gradient(to right, ${CLARET}, ${PEACH}, ${CLARET})`,
          }}
        />

        <nav className="w-full bg-[#1c1c1c] text-white sticky top-0 z-40">
          <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-center gap-6 sm:gap-8 py-4 px-4">
            {nav.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-xs sm:text-sm uppercase tracking-[0.25em] text-white/85 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white/85 transition-all duration-300" />
                <style>{`a[href="${item.href}"]:hover span{width:100%}`}</style>
              </motion.a>
            ))}
            <motion.a
              href="#order"
              className="inline-flex items-center px-3 py-[6px] text-[11px] font-black uppercase tracking-[0.28em] border border-white/70 hover:bg-white hover:text-[#1e1e1e] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
            >
              Order Now
            </motion.a>
            <motion.a
              href="https://facebook.com/"
              aria-label="Facebook"
              className="grid place-items-center w-8 h-8 rounded-full bg-white/12 hover:bg-white/22 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="w-[14px] h-[14px]" />
            </motion.a>
            <motion.a
              href="https://instagram.com/"
              aria-label="Instagram"
              className="grid place-items-center w-8 h-8 rounded-full bg-white/12 hover:bg-white/22 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-[14px] h-[14px]" />
            </motion.a>
          </div>
        </nav>

        {/* =================== POSTER-STYLE HERO (dark, modern) =================== */}
        <section className="relative text-white">
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-12 py-16 sm:py-20 md:py-24 px-6">
            {/* Left: type block */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <p className="uppercase tracking-[0.32em] text-xs sm:text-sm text-white/60 mb-6">
                Wailuku • Hawaii
              </p>
              <div className="relative pl-6">
                {/* vertical accent bar */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: CLARET }}
                />
                <h2 className="text-[36px] sm:text-[52px] md:text-[60px] lg:text-[64px] font-black leading-[1.08]">
                  Timeless Flavors.
                  <br />
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${PEACH}, ${CLARET}, ${PEACH})`,
                    }}
                  >
                    Fresh Traditions.
                  </span>
                </h2>
              </div>
              <p className="mt-6 max-w-xl text-white/80">
                A full-service Japanese restaurant with a comfortable family atmosphere.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#menu"
                  className="px-6 py-3 bg-white text-[#1c1c1c] text-[12px] font-bold uppercase tracking-[0.26em] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 cursor-pointer select-none transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.22)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  View Menu
                </motion.a>
                <motion.a
                  href="tel:8082429630"
                  className="px-6 py-3 border border-white text-[12px] font-bold uppercase tracking-[0.26em] hover:bg-white hover:text-[#1c1c1c] transition flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 cursor-pointer select-none transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.22)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  <Phone className="w-4 h-4" /> 808-242-9630
                </motion.a>
              </div>
            </motion.div>

            {/* Right: motif geometry + NEW circular image motif */}
            <div className="relative h-[300px] sm:h-[380px] md:h-[440px] lg:h-[460px]">
              {/* faint grid */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(0deg, rgba(255,255,255,0.18) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)
                  `,
                  backgroundSize: "56px 56px, 56px 56px",
                  mixBlendMode: "screen",
                }}
              />
              {/* claret block */}
              <motion.div
                aria-hidden
                className="absolute right-6 sm:right-8 top-6 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64"
                style={{ backgroundColor: CLARET, boxShadow: "0 30px 100px rgba(0,0,0,0.35)" }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              {/* peach outline block */}
              <motion.div
                aria-hidden
                className="absolute left-6 bottom-6 w-40 h-32 sm:w-48 sm:h-36 md:w-56 md:h-40 border"
                style={{ borderColor: PEACH, boxShadow: "0 30px 80px rgba(0,0,0,0.25)" }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              />
              {/* circular image motif (drop your food image in /public/food-hero.jpg) */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
              w-76 h-76 sm:w-80 sm:h-80 md:w-96 md:h-96
             rounded-full overflow-hidden border-4 border-white/30 shadow-lg"
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <img
                  src={CIRCLE_IMG_PATH}
                  alt="Featured dish"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
