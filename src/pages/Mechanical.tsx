import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { CareerCard } from "@/components/CareerCard";
import { Footer } from "@/components/Footer";

const careers = [
  { 
    title: "Design Engineer (CAD/CAM)", 
    package: "3–6 LPA", 
    demand: 4,
    roadmap: [
      { title: "Basics", items: ["Engineering Drawing", "Engineering Graphics", "Strength of Materials"] },
      { title: "CAD Software", items: ["AutoCAD", "SolidWorks / CATIA", "CREO"] },
      { title: "Simulation", items: ["ANSYS", "MATLAB"] },
      { title: "Extra", items: ["GD&T", "3D Modelling Projects"] }
    ]
  },
  { 
    title: "Automobile Engineer", 
    package: "3–7 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["IC Engines", "Vehicle Dynamics", "Thermodynamics", "Fluid Mechanics", "Engine Design", "Brakes", "Transmission", "Suspension", "MATLAB / Simulink", "SolidWorks"] }
    ]
  },
  { 
    title: "EV Sector (Battery, Motor Design)", 
    package: "5–10 LPA", 
    demand: 5,
    roadmap: [
      { title: "EV Basics", items: ["EV fundamentals", "BLDC, PMSM motors", "Battery types"] },
      { title: "Battery Engineering", items: ["Cell Chemistry", "BMS", "Thermal Runaway"] },
      { title: "Motor Engineering", items: ["Motor Control", "Power Electronics"] },
      { title: "Tools", items: ["MATLAB", "ANSYS Maxwell"] }
    ]
  },
  { 
    title: "Maintenance Engineer", 
    package: "3–5 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Engineering Drawing", "Machine Elements", "Preventive Maintenance", "Breakdown Maintenance", "RCA", "Sensors & Actuators", "PLC Basics", "SAP PM (optional)"] }
    ]
  },
  { 
    title: "Robotics / Automation", 
    package: "5–12 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Electronics Fundamentals", "Sensors & Actuators", "Arduino / ESP32", "Kinematics", "Path Planning", "PLC", "SCADA", "Pneumatics"] }
    ]
  },
  { 
    title: "Thermal Engineer", 
    package: "4–7 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Thermodynamics", "Heat & Mass Transfer", "Fluid Mechanics", "ANSYS Fluent", "CFD", "MATLAB", "HVAC", "Turbines"] }
    ]
  },
  { 
    title: "Quality Control / Production", 
    package: "3–6 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Manufacturing Processes", "CNC", "Tooling", "Six Sigma", "QC Tools", "SPC", "Minitab", "SAP QM"] }
    ]
  },
];

const Mechanical = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background flex flex-col">
      <FloatingBlobs />
      
      <div className="relative z-10 flex-grow py-20 px-4">
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
              Mechanical Engineering
            </h1>
            <p className="text-xl text-foreground/70">Power the machines of tomorrow</p>
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

export default Mechanical;
