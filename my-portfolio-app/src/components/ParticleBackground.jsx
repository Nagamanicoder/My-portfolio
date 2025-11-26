import React from 'react';

const ParticleBackground = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 20}s`,
    duration: `${20 + Math.random() * 15}s`
  }));

  const styles = `
    body {
      background-color: #000000;
      margin: 0;
      padding: 0;
    }

    .particle-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 1;
      pointer-events: none;
    }

    .particle {
      position: absolute;
      width: 7px;
      height: 7px;
      background-color: rgb(122, 187, 237);
      border-radius: 50%;
      opacity: 0.6;
      box-shadow: 0 0 10px rgba(122, 187, 237, 0.5);
      animation: float linear infinite;
      pointer-events: none;
    }

    @keyframes float {
      0%, 100% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(30px, -30px);
      }
      50% {
        transform: translate(-20px, 20px);
      }
      75% {
        transform: translate(40px, 10px);
      }
    }

    .components-container {
      position: relative;
      z-index: 2;
    }

    .components-container * {
      position: relative;
      z-index: 2;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="particle-background">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ParticleBackground;