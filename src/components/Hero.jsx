import { useEffect, useState } from "react";

function Hero() {
  const [mousepos, setmousepos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMousemove = (e) => {
      setmousepos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMousemove);
    return () => window.removeEventListener("mousemove", handleMousemove);
  }, []);

  return (
    <section className="overflow-hidden relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousepos.x}px ${mousepos.y}px, rgb(59,130,246,0.05), transparent 40%)`,
        }}
      ></div>
     
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
       <div className="absolute bottom-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}

export default Hero;
