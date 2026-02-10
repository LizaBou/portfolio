import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Sparkles } from "lucide-react";
import TechIcon from "./TechIcon";

import imgMathsRobot from "@/assets/projects/maths-robot.png";
import imgCevital from "@/assets/projects/cevital.png";
import imgImmobilier from "@/assets/projects/immobilier.png";
import imgDeco from "@/assets/projects/deco.png";
import imgBibliotheque from "@/assets/projects/bibliotheque.png";
import imgOvercooked from "@/assets/projects/overcooked.png";
import imgPepper from "@/assets/projects/pepper.png";
import imgEcommerceMobile from "@/assets/projects/ecommerce-mobile.png";

const projects = [
  {
    title: "Maths pour Enfants – Robot QT Interactif",
    description: "Application web éducative pour apprendre les mathématiques aux enfants via un robot QT interactif. Interface ludique avec exercices adaptatifs et interaction vocale.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/lizabou",
    demo: undefined as string | undefined,
    featured: true,
    image: imgMathsRobot,
  },
  {
    title: "Application Web Gestion de Production",
    description: "Application web de gestion de production pour Cevital Agro Industrie. Gestion complète : sélection matières premières, contrôle qualité, packaging, suivi production et calcul du rendement.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    github: "https://github.com/lizabou",
    demo: undefined as string | undefined,
    featured: true,
    image: imgCevital,
  },
  {
    title: "Application Mobile E-commerce",
    description: "Application mobile pour gérer utilisateurs, produits et paiements avec authentification sécurisée et base de données cloud Firebase. Gestion Agile via Trello.",
    technologies: ["Flutter", "Firebase", "Figma", "Trello"],
    github: "https://github.com/lizabou",
    demo: undefined as string | undefined,
    featured: true,
    image: imgEcommerceMobile,
  },
  {
    title: "Robot Talk : Interaction avec Pepper",
    description: "Application mobile en Kotlin pour interaction vocale et gestuelle avec le robot Pepper. Étude des cas d'usage humain-robot.",
    technologies: ["Kotlin", "Android Studio"],
    github: "https://github.com/lizabou",
    demo: undefined as string | undefined,
    featured: false,
    image: imgPepper,
  },
  {
    title: "Location & Vente Immobilière – AKHAMIW",
    description: "Plateforme web pour la recherche, location et vente de biens immobiliers en Algérie avec tableau de bord administrateur et gestion des rôles.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    github: "https://github.com/lizabou",
    demo: undefined as string | undefined,
    featured: false,
    image: imgImmobilier,
  },
  {
    title: "Gestion de Bibliothèque",
    description: "Application web de gestion de bibliothèque : gestion des abonnés, bibliothécaires, emprunts et catalogue de livres avec interface d'administration.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    github: "https://github.com/lizabou",
    demo: undefined as string | undefined,
    featured: false,
    image: imgBibliotheque,
  },
  {
    title: "Mini Overcooked – Simulation Multi-Agents",
    description: "Simulation multi-agents compétitive en Python avec rendu graphique Pygame, animation 2D et architecture modulaire orientée objet.",
    technologies: ["Python", "Pygame"],
    github: "https://github.com/lizabou",
    demo: undefined as string | undefined,
    featured: false,
    image: imgOvercooked,
  },
  {
    title: "E-commerce Décoration Immobilière",
    description: "Site web e-commerce pour décoration avec recherche d'articles par catégorie, gestion panier et paiement.",
    technologies: ["Django", "Bootstrap", "JavaScript", "MySQL"],
    github: "https://github.com/lizabou",
    demo: undefined as string | undefined,
    featured: false,
    image: imgDeco,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projets <span className="text-gradient">Réalisés</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une sélection de projets qui démontrent mes compétences en développement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-effect card-hover"
            >
              {project.image && (
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                    Featured
                  </span>
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground"
                    >
                      <TechIcon name={tech} className="w-3 h-3" />
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-8 text-center">Autres projets</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl overflow-hidden glass-effect card-hover"
            >
              {project.image && (
                <div className="w-full h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <Folder className="w-8 h-8 text-primary" />
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-medium">
                      <TechIcon name={tech} showLabel={true} className="w-3 h-3" />
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

export default ProjectsSection;
