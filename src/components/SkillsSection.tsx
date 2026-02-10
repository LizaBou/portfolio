import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  GitBranch,
  Cloud,
  TestTube,
  Wrench
} from "lucide-react";
import TechIcon from "./TechIcon";

const skills = [
  {
    category: "Backend",
    icon: Server,
    items: ["Java", "Spring Boot", "PHP", "Laravel", "REST APIs", "Microservices"],
  },
  {
    category: "Frontend",
    icon: Globe,
    items: ["Angular", "Vue.js", "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Base de données",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "Outils & DevOps",
    icon: Wrench,
    items: ["Git", "GitHub", "GitLab", "Maven", "Jenkins", "Docker", "Linux"],
  },
  {
    category: "Gestion de Projet",
    icon: GitBranch,
    items: ["Agile", "Scrum", "Kanban", "Jira", "Trello"],
  },
  {
    category: "Qualité Logicielle",
    icon: TestTube,
    items: ["Tests unitaires", "JUnit", "Tests d'intégration", "Refactoring", "Documentation"],
  },
];

const technologies = [
  { name: "Java / Spring Boot", level: 90 },
  { name: "PHP / Laravel", level: 90 },
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "Angular / Vue.js / React", level: 80 },
  { name: "SQL (PostgreSQL, MySQL)", level: 85 },
  { name: "Flutter / Dart", level: 75 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Code2 className="w-4 h-4" />
            <span className="text-sm font-medium">Expertise technique</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compétences & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un ensemble de compétences techniques acquises au fil des projets et formations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl glass-effect card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground inline-flex items-center gap-1.5"
                  >
                    <TechIcon name={item} className="w-4 h-4" />
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-8 text-center">
            Niveau de maîtrise
          </h3>
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm text-foreground">{tech.name}</span>
                  <span className="text-muted-foreground text-sm">{tech.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
