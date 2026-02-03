"use client";

export default function sidebar() {
  return (
    <aside
      className="
        fixed top-0 left-0
        w-[256px] h-screen
        flex flex-col justify-between
        pt-6 pb-6 px-3
        bg-[#162B4A]/50
        border-r border-white/10
        backdrop-blur-[4px]
        text-gray-300
      "
    >
      {/* Logo */}
      <div>
        <div className="px-3 mb-8 text-cyan-400 font-semibold text-lg">
          ⬢ OptiChain
        </div>

        {/* Nav */}
        <nav className="space-y-1 text-sm">
          <Item active>Dashboard</Item>
          <Item>Inventory</Item>
          <Item><a href="/demandforecast">Demand Forecasting</a> </Item>
          <Item>What-if Simulator</Item>
          <Item>Marketplace</Item>
          <Item>Settings</Item>
        </nav>
      </div>

      <div className="px-3 text-sm text-gray-400">
      
      <a href="/auth/login"       className="
        flex items-center gap-3 
        text-gray-300 hover:text-red-400 
        transition 
        px-4 py-1.5 
        rounded-lg
        w-[232px] h-[40px]
        opacity-100
      " >
              <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[24px] h-[24px] text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
        />
      </svg>
        
        Logout
        
      </a>
     
      
      </div>
    </aside>
  );
}

function Item({ children, active }: any) {
  return (
    <div
      className={`
        px-4 py-2 rounded-lg cursor-pointer
        ${
          active
            ? "bg-cyan-400/10 text-cyan-400"
            : "hover:bg-white/5"
        }
      `}
    >
      {children}
    </div>
  );
}

