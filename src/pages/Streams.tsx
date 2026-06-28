import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code, Settings, Cpu, Building, ArrowLeft } from "lucide-react";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { GlassCard } from "@/components/GlassCard";
import { Footer } from "@/components/Footer";

const streams = [
  {
    title: "CS & IT",
    icon: Code,
    gradient: "from-primary/20 to-primary/5",
    path: "/cs-it"
  },
  {
    title: "Mechanical",
    icon: Settings,
    gradient: "from-secondary/20 to-secondary/5",
    path: "/mechanical"
  },
  {
    title: "Electronics & Communication",
    icon: Cpu,
    gradient: "from-accent/20 to-accent/5",
    path: "/electronics"
  },
  {
    title: "Civil Engineering",
    icon: Building,
    gradient: "from-primary/20 to-secondary/20",
    path: "/civil"
  }
];

const Streams = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background flex flex-col">
      <FloatingBlobs />
      
      <div className="relative z-10 flex-grow py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="mb-8 glass-strong px-6 py-3 rounded-xl border border-primary/30 
                     hover:border-primary/60 transition-all duration-300
                     flex items-center gap-2 group"
          >
            <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform" />
            <span className="font-display text-primary">Back to Home</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-black text-glow-cyan mb-4">
              Choose Your Stream
            </h1>
            <p className="text-xl text-foreground/70">Select your engineering domain to explore career paths</p>
          </motion.div>



          {/* Stream Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {streams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(stream.path)}
                className="cursor-pointer"
              >
                <GlassCard className="h-full hover:border-primary/60">
                  <div className="flex flex-col items-center text-center space-y-6 py-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-8 rounded-3xl bg-gradient-to-br ${stream.gradient} 
                               shadow-3d border border-primary/20`}
                    >
                      <stream.icon className="w-16 h-16 text-primary" />
                    </motion.div>
                    <h2 className="text-3xl font-display font-bold text-glow-cyan">
                      {stream.title}
                    </h2>
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

export default Streams;
