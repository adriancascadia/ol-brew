import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Mountain, Droplets } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Recoleta', serif" }}>
            öl
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#story" className="text-sm font-medium hover:text-primary transition-colors">Story</a>
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Products</a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">Experience</a>
            <Button variant="default" size="sm">Find ÖL Brew</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.30_0.05_230)] via-[oklch(0.40_0.03_165)] to-[oklch(0.22_0.03_160)]" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight" style={{ fontFamily: "'Recoleta', serif" }}>
              Skål to the moment you're in
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90">
              Where Nordic craft meets orchard soul
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Discover ÖL Brew
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Recoleta', serif" }}>
                A Category of One
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  öl brew is not here to participate in an existing category—it's here to redefine what a beverage can be.
                </p>
                <p>
                  Born from Nordic brewing tradition and infused with real fruit soul, öl brew exists to give people a drink that carries depth, intention, and clarity. It's not the alternative to alcohol, seltzer, juice, or soda.
                </p>
                <p className="font-semibold text-foreground">
                  We are a category of one.
                </p>
              </div>
              <div className="pt-4">
                <Button variant="default" size="lg">
                  Learn More About Our Craft
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/blue-can.jpeg" 
                alt="ÖL Brew Blue Can" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Recoleta', serif" }}>
              Fruit. Malt. Soul.
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple elements, crafted with centuries of Nordic brewing mastery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Recoleta', serif" }}>
                Zero Alcohol
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The best moments in life deserve a drink as intentional as you are. No compromise, just pure satisfaction.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Mountain className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Recoleta', serif" }}>
                Zero Compromise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nordic brewing tradition meets vibrant fruit flavors. Depth, subtle sweetness, and satisfaction that stands alone.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Recoleta', serif" }}>
                Nordic Soul
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Inspired by Scandinavian nights and misty mountain lakes. Natural, intentional, and unmistakably öl.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Recoleta', serif" }}>
              Our Collection
            </h2>
            <p className="text-xl text-muted-foreground">
              Each flavor tells a story of Nordic tradition and fruit-forward innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Blue Can */}
            <div className="group relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img 
                  src="/blue-can.jpeg" 
                  alt="ÖL Brew Blue Can" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold" style={{ fontFamily: "'Recoleta', serif" }}>
                  Nordic Blue
                </h3>
                <p className="text-muted-foreground">
                  Blueberry & Mountain Herbs
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-2 bg-[oklch(0.30_0.05_230)]/10 text-[oklch(0.30_0.05_230)] rounded-full text-sm font-medium">
                    Non-Alcoholic
                  </span>
                </div>
              </div>
            </div>

            {/* Red Can */}
            <div className="group relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img 
                  src="/red-can.jpeg" 
                  alt="ÖL Brew Red Can" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold" style={{ fontFamily: "'Recoleta', serif" }}>
                  Orchard Red
                </h3>
                <p className="text-muted-foreground">
                  Apple & Berry Fusion
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-2 bg-[oklch(0.55_0.15_25)]/10 text-[oklch(0.55_0.15_25)] rounded-full text-sm font-medium">
                    Non-Alcoholic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="experience" className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Recoleta', serif" }}>
                Experience the Craft
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover the journey from Nordic tradition to your glass
              </p>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={isVideoPlaying}
                poster="/blue-can.jpeg"
              >
                <source src="/brew-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <button
                    onClick={handlePlayVideo}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                  >
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[oklch(0.30_0.05_230)] via-[oklch(0.40_0.03_165)] to-[oklch(0.22_0.03_160)] text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "'Recoleta', serif" }}>
              Not a replacement. A revelation.
            </h2>
            <p className="text-xl md:text-2xl opacity-90">
              The only malt beverage born from Nordic brewing tradition
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                Find ÖL Brew Near You
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.22_0.03_160)] text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="text-3xl font-bold" style={{ fontFamily: "'Recoleta', serif" }}>
                öl
              </div>
              <p className="text-white/70 text-sm">
                Fruit. Malt. Soul.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Nordic Blue</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Orchard Red</a></li>
                <li><a href="#" className="hover:text-white transition-colors">All Flavors</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brewing Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>&copy; 2025 ÖL Brew. All rights reserved. | A category of one.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
