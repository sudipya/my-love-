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
            <p className="font-display text-xl gradient-text">
              But this time if you choose me only if (idk if this is even ever going to happen again)
            </p>
            
            <div className="space-y-4">
              <p>
                <span className="font-semibold text-rose-deep">1.</span> Meri trf se koi restrictions kavi thi hi nhi still you think agr thi then let me clarify aage se Kavi nhi hongi (na hi mere ghrwalo ko problem h kuch) with anything your job your freedom your self respect, jo pehnna pehno whatever you feel like jaisa acha lge waisa kro, any job any business or any restriction mere aage ya mere piche it doesn't matters anyways
              </p>
              
              <p>
                <span className="font-semibold text-rose-deep">2.</span> I've grown up in so many ways after so many relentless and restless nights that I'm not insecure anymore and not that I will be ever
              </p>
              
              <p>
                <span className="font-semibold text-rose-deep">3.</span> I never shared my problems or my situations with you bcz I always wanted to see you smiling but I even failed in that too, so this time instead of being the cringe and always clingy and flirty one it will be real me the real one without any filters
              </p>
            </div>
            
            <p>
              You never saw me excited for anything you never saw me crying out of anger you never saw me carry all the load on me but still I tried to make it upto everyone while holding everything inside me. Choose me one more time please after the time you have asked for. But yk all this if I am still in this world and only if you choose me one last time over my toxic past you will always be my last 7 minutes if I'm not here Always love you 🫂
            </p>
            
            <p className="font-display text-lg gradient-text text-center">
              You have your full freedom and space if you don't, you are your individual self not my puppet to control so I leave it upto you
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
