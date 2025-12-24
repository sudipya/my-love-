import FloatingHearts from "@/components/FloatingHearts";
import Snowflakes from "@/components/Snowflakes";
import ChristmasMessage from "@/components/ChristmasMessage";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-rose-light/20 to-blush/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(350_100%_95%),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(340_60%_90%),transparent_50%)]" />
      
      {/* Animated elements */}
      <Snowflakes />
      <FloatingHearts />
      
      {/* Main content */}
      <ChristmasMessage />
      
      {/* Music player */}
      <MusicPlayer />
      
      {/* Bottom gradient fade */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blush/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default Index;
