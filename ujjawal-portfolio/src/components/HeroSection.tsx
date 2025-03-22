import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Terminal, GitBranch, Database, Server, CheckCircle2, FileText, Download, Mail, Github, Linkedin, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 pb-16 px-4 flex items-center relative overflow-hidden terminal-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 -z-10" />
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMUg1OVY1OUgxVjFaIiBzdHJva2U9IiM0NDQiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4=')] bg-repeat bg-[length:30px_30px] -z-10" />
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 animate-fade-in slide-in-bottom terminal-content">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Terminal className="h-4 w-4" />
                <span className="font-mono text-green-500 dark:text-green-400">$ whoami</span>
              </div>
              <div className="space-y-2 relative p-4 bg-black/5 dark:bg-white/5 rounded border border-gray-200 dark:border-gray-700">
                <div className="absolute top-0 left-0 w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-t flex items-center px-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs font-mono text-center w-full text-gray-600 dark:text-gray-300">terminal</span>
                </div>
                <div className="mt-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-600 dark:from-blue-400 dark:to-purple-400">
                    Software Developer
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-mono mt-2">
                    <span className="text-blue-600 dark:text-blue-400">const</span>{" "}
                    <span className="text-green-600 dark:text-green-400">specialties</span>{" "}
                    ={" "}
                    <span className="text-purple-600 dark:text-purple-400">[</span>
                    <span className="text-orange-600 dark:text-orange-400">'Backend'</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-400">'Data Science'</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-400">'ML'</span>
                    <span className="text-purple-600 dark:text-purple-400">]</span>;
                  </p>
                </div>
              </div>
            </div>
            <div className="font-mono p-4 bg-black/5 dark:bg-white/5 rounded border border-gray-200 dark:border-gray-700 overflow-x-auto">
              <div className="text-blue-600 dark:text-blue-400">function</div>
              <div className="pl-4 text-lg text-gray-600 dark:text-gray-300">
                <span className="text-green-600 dark:text-green-400">developSolutions</span>
                <span className="text-purple-600 dark:text-purple-400">()</span>{" "}
                <span className="text-blue-600 dark:text-blue-400">{"{"}</span>
              </div>
              <div className="pl-8 text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <span>Creating innovative solutions and pushing the boundaries of technology</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <span>Passionate about clean code, efficient algorithms, and scalable architectures</span>
                </div>
              </div>
              <div className="pl-4 text-blue-600 dark:text-blue-400">{"}"}</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 font-mono" asChild>
                <a href="#projects" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span className="text-xs md:text-sm">projects.view()</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:text-blue-700 hover:border-blue-700 dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 font-mono">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      <span className="text-xs md:text-sm">contact.send()</span>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-mono flex items-center gap-2">
                      <Terminal className="h-5 w-5 text-blue-500" />
                      <span>Contact Information</span>
                    </DialogTitle>
                    <DialogDescription className="font-mono text-gray-500 dark:text-gray-400">
                      Feel free to reach out through any of these channels.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4 font-mono">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                        <a href="mailto:ujjawalsah9801@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                          ujjawalsah9801@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                        <Linkedin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                        <a href="https://www.linkedin.com/in/ujjawal-kumar-9b7719228/" target="_blank" rel="noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                          linkedin.com/in/ujjawal-kumar-9b7719228
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                        <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                        <a href="https://github.com/UjjawalSah" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:underline">
                          github.com/ujjawal
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:text-green-700 hover:border-green-700 dark:border-green-500 dark:text-green-500 dark:hover:text-green-400 dark:hover:border-green-400 font-mono" asChild>
                <a href="/resume.pdf" download="Ujjawal_Kumar_Resume.pdf" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="text-xs md:text-sm">resume.download()</span>
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-mono">
                <CheckCircle2 className="h-4 w-4" />
                <span>Backend</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 font-mono">
                <CheckCircle2 className="h-4 w-4" />
                <span>Data Science</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-mono">
                <CheckCircle2 className="h-4 w-4" />
                <span>ML Engineer</span>
              </div>
            </div>
          </div>
          {/* New Image Container */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/profile.png"
                alt="Ujjawal Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
