
import { Phone, Mail, Linkedin, Github, Home, User, Code, Lightbulb, Award, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Ujjawal Kumar</h2>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li>
                <a href="#" className="hover:text-primary-300 transition flex items-center gap-1">
                  <Home className="h-4 w-4" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-300 transition flex items-center gap-1">
                  <User className="h-4 w-4" /> About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-300 transition flex items-center gap-1">
                  <Code className="h-4 w-4" /> Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-300 transition flex items-center gap-1">
                  <Lightbulb className="h-4 w-4" /> Skills
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-primary-300 transition flex items-center gap-1">
                  <Award className="h-4 w-4" /> Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-300 transition flex items-center gap-1">
                  <Send className="h-4 w-4" /> Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <Button variant="ghost" size="icon" className="text-white hover:text-primary-300 hover:bg-slate-700" asChild>
            <a href="tel:+916200542180" aria-label="Phone">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-primary-300 hover:bg-slate-700" asChild>
            <a href="mailto:ujjawalsah9801@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-primary-300 hover:bg-slate-700" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-primary-300 hover:bg-slate-700" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
        
        <div className="text-center text-slate-300 text-sm">
          <p>© {new Date().getFullYear()} Ujjawal Kumar. All rights reserved.</p>
          <p className="mt-1">Computer Science Engineer specializing in Data Science and Machine Learning</p>
        </div>
      </div>
    </footer>
  );
};
