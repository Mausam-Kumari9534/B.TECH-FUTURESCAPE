import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface RoadmapSection {
  title: string;
  items: string[];
  icon?: string;
}

interface CareerCardProps {
  title: string;
  package: string;
  demand: number;
  delay?: number;
  roadmap?: RoadmapSection[];
}

export const CareerCard = ({ title, package: pkg, demand, delay = 0, roadmap }: CareerCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="group"
    >
      <motion.div
        className={cn(
          "glass-strong rounded-2xl border border-primary/20 overflow-hidden",
          "transition-all duration-300",
          isOpen && "border-primary/50 shadow-[0_0_40px_hsl(180_100%_50%/0.3)]"
        )}
        whileHover={{ y: -4 }}
      >
        {/* Card Header - Always Visible */}
        <button
          onClick={() => roadmap && setIsOpen(!isOpen)}
          className={cn(
            "w-full p-6 flex items-center justify-between gap-4",
            "transition-all duration-300",
            roadmap && "cursor-pointer hover:bg-primary/5"
          )}
        >
          <h3 className="text-lg font-display font-semibold text-card-title flex-1 text-left">
            {title}
          </h3>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground/90 mb-1">{pkg}</p>
              <div className="flex gap-0.5 justify-end">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < demand
                        ? "fill-secondary text-secondary drop-shadow-[0_0_8px_hsl(var(--secondary)/0.6)]"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {roadmap && (
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-primary" />
              </motion.div>
            )}
          </div>
        </button>

        {/* Expandable Roadmap Panel */}
        <AnimatePresence>
          {isOpen && roadmap && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 space-y-6 border-t border-primary/20">
                {roadmap.map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group/section"
                  >
                    {/* Section Title */}
                    <div className="flex items-center gap-2 mb-3">
                      {section.icon && (
                        <span className="text-2xl">{section.icon}</span>
                      )}
                      <h4 className="text-base font-display font-bold text-secondary 
                                   drop-shadow-[0_0_10px_hsl(var(--secondary)/0.5)]">
                        {section.title}
                      </h4>
                    </div>
                    
                    {/* Section Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-8">
                      {section.items.map((item, itemIdx) => (
                        <motion.div
                          key={itemIdx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                          className="flex items-center gap-2 group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary 
                                        shadow-[0_0_8px_hsl(var(--primary)/0.8)]
                                        group-hover/item:shadow-[0_0_12px_hsl(var(--primary)/1)]
                                        transition-all duration-300" />
                          <span className="text-sm text-foreground/80 
                                         group-hover/item:text-foreground
                                         group-hover/item:translate-x-1
                                         transition-all duration-300">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
