
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, CreditCard, Truck, Clock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-black text-white">
      <div className="max-w-7xl mx-auto pt-16 px-6">
        {/* Shipping & Payment Info Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <Truck className="h-8 w-8 text-white p-1.5 bg-white/10 rounded-full" />
            <div>
              <h3 className="font-semibold">Envío por Correos CR</h3>
              <p className="text-sm text-gray-400">A todo Costa Rica</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="h-8 w-8 text-white p-1.5 bg-white/10 rounded-full" />
            <div>
              <h3 className="font-semibold">Entrega en 72h</h3>
              <p className="text-sm text-gray-400">Desde la compra</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CreditCard className="h-8 w-8 text-white p-1.5 bg-white/10 rounded-full" />
            <div>
              <h3 className="font-semibold">Pago Seguro</h3>
              <p className="text-sm text-gray-400">Múltiples métodos</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ShieldCheck className="h-8 w-8 text-white p-1.5 bg-white/10 rounded-full" />
            <div>
              <h3 className="font-semibold">Garantía de Calidad</h3>
              <p className="text-sm text-gray-400">Productos Originales</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">SYRISFIT</h2>
            <p className="text-gray-300 mb-6">
              Suplementos premium para potenciar tu rendimiento y bienestar. Entrega a domicilio en todo Costa Rica en 72 horas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <a href="/#productos" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Productos
                </a>
              </li>
              <li>
                <a href="/#categorias" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Categorías
                </a>
              </li>
              <li>
                <a href="/#nosotros" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-white mt-0.5" />
                <span className="text-gray-300">
                  San José, Costa Rica<br />
                  CP 10101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-white" />
                <a href="tel:+50622123456" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +506 2212 3456
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-white" />
                <a href="mailto:info@syrisfit.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@syrisfit.com
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Métodos de Pago</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/10 rounded-md p-2 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png" 
                     alt="Mastercard" 
                     className="h-8 object-contain" />
              </div>
              <div className="bg-white/10 rounded-md p-2 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" 
                     alt="Visa" 
                     className="h-8 object-contain" />
              </div>
              <div className="bg-white/10 rounded-md p-2 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" 
                     alt="PayPal" 
                     className="h-8 object-contain" />
              </div>
              <div className="bg-white/10 rounded-md p-2 flex items-center justify-center">
                <img src="https://www.baccredomatic.com/sites/default/files/LogoBAC_0.png" 
                     alt="BAC" 
                     className="h-8 object-contain" />
              </div>
              <div className="bg-white/10 rounded-md p-2 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" 
                     alt="American Express" 
                     className="h-8 object-contain" />
              </div>
              <div className="bg-white/10 rounded-md p-2 flex items-center justify-center text-center text-xs text-white">
                Transferencia Bancaria
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} SyrisFit. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
