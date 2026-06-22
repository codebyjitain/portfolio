import { Star, Code2, Database, Brain, StarHalf } from "lucide-react";
import { useEffect, useRef } from "react";

const highlights = [
  { icon: <Code2 size={20} />, label: "MERN Stack", sub: "Full-Stack Dev" },
  { icon: <Star size={20} />, label: "NextJs", sub: "Frontend Dev" },
  { icon: <Database size={20} />, label: "NestJs", sub: "Backend Dev" },
  { icon: <Brain size={20} />, label: "DSA & GATE", sub: "Core CS" },
];

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.15 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col items-center px-4 md:px-8 py-24"
    >
      <div className="w-full max-w-6xl flex flex-col gap-16">
        {/* Heading */}
        <div className="reveal text-center md:text-left">
          <p className="text-[var(--color-3)] text-sm tracking-widest uppercase mb-3">
            About Me
          </p>
          <h1 className="text-4xl md:text-6xl font-bold section-heading inline-block">
            What I <span className="gradient-text">Do</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="reveal flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ boxShadow: "0 0 80px rgba(0,255,136,0.12)" }}
              />
              <img
                src="https://res.cloudinary.com/dzop2pyni/image/upload/v1771943299/second_1_vkfukl.jpg"
                alt="About Jitain"
                className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-2xl object-cover relative z-10"
                style={{ border: "2px solid rgba(0,255,136,0.2)" }}
              />
              {/* Decorative corner */}
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl -z-0"
                style={{
                  background: "rgba(0,255,136,0.06)",
                  border: "1px solid rgba(0,255,136,0.15)",
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-7 order-1 md:order-2">
            <div className="reveal flex items-center gap-2 border border-[var(--glass-border)] w-fit px-4 py-2 rounded-full glass">
              <Star size={14} className="text-[var(--text-color)]" />
              <span className="text-sm tracking-wide text-[var(--color-3)]">
                Driven By Purpose
              </span>
            </div>

            <div className="reveal flex flex-col gap-5 text-base md:text-lg text-[var(--color-3)] leading-relaxed">
              <p>
                I'm a Full Stack Developer passionate about building scalable,
                high-performance web applications and meaningful digital
                products. My core expertise includes{" "}
                <span className="text-white font-medium">
                  React, Next.js, TypeScript, Node.js, NestJS, Express.js, and
                  MongoDB
                </span>
                , allowing me to develop complete solutions from intuitive user
                interfaces to robust backend systems.
              </p>

              <p>
                Beyond development, I actively strengthen my understanding of{" "}
                <span className="text-white font-medium">
                  Data Structures & Algorithms
                </span>
                , system design concepts, and computer science fundamentals. I
                believe that strong engineering is built on problem-solving
                ability, clean architecture, and a deep understanding of how
                systems work behind the scenes.
              </p>
            </div>

            {/* Highlights row */}
            <div className="reveal grid grid-cols-3 gap-3">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 flex flex-col gap-2 text-center transition-all hover:scale-105"
                >
                  <div className="text-[var(--text-color)] flex justify-center">
                    {h.icon}
                  </div>
                  <div className="text-white font-semibold text-sm">
                    {h.label}
                  </div>
                  <div className="text-[var(--color-3)] text-xs">{h.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
