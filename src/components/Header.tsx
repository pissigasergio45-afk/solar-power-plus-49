import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone, Menu } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import CartModal from "@/components/CartModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">Z</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ZPEnergy
              </h1>
              <p className="text-xs text-muted-foreground">Solutions Solaires</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-smooth">
              Accueil
            </a>
            <a href="#produits" className="text-foreground hover:text-primary transition-smooth">
              Produits
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <CartModal>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Button>
            </CartModal>
            <Button 
              variant="energy" 
              size="sm" 
              className="hidden sm:flex"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="h-4 w-4 mr-2" />
              Devis Gratuit
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <a href="#accueil" className="text-foreground hover:text-primary transition-smooth py-2">
                Accueil
              </a>
              <a href="#produits" className="text-foreground hover:text-primary transition-smooth py-2">
                Produits
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-smooth py-2">
                Services
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth py-2">
                Contact
              </a>
              <Button 
                variant="energy" 
                size="sm" 
                className="mt-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="h-4 w-4 mr-2" />
                Devis Gratuit
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;