import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full mt-auto border-t border-primary/10 bg-background/80 backdrop-blur-md py-8 overflow-hidden">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Subtle background glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side: Brand / Name */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center gap-2 group">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="font-display font-black text-xl tracking-wider bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent group-hover:text-glow-cyan transition-all duration-300">
              B.TECH FUTURESCAPE
            </span>
          </div>
          <p className="text-sm text-foreground/50 font-light text-center md:text-left">
            Exploring the horizons of modern engineering
          </p>
        </div>

        {/* Center: Creator Info */}
        <div className="flex flex-col items-center space-y-1">
          <div className="flex items-center gap-1.5 text-sm text-foreground/80">
            <span>Designed & Developed with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>by</span>
          </div>
          <span className="font-display font-extrabold text-lg text-glow-cyan bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
            Mausam Kumari
          </span>
        </div>

        {/* Right side: Social links & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/Mausam-Kumari9534"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 text-foreground/60 hover:text-primary transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 text-foreground/60 hover:text-secondary transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 text-foreground/60 hover:text-accent transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>
          <span className="text-xs text-foreground/40 font-light">
            &copy; {currentYear} Futurescape. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};
