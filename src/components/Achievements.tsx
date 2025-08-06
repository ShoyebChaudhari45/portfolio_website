import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Medal, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      title: 'AWS Academy Graduate',
      description: 'Completed AWS Academy Cloud Foundations course and certified for foundational cloud knowledge.',
      icon: Award,
    },
    {
      title: 'NPTEL Certification',
      description: 'Earned certifications in Database Management Systems and Design & Analysis of Algorithms.',
      icon: Medal,
    },
    {
      title: 'Best Event In-Charge',
      description: 'Recognized for successfully managing Innohack Hackathon during college tech fest.',
      icon: Star,
    },
    {
      title: 'Sports Excellence',
      description: 'Awarded Best Performer in cricket tournaments representing the college team.',
      icon: Star,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
            Achievements<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Certifications and recognitions that showcase my commitment to learning and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <item.icon size={26} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
