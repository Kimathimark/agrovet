import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F76d68dffceac43b9b1efa932a4111dda%2F84627cb917354966b9efb5724fbdf41b?format=webp&width=800"
                alt="Mutuchem Enterprises Limited Logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold">Mutuchem Enterprises Limited</span>
            </div>
            <p className="text-green-100 mb-4">
              A leading distributor of agro-chemicals such as Insecticides, Fungicides, Herbicides, Foliar Fertilizers and veterinary products.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-green-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-green-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-green-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-green-100 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-green-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/agronomists" className="text-green-100 hover:text-white transition-colors">Agronomists</Link></li>
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=insecticides" className="text-green-100 hover:text-white transition-colors">Insecticides</Link></li>
              <li><Link to="/products?category=fungicides" className="text-green-100 hover:text-white transition-colors">Fungicides</Link></li>
              <li><Link to="/products?category=herbicides" className="text-green-100 hover:text-white transition-colors">Herbicides</Link></li>
              <li><Link to="/products?category=fertilizers" className="text-green-100 hover:text-white transition-colors">Foliar Fertilizers</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <a href="tel:+254705824633" className="text-green-100 hover:text-white transition-colors">
                  0705 824 633
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <a href="mailto:info@mutuchemagrikenya.com" className="text-green-100 hover:text-white transition-colors">
                  info@mutuchemagrikenya.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <a href="mailto:mutuchem@yahoo.com" className="text-green-100 hover:text-white transition-colors">
                  mutuchem@yahoo.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-green-100">P.O. BOX 11611-0400, Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-green-800 mt-8 pt-8 text-center"
        >
          <p className="text-green-100">
            © 2024 Mutuchem Enterprises Limited. All rights reserved. | Leading Agricultural Solutions
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
