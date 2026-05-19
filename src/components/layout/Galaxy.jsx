import { useEffect, useRef } from "react";
import "./galaxy.css";

function Galaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W = 0,
      H = 0;
    let stars = [];
    let shootingStars = [];
    let time = 0;
    let animationId;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      makeStars(220);
    };

    const makeStars = (n) => {
      stars = [];
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.4 + 0.2,
          alpha: Math.random(),
          speed: Math.random() * 0.003 + 0.001,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const makeShooting = () => {
      if (Math.random() < 0.003) {
        shootingStars.push({
          x: Math.random() * W * 0.8,
          y: Math.random() * H * 0.3,
          vx: Math.random() * 8 + 4,
          vy: Math.random() * 4 + 2,
          len: Math.random() * 80 + 60,
          life: 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const isDark =
        document.documentElement.getAttribute("data-theme") !== "light";

      time += 0.01;
      makeShooting();

      // ⭐ STARS
      for (let s of stars) {
        s.alpha = 0.3 + 0.6 * Math.sin(time * s.speed * 60 + s.phase);

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);

        ctx.fillStyle = isDark
          ? `rgba(255,255,255,${s.alpha * 0.9})`
          : `rgba(100,60,220,${s.alpha * 0.35})`;

        ctx.fill();
      }

      // 🌠 SHOOTING STARS
      shootingStars = shootingStars.filter((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.02;

        if (s.life <= 0) return false;

        const grad = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.vx * 10,
          s.y - s.vy * 10,
        );

        grad.addColorStop(
          0,
          isDark ? `rgba(192,132,252,${s.life})` : `rgba(124,58,237,${s.life})`,
        );

        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.len * 0.8, s.y - s.len * 0.4);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="galaxy-canvas" />
      <div className="nebula-bg" />
    </>
  );
}

export default Galaxy;
