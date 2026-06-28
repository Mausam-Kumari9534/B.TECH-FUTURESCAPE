import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
}

export const GlassCard = ({ children, className, hover3D = true }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover3D ? { 
        y: -8,
        boxShadow: "0 20px 40px hsl(180 100% 50% / 0.3), 0 30px 60px hsl(270 100% 62% / 0.25)"
      } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass-strong rounded-2xl p-6 shadow-3d",
        "border border-primary/20",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
