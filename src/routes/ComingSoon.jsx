import { Code, GitHub, Mail, Award, Users, Briefcase } from 'react-feather';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Code size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ezekiel Lopez
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-400 font-semibold mb-8">
              Full-Stack Software Engineer
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to solve your toughest challenges and build exceptional products that drive real business value.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16">
            <a 
              href="mailto:ezekiel.lopez@example.com" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              <Mail size={20} className="mr-2" />
              Get In Touch
            </a>
            <a 
              href="https://github.com/ezekiellopez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors duration-200 shadow-lg border border-slate-600"
            >
              <GitHub size={20} className="mr-2" />
              View Work
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award size={24} className="text-green-400" />
              </div>
              <p className="text-slate-300 font-medium">Problem Solver</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users size={24} className="text-purple-400" />
              </div>
              <p className="text-slate-300 font-medium">Team Player</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Briefcase size={24} className="text-orange-400" />
              </div>
              <p className="text-slate-300 font-medium">Results Driven</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 sm:py-24 px-4 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose Me?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              I bring a unique combination of technical expertise and business acumen to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-slate-700/50 rounded-xl p-6 sm:p-8 border border-slate-600/30 hover:border-slate-500/50 transition-colors duration-200">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Code size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Full-Stack Expertise</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Proficient in React, Node.js, Python, TypeScript, and modern web technologies. 
                    I build scalable applications from frontend to backend with clean, maintainable code.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-6 sm:p-8 border border-slate-600/30 hover:border-slate-500/50 transition-colors duration-200">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Award size={20} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Problem-First Approach</h3>
                  <p className="text-slate-300 leading-relaxed">
                    I don't just write code—I solve business problems. I analyze requirements, 
                    optimize performance, and deliver solutions that drive measurable results.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-6 sm:p-8 border border-slate-600/30 hover:border-slate-500/50 transition-colors duration-200">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users size={20} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Collaborative Leader</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Strong communicator who thrives in team environments. I believe great 
                    software is built through collaboration, knowledge sharing, and clear communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-6 sm:p-8 border border-slate-600/30 hover:border-slate-500/50 transition-colors duration-200">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Briefcase size={20} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Reliable Delivery</h3>
                  <p className="text-slate-300 leading-relaxed">
                    I deliver on commitments and take ownership of my work. You can count 
                    on me to meet deadlines while maintaining high code quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-16 sm:py-24 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Git'].map((tech) => (
              <div key={tech} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <p className="text-slate-300 font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 sm:py-24 px-4 bg-slate-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-12 leading-relaxed">
            I'm actively seeking new opportunities where I can contribute to meaningful projects 
            and grow alongside a talented team.
          </p>
          
          <div className="bg-slate-700/50 rounded-2xl p-6 sm:p-8 border border-slate-600/30 max-w-md mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Connect?</h3>
              <p className="text-slate-400">
                I respond to all inquiries within 24 hours
              </p>
            </div>
            <div className="space-y-3">
              <a 
                href="mailto:ezekiel.lopez@example.com" 
                className="flex items-center justify-center w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail size={20} className="mr-2" />
                ezekiel.lopez@example.com
              </a>
              <a 
                href="https://github.com/ezekiellopez" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-full px-6 py-4 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-500 transition-colors duration-200"
              >
                <GitHub size={20} className="mr-2" />
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500">
            © 2024 Ezekiel Lopez. Available for immediate employment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;