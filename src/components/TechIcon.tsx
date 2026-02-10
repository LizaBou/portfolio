import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiAngular, 
  SiVuedotjs, 
  SiPhp, 
  SiLaravel, 
  SiPython, 
  SiDjango, 
  SiFlask, 
  SiFlutter, 
  SiDart, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiFirebase, 
  SiGit, 
  SiGithub, 
  SiGitlab, 
  SiDocker, 
  SiJenkins, 
  SiPostman, 
  SiBootstrap, 
  SiHtml5, 
  SiCss3,
  SiSpringboot,
  SiFigma,
  SiTrello,
  SiJira,
  SiLinux,
  SiAndroidstudio,
  SiKotlin,
  SiIntellijidea
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "javascript": SiJavascript,
  "typescript": SiTypescript,
  "react": SiReact,
  "angular": SiAngular,
  "vue.js": SiVuedotjs,
  "vue": SiVuedotjs,
  "php": SiPhp,
  "laravel": SiLaravel,
  "python": SiPython,
  "django": SiDjango,
  "flask": SiFlask,
  "flutter": SiFlutter,
  "dart": SiDart,
  "mysql": SiMysql,
  "postgresql": SiPostgresql,
  "mongodb": SiMongodb,
  "firebase": SiFirebase,
  "git": SiGit,
  "github": SiGithub,
  "gitlab": SiGitlab,
  "docker": SiDocker,
  "jenkins": SiJenkins,
  "postman": SiPostman,
  "bootstrap": SiBootstrap,
  "html5": SiHtml5,
  "html": SiHtml5,
  "css3": SiCss3,
  "css": SiCss3,
  "spring boot": SiSpringboot,
  "spring": SiSpringboot,
  "java": FaJava,
  "figma": SiFigma,
  "trello": SiTrello,
  "jira": SiJira,
  "linux": SiLinux,
  "android studio": SiAndroidstudio,
  "kotlin": SiKotlin,
  "intellij idea": SiIntellijidea,
  "intellij": SiIntellijidea,
  "pygame": SiPython,
};

interface TechIconProps {
  name: string;
  className?: string;
  showLabel?: boolean;
}

const TechIcon = ({ name, className = "w-4 h-4", showLabel = true }: TechIconProps) => {
  const normalizedName = name.toLowerCase().replace(/[()]/g, "").trim();
  const Icon = iconMap[normalizedName];
  
  if (Icon) {
    return (
      <span className="inline-flex items-center gap-1.5">
        <Icon className={className} />
        {showLabel && <span>{name}</span>}
      </span>
    );
  }
  
  return <span>{name}</span>;
};

export default TechIcon;
