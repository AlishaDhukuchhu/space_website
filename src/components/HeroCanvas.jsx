import React, { useEffect, useRef } from 'react';
import './HeroCanvas.css';

const HeroCanvas = ({ navigateTo }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(243, 233, 223, 0.5)'; // champagne color
        ctx.fill();
        
        // Add subtle glow near mouse
        if (mouse.x) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.8)'; // gold glow
          } else {
            ctx.shadowBlur = 0;
          }
        } else {
           ctx.shadowBlur = 0;
        }
      }

      update() {
        // Move particles naturally
        this.x += this.dx;
        this.y += this.dy;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

        // Mouse interaction
        if (mouse.x && mouse.y) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          
          // Max distance, past that the force is 0
          const maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          // If we went below zero, set it to zero.
          if (force < 0) force = 0;
          
          let directionX = (forceDirectionX * force * this.density) * 0.05;
          let directionY = (forceDirectionY * force * this.density) * 0.05;

          // Pull slightly towards mouse to create "forming network" effect
          if (distance < mouse.radius) {
            this.x += directionX;
            this.y += directionY;
          } else {
             // Return to natural movement slowly
             if (this.x !== this.baseX) {
                let dxBase = this.x - this.baseX;
                this.x -= dxBase * 0.01;
             }
             if (this.y !== this.baseY) {
                let dyBase = this.y - this.baseY;
                this.y -= dyBase * 0.01;
             }
          }
        }

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 0.5;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = (Math.random() - 0.5) * 0.5;
        let dy = (Math.random() - 0.5) * 0.5;
        particles.push(new Particle(x, y, dx, dy, size));
      }
    };

    const connectParticles = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
            + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          
          if (distance < (canvas.width / 10) * (canvas.height / 10)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(243, 233, 223, ${opacityValue * 0.2})`; // delicate connection
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hero-section">
      <canvas ref={canvasRef} id="particle-canvas" />
      <div className="hero-content animate-fade-in">
        <p className="hero-eyebrow">TIMELESS &bull; REFINED &bull; YOURS</p>
        <h1 className="hero-headline">Jewelry That Connects With You</h1>
        <p className="hero-supporting">Discover carefully crafted pieces designed to become part of your story.</p>
        <div className="hero-ctas">
          <button className="btn btn-primary-light" onClick={() => navigateTo('/collections')}>Shop Collection</button>
          <a href="#new-arrivals" className="btn btn-secondary-light">Explore New Arrivals</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <p>SCROLL TO DISCOVER</p>
        <div className="arrow-down">&darr;</div>
      </div>
    </div>
  );
};

export default HeroCanvas;
