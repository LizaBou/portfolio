import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master Informatique - Génie Logiciel",
    school: "Université de Montpellier",
    location: "Montpellier, France",
    period: "2024 – 2026",
    description: "Formation approfondie en architecture logicielle, développement full stack et méthodologies Agile.",
    current: true,
  },
  {
    degree: "Master 2 Génie Logiciel",
    school: "Université A. Mira Béjaïa",
    location: "Béjaïa, Algérie",
    period: "2023 – 2024",
    description: "Spécialisation en conception et développement de logiciels, gestion de projets informatiques.",
    current: false,
  },
  {
    degree: "Licence Informatique Générale",
    school: "Université A. Mira Béjaïa",
    location: "Béjaïa, Algérie",
    period: "2020 – 2023",
    description: "Fondamentaux en algorithmique, programmation, bases de données et réseaux.",
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Parcours académique</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ma <span className="text-gradient">Formation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un parcours académique solide en informatique et génie logiciel.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 md:pl-20 mb-8 last:mb-0"
              >
                <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-card border-2 border-primary items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                
                <div className={`p-6 rounded-xl glass-effect card-hover ${edu.current ? 'border-l-4 border-l-primary' : ''}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {edu.current && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                        En cours
                      </span>
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-2">{edu.school}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
