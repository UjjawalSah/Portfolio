
import { Award, Trophy, Star, BookOpen, Cloud, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Achievement = {
  title: string;
  organization?: string;
  description: string;
  icon: JSX.Element;
};

export const CertificationsSection = () => {
  const achievements: Achievement[] = [
    {
      title: "Runner-up – Hackathon",
      organization: "IIT (BHU), Varanasi",
      description: "Showcased innovative problem-solving and technical expertise.",
      icon: <Trophy className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
    },
    {
      title: "3rd Place – AlgoZen 3.0",
      organization: "IIT (BHU), Varanasi",
      description: "Demonstrated algorithmic proficiency in a competitive coding challenge.",
      icon: <Award className="h-5 w-5 text-purple-500 dark:text-purple-400" />,
    },
    {
      title: "Freelance SME, Chegg",
      description: "Earned top student ratings through high-accuracy technical solutions.",
      icon: <Star className="h-5 w-5 text-amber-500 dark:text-amber-400" />,
    },
    {
      title: "PwC Launchpad Program",
      description: "Received hands-on training in Java, RDBMS, DevOps, and cybersecurity fundamentals.",
      icon: <BookOpen className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />,
    },
    {
      title: "AWS ML Foundations",
      description: "Completed cloud-based AI training via AWS Academy.",
      icon: <Cloud className="h-5 w-5 text-sky-500 dark:text-sky-400" />,
    },
    {
      title: "Wipro Full Stack Java",
      description: "Certified in Java, Spring Boot, and Web Development.",
      icon: <Code className="h-5 w-5 text-rose-500 dark:text-rose-400" />,
    },
    {
      title: "Coding Competitions",
      description: "Achieved top positions in Codeathons & Ideathons through strategic problem-solving.",
      icon: <Award className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />,
    },
  ];

  return (
    <section id="certifications" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-8 inline-block">Certifications & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800/40 dark:to-purple-800/40 p-2 rounded-full flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{achievement.title}</h3>
                    {achievement.organization && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.organization}</p>
                    )}
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
