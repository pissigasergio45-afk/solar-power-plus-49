import { Button } from "@/components/ui/button";
import { Shield, Users, Zap, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Award className="h-6 w-6" />,
      number: "99%",
      label: "Satisfaction client",
      gradient: "bg-gradient-hero"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  À Propos de ZPEnergy
                </span>
              </h2>
              <h3 className="text-xl text-primary font-semibold">
                Votre Partenaire de Confiance en Énergie Solaire
              </h3>
              <div className="bg-gradient-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-primary font-semibold text-center">
                  "Satisfaction, Productivité et Loyauté"
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Spécialiste en solutions d'énergie solaire au Burkina Faso, ZPEnergy vous accompagne 
                vers l'autonomie énergétique avec des produits de qualité supérieure et un service 
                client exceptionnel.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Notre Expérience Internationale</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Ghana - Accra</strong> - Techniciens licenciés ayant travaillé avec de grandes entreprises</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground"><strong>Togo - Lomé</strong> - Partenariat avec EZO Energy, grande entreprise énergétique</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground"><strong>SOBELEC</strong> - Partenaire principal pour l'équipement solaire</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Nos Services Complets</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Vente d'équipements électriques pour maisons (ventilateurs, climatiseurs, réfrigérateurs, chauffe-eau)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Service d'approvisionnement sur Alibaba Chine pour nos clients</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Pourquoi Nous Choisir ?</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Garantie jusqu'à 25 ans sur nos produits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Installation professionnelle certifiée</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Support client dédié et réactif</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-primary rounded-xl p-6 text-center">
              <p className="text-2xl font-bold text-primary-foreground mb-2">20+ Clients Satisfaits</p>
              <p className="text-primary-foreground/90">Avec des techniciens licenciés expérimentés</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-2xl bg-card/50 border border-border hover:shadow-elegant transition-smooth group max-w-xs">
                <div className={`w-16 h-16 ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-bounce`}>
                  <span className="text-primary-foreground">
                    {stat.icon}
                  </span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;