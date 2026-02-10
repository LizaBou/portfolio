import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import lizaAvatar from "@/assets/liza-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-glow)" }}
      />
      
      <motion.div
        className="absolute top-20 left-10 text-muted-foreground/20 font-mono text-sm hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {"<developer>"}
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-16 text-muted-foreground/20 font-mono text-sm hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        {"</code>"}
      </motion.div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden glow-effect">
              <div className="absolute inset-0 rounded-full p-1" style={{ background: "var(--gradient-primary)" }}>
                <img 
                  src={lizaAvatar} 
                  alt="Liza Bourouina" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full glass-effect border-2 border-primary"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-mono text-primary">Full Stack</span>
            </motion.div>
          </motion.div>

          <div className="text-center lg:text-left flex-1">
            <p className="font-mono text-primary mb-4 text-sm md:text-base">
              Bonjour, je suis
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">Liza </span>
              <span className="text-gradient">Bourouina</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-6">
              Développeuse Full Stack
            </h2>
            
            <p className="max-w-2xl text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
              Étudiante en Master Informatique (Génie Logiciel), je cherche une alternance pour <span className="text-primary font-medium">septembre 2026</span> en développement Back-end et Front-end. Passionnée par la conception de solutions web modulaires et performantes, je souhaite contribuer à des projets concrets dans un environnement Agile.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Paris, Île-de-France</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+33 6 68 08 46 29</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <motion.a
                href="https://github.com/lizabou"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/liza-bourouina"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:bourouinaliza17@gmail.com"
                className="p-3 rounded-full glass-effect hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="group">
                <a href="#contact">
                  Me contacter
                  <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <a href="#projects">
                  Voir mes projets
                  <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
