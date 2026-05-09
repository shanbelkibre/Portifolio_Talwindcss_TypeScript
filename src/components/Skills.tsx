import { Card } from "@/components/ui/card";
import SkillIcon from "@/components/ui/SkillIcon";
import {
  Code2,
  Server,
  Database,
  GitBranch,
  ClipboardList,
  Layers,
  Globe,
  Palette,
  Braces,
  Atom,
  Wind,
  FileCode,
  Box,
  Workflow,
  GitMerge,
  Github,
  Table2,
  Triangle,
  Cylinder,
  LayoutGrid,
  ListTodo,
  Network,
  PenTool,
} from "lucide-react";
import { type ComponentType, type SVGProps } from "react";

interface Skill {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color?: string;
}

interface SkillCategory {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { label: "HTML5", icon: Globe, color: "#e34f26" },
      { label: "CSS3", icon: Palette, color: "#264de4" },
      { label: "JavaScript", icon: Braces, color: "#f7df1e" },
      { label: "React", icon: Atom, color: "#61dafb" },
      { label: "Tailwind CSS", icon: Wind, color: "#06b6d4" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { label: "Node.js", icon: FileCode, color: "#8cc84b" },
      { label: "Express.js", icon: Box, color: "#000000" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { label: "MySQL", icon: Table2, color: "#00618a" },
      { label: "PostgreSQL", icon: Cylinder, color: "#336791" },
      { label: "MongoDB", icon: Database, color: "#47a248" },
    ],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: [
      { label: "Git", icon: GitMerge, color: "#f05032" },
      { label: "GitHub", icon: Github, color: "#181717" },
    ],
  },
  {
    title: "Project Management",
    icon: ClipboardList,
    skills: [
      { label: "Jira", icon: LayoutGrid, color: "#0052cc" },
      { label: "Kanban", icon: ListTodo, color: "#0052cc" },
      { label: "Scrum", icon: Workflow, color: "#6554c0" },
    ],
  },
  {
    title: "Design Tools",
    icon: Layers,
    skills: [
      { label: "Enterprise Arch.", icon: Network, color: "#f0a500" },
      { label: "StarUML", icon: Triangle, color: "#9c27b0" },
      { label: "Visual Paradigm", icon: PenTool, color: "#1565c0" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            // running count of skills before this category, for stagger offset
            const skillOffset = skillCategories
              .slice(0, catIndex)
              .reduce((acc, c) => acc + c.skills.length, 0);

            return (
              <Card
                key={category.title}
                className="p-8 bg-card border-border card-glow hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-primary/10 shadow-sm">
                    <CategoryIcon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold">{category.title}</h3>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillIcon
                        key={skill.label}
                        icon={skill.icon}
                        label={skill.label}
                        color={skill.color}
                        index={skillOffset + skillIndex}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
