import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const BackgroundStarsPattern = ({
  className = "",
  starCount = 100,
  orbCount = 5,
  enableMouseGradient = true
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const starsRef = useRef([]);

  const orbGradients = [
    "from-teal-500 to-blue-500",
    "from-orange-500 to-pink-500",
    "from-purple-500 to-pink-500",
    "from-yellow-400 to-orange-500",
    "from-indigo-500 to-purple-500"
  ];

  useEffect(() => {
    if (!enableMouseGradient) return;

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [enableMouseGradient]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 h-screen w-screen z-0 bg-gray-900 overflow-hidden ${className}`}
    >
      {/* Starry Background */}
      <div>

        {/* Dynamic Gradient Background */}
        {/* {enableMouseGradient && (
          <div
            className="absolute inset-0 opacity-50 transition-all duration-1000"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(255, 107, 53, 0.2) 0%,
                rgba(247, 147, 30, 0.1) 25%,
                rgba(199, 65, 132, 0.15) 50%,
                rgba(114, 9, 183, 0.1) 75%,
                transparent 100%)`
            }}
          />
        )} */}


        {/* Floating Orbs */}
        {[...Array(orbCount)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float opacity-30 ${i % 2 === 0 ? 'animate-pulse' : ''
              }`}
            style={{
              left: `${10 + (i * (80 / orbCount))}%`,
              top: `${15 + (i * 15)}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${5 + (i * 0.8)}s`
            }}
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${orbGradients[i % orbGradients.length]} blur-xl`} />
          </div>
        ))}
      </div>


      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(180deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BackgroundStarsPattern;