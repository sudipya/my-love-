const Snowflakes = () => {
  const snowflakes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 15,
    size: 4 + Math.random() * 8,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-rose-light animate-snow"
          style={{
            left: `${flake.left}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            boxShadow: `0 0 ${flake.size * 2}px hsl(350 80% 80% / 0.5)`,
          }}
        />
      ))}
    </div>
  );
};

export default Snowflakes;
