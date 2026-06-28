import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { CareerCard } from "@/components/CareerCard";
import { Footer } from "@/components/Footer";

const careers = [
  { 
    title: "Embedded Systems / IoT", 
    package: "4–10 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Basic Electronics", "Digital Electronics", "C / Embedded C", "Arduino / ESP32", "Sensors", "MQTT", "Bluetooth/WiFi", "Keil", "Proteus", "PCB Design (KiCad/Eagle)"] }
    ]
  },
  { 
    title: "VLSI / Chip Design", 
    package: "8–20 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Digital Electronics", "CMOS", "Verilog", "VHDL", "RTL Design", "FPGA", "ASIC Flow", "Cadence", "Synopsys", "Vivado"] }
    ]
  },
  { 
    title: "Telecommunication / 5G", 
    package: "4–8 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Signals & Systems", "Analog/Digital Communication", "RF Basics", "Antennas", "5G Architecture", "SDR", "MATLAB", "HFSS", "LabVIEW"] }
    ]
  },
  { 
    title: "Network Engineer", 
    package: "3–6 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["OSI/TCP-IP", "Routing & Switching", "CCNA / CCNP", "VPN / Firewalls", "Packet Tracer", "Wireshark"] }
    ]
  },
  { 
    title: "Electronics Design Engineer", 
    package: "3–7 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Circuit Design", "Sensors", "Soldering", "PCB (Altium / KiCad)", "Proteus", "LTSpice", "MATLAB"] }
    ]
  },
  { 
    title: "Automation & Control Systems", 
    package: "4–8 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Control Systems", "PID", "PLC", "SCADA", "HMI", "Sensors", "Siemens TIA Portal", "Allen Bradley Studio"] }
    ]
  },
  { 
    title: "Sensor + Robotics Engineer", 
    package: "5–12 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Electronics", "Transducers", "Microcontrollers", "Kinematics", "ROS", "Python", "Gazebo", "MATLAB Robotics Toolbox"] }
    ]
  },
];

const Electronics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background flex flex-col">
      <FloatingBlobs />
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
                    from-primary via-transparent to-transparent" />
      
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
            <h1 className="text-4xl md:text-5xl font-display font-black text-glow-cyan mb-4">
              Electronics & Communication
            </h1>
            <p className="text-xl text-foreground/70">Connect the world through circuits</p>
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

export default Electronics;
