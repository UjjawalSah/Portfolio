
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-8 inline-block">Professional Journey</h2>
        <Card className="glass-card overflow-hidden border border-orange-100 dark:border-orange-900/40">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-gradient-to-br from-orange-400 to-red-500 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold gradient-text">Freelance Subject Matter Expert – Chegg</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <p>Aug 2023 – Present</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 italic">
                  <MapPin className="h-4 w-4 mr-1" />
                  <p>Remote</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Delivered precise solutions in <span className="text-blue-600 dark:text-blue-400 font-medium">Data Science</span>, <span className="text-green-600 dark:text-green-400 font-medium">Python</span>, and <span className="text-purple-600 dark:text-purple-400 font-medium">backend development</span>.</li>
                  <li>Simplified complex technical concepts to achieve high student satisfaction ratings.</li>
                  <li>Maintained strict deadlines and 99% accuracy in problem-solving scenarios.</li>
                  <li>Recognized with <span className="inline-flex items-center"><Award className="h-4 w-4 text-yellow-500 mr-1" /> Excellence Badge</span> for consistent quality contributions.</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 italic pt-2">
                  "The best way to predict the future is to create it." — Peter Drucker
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
