import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import TechIcon from "./TechIcon";

const experiences = [
  {
    title: "Stage – Application Web de Gestion de Production",
    company: "Cevital Agro Industrie",
    location: "Béjaïa, Algérie",
    period: "2024",
    type: "Stage",
    description: "Développement d'une application web complète pour la gestion de production industrielle.",
    tasks: [
      "Analyse et recueil des besoins utilisateurs",
      "Conception et développement de fonctionnalités modulaires",
      "Documentation technique et fonctionnelle",
      "Travail collaboratif avec Git/GitHub et revues de code",
    ],
    technologies: ["Laravel", "Bootstrap", "MySQL", "Git"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Mon parcours</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expérience <span className="text-gradient">Professionnelle</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stage qui m'a permis de développer mes compétences en entreprise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8 rounded-2xl glass-effect card-hover border-l-4 border-l-primary">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-primary font-medium text-lg mb-4">{exp.company}</p>
                <p className="text-muted-foreground mb-6">{exp.description}</p>

                <div className="space-y-3 mb-6">
                  {exp.tasks.map((task, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{task}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground"
                    >
                      <TechIcon name={tech} className="w-4 h-4" />
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
