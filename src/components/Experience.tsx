import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Zap, Code, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      year: '2025',
      title: 'Founder & Software Developer',
      company: 'KodeNeurons',
      description:
        'Founded a student-driven tech venture focused on building Android and Web apps with modern tech stacks and AI integration.',
      icon: Code,
    },
    {
      year: '2025',
      title: 'Open Source Contributor',
      company: 'GSSoC & Open Source Connect India',
      description:
        'Contributed to real-world open-source projects in web and mobile development, collaborating globally.',
      icon: Zap,
    },
    {
      year: '2022',
      title: 'Android Developer Intern',
      company: 'Mountreach Solutions Pvt. Ltd.',
      description:
        'Developed Android apps using Java and Firebase, implemented authentication systems and UI improvements.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-mono">
            Experience<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Key milestones in my professional and open-source journey
          </p>
        </div>

        {/* Responsive Layout */}
        <div
          className={`lg:grid lg:grid-cols-3 lg:gap-6 flex space-x-4 overflow-x-auto lg:overflow-visible scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent pb-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {experiences.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] md:min-w-[300px] bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 flex-shrink-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon & Year */}
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <item.icon className="text-black" size={20} />
                </div>
                <span className="text-cyan-400 font-mono text-xs flex items-center space-x-1">
                  {item.year} <Calendar size={12} className="text-gray-500" />
                </span>
              </div>

              {/* Title & Company */}
              <h3 className="text-white font-semibold text-base leading-tight mb-1">{item.title}</h3>
              <p className="text-purple-400 text-xs mb-2">{item.company}</p>

              {/* Description */}
              <p className="text-gray-400 text-xs leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
