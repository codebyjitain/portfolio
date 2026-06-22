import { useState, useEffect } from "react";
import { HomeIcon, User, ChartNoAxesGantt, FileCodeCorner, Trophy, Contact } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: <HomeIcon size={20} /> },
  { id: "about", label: "About", icon: <User size={20} /> },
  { id: "projects", label: "Projects", icon: <ChartNoAxesGantt size={20} /> },
  { id: "skills", label: "Skills", icon: <FileCodeCorner size={20} /> },
  { id: "achievements", label: "Achievements", icon: <Trophy size={20} /> },
  { id: "contact", label: "Contact", icon: <Contact size={20} /> },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems.map(n => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <ul className="flex gap-1 nav-color p-2 rounded-full border border-[rgba(255,255,255,0.07)]"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,136,0.06)" }}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 text-sm font-medium
                  ${active === item.id
                    ? "bg-[var(--text-color)] text-black shadow-[0_0_15px_rgba(0,255,136,0.4)]"
                    : "text-[var(--color-3)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                  }`}
              >
                {item.icon}
                <span className={`overflow-hidden transition-all duration-300 ${active === item.id ? "max-w-20" : "max-w-0"}`}>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[94%]">
        <div className="nav-color border border-[rgba(255,255,255,0.07)] rounded-full px-2 py-2"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}>
          <ul className="flex justify-around items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                  className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300
                    ${active === item.id
                      ? "bg-[var(--text-color)] text-black shadow-[0_0_12px_rgba(0,255,136,0.4)] scale-110"
                      : "text-[var(--color-3)] hover:text-white"
                    }`}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
