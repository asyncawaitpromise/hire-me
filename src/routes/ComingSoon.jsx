import { Code, Coffee, Star, Zap, GitHub, Mail, Award, Users } from 'react-feather';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-base-100 rounded-full shadow-xl">
                <Code size={64} className="text-primary" />
              </div>
            </div>
            <h1 className="text-7xl font-bold text-base-100 mb-6">
              Hire Ezekiel Lopez
            </h1>
            <p className="text-2xl text-base-100/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Full-Stack Software Engineer ready to solve your toughest challenges and build exceptional products
            </p>
          </div>

          <div className="flex justify-center space-x-12 mb-12">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-base-100/20 rounded-full mb-3">
                <Zap size={32} className="text-base-100" />
              </div>
              <span className="text-base-100/90 font-semibold">Fast Learner</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-base-100/20 rounded-full mb-3">
                <Award size={32} className="text-base-100" />
              </div>
              <span className="text-base-100/90 font-semibold">Problem Solver</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-base-100/20 rounded-full mb-3">
                <Users size={32} className="text-base-100" />
              </div>
              <span className="text-base-100/90 font-semibold">Team Player</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="mailto:ezekiel.lopez@example.com" className="btn btn-lg bg-base-100 text-primary hover:bg-base-200 border-none">
              <Mail size={24} />
              Contact Me
            </a>
            <a href="https://github.com/ezekiellopez" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-outline text-base-100 border-base-100 hover:bg-base-100 hover:text-primary">
              <GitHub size={24} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-base-100 text-center mb-16">Why Hire Me?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-base-100/10 backdrop-blur-sm rounded-xl p-8 border border-base-100/20">
              <div className="flex items-center mb-4">
                <Code size={32} className="text-base-100 mr-3" />
                <h3 className="text-2xl font-bold text-base-100">Full-Stack Development</h3>
              </div>
              <p className="text-base-100/80 leading-relaxed">
                Proficient in React, Node.js, Python, TypeScript, and modern web technologies. 
                I build scalable applications from frontend to backend.
              </p>
            </div>

            <div className="bg-base-100/10 backdrop-blur-sm rounded-xl p-8 border border-base-100/20">
              <div className="flex items-center mb-4">
                <Zap size={32} className="text-base-100 mr-3" />
                <h3 className="text-2xl font-bold text-base-100">Quick Adaptation</h3>
              </div>
              <p className="text-base-100/80 leading-relaxed">
                I rapidly learn new technologies and frameworks. Give me a challenge, 
                and I'll master whatever tools are needed to deliver results.
              </p>
            </div>

            <div className="bg-base-100/10 backdrop-blur-sm rounded-xl p-8 border border-base-100/20">
              <div className="flex items-center mb-4">
                <Award size={32} className="text-base-100 mr-3" />
                <h3 className="text-2xl font-bold text-base-100">Problem-First Thinking</h3>
              </div>
              <p className="text-base-100/80 leading-relaxed">
                I don't just write code—I solve business problems. I analyze requirements, 
                optimize performance, and deliver solutions that drive real value.
              </p>
            </div>

            <div className="bg-base-100/10 backdrop-blur-sm rounded-xl p-8 border border-base-100/20">
              <div className="flex items-center mb-4">
                <Users size={32} className="text-base-100 mr-3" />
                <h3 className="text-2xl font-bold text-base-100">Collaboration</h3>
              </div>
              <p className="text-base-100/80 leading-relaxed">
                Strong communicator who thrives in team environments. I believe great 
                software is built through collaboration and shared knowledge.
              </p>
            </div>

            <div className="bg-base-100/10 backdrop-blur-sm rounded-xl p-8 border border-base-100/20">
              <div className="flex items-center mb-4">
                <Coffee size={32} className="text-base-100 mr-3" />
                <h3 className="text-2xl font-bold text-base-100">Reliable & Dedicated</h3>
              </div>
              <p className="text-base-100/80 leading-relaxed">
                I deliver on commitments and take ownership of my work. You can count 
                on me to meet deadlines and maintain high code quality standards.
              </p>
            </div>

            <div className="bg-base-100/10 backdrop-blur-sm rounded-xl p-8 border border-base-100/20">
              <div className="flex items-center mb-4">
                <Star size={32} className="text-base-100 mr-3" />
                <h3 className="text-2xl font-bold text-base-100">Continuous Learning</h3>
              </div>
              <p className="text-base-100/80 leading-relaxed">
                The tech industry evolves rapidly, and so do I. I stay current with 
                best practices, emerging technologies, and industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-base-100 mb-8">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-base-100/80 mb-12 max-w-2xl mx-auto">
            I'm actively seeking new opportunities where I can contribute to meaningful projects 
            and grow alongside a talented team. Let's discuss how I can help your company succeed.
          </p>
          
          <div className="bg-base-100/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto border border-base-100/20">
            <h3 className="text-2xl font-bold text-base-100 mb-4">Get In Touch</h3>
            <p className="text-base-100/80 mb-6">
              I respond to all inquiries within 24 hours
            </p>
            <div className="space-y-4">
              <a href="mailto:ezekiel.lopez@example.com" className="btn btn-lg w-full bg-base-100 text-primary hover:bg-base-200 border-none">
                <Mail size={24} />
                ezekiel.lopez@example.com
              </a>
              <a href="https://github.com/ezekiellopez" target="_blank" rel="noopener noreferrer" className="btn btn-lg w-full btn-outline text-base-100 border-base-100 hover:bg-base-100 hover:text-primary">
                <GitHub size={24} />
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;