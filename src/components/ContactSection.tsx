import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { items, getCartSummary, clearCart } = useCart();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Installation résidentielle',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const cartSummary = getCartSummary();
    const emailBody = `
Nouvelle demande de devis de ${formData.name}

Informations du client:
- Nom: ${formData.name}
- Téléphone: ${formData.phone}
- Email: ${formData.email}
- Type de projet: ${formData.projectType}

Message:
${formData.message}

${cartSummary ? `\nProduits sélectionnés:\n${cartSummary}` : '\nAucun produit sélectionné dans le panier.'}
    `.trim();

    try {
      // Simulation d'envoi d'email (remplacez par votre service d'email)
      console.log('Email à envoyer vers pissigasergio45@gmail.com:', emailBody);
      
      // Ici vous pourriez intégrer un service d'email comme EmailJS, Supabase Functions, etc.
      
      toast({
        title: "Demande envoyée!",
        description: "Nous vous répondrons sous 24h avec votre devis personnalisé.",
      });

      // Réinitialiser le formulaire et le panier
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: 'Installation résidentielle',
        message: ''
      });
      clearCart();

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Contactez-Nous
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt à passer à l'énergie solaire ? Contactez nos experts pour un devis gratuit et personnalisé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Téléphone</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Conseils & Services</span>
                  <span className="font-semibold">+226 07391659</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Devis Gratuit</span>
                  <span className="font-semibold">+226 74842709</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Livraison</span>
                  <span className="font-semibold">+226 07391659</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <a href="mailto:pissigasergio45@gmail.com" className="hover:text-primary transition-smooth">
                    pissigasergio45@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Localisation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  NAGRIN, OUAGADOUGOU<br />
                  Burkina Faso
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground">Nos Partenaires :</p>
                  <p className="text-sm text-muted-foreground mt-1">SOBELEC • EZO-energy</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Horaires</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lundi - Vendredi</span>
                  <span className="font-semibold">8h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samedi</span>
                  <span className="font-semibold">8h - 16h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dimanche</span>
                  <span className="font-semibold">Fermé</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span>Demande de Devis Gratuit</span>
                {items.length > 0 && (
                  <span className="text-sm text-primary">({items.length} produit{items.length > 1 ? 's' : ''})</span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom complet *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Téléphone *</label>
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+226 XX XX XX XX" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com" 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Type de projet</label>
                  <select 
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                  >
                    <option>Installation résidentielle</option>
                    <option>Installation commerciale</option>
                    <option>Installation industrielle</option>
                    <option>Maintenance et réparation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou vos besoins en énergie solaire..."
                    rows={4}
                  />
                </div>

                <Button 
                  variant="energy" 
                  size="lg" 
                  className="w-full" 
                  type="submit"
                  disabled={isLoading}
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  {isLoading ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Nous vous répondrons sous 24h avec un devis personnalisé gratuit.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;