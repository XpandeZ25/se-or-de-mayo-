import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Home,
  Info,
  GraduationCap,
  Building2,
  FileText,
  PhoneCall,
  UserCheck,
  UserPlus
} from "lucide-react"

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const DockIconButton = React.forwardRef(
  ({ icon: Icon, label, onClick, href, className, active }, ref) => {
    const Component = href ? motion.a : motion.button

    return (
      <Component
        ref={ref}
        href={href}
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.92 }}
        onClick={onClick}
        className={cn(
          "relative group p-2.5 sm:p-3 rounded-xl transition-all cursor-pointer flex items-center justify-center",
          active ? "bg-white/30 text-white shadow-md" : "hover:bg-white/20 text-white/90 hover:text-white",
          className
        )}
      >
        <Icon className="w-5 h-5 text-white drop-shadow-sm" />
        <span className={cn(
          "absolute -bottom-9 left-1/2 -translate-x-1/2",
          "px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase",
          "bg-[#3a000e]/95 text-white shadow-2xl backdrop-blur-md border border-white/20",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity whitespace-nowrap pointer-events-none z-50"
        )}>
          {label}
        </span>
      </Component>
    )
  }
)
DockIconButton.displayName = "DockIconButton"

const Dock = React.forwardRef(
  ({ items, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center justify-center p-1", className)}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
          className={cn(
            "flex items-center gap-1 sm:gap-1.5 p-2 rounded-2xl",
            "backdrop-blur-2xl border shadow-2xl",
            "bg-[#4a0314]/75 border-white/25 text-white",
            "hover:bg-[#580016]/90 hover:shadow-red-950/50 transition-all duration-300"
          )}
        >
          {items.map((item) => (
            <DockIconButton key={item.label} {...item} />
          ))}
        </motion.div>
      </div>
    )
  }
)
Dock.displayName = "Dock"

function DockDemo() {
  const items = [
    { icon: Home, label: "Inicio", href: "#hero" },
    { icon: Info, label: "Nosotros", href: "#nosotros" },
    { icon: GraduationCap, label: "Carrera", href: "#carrera" },
    { icon: Building2, label: "Convenios", href: "#hospitales" },
    { icon: FileText, label: "Requisitos", href: "#admisiones" },
    { icon: PhoneCall, label: "Contacto", href: "#contacto" },
    { icon: UserPlus, label: "Inscribirse" },
    { icon: UserCheck, label: "Admin" }
  ]

  return <Dock items={items} />
}

export { Dock, DockDemo }
