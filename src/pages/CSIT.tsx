import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { CareerCard } from "@/components/CareerCard";
import { Footer } from "@/components/Footer";

const careers = [
  { 
    title: "Full Stack Development", 
    package: "5–12 LPA", 
    demand: 5,
    roadmap: [
      { title: "🟣 Frontend", items: ["HTML", "CSS", "JavaScript", "Bootstrap / Tailwind", "React / Next.js", "API Calling (Axios/Fetch)", "State Management (Redux / Zustand)"] },
      { title: "🔵 Backend", items: ["Node.js", "Express.js", "Authentication (JWT, bcrypt)", "REST API Development"] },
      { title: "🟢 Database", items: ["MongoDB / MySQL", "Mongoose / Prisma ORM"] },
      { title: "🟡 Extra", items: ["Git & GitHub", "Deployment (Vercel / Render)"] }
    ]
  },
  { 
    title: "DevOps Engineer", 
    package: "6–14 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Linux Commands", "Git & GitHub", "Shell Scripting", "Docker", "Docker Compose", "CI/CD (GitHub Actions, Jenkins)", "AWS EC2, S3", "Kubernetes", "Terraform (optional)"] }
    ]
  },
  { 
    title: "Data Science / Machine Learning", 
    package: "6–15 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Python", "NumPy, Pandas", "Matplotlib / Seaborn", "Statistics & Probability", "ML Models", "Sklearn", "Deployment: Flask/Streamlit", "SQL + PowerBI", "Deep Learning (optional)"] }
    ]
  },
  { 
    title: "Cyber Security / Ethical Hacking", 
    package: "5–12 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Networking Basics", "Linux Commands", "Web App Security", "OWASP Top 10", "BurpSuite", "Nmap / Metasploit", "Kali Linux", "Bug Bounty", "CEH Concepts"] }
    ]
  },
  { 
    title: "Cloud Computing (AWS/Azure/GCP)", 
    package: "7–18 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Networking Basics", "Linux", "AWS EC2, S3, IAM", "VPC", "CloudFormation", "DevOps Basics", "Docker + CI/CD", "CloudWatch Monitoring"] }
    ]
  },
  { 
    title: "Mobile App Development (Android/iOS/Flutter)", 
    package: "4–10 LPA", 
    demand: 4,
    roadmap: [
      { title: "Android (Kotlin)", items: ["Kotlin", "Android Studio", "UI + Activities", "Retrofit", "Room DB"] },
      { title: "Flutter", items: ["Dart", "Widgets", "API Integration", "Firebase"] }
    ]
  },
  { 
    title: "AI Engineer / NLP", 
    package: "8–20 LPA", 
    demand: 5,
    roadmap: [
      { title: "Core Skills", items: ["Python", "NumPy, Pandas", "ML Models", "ANN / CNN / RNN", "NLP (Tokenization, Embeddings)", "Transformers (BERT, GPT)", "Deployment"] }
    ]
  },
  { 
    title: "QA / Automation Testing", 
    package: "4–8 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Manual Testing", "SDLC / STLC", "Test Cases", "Selenium", "Java/Python", "API Testing", "JMeter", "Automation Frameworks"] }
    ]
  },
  { 
    title: "Blockchain Developer", 
    package: "7–20 LPA", 
    demand: 4,
    roadmap: [
      { title: "Core Skills", items: ["Blockchain Basics", "Cryptography", "Ethereum", "Solidity", "Smart Contracts", "Web3.js / Ether.js", "DApps", "Metamask Integration"] }
    ]
  },
];

const CSIT = () => {
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
            <h1 className="text-5xl md:text-6xl font-display font-black text-glow-cyan mb-4">
              CS & IT Careers
            </h1>
            <p className="text-xl text-foreground/70">Explore the digital frontier</p>
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

export default CSIT;
