// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaBolt,
  FaChartLine,
  FaGlobe,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#10223E] text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav
        className="h-[81px] flex items-center justify-between px-[280px]
        bg-[#0A1931] border-b border-white/10 backdrop-blur-[12px]"
      >
        <h1 className="text-xl font-bold text-cyan-400">OptiChain</h1>

        <ul className="flex gap-10 text-sm text-gray-300">
          <li className="hover:text-cyan-400 transition cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 transition cursor-pointer">Pricing</li>
          <li className="hover:text-cyan-400 transition cursor-pointer">About</li>
        </ul>

        <div className="flex gap-6 text-sm">
        <Link href="/auth/login">
          <button className="hover:text-cyan-400 transition">Login</button>
          </Link>
          <Link href="/auth/register">
          <button className="bg-cyan-400 text-black px-5 py-2 rounded-lg hover:bg-cyan-300 transition">
            Register
          </button>
          </Link>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="min-h-screen grid pt-20 pb-32 grid-cols-1 md:grid-cols-2 bg-[#10223E] text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan-400 text-sm tracking-widest">
            NEXT-GEN LOGISTICS
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Optimizing Global <br />
            <span className="text-cyan-400">Supply Chains</span> with AI
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl">
            Advanced AI-powered logistics platform delivering real-time
            transparency, predictive intelligence, and operational excellence
            across global supply chains.
          </p>

          <div className="flex gap-6 mt-10">
          <Link href="/auth/register">
            <button className="bg-cyan-400 text-black px-10 py-4 rounded-lg hover:scale-105 transition">
              Get Started
            </button>
            </Link>
            <button className="border border-white/20 px-10 py-4 rounded-lg hover:border-cyan-400 transition">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* IMAGE PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[420px] rounded-2xl bg-[#0A1931] border border-white/10 flex bg-[url('/landing-bg.png')] items-center justify-center bg-cover bg-center"
        >
          <span className="text-gray-500">Image Placeholder</span>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-6 ">
      <span className="text-center flex justify-center text-4xl font-bold mb-4 text-sm leading-5 tracking-[2.8px] text-center uppercase text-cyan-400">
      The Optichain Advantage
</span>

        <h2 className="text-center text-4xl font-bold mb-4">
          Redefining Global Trade
        </h2>
        <p className="mt-6 text-[18px] leading-[28px] text-center text-gray-300 max-w-xl mx-auto pb-14">
        Our mission is to empower global trade through transparency, efficiency, and AI-
        driven insights that matter.
        </p>

        <div className="grid grid-cols-3 gap-12">
          <Feature icon={<FaGlobe />} title="Real-time Transparency" />
          <Feature icon={<FaBolt />} title="Operational Efficiency" />
          <Feature icon={<FaChartLine />} title="AI Insights" />
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="px-[280px] py-32">
        <h2 className="text-center text-4xl font-bold mb-20">
          Flexible Pricing Plans
        </h2>

        <div className="grid grid-cols-3 gap-12">
          <Price title="Starter" price="$499" />
          <Price title="Professional" price="$1,299" highlight />
          <Price title="Enterprise" price="Custom" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-[280px] py-32">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#0A1931] border border-white/10 rounded-2xl p-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to optimize your supply chain?
          </h2>
          <p className="text-gray-400 mb-10">
            Join enterprises worldwide transforming logistics with AI.
          </p>
          <Link href="/auth/register">
          <button className="bg-cyan-400 text-black px-12 py-4 rounded-lg hover:bg-cyan-300 transition">
            Get Started Now
          </button>
          </Link>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0A1931] border-t border-white/5 px-[280px] py-20">
        <div className="grid grid-cols-3 gap-20">

          <div>
            <h3 className="text-cyan-400 text-xl font-bold mb-4">OptiChain</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered logistics platform redefining global trade through
              transparency, automation, and intelligent optimization.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-cyan-400 transition cursor-pointer">About</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Pricing</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Careers</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Connect</h4>
            <div className="flex gap-6 text-xl text-gray-400">
              <FaTwitter className="hover:text-cyan-400 transition cursor-pointer" />
              <FaLinkedin className="hover:text-cyan-400 transition cursor-pointer" />
              <FaGithub className="hover:text-cyan-400 transition cursor-pointer" />
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-20">
          © 2026 OptiChain. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Feature({ icon, title }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-[#0A1931] border border-white/10 p-10 rounded-2xl"
    >
      <div className="text-cyan-400 text-3xl mb-6">{icon}</div>
      <h3 className="font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm">
        Delivering intelligent solutions designed for scalable global logistics.
      </p>
    </motion.div>
  );
}

function Price({ title, price, highlight }) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      className={`relative p-10 rounded-2xl border transition ${
        highlight
          ? "bg-[#0A1931] border-cyan-400"
          : "bg-[#0F253C] border-white/10"
      }`}
    >
      {highlight && (
        <span className="absolute top-5 right-5 bg-cyan-400 text-black text-xs px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-4xl font-bold mb-8">{price}</p>

      <ul className="space-y-3 text-sm text-gray-300 mb-10">
        <li>✔ Real-time tracking</li>
        <li>✔ AI analytics</li>
        <li>✔ Smart routing</li>
        <li>✔ Advanced reports</li>
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-medium transition ${
          highlight
            ? "bg-cyan-400 text-black hover:bg-cyan-300"
            : "border border-white/20 hover:border-cyan-400"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
}