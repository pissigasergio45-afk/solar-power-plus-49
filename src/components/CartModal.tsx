import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Trash2, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CartModalProps {
  children: React.ReactNode;
}

const CartModal = ({ children }: CartModalProps) => {
  const { items, removeItem, clearCart } = useCart();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Panier ({items.length})</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Votre panier est vide
            </p>
          ) : (
            <>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Quantité: {item.quantity}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-primary mt-1">{item.price}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-2 pt-4 border-t">
                <Button variant="outline" onClick={clearCart} className="flex-1">
                  <X className="h-4 w-4 mr-2" />
                  Vider
                </Button>
                <Button variant="energy" onClick={scrollToContact} className="flex-1">
                  Demander un devis
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;