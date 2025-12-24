import { useEffect, useState } from "react";

interface LyricsSectionProps {
  lines: string[];
  delay: number;
}

const LyricsSection = ({ lines, delay }: LyricsSectionProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="glass rounded-2xl p-6 md:p-8 shadow-lg border border-rose-light/50">
        {lines.map((line, index) => (
          <p
            key={index}
            className="text-lg md:text-xl font-body text-foreground/90 leading-relaxed mb-2 last:mb-0"
            style={{
              animationDelay: `${delay + index * 100}ms`,
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LyricsSection;
