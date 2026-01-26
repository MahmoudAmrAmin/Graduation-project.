


// import Image from "next/image";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen w-full bg-[#0B1120] flex items-center justify-center">
      
//       {/* الكونتينر الكبير */}
//       <div
//         className="relative flex overflow-hidden"
//         style={{
//           width: "1152px",
//           minHeight: "700px",
//           height: "748.5px",
//           background: "#1E293B",
//           borderRadius: "24px",
//         }}
//       >

//         {/* ================= LEFT SIDE ================= */}
//         <div className="relative w-1/2">

//           {/* صورة الخلفية */}
//           <Image
//   src="/login-bg.png"
//   alt="Warehouse"
//   fill
//   priority
//   style={{
//     objectFit: "cover",        // Scale: Crop
//     opacity: 0.3,              // opacity 30%
//     mixBlendMode: "overlay",   // blend mode
//   }}
// />


//           {/* Overlay + Gradient */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "linear-gradient(135deg, rgba(11, 17, 32, 0.8) 0%, rgba(11, 17, 32, 0.4) 50%, rgba(19, 236, 236, 0.2) 100%)",
//               backdropFilter: "blur(6px)",
//             }}
//           />

//           {/* محتوى الشمال */}
//           <div className="relative z-10 h-full p-[48px] flex flex-col justify-between">
            
//             {/* Logo */}
//             <div className="text-white font-semibold text-lg">
//               Optichain
//             </div>

//             {/* Text */}
//             <div>
//               <h1 className="text-white text-[36px] font-bold leading-[44px] mb-6">
//                 Streamline your <br />
//                 <span className="text-[#13ECEC]">Supply Chain</span><br />
//                 Network.
//               </h1>

//               <p className="text-gray-300 text-[16px] leading-[24px] max-w-[360px]">
//                 The world's leading marketplace for excess inventory
//                 management and demand forecasting.
//               </p>
//             </div>

//             {/* Users */}
//             <div className="text-gray-300 text-sm">
//               Joined by over <span className="text-white font-semibold">10,000+</span> logistics professionals
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="w-1/2 flex items-center justify-center">
//   <div className="w-full max-w-[448px] flex flex-col gap-8">

//     {/* Heading */}
//     <div className="flex flex-col gap-4 text-center">
//       <h1 className="text-white text-[32px] font-bold leading-[40px]">
//         Welcome back
//       </h1>

//       <p className="text-gray-300 text-[16px] leading-[24px]">
//         Log in to your account to continue tracking your global
//         supply chain operations in real time.
//       </p>
//     </div>

//     {/* Form */}
//     <form className="flex flex-col gap-6">

//       {/* Email */}
//       <div className="flex flex-col gap-2">
//         <label className="text-sm text-gray-300">Email address</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="h-12 rounded-xl bg-[#0B1120] border border-white/10 px-4 text-white outline-none focus:border-cyan-400"
//         />
//       </div>

//       {/* Password */}
//       <div className="flex flex-col gap-2">
//         <label className="text-sm text-gray-300">Password</label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           className="h-12 rounded-xl bg-[#0B1120] border border-white/10 px-4 text-white outline-none focus:border-cyan-400"
//         />
//       </div>

//       {/* Forgot password */}
//       <div className="text-right">
//         <button
//           type="button"
//           className="text-sm text-cyan-400 hover:underline"
//         >
//           Forgot password?
//         </button>
//       </div>

//       {/* Login Button */}
//       <button
//         type="submit"
//         className="h-12 rounded-xl bg-cyan-400 text-[#0A1931] font-semibold hover:opacity-90 transition"
//       >
//         Log in
//       </button>
//     </form>

//     {/* Divider */}
//     <div className="flex items-center gap-4">
//       <div className="h-px flex-1 bg-white/10" />
//       <span className="text-sm text-gray-400">OR</span>
//       <div className="h-px flex-1 bg-white/10" />
//     </div>

//     {/* Sign up */}
//     <p className="text-center text-sm text-gray-300">
//       Don’t have an account?{" "}
//       <a href="/register" className="text-cyan-400 hover:underline">
//         Sign up
//       </a>
//     </p>

//   </div>
// </div>


//       </div>
//     </div>
//   );
// }






"use client";

import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-[#1E293B] rounded-2xl overflow-hidden grid md:grid-cols-2 shadow-2xl">

        {/* ================= LEFT PANEL ================= */}

        <section className="hidden md:flex flex-col justify-between p-12 relative overflow-hidden 
bg-gradient-to-br from-[#0B1120]/80 via-[#0B1120]/40 to-cyan-400/20">

  {/* ===== Overlay Image ===== */}
  <img
  src="/login-bg.png"
  alt=""
  className="
    absolute top-0 left-0
    w-[576px] h-[749px]
    object-cover
    opacity-30
    mix-blend-overlay
    blur-[1px]
    pointer-events-none
  "
/>


  {/* ===== Content ===== */}
  <div className="relative z-10">
    <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
      <span className="text-2xl">⬢</span> OptiChain
    </div>

    <h1 className="text-4xl font-bold mt-16 leading-tight">
      Streamline your <br />
      <span className="text-cyan-400">Supply Chain</span> <br />
      Network.
    </h1>

    <p className="text-gray-400 mt-6 max-w-sm">
      The world’s leading marketplace for excess inventory management
      and demand forecasting.
    </p>
  </div>

  {/* ===== Bottom ===== */}
  <div className="relative z-10 flex items-center gap-4 text-sm text-gray-400">
    <div className="flex -space-x-2">
      <img className="w-8 h-8 rounded-full border border-[#0F253C]" src="https://i.pravatar.cc/40?1" />
      <img className="w-8 h-8 rounded-full border border-[#0F253C]" src="https://i.pravatar.cc/40?2" />
      <img className="w-8 h-8 rounded-full border border-[#0F253C]" src="https://i.pravatar.cc/40?3" />
    </div>
    <span>Joined by over 10,000+ logistics professionals</span>
  </div>
</section>


        {/* ================= RIGHT PANEL ================= */}
        <section className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-400 mb-8">
            Please enter your details to sign in
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-400">Work Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0B1C2D] border border-gray-700 focus:border-cyan-400 outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0B1C2D] border border-gray-700 focus:border-cyan-400 outline-none transition"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-cyan-400" />
              Remember for 30 days
            </label>
            <a className="text-cyan-400 hover:underline cursor-pointer">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-cyan-400 text-black py-3 rounded-lg font-medium hover:bg-cyan-300 hover:scale-[1.02] transition">
            Login →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6 text-gray-500 text-sm">
            <div className="flex-1 h-px bg-gray-700" />
            Or continue with SSO
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border border-gray-700 hover:border-cyan-400 transition">
            <FaGoogle />
            Sign in with Google
          </button>

          {/* Register */}
          <p className="text-sm text-gray-400 mt-6 text-center">
            Don’t have an account?{" "}
            <span className="text-cyan-400 hover:underline cursor-pointer">
              Register now
            </span>
          </p>
        </section>
      </div>
    </main>
  );
}