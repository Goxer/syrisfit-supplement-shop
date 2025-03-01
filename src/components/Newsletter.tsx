
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setIsSubmitted(true);
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="bg-syris-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Únete a la comunidad SyrisFit
            </h2>
            <p className="text-white/80 mb-6">
              Suscríbete para recibir consejos exclusivos, ofertas especiales y 
              novedades sobre nuestros suplementos. ¡Te regalamos un 10% de descuento 
              en tu primera compra!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu correo electrónico"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white h-12 w-full"
                      required
                      disabled={isSubmitted}
                    />
                    {isSubmitted && (
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Check className="h-5 w-5 text-green-400" />
                      </span>
                    )}
                  </div>
                  <Button 
                    type="submit"
                    className={`bg-white text-syris-primary hover:bg-white/90 h-12 ${isSubmitted ? 'bg-green-500 text-white hover:bg-green-500' : ''}`}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? 'Suscrito!' : 'Suscribirse'}
                  </Button>
                </form>
              </div>
            </div>
            <p className="text-sm text-white/60 mt-3">
              Al suscribirte, aceptas nuestra política de privacidad. Puedes darte de baja en cualquier momento.
            </p>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute -left-8 -top-8 w-16 h-16 bg-syris-secondary rounded-full opacity-30"></div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-syris-tertiary rounded-full opacity-30"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-syris-secondary flex items-center justify-center rounded-full">
                  <span className="text-white font-bold text-lg">10%</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Descuento en tu primera compra</h3>
                  <p className="text-white/80 text-sm">Exclusivo para nuevos suscriptores</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-syris-secondary mt-0.5" />
                  <span>Acceso a ofertas exclusivas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-syris-secondary mt-0.5" />
                  <span>Consejos de nutrición y entrenamiento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-syris-secondary mt-0.5" />
                  <span>Conoce nuestros nuevos productos antes que nadie</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-syris-secondary mt-0.5" />
                  <span>Contenido exclusivo para miembros</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
