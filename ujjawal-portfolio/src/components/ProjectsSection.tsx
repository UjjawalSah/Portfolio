import { JSX } from "react";
import {
  Atom,
  Terminal,
  Database,
  Clock,
  Brain,
  TrendingUp,
  Code,
  Cpu,
  Image as ImageIcon,
  MessageSquare,
  FileCode,
  Lock,
  Coffee,
  Mail,
  ExternalLink,
  Github,
  Server
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

// Define the Project type
type Project = {
  title: string;
  subtitle: string;
  technologies: string[];
  description: string;
  icon: JSX.Element;
  demoLink?: string;
  codeLink: string;
  gradient: string;
};

export const ProjectsSection = () => {
  const isMobile = useIsMobile();

  // Mapping of technology names to specific colorful icons
  const techIcons: { [key: string]: JSX.Element } = {
    "React.js": <Atom className="h-3 w-3 mr-1 text-cyan-500" />,
    "Flask": <Terminal className="h-3 w-3 mr-1 text-green-500" />,
    "MongoDB": <Database className="h-3 w-3 mr-1 text-green-700" />,
    "Cron Jobs": <Clock className="h-3 w-3 mr-1 text-gray-500" />,
    "Apscheduler": <Clock className="h-3 w-3 mr-1 text-gray-500" />,
    "Google Gemma Model": <Brain className="h-3 w-3 mr-1 text-purple-500" />,
    "Random Forest (ML)": <TrendingUp className="h-3 w-3 mr-1 text-yellow-500" />,
    "Python": <Code className="h-3 w-3 mr-1 text-blue-500" />,
    "TensorFlow": <Cpu className="h-3 w-3 mr-1 text-orange-500" />,
    "Keras": <Cpu className="h-3 w-3 mr-1 text-orange-500" />,
    "CNN": <Cpu className="h-3 w-3 mr-1 text-orange-500" />,
    "Image Processing": <ImageIcon className="h-3 w-3 mr-1 text-pink-500" />,
    "NLP": <MessageSquare className="h-3 w-3 mr-1 text-indigo-500" />,
    "BERT": <Brain className="h-3 w-3 mr-1 text-purple-500" />,
    "Scikit-learn": <Code className="h-3 w-3 mr-1 text-blue-500" />,
    "Logistic Regression": <TrendingUp className="h-3 w-3 mr-1 text-yellow-500" />,
    "HTML/CSS": <FileCode className="h-3 w-3 mr-1 text-blue-500" />,
    "AES Encryption": <Lock className="h-3 w-3 mr-1 text-red-500" />,
    "Java": <Coffee className="h-3 w-3 mr-1 text-red-500" />,
    "JDBC": <Code className="h-3 w-3 mr-1 text-blue-500" />,
    "Servlet": <Code className="h-3 w-3 mr-1 text-blue-500" />,
    "JSP": <Code className="h-3 w-3 mr-1 text-blue-500" />,
    "MySQL": <Database className="h-3 w-3 mr-1 text-blue-500" />,
    "APIs": <Server className="h-3 w-3 mr-1 text-green-500" />,
    "SMTP Emailing": <Mail className="h-3 w-3 mr-1 text-red-500" />,
  };

  const projects: Project[] = [
    {
      title: "Mailscheduler",
      subtitle: "Email Scheduling Service",
      technologies: [
        "React.js",
        "Flask",
        "MongoDB",
        "Cron Jobs",
        "Apscheduler",
        "Google Gemma Model",
        "Random Forest (ML)"
      ],
      description: "Automated email scheduling to manage campaigns and notifications with high reliability and flexible scheduling.",
      icon: <MessageSquare className="h-5 w-5 text-red-600 dark:text-red-400" />,
      demoLink: "https://mailscheduler.vercel.app/",
      codeLink: "https://github.com/UjjawalSah/MailScheduler",
      gradient: "from-red-500 to-orange-600",
    },
    {
      title: "Pulmonary Fibrosis Prediction",
      subtitle: "Deep Learning Project",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "CNN",
        "Image Processing"
      ],
      description: "Created CNN models to predict pulmonary fibrosis severity using 10,000+ CT scan images; reduced training time by 40% with GPU acceleration.",
      icon: <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
      demoLink: "https://v0-new-project-xnh8iosyzb7.vercel.app/",
      codeLink: "https://github.com/UjjawalSah/Pulmonary-Fibrosis-Severity-Prediction",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "AI-Powered Harmful Digital Content Detection",
      subtitle: "Content Moderation using AI",
      technologies: [
        "Python",
        "TensorFlow",
        "NLP",
        "BERT",
        "Scikit-learn",
        "Logistic Regression"
      ],
      description: "Implemented an AI system to detect and flag harmful digital content, reducing manual review by 50%.",
      icon: <Brain className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />,
      demoLink: "https://digitalcontentdetection.vercel.app/",
      codeLink: "https://github.com/UjjawalSah/AI-Powered-Harmful-Digital-Content-Detection",
      gradient: "from-yellow-500 to-amber-600",
    },
    {
      title: "Secure File & Text Sharing App",
      subtitle: "Privacy-Focused File Sharing",
      technologies: [
        "Flask",
        "HTML/CSS",
        "Python",
        "AES Encryption"
      ],
      description: "Developed a secure platform for file and text sharing, ensuring data privacy and end-to-end encryption.",
      icon: <FileCode className="h-5 w-5 text-green-600 dark:text-green-400" />,
      demoLink: "https://secure-file-text-sharing-app.vercel.app/",
      codeLink: "https://github.com/UjjawalSah/Secure-File-Text-Sharing-App",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Banking System",
      subtitle: "Capstone Project – Genpact",
      technologies: [
        "Java",
        "JDBC",
        "Servlet",
        "JSP",
        "MySQL"
      ],
      description: "Developed a secure, full-stack banking application processing 1,500+ transactions monthly with 99.9% data accuracy.",
      icon: <Server className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      codeLink: "https://github.com/UjjawalSah/BankingSystem",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Employee Time Tracker",
      subtitle: "Capstone Project – Genpact",
      technologies: [
        "Java",
        "Servlet",
        "JSP",
        "APIs",
        "SMTP Emailing"
      ],
      description: "Designed and implemented an employee time tracker with robust API integrations and SMTP-based email notifications for efficient time management and seamless communication.",
      icon: <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
      // For this project, the demo view button is omitted
      codeLink: "https://github.com/UjjawalSah/EmployeeTimeTracker",
      gradient: "from-indigo-500 to-violet-600",
    }
  ];

  return (
    <div className="py-10 md:py-16 px-3 md:px-4 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" id="projects">
      <div className="container mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Projects
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Discover a curated selection of projects that showcase innovative solutions across diverse technologies—from deep learning applications to secure, real-time systems.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg flex flex-col hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3">
                  <div className={`bg-gradient-to-r ${project.gradient} p-2 rounded-full`}>
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-mono">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400">{project.subtitle}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">{project.description}</p>
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Technologies:</h3>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-gray-600 dark:text-gray-300">
                    {project.technologies.map((tech, idx) => (
                      <li key={idx} className="flex items-center">
                        {techIcons[tech] ?? <Code className="h-3 w-3 mr-1 text-gray-500" />} {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 flex gap-3">
                {project.title !== "Employee Time Tracker" && project.demoLink && (
                  <Button variant="outline" className="text-gray-700 dark:text-gray-300" asChild>
                    <a href={project.demoLink} target="_blank">
                      <ExternalLink className="h-3 w-3 mr-1" /> view()
                    </a>
                  </Button>
                )}
                <Button variant="outline" className="text-gray-700 dark:text-gray-300" asChild>
                  <a href={project.codeLink} target="_blank">
                    <Github className="h-3 w-3 mr-1" /> code()
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
