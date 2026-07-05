import { motion } from "framer-motion";
import { Languages, Heart } from "lucide-react";

const languages = [
  { name: "Français", level: "Courant", percentage: 95 },
  { name: "Anglais", level: "Professionnel", percentage: 80 },
  { name: "Arabe", level: "Avancé", percentage: 85 },
  { name: "Turc", level: "Intermédiaire", percentage: 60 },
  { name: "Kabyle", level: "Natif", percentage: 100 },
];

const interests = [
  "Veille technologique",
  "Qualité logicielle",
  "Voyages",
  "Échecs",
  "Musique",
];

const LanguagesSection = () => {
  return (
    <section id="languages" className="py-24">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Languages className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Langues</h3>
            </div>
            
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Centres d'intérêt</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-4 py-2 rounded-full glass-effect text-foreground font-medium hover:bg-primary/10 transition-colors cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
