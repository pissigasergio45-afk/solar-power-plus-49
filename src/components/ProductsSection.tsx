import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Grid, Filter } from "lucide-react";
import solarPanel from "@/assets/solar-panel.jpg";
import solarBattery from "@/assets/solar-battery.jpg";
import solarInverter from "@/assets/solar-inverter.jpg";
import solarCables from "@/assets/solar-cables.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Panneau Solaire 550Wc",
      description: "Panneau photovoltaïque haute performance avec technologie monocristalline",
      price: "120,000 CFA",
      image: solarPanel,
      category: "Panneaux Solaires",
      rating: 5,
      features: [
        "Puissance 550Wc",
        "Garantie 25 ans",
        "Résistant aux intempéries"
      ],
      isPopular: true
    },
    {
      id: 2,
      name: "Panneau Solaire 600Wc",
      description: "Panneau solaire de haute puissance pour installations résidentielles",
      price: "120,000 CFA",
      image: solarPanel,
      category: "Panneaux Solaires",
      rating: 5,
      features: [
        "Puissance 600Wc",
        "Technologie avancée",
        "Installation professionnelle"
      ]
    },
    {
      id: 3,
      name: "Panneau Solaire 400Wc",
      description: "Solution solaire polyvalente pour maisons et petites entreprises",
      price: "80,000 CFA",
      image: solarPanel,
      category: "Panneaux Solaires",
      rating: 5,
      features: [
        "Puissance 400Wc",
        "Excellent rapport qualité-prix",
        "Installation rapide"
      ]
    },
    {
      id: 4,
      name: "Panneau Solaire 35Wc",
      description: "Petit panneau solaire pour applications légères",
      price: "25,000 CFA",
      image: solarPanel,
      category: "Panneaux Solaires",
      rating: 4,
      features: [
        "Puissance 35Wc",
        "Compact et léger",
        "Idéal pour petites installations"
      ]
    },
    {
      id: 5,
      name: "Panneau Solaire 25Wc",
      description: "Mini panneau solaire pour éclairage et petits appareils",
      price: "13,000 CFA",
      image: solarPanel,
      category: "Panneaux Solaires",
      rating: 4,
      features: [
        "Puissance 25Wc",
        "Très compact",
        "Parfait pour débuter"
      ]
    },
    {
      id: 6,
      name: "Panneau Solaire 8Wc",
      description: "Micro panneau pour applications spécialisées",
      price: "11,000 CFA",
      image: solarPanel,
      category: "Panneaux Solaires",
      rating: 4,
      features: [
        "Puissance 8Wc",
        "Ultra compact",
        "Applications spécialisées"
      ]
    },
    {
      id: 7,
      name: "Régulateur 5-20A",
      description: "Régulateur de charge pour petites installations solaires",
      price: "30,000 - 45,000 CFA",
      image: solarInverter,
      category: "Régulateurs",
      rating: 5,
      features: [
        "Ampérage 5-20A",
        "Protection intégrée",
        "Affichage LCD"
      ]
    },
    {
      id: 8,
      name: "Régulateur 30-60A",
      description: "Régulateur haute capacité pour installations moyennes",
      price: "170,000 - 215,000 CFA",
      image: solarInverter,
      category: "Régulateurs",
      rating: 5,
      features: [
        "Ampérage 30-60A",
        "Technologie MPPT",
        "Haute efficacité"
      ]
    },
    {
      id: 9,
      name: "Régulateur MPPT 250/100A",
      description: "Régulateur MPPT professionnel haute performance",
      price: "1,465,000 CFA",
      image: solarInverter,
      category: "Régulateurs",
      rating: 5,
      features: [
        "MPPT 250V/100A",
        "Technologie avancée",
        "Monitoring Bluetooth"
      ]
    },
    {
      id: 10,
      name: "Onduleur 12V/375W",
      description: "Onduleur compact pour petites installations",
      price: "105,000 CFA",
      image: solarInverter,
      category: "Onduleurs",
      rating: 4,
      features: [
        "12V/375W",
        "Onde sinusoïdale pure",
        "Protection surcharge"
      ]
    },
    {
      id: 11,
      name: "Onduleur 12V-24V/500W",
      description: "Onduleur versatile bi-tension",
      price: "225,000 CFA",
      image: solarInverter,
      category: "Onduleurs",
      rating: 5,
      features: [
        "12V-24V/500W",
        "Double tension",
        "Haute fiabilité"
      ]
    },
    {
      id: 12,
      name: "Onduleur 12V-24V/1200W",
      description: "Onduleur moyenne puissance pour usage domestique",
      price: "225,000 CFA",
      image: solarInverter,
      category: "Onduleurs",
      rating: 5,
      features: [
        "12V-24V/1200W",
        "Puissance élevée",
        "Usage domestique"
      ]
    },
    {
      id: 13,
      name: "Onduleur 24V/5000W",
      description: "Onduleur haute puissance pour grandes installations",
      price: "1,120,000 CFA",
      image: solarInverter,
      category: "Onduleurs",
      rating: 5,
      features: [
        "24V/5000W",
        "Très haute puissance",
        "Installation professionnelle"
      ]
    },
    {
      id: 14,
      name: "Batterie 12V/90Ah",
      description: "Batterie de stockage standard pour systèmes solaires",
      price: "195,000 CFA",
      image: solarBattery,
      category: "Batteries",
      rating: 5,
      features: [
        "12V/90Ah",
        "Longue durée de vie",
        "Maintenance réduite"
      ]
    },
    {
      id: 15,
      name: "Batterie 12V/200Ah",
      description: "Batterie haute capacité pour autonomie prolongée",
      price: "285,000 CFA",
      image: solarBattery,
      category: "Batteries",
      rating: 5,
      features: [
        "12V/200Ah",
        "Haute capacité",
        "Cyclage profond"
      ]
    },
    {
      id: 16,
      name: "Batterie 12V/220Ah",
      description: "Batterie premium pour installations exigeantes",
      price: "355,000 CFA",
      image: solarBattery,
      category: "Batteries",
      rating: 5,
      features: [
        "12V/220Ah",
        "Capacité maximale",
        "Technologie AGM"
      ]
    }
  ];

  const categories = ["Tous", "Panneaux Solaires", "Batteries", "Onduleurs", "Régulateurs"];

  return (
    <section id="produits" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Nos Produits
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de produits solaires de haute qualité, 
            sélectionnés pour leur performance et leur durabilité.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tous" ? "energy" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtres
            </Button>
            <Button variant="outline" size="sm">
              <Grid className="h-4 w-4 mr-2" />
              Vue
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Voir plus de produits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;