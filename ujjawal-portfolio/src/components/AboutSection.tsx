
import { Card } from "@/components/ui/card";
import { User, Award, Code, Sparkles, BookOpen } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-8 inline-block">About Me</h2>
        <Card className="p-6 glass-card">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-gradient-primary p-4 rounded-full">
              <User className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                I am <span className="font-semibold gradient-text">Ujjawal Kumar</span>, a passionate Computer Science Engineer from Chennai, India. 
                Currently pursuing my Bachelor's degree at Vel Tech Rangarajan Dr. Sagunthala R&D 
                Institute of Science and Technology, I thrive on challenges that push my intellectual boundaries and expand my technical expertise.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                My journey in tech spans across <span className="gradient-text font-medium">data science</span>, <span className="gradient-text font-medium">backend development</span>, 
                and <span className="gradient-text font-medium">machine learning</span>, where I combine analytical thinking with creative problem-solving to craft innovative solutions that make a difference.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                <div className="bg-primary-50 dark:bg-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Award className="h-4 w-4 text-primary-600 dark:text-blue-300" />
                  <span className="text-primary-600 dark:text-blue-300">Top Performer</span>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Code className="h-4 w-4 text-primary-600 dark:text-blue-300" />
                  <span className="text-primary-600 dark:text-blue-300">Technical Expert</span>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Sparkles className="h-4 w-4 text-orange-500 dark:text-orange-300" />
                  <span className="text-orange-500 dark:text-orange-300">Innovative Thinker</span>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-indigo-600 dark:text-indigo-300" />
                  <span className="text-indigo-600 dark:text-indigo-300">Continuous Learner</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
