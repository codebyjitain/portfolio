import React from 'react'

const Logo = () => {
  return (
    <div>
      <div className="flex items-center justify-center  w-fit bg-transparent">
        {/* Outer Container (The L-shaped corners) */}
        <div className="relative flex items-center  justify-center w-32 h-32 border-t-2 border-l-2 border-transparent group">

          {/* Top-Left Corner Accent */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500 rounded-tl-md" />

          {/* Bottom-Right Corner Accent */}
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500 rounded-br-md" />

          {/* The Rotating Ring Container */}
          <div className="relative flex items-center justify-center w-24 h-24">

            {/* Static Circular Border */}
            <div className="absolute inset-0 border-2 border-emerald-900/30 rounded-full" />

            {/* Rotating Dot Container */}
            <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
              {/* The Green Dot */}
              <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" />
            </div>

            {/* The Hexagon Background */}
            <div
              className="flex items-center justify-center w-16 h-16 bg-gray-900/80"
              style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
            >
              {/* TM Text */}
              <span className="text-emerald-400 font-bold text-xl tracking-tighter">
                JK
              </span>
            </div>

            {/* Inner Hexagon Border (Optional refinement) */}
            <div
              className="absolute w-[70px] h-[70px] border border-emerald-500/20 pointer-events-none"
              style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo