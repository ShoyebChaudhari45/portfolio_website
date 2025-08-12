import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Images
import safario1 from "../images/safario_1.jpeg";
import safario2 from "../images/safario_2.jpeg";
import safario3 from "../images/safario_3.jpeg";
import safario4 from "../images/safario_4.jpeg";
import smsSpam1 from "../images/sms1.jpg";
import votingSystem1 from "../images/voting_1.png";
import votingSystem2 from "../images/voting_2.png";
import votingSystem3 from "../images/voting_3.png";
import campusCircle1 from "../images/campuscircle_1.jpg";
import campusCircle2 from "../images/campuscircle_2.jpg";
import campusCircle3 from "../images/campuscircle_3.jpg";
import campusCircle4 from "../images/campuscircle_4.jpg";

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<null | any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Safario – Trip Planner App',
      description: 'A travel planner app with location search, itinerary management, and trip sharing using Google Maps API.',
      images: [safario1, safario2, safario3, safario4],
      tech: ['Java', 'Firebase', 'Google Maps API', 'Material UI'],
      github: 'https://github.com/ShoyebChaudhari45/travel-planner-.git',
      live: 'https://developershoyeb.itch.io/safario-smart',
      featured: true,
    },
    {
      id: 2,
      title: 'Biometric Web Voting System',
      description: 'Web-based voting system using Flask and DeepFace for secure facial recognition authentication.',
      images: [votingSystem1, votingSystem2, votingSystem3],
      tech: ['Flask', 'DeepFace', 'OpenCV', 'MongoDB'],
      github: 'https://github.com/ShoyebChaudhari45/-Web-Based-Biometric-Voting-System-.git',
      // live: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'SMS Spam Detection',
      description: 'Android + Flask app to detect spam messages using a signature-based detection method.',
      images: [smsSpam1],
      tech: ['Java', 'Flask', 'Retrofit', 'RecyclerView'],
      github: 'https://github.com/ShoyebChaudhari45/smishing-android.git',
      // live: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Campus Circle – Alumni Association Platform',
      description: 'A platform for alumni networking, job sharing, and event management built for college communities.',
      images: [campusCircle1, campusCircle2, campusCircle3, campusCircle4],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/ShoyebChaudhari45/Campus-Circle-.git',
      live: 'https://developershoyeb.itch.io/campuscircle',
      featured: false,
    },
  ];

  const handlePrev = () => {
    if (selectedProject) {
      setCurrentIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedProject) {
      setCurrentIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
            Projects<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Highlighting impactful applications and real-world solutions
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${inView ? 'animate-fade-in-up' : 'opacity-0'} interactive`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentIndex(0);
              }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-400/50 transition-all duration-500">
                <div className="aspect-video bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal with Slider */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              {/* Image Slider */}
              <div className="relative">
                {selectedProject.images.length > 1 && (
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                  >
                    <ChevronLeft size={24} className="text-white" />
                  </button>
                )}
                <img
                  src={selectedProject.images[currentIndex]}
                  alt={selectedProject.title}
                  className="w-full h-[400px] object-contain rounded-t-xl"
                />
                {selectedProject.images.length > 1 && (
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                  >
                    <ChevronRight size={24} className="text-white" />
                  </button>
                )}
              </div>

              {/* Dots Navigation */}
              {selectedProject.images.length > 1 && (
                <div className="flex justify-center mt-3 space-x-2">
                  {selectedProject.images.map((_, idx) => (
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

              {/* Project Details */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-6">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                    <Github size={20} /> <span>View Code</span>
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400">
                    <ExternalLink size={20} /> <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
