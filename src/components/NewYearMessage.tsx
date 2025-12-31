import { Heart, Sparkles, Gift } from "lucide-react";
import LyricsSection from "./LyricsSection";

const ChristmasMessage = () => {
  const lyricsSections = [
    {
      lines: [
        "Maybe I was wrong and you were right",
        "But I don't really wanna have this fight",
        "I just wanna feel like I belong",
      ],
      delay: 500,
    },
    {
      lines: [
        "And every time my heart swings back to you",
        "You are my morning and my truth",
        "And all that I can do is sing this song",
      ],
      delay: 1000,
    },
    {
      lines: [
        "And nothing says \"I love you\" like your eyes",
        "I just wanna feel like I deserve you",
        "'Cause you deserve me",
      ],
      delay: 1500,
    },
    {
      lines: [
        "Baby, it's the way that you can see",
        "What I miss and what I can never be",
        "I just wanna feel like I deserve you",
        "'Cause you deserve me",
      ],
      delay: 2000,
    },
    {
      lines: [
        "Maybe you were wrong and I was right",
        "I don't care, won't you stay another night?",
        "I just need some time to be myself",
      ],
      delay: 2500,
    },
    {
      lines: [
        "I couldn't say \"I need you\" on that night",
        "When you left and I lost all track of time",
        "I just want you close so I can feel you",
        "Can you feel me?",
      ],
      delay: 3000,
    },
  ];

  return (
    <div className="relative z-10 max-w-3xl mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-gold animate-pulse-glow" />
          <Gift className="w-8 h-8 text-rose-deep animate-float" />
          <Sparkles className="w-6 h-6 text-gold animate-pulse-glow" />
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl gradient-text mb-4 leading-tight">
          Happy New Year
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-rose-deep fill-rose-medium animate-heart-beat" />
          <p className="font-display text-2xl md:text-3xl text-foreground/90 italic">
            Samiksha
          </p>
          <Heart className="w-5 h-5 text-rose-deep fill-rose-medium animate-heart-beat" />
        </div>
        
        <p className="font-display text-lg text-muted-foreground italic mb-6">
          — To Someone Who Means Everything —
        </p>

        <p className="font-body text-muted-foreground text-lg max-w-md mx-auto">
          Words from my heart that I couldn't say in person...
        </p>
      </div>

      {/* Lyrics */}
      <div className="space-y-6 md:space-y-8">
        {lyricsSections.map((section, index) => (
          <LyricsSection
            key={index}
            lines={section.lines}
            delay={section.delay}
          />
        ))}
      </div>

      {/* Footer Message */}
      <div
        className="mt-12 md:mt-16 text-center animate-fade-in-up"
        style={{ animationDelay: "3.5s", animationFillMode: "both" }}
      >
        <div className="glass rounded-3xl p-8 md:p-12 border border-rose-medium/30 shadow-xl">
          <Heart className="w-12 h-12 text-rose-deep fill-rose-medium mx-auto mb-6 animate-heart-beat" />
          
          <p className="font-display text-2xl md:text-3xl gradient-text mb-4">
            From My Heart
          </p>
          
          <p className="font-body text-foreground/80 text-lg leading-relaxed max-w-lg mx-auto mb-6">
            I see now where I stopped showing up the way you needed—not because I didn't care, 
            but because I didn't understand myself well enough then but now I do with your freedom 
            and everything good you deserve in this world.
          </p>
          
          <p className="font-body text-foreground/80 text-lg leading-relaxed max-w-lg mx-auto mb-6">
            By the time you get this I don't know if I am alive or not but just know you are 
            the most beautiful thing that ever happened to me and I love you 🫂
          </p>
          
          <p className="font-body text-foreground/80 text-lg leading-relaxed max-w-lg mx-auto mb-6">
            Thank you for being honest with me. I respect the time you asked for, and I'll give 
            you the space you need. Take care.
          </p>
          
          <p className="font-display text-xl md:text-2xl gradient-text mt-4 mb-8">
            HOPE YOU RETURN BACK WITH THE COLOURS IN MY LIFE
          </p>
          
          <div className="text-left font-body text-foreground/80 text-lg leading-relaxed max-w-lg mx-auto space-y-6">
            <p className="font-display text-2xl gradient-text text-center mb-4">
              One Last Time — With Truth, Not Promises
            </p>
            
            <p>
              If this ever happens again—if you ever choose me—this is everything I want you to know, clearly and honestly.
            </p>
            
            <p>
              You know me, and I know you—perhaps more deeply than anyone else ever could. I feel it when you are sad, when you are in pain, and even when you are angry. Some connections don't need words; they are felt, even in silence.
            </p>
            
            <p>
              From my side, there were never restrictions. And if you ever felt there were, let me be clear—there will be none, ever. Not now, not in the future.
            </p>
            
            <p>
              There is no issue from my family either. Your job, your freedom, your self-respect, your choices—everything is yours. Wear what you want. Do what feels right. Choose any career, any business, any path. Whether in front of me or behind me, none of it changes how I see you. Your life is yours.
            </p>
            
            <p>
              I have grown—quietly, painfully, and deeply—through countless restless nights. I am not insecure anymore, and I never will be again.
            </p>
            
            <p>
              Yes, I failed recently. Not because I didn't care, but because I was dealing with my own battles in ways I didn't know how to explain. I take responsibility for that.
            </p>
            
            <p>
              I never shared my struggles with you because all I wanted was to see you smile. Even in that, I failed. This time, I won't pretend. I won't be the cringe, clingy, or overly flirty version of myself. This will be the real me—unfiltered, honest, and present.
            </p>
            
            <p className="text-center italic text-foreground/90">
              You never saw me excited for myself.<br />
              You never saw me cry out of anger.<br />
              You never saw me carrying everything alone.
            </p>
            
            <p>
              Yet I still tried to be there for everyone, holding everything inside.
            </p>
            
            <p>
              If there is one thing you know about me, it is this—I can change. I always have when life demanded it. Growth has never scared me. Losing something meaningful has.
            </p>
            
            <p>
              So instead of letting time turn us into strangers, instead of pretending we were never important to each other, I wish we could choose each other once more. Not to repeat the past, but to build something better—with understanding, honesty, and maturity.
            </p>
            
            <p>
              After the time you asked for, I ask only this—choose me one last time. Choose me over my toxic past. If I am still here, if life allows it, you will always be my last choice, my last priority, my last seven minutes.
            </p>
            
            <p className="text-center">
              You have complete freedom and space. Always.<br />
              You are your own individual—not something to be controlled, not a puppet in my hands.
            </p>
            
            <p className="text-center font-medium">
              The decision is entirely yours.
            </p>
            
            <p className="font-display text-xl gradient-text text-center">
              And no matter what—<br />
              I will always love you.
            </p>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <Sparkles className="w-4 h-4 text-gold animate-sparkle" style={{ animationDelay: "0s" }} />
            <span className="font-display text-lg text-rose-deep">Forever Yours</span>
            <Sparkles className="w-4 h-4 text-gold animate-sparkle" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-rose-light/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default ChristmasMessage;
