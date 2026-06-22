const Welcome = ({ fadeOut }) => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "#080808",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <img src="/logo.svg" alt="Logo" className="w-20 h-20 animate-pulse" />
        <div className="flex gap-1">
          {["J","i","t","a","i","n"].map((c, i) => (
            <span key={i} className="text-2xl font-bold gradient-text"
              style={{ animation: `fadeInUp 0.4s ease forwards`, animationDelay: `${i * 0.08}s`, opacity: 0 }}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Welcome;
