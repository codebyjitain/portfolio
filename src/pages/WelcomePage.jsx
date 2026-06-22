const WelcomePage = ({ fadeOut }) => {
  return (
    <>
      <style>{`
        @keyframes pop {
          0% { opacity: 0; transform: scale(0.75); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #00ff88 0%, #ffffff 50%, #00ff88 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 2s linear infinite;
          animation-delay: 1.5s;
        }
      `}</style>

      <div className={`w-screen h-screen flex items-center justify-center flex-col gap-6 transition-all duration-500 ease-in-out ${fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        style={{ background: "#080808" }}>
        
        <img src="/logo.svg" alt="Logo" className="w-20 opacity-0"
          style={{ animation: "pop 0.6s ease-out forwards", animationDelay: "0.2s" }} />

        <h1 className="text-3xl font-bold opacity-0 shimmer-text"
          style={{ animation: "fadeUp 0.5s ease-out forwards", animationDelay: "0.8s" }}>
          Jitain Kumar
        </h1>

        <p className="text-[var(--color-3)] text-sm opacity-0"
          style={{ animation: "fadeUp 0.5s ease-out forwards", animationDelay: "1.2s" }}>
          Full-Stack Developer · Problem Solver
        </p>
      </div>
    </>
  );
};

export default WelcomePage;
