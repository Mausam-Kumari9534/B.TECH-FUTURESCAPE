import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { CareerCard } from "@/components/CareerCard";
import { Footer } from "@/components/Footer";

const careers = [
  { 
    title: "Site Engineer", 
    package: "3–5 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Construction Materials", "BBS", "Surveying", "AutoCAD", "Excel", "Concrete Work", "Site Safety"] }
    ]
  },
  { 
    title: "Structural Engineer", 
    package: "5–12 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["SOM", "RCC", "Steel Design", "STAAD Pro", "ETABS", "SAFE", "Earthquake Design", "IS Codes"] }
    ]
  },
  { 
    title: "Surveyor / Planning Engineer", 
    package: "3–6 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Chain Survey", "Levelling", "Total Station", "DPR", "Estimation & Costing", "Primavera", "MS Project"] }
    ]
  },
  { 
    title: "Transportation Engineer", 
    package: "4–8 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Highway Engineering", "Traffic", "Pavement Design", "Urban Mobility", "Civil 3D", "MX Road"] }
    ]
  },
  { 
    title: "Geo-Technical Engineer", 
    package: "4–7 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Soil Mechanics", "Foundation", "Soil Testing", "PLAXIS", "Geo5"] }
    ]
  },
  { 
    title: "Construction Project Manager", 
    package: "8–20 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Project Lifecycle", "Contracts", "Risk", "Budgeting", "Primavera", "MS Project"] }
    ]
  },
  { 
    title: "Environmental Engineer", 
    package: "4–7 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Water Treatment", "Wastewater", "Solid Waste", "EIA", "EPANET", "GIS", "WaterCAD"] }
    ]
  },
];

const Civil = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background flex flex-col">
      <FloatingBlobs />
      
      {/* Blueprint pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="relative z-10 flex-grow py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/streams")}
            className="mb-8 glass-strong px-6 py-3 rounded-xl border border-primary/30 
                     hover:border-primary/60 transition-all duration-300
                     flex items-center gap-2 group"
          >
            <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform" />
            <span className="font-display text-primary">Back to Streams</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-display font-black text-glow-purple mb-4">
              Civil Engineering
            </h1>
            <p className="text-xl text-foreground/70">Build the foundations of society</p>
          </motion.div>

          <div className="grid gap-6">
            {careers.map((career, index) => (
              <CareerCard
                key={career.title}
                title={career.title}
                package={career.package}
                demand={career.demand}
                delay={index * 0.05}
                roadmap={career.roadmap}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Civil;
