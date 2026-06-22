import { Github, Instagram, Linkedin, Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="px-4 sm:px-6 md:px-20 py-24">
      {/* Divider */}
      <div className="max-w-6xl mx-auto">
        <hr className="border-[rgba(0,255,136,0.12)] mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[var(--color-3)] text-sm tracking-widest uppercase mb-3">Get In Touch</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Let's have <br /><span className="gradient-text">a Chat.</span>
              </h1>
            </div>

            <p className="text-[var(--color-3)] text-lg leading-relaxed max-w-md">
              Open to opportunities, collaborations, and meaningful conversations
              around software development and real-world problem solving.
            </p>

            <a href="mailto:jitain6d@gmail.com">
              <button className="btn-glow flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold w-fit">
                Send a Message <Send size={16} />
              </button>
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">
            <div className="glass rounded-2xl p-8 flex flex-col gap-6">
              <h2 className="text-xl font-semibold text-white">Contact Details</h2>

              <div className="flex flex-col gap-4">
                <a href="mailto:jitain6d@gmail.com"
                  className="flex items-center gap-4 text-[var(--color-3)] hover:text-[var(--text-color)] transition-colors group">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:border-[var(--text-color)] transition-colors">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm">jitain6d@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 text-[var(--color-3)]">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <span className="text-sm">+91 8685887246</span>
                </div>

                <div className="flex items-center gap-4 text-[var(--color-3)]">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm">Rewari, Haryana, India</span>
                </div>
              </div>

              <hr className="border-[rgba(255,255,255,0.06)]" />

              <div>
                <p className="text-xs text-[var(--color-3)] uppercase tracking-widest mb-4">Find me on</p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { href: "https://github.com/codebyjitain", icon: <Github size={18} />, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/jitainkumar", icon: <Linkedin size={18} />, label: "LinkedIn" },
                    { href: "https://www.instagram.com/____jatinkumar/", icon: <Instagram size={18} />, label: "Instagram" },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank"
                      className="glass px-4 py-2.5 rounded-xl text-[var(--color-3)] hover:text-[var(--text-color)] hover:border-[var(--text-color)] transition-all flex items-center gap-2 text-sm">
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20">
          <hr className="border-[rgba(255,255,255,0.05)] mb-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[var(--color-3)]">
            <span>© 2025 Jitain Kumar</span>
            <span>Built with React · Tailwind · Passion</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
