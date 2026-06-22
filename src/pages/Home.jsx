import { MapPin, Download, Github, Linkedin, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "Problem Solver",
  "Backend Enthusiast",
];

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1600);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex(r => (r + 1) % roles.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-5 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-1/5 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-16 z-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-7 text-center md:text-left max-w-xl mt-10">
          {/* Location pill */}
          <div className="flex items-center gap-2 mx-auto md:mx-0 border border-[var(--glass-border)] w-fit px-4 py-2 rounded-full glass animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 rounded-full bg-[var(--text-color)] animate-pulse" />
            <MapPin size={14} className="text-[var(--text-color)]" />
            <span className="text-sm text-[var(--color-3)]">Rewari, Haryana, India</span>
          </div>

          {/* Main heading */}
          <div className="flex flex-col gap-3 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <p className="text-[var(--color-3)] text-sm tracking-widest uppercase font-medium">Hello, EveryOne</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              I'm <span className="gradient-text">Jitain.</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-[var(--color-3)] font-light min-h-[2rem]">
              <span className="text-white font-medium">{text}</span>
              <span className="cursor" />
            </h2>
            <p className="text-base text-[var(--color-3)] leading-relaxed max-w-md mx-auto md:mx-0">
              CS Engineering graduate building scalable full-stack systems.
              Strong on MERN, DSA, and backend fundamentals.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeInUp" style={{ animationDelay: "0.35s" }}>
            <a href="/resume.pdf" download>
              <button className="btn-glow flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm">
                Download Resume <Download size={16} />
              </button>
            </a>
            <a href="#contact">
              <button className="glass flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white hover:border-[var(--text-color)] transition-all hover:text-[var(--text-color)]">
                Let's Connect
              </button>
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center md:justify-start animate-fadeInUp" style={{ animationDelay: "0.45s" }}>
            <a href="https://github.com/codebyjitain" target="_blank"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--color-3)] hover:text-[var(--text-color)] hover:border-[var(--text-color)] transition-all">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/jitainkumar" target="_blank"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--color-3)] hover:text-[var(--text-color)] hover:border-[var(--text-color)] transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT — Profile Image */}
        <div className="relative flex-shrink-0 animate-fadeInUp mb-10" style={{ animationDelay: "0.3s" }}>
          {/* Spinning dashed ring */}
          <div className="absolute inset-[-16px] rounded-[32px] rotate-box"
            style={{ border: "2px dashed rgba(0,255,136,0.25)" }} />
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-3xl"
            style={{ boxShadow: "0 0 60px rgba(0,255,136,0.18)" }} />
          <img
            src="https://res.cloudinary.com/dzop2pyni/image/upload/v1771943160/first_1_yauyct.jpg"
            alt="Jitain Kumar"
            className="w-64 h-64 md:w-[360px] md:h-[360px] rounded-3xl object-cover relative z-10"
            style={{ border: "2px solid rgba(0,255,136,0.3)" }}
          />
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl z-20 text-sm font-medium">
            <span className="text-[var(--text-color)]">100+</span>
            <span className="text-[var(--color-3)] ml-1">DSA Solved</span>
          </div>
          <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl z-20 text-sm font-medium">
            <span className="text-[var(--text-color)]">5+</span>
            <span className="text-[var(--color-3)] ml-1">Projects</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-3)] hover:text-[var(--text-color)] transition-colors animate-bounce">
        <ArrowDown size={22} />
      </a>
    </div>
  );
};

export default Home;
