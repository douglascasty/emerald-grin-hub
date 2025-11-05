import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Award, Heart } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/20 via-background to-primary/10">
      {/* Decorative elements with orange tones */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-accent to-accent/50 rounded-3xl blur-xl opacity-20 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-primary to-primary/50 rounded-3xl blur-xl opacity-20 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge with 3D effect */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm border border-accent/30 text-accent text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <Sparkles size={18} className="animate-pulse" />
            <span>Sorria com confiança</span>
          </div>

          {/* Main heading with 3D text effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="inline-block" style={{
              textShadow: '2px 2px 0 rgba(0,0,0,0.1), 4px 4px 0 rgba(0,0,0,0.08), 6px 6px 0 rgba(0,0,0,0.06), 8px 8px 20px rgba(0,0,0,0.15)'
            }}>
              Seu sorriso merece o{" "}
            </span>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-primary blur-2xl opacity-60"></span>
              <span className="relative bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent" style={{
                filter: 'drop-shadow(2px 2px 4px rgba(255, 140, 50, 0.4)) drop-shadow(4px 4px 8px rgba(0,0,0,0.3)) drop-shadow(0 0 20px rgba(255, 140, 50, 0.3))'
              }}>
                melhor cuidado
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.1), 2px 2px 4px rgba(0,0,0,0.08), 3px 3px 6px rgba(0,0,0,0.06)'
          }}>
            Implantes, Ortodontia e Estética Dental com tecnologia de ponta e atendimento humanizado
          </p>

          {/* CTA Buttons with 3D effect */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative bg-gradient-to-r from-accent via-accent to-accent/90 hover:from-accent/90 hover:via-accent hover:to-accent text-white hover:shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all text-lg px-10 py-7 font-semibold border-0"
              style={{
                boxShadow: '0 10px 40px -10px rgba(255, 140, 50, 0.4), 0 0 0 1px rgba(255, 140, 50, 0.1) inset'
              }}
            >
              Agendar Consulta
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-10 py-7 border-2 border-foreground/20 hover:border-accent hover:bg-accent/10 hover:text-accent hover:scale-105 transition-all font-semibold backdrop-blur-sm"
            >
              Nossos Serviços
            </Button>
          </div>

          {/* Trust indicators with 3D cards */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { icon: Award, value: "15+", label: "Anos de experiência", delay: "0s" },
              { icon: Heart, value: "5000+", label: "Pacientes atendidos", delay: "0.1s" },
              { icon: Shield, value: "4.9", label: "Avaliação média", delay: "0.2s" }
            ].map((item, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: item.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all hover:border-accent/50">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-accent" />
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
