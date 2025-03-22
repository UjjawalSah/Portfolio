
import { Code, Database, LineChart, GitBranch, PenTool, Brain, Users, Server, Bug, Cpu, FileCode, Cloud, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type SkillCategory = {
  name: string;
  icon: JSX.Element;
  skills: { name: string; level: number }[];
};

export const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      icon: <Code className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C", level: 75 },
         
      ],
    },
    {
      name: "Backend Technologies",
      icon: <Server className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />,
      skills: [
        { name: "Flask", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Java Servlet", level: 80 },
         
      ],
    },
    {
      name: "Data Science",
      icon: <Database className="h-5 w-5 text-purple-500 dark:text-purple-400" />,
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "SQL", level: 85 },
        { name: "NoSQL", level: 75 },
      ],
    },
    {
      name: "Machine Learning",
      icon: <Brain className="h-5 w-5 text-rose-500 dark:text-rose-400" />,
      skills: [
        { name: "Scikit-Learn", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "Keras", level: 80 },
        { name: "PyTorch", level: 70 },
      ],
    },
    {
      name: "DevOps",
      icon: <GitBranch className="h-5 w-5 text-orange-500 dark:text-orange-400" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub Actions", level: 75 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 65 },
      ],
    },
    {
      name: "Cloud Services",
      icon: <Cloud className="h-5 w-5 text-sky-500 dark:text-sky-400" />,
      skills: [
        { name: "AWS ML", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "Vercel", level: 60 },
      ],
    },
    {
      name: "Development Tools",
      icon: <Cpu className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />,
      skills: [
        { name: "VSCode", level: 95 },
        { name: "Goggle Colab", level: 90 },
        { name: "IntelliJ", level: 85 },
        { name: "PyCharm", level: 80 },
      ],
    },
    {
      name: "Soft Skills",
      icon: <Users className="h-5 w-5 text-amber-500 dark:text-amber-400" />,
      skills: [
        { name: "Problem-solving", level: 95 },
        { name: "Technical Writing", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Time Management", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 code-pattern-bg">
      <div className="container mx-auto">
        <div className="mb-8 code-block">
          <div className="flex items-center gap-2 mb-2">
            <FileCode className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Technical Stack
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-mono">
            <span className="text-green-600 dark:text-green-400">// Skills and technologies I work with</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 code-card">
              <CardContent className="p-6">
                <div className="code-header flex items-center gap-2 mb-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
                    {category.icon}
                  </div>
                  <h3 className="font-mono font-semibold text-lg">{category.name}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300 font-mono text-sm">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 code-progress-bg">
                        <div 
                          className={`h-1.5 rounded-full ${getSkillColor(category.name)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const getSkillColor = (category: string): string => {
  switch (category) {
    case "Languages":
      return "bg-gradient-to-r from-blue-500 to-blue-600";
    case "Backend Technologies":
      return "bg-gradient-to-r from-indigo-500 to-indigo-600";
    case "Data Science":
      return "bg-gradient-to-r from-purple-500 to-purple-600";
    case "Machine Learning":
      return "bg-gradient-to-r from-rose-500 to-rose-600";
    case "DevOps":
      return "bg-gradient-to-r from-orange-500 to-orange-600";
    case "Cloud Services":
      return "bg-gradient-to-r from-sky-500 to-sky-600";
    case "Development Tools":
      return "bg-gradient-to-r from-emerald-500 to-emerald-600";
    case "Soft Skills":
      return "bg-gradient-to-r from-amber-500 to-amber-600";
    default:
      return "bg-gradient-to-r from-gray-500 to-gray-600";
  }
};
