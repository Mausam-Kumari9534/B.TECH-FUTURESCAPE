import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, Code, Settings, Cpu, Building, ArrowRight } from "lucide-react";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";

const features = [
  {
    title: "CS & IT",
    desc: "Dive into Software Engineering, AI, ML, DevOps, and Cyber Security.",
    icon: Code,
    color: "text-primary",
    gradient: "from-primary/20 to-transparent",
    path: "/cs-it"
  },
  {
    title: "Mechanical",
    desc: "Explore Robotics, CAD/CAM Design, Automobile, and Aerospace Engineering.",
    icon: Settings,
    color: "text-secondary",
    gradient: "from-secondary/20 to-transparent",
    path: "/mechanical"
  },
  {
    title: "Electronics",
    desc: "Master Embedded Systems, VLSI Chip Design, IoT, and 5G Communications.",
    icon: Cpu,
    color: "text-accent",
    gradient: "from-accent/20 to-transparent",
    path: "/electronics"
  },
  {
    title: "Civil",
    desc: "Build the future with Structural Engineering, Surveying, and Smart Infrastructure.",
    icon: Building,
    color: "text-primary",
    gradient: "from-primary/20 to-secondary/20",
    path: "/civil"
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background flex flex-col">
      <FloatingBlobs />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mt-12"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black text-glow-cyan">
            Career Options
          </h1>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-glow-purple">
            After B.Tech
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto">
            Explore cutting-edge career paths across engineering domains
          </p>
          
          <motion.button
            onClick={() => navigate("/streams")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 glass-strong px-12 py-6 rounded-2xl 
                     border-2 border-primary/50 
                     shadow-3d hover:shadow-3d-hover
                     transition-all duration-300
                     relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-2xl font-display font-bold text-primary group-hover:text-glow-cyan">
              ✨ Click Here For All Information
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-xs text-foreground/40 font-display tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-6 rounded-full bg-primary/30 relative"
          >
            <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="relative z-10 py-28 px-6 bg-background/40 border-t border-primary/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-black text-glow-cyan">
              Explore Departments
            </h2>
            <p className="text-lg text-foreground/60 max-w-xl mx-auto">
              Select your branch below to view curated roadmaps and career options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, index) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(feat.path)}
                className="cursor-pointer h-full"
              >
                <GlassCard className="h-full border border-primary/15 hover:border-primary/50 transition-all duration-500 group flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className={`p-3 w-12 h-12 rounded-xl bg-gradient-to-br ${feat.gradient} border border-primary/10 flex items-center justify-center`}>
                      <feat.icon className={`w-6 h-6 ${feat.color}`} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-glow-cyan group-hover:text-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed font-light">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="pt-6 flex items-center gap-2 text-primary font-display font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explore Roadmaps</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
