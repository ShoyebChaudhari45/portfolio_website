import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Medal, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import aws from '../certificates/aws.png';
import aws2 from '../certificates/badge.png'; 
import daa from '../certificates/daa_nptel.png';
import dbms from '../certificates/dbms_nptel.png'; 
import postaman1 from '../certificates/postman_1.png'; 
import postaman2 from '../certificates/postman_2.png';// Example extra image
import event from '../certificates/eventhead_1.jpeg';
import event2 from '../certificates/eventhead__2.jpeg';
import sports from '../certificates/sports.jpg';


const Achievements: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedAchievement, setSelectedAchievement] = useState<null | {
    title: string;
    images: string[];
  }>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      title: 'AWS Academy Graduate',
      description: 'Completed AWS Academy Cloud Foundations course.',
      icon: Award,
      images: [aws, aws2], // Multiple images allowed
    },
    {
      title: 'NPTEL Certification',
      description: 'Database Management Systems & DAA certifications.',
      icon: Medal,
      images: [dbms, daa], // Multiple images allowed
    },
     {
      title: 'Postman API Fundamentals Student Expert',
      description: 'Completed Postman API Fundamentals Student ExpertCourse',
      icon: Medal,
      images: [postaman1, postaman2], // Multiple images allowed
    },

    {
      title: 'Best Event In-Charge',
      description: 'Managed Innohack Hackathon during tech fest.',
      icon: Star,
      images: [event, event2], // Multiple images allowed
    },
    {
      title: 'Sports Excellence',
      description: 'Best Performer in cricket tournaments.',
      icon: Star,
      images: [sports],
    },
  ];

  const handlePrev = () => {
    if (selectedAchievement) {
      setCurrentIndex((prev) =>
        prev === 0 ? selectedAchievement.images.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedAchievement) {
      setCurrentIndex((prev) =>
        prev === selectedAchievement.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
            Achievements
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Certifications and recognitions that showcase my commitment to learning and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedAchievement({ title: item.title, images: item.images });
                setCurrentIndex(0);
              }}
              className={`cursor-pointer bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 ${
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

      {/* Modal with Slider */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 rounded-lg p-6 max-w-3xl w-full relative flex flex-col items-center">
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <h3 className="text-white text-2xl font-bold mb-4">{selectedAchievement.title}</h3>

            {/* Image Slider */}
            <div className="relative w-full flex items-center justify-center">
              {selectedAchievement.images.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-0 p-2 bg-black/50 rounded-full hover:bg-black/70"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
              )}
              <img
                src={selectedAchievement.images[currentIndex]}
                alt={selectedAchievement.title}
                className="rounded-lg border border-gray-700 max-h-[80vh] object-contain"
              />
              {selectedAchievement.images.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-0 p-2 bg-black/50 rounded-full hover:bg-black/70"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              )}
            </div>

            {/* Dots Navigation */}
            {selectedAchievement.images.length > 1 && (
              <div className="flex mt-4 space-x-2">
                {selectedAchievement.images.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      idx === currentIndex ? 'bg-cyan-400' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
