
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-syris-dark text-white">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">SYRISFIT</h2>
            <p className="text-gray-300 mb-6">
              Suplementos premium de Costa Rica para potenciar tu rendimiento y bienestar.
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
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Productos
                </a>
              </li>
              <li>
                <a href="#categorias" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-syris-secondary mt-0.5" />
                <span className="text-gray-300">
                  San José, Costa Rica<br />
                  CP 10101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-syris-secondary" />
                <a href="tel:+50622123456" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +506 2212 3456
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-syris-secondary" />
                <a href="mailto:info@syrisfit.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@syrisfit.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Horario de Atención</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Lunes - Viernes:</span>
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sábado:</span>
                <span className="text-white">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Domingo:</span>
                <span className="text-white">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
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
