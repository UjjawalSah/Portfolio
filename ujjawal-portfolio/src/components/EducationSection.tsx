
import { GraduationCap, BookOpen, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EducationSection = () => {
  return (
    <section id="education" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-8 inline-block">Academic Journey</h2>
        <Card className="glass-card overflow-hidden border border-blue-100 dark:border-blue-900/40">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-gradient-to-br from-blue-400 to-purple-500 p-2 rounded-full">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold gradient-text">Bachelor of Technology in Computer Science and Engineering</h3>
                <p className="text-gray-700 dark:text-gray-300">Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology (2021 – 2025)</p>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <p className="font-medium text-gray-800 dark:text-gray-200">CGPA: 8.9</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "Education is not the learning of facts, but the training of the mind to think." — Albert Einstein
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    Data Structures
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                    Algorithms
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                    Machine Learning
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
