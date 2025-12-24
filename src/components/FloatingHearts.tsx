import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 10,
    size: 12 + Math.random() * 20,
    opacity: 0.2 + Math.random() * 0.4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-rose-medium animate-snow fill-rose-light"
          style={{
            left: `${heart.left}%`,
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
