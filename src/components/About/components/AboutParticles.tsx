// src/components/About/About.Particles.tsx
const PARTICLE_COLORS = [
  'from-orange-500 to-yellow-500',
  'from-purple-500 to-pink-500',
  'from-teal-500 to-blue-500'
];

export const AboutParticles = () => (
  <div className="absolute inset-0">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-float opacity-20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 4}s`
        }}
      >
        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${PARTICLE_COLORS[i % 3]}`} />
      </div>
    ))}
  </div>
);