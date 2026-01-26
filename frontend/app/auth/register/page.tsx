"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#0A1931] text-white">

      {/* ========== LEFT IMAGE SECTION ========== */}
      <div className="relative hidden md:flex items-center justify-center">
        {/* IMAGE PLACEHOLDER */}
        <div className="absolute inset-0 bg-[url('/register-bg.png')] bg-cover bg-center" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0A1931]/80" />

        <div className="      absolute
      top-[488px]
      left-[48px]
      w-[448px]
      h-[232px]
      flex
      flex-col
      gap-[24px]
      text-white  ">
          <h1 className="text-4xl font-bold ">
            Revolutionize your <br />
            supply chain <br />
            management
          </h1>

          <p className="text-gray-200 max-w-md mb-8">
            Join thousands of companies listing excess
            inventory and optimizing their global supply
            networks in real-time.
          </p>

        </div>
      </div>

      {/* ========== RIGHT FORM SECTION ========== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center px-8"
      >
        <div className="w-full max-w-md pt-8">

          <h2 className="text-3xl font-bold mb-2">Create an account</h2>
          <p className="text-gray-400 mb-8">
            Join our network and start managing excess inventory today.
          </p>

          <form className="space-y-5">
            <Input label="Company Name" placeholder="Acme Logistics" />
            <Input label="Work Email" placeholder="name@company.com" />
            <Input label="Password" type="password" />
            <Input label="Confirm Password" type="password" />

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" />
              <span>
                I agree to the{" "}
                <span className="text-teal-400">Terms & Conditions</span>
              </span>
            </div>

            <button className="w-full bg-teal-400 text-black py-3 rounded-lg font-medium hover:bg-teal-300 transition">
              Get Started
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-teal-400">
              Login
            </Link>
          </p>

          <div className="flex justify-center gap-6 text-xs text-gray-500 mt-8">
            <span>Help Center</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ========== INPUT COMPONENT ========== */
function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm text-gray-400 block mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#162235] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-teal-400 transition"
      />
    </div>
  );
}

