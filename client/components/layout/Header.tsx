import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf, Phone, Search, ChevronDown, Heart, User, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SearchComponent from "@/components/common/SearchComponent";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [favoriteCount] = useState(5); // Demo favorite count
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { 
      name: "Products", 
      path: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "Insecticides", path: "/products?category=insecticides" },
        { name: "Fungicides", path: "/products?category=fungicides" },
        { name: "Herbicides", path: "/products?category=herbicides" },
        { name: "Foliar Fertilizers", path: "/products?category=fertilizers" },
        { name: "Veterinary Products", path: "/products?category=veterinary" }
      ]
    },
    { name: "Services", path: "/services" },
    { name: "Agronomists", path: "/agronomists" },
    { name: "About Us", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg agriculture-shadow border-b border-green-100'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >

        {/* Main Header */}
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 min-w-0"
            >
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F76d68dffceac43b9b1efa932a4111dda%2F84627cb917354966b9efb5724fbdf41b?format=webp&width=800"
                  alt="Mutuchem Enterprises Limited Logo"
                  className="h-5 sm:h-6 md:h-8 w-auto"
                />
              </div>
              <div className="min-w-0">
                <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-green-800 whitespace-nowrap">Mutuchem</span>
                <div className="text-xs text-green-600 font-medium hidden sm:block whitespace-nowrap">Enterprises Limited</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative group"
                >
                  <Link
                    to={item.path}
                    className={`font-medium transition-all duration-200 relative flex items-center py-2 ${
                      isActive(item.path)
                        ? 'text-green-600'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3" />}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-200 ${
                      isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:flex items-center space-x-4"
            >
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-green-600 transition-colors touch-target relative"
              >
                <Search className="h-5 w-5" />
              </button>
              
              <button className="p-2 text-gray-600 hover:text-green-600 transition-colors touch-target relative">
                <Heart className="h-5 w-5" />
                {favoriteCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                    {favoriteCount}
                  </Badge>
                )}
              </button>

              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 btn-mobile group"
              >
                <a href="tel:+254705824633">
                  <Phone className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Call Now
                </a>
              </Button>
            </motion.div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-1 sm:space-x-2 lg:hidden">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 sm:p-3 text-gray-600 hover:text-green-600 transition-colors touch-target relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-green-50"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <button className="p-2 sm:p-3 text-gray-600 hover:text-green-600 transition-colors touch-target relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-green-50">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                {favoriteCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                    {favoriteCount}
                  </Badge>
                )}
              </button>

              <Button
                variant="ghost"
                size="sm"
                className="touch-target min-w-[44px] min-h-[44px] p-2 sm:p-3 rounded-lg hover:bg-green-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </Button>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="hidden lg:block border-t border-gray-200 py-4"
            >
              <div className="max-w-2xl mx-auto px-4">
                <SearchComponent
                  placeholder="Search products, pests, diseases, agronomists..."
                  className="w-full"
                />
              </div>
            </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm bg-white z-50 lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-4 sm:p-6 h-full flex flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-6 sm:mb-8 pt-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F76d68dffceac43b9b1efa932a4111dda%2F84627cb917354966b9efb5724fbdf41b?format=webp&width=800"
                      alt="Mutuchem Enterprises Limited Logo"
                      className="h-6 w-auto"
                    />
                    <div>
                      <span className="text-lg font-bold text-green-800">Mutuchem</span>
                      <div className="text-xs text-green-600">Enterprises Limited</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-green-600 transition-colors touch-target min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100"
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>

                {/* Mobile User Actions */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <button className="relative">
                      <Heart className="h-5 w-5 text-green-600" />
                      {favoriteCount > 0 && (
                        <Badge className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                          {favoriteCount}
                        </Badge>
                      )}
                    </button>
                  </div>
                </div>

                {/* Mobile Search */}
                <div className="mb-6 sm:mb-8">
                  <SearchComponent
                    placeholder="Search products..."
                    className="w-full"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-1 mb-6 sm:mb-8 flex-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`block py-3 sm:py-4 px-3 sm:px-4 rounded-xl font-medium transition-all duration-200 text-base sm:text-lg ${
                          isActive(item.path)
                            ? 'bg-green-50 text-green-600 border-l-4 border-green-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      
                      {/* Mobile Dropdown Items */}
                      {item.hasDropdown && item.dropdownItems && isActive(item.path) && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block py-2 px-4 text-sm text-gray-600 hover:text-green-600 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-gray-200 mt-auto">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Contact Us</p>
                      <a href="tel:+254705824633" className="text-sm text-green-600 hover:text-green-700 transition-colors font-medium">
                        0705 824 633
                      </a>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 rounded-xl text-base touch-target"
                  >
                    <a href="tel:+254705824633" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>

                {/* Mobile Footer */}
                <div className="mt-4 sm:mt-6">
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    © 2024 Mutuchem Enterprises Limited.<br className="sm:hidden" />
                    <span className="hidden sm:inline"> </span>Quality Agricultural Solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-14 sm:top-16 left-0 right-0 bg-white border-b border-gray-200 p-3 sm:p-4 z-40 lg:hidden shadow-lg"
          >
            <SearchComponent 
              placeholder="Search products, pests, diseases..."
              className="w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;
