import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, X, Package, Star, ArrowRight, TrendingUp, Clock, Filter } from "lucide-react";
import { searchProducts, Product } from "@/data/products";
import { searchAgronomists } from "@/data/agronomists";
import { Link, useNavigate } from "react-router-dom";

interface SearchComponentProps {
  placeholder?: string;
  className?: string;
  onProductSelect?: (product: Product) => void;
}

const SearchComponent = ({ 
  placeholder = "Search products, pests, diseases, agronomists...", 
  className = "",
  onProductSelect 
}: SearchComponentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<{
    products: Product[];
    agronomists: any[];
    categories: string[];
  }>({ products: [], agronomists: [], categories: [] });
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches] = useState([
    "insecticides", "fungicides", "maize fertilizer", "pest control", 
    "herbicides", "crop protection", "soil testing", "organic farming"
  ]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('agrovet-recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      if (searchTerm.trim()) {
        setIsSearching(true);
        // Simulate API delay
        setTimeout(() => {
          const productResults = searchProducts(searchTerm);
          const agronomistResults = searchAgronomists(searchTerm);
          const categoryResults = getCategoryMatches(searchTerm);
          
          setSearchResults({
            products: productResults.slice(0, 4),
            agronomists: agronomistResults.slice(0, 3),
            categories: categoryResults
          });
          setShowResults(true);
          setIsSearching(false);
        }, 300);
      } else {
        setSearchResults({ products: [], agronomists: [], categories: [] });
        setShowResults(false);
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(delayedSearch);
  }, [searchTerm]);

  const getCategoryMatches = (term: string) => {
    const categories = ["insecticides", "fungicides", "herbicides", "fertilizers"];
    return categories.filter(cat => 
      cat.toLowerCase().includes(term.toLowerCase())
    );
  };

  const handleSearch = (term: string) => {
    if (term.trim()) {
      // Add to recent searches
      const updatedRecent = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5);
      setRecentSearches(updatedRecent);
      localStorage.setItem('agrovet-recent-searches', JSON.stringify(updatedRecent));
      
      // Navigate to products page with search
      navigate(`/products?search=${encodeURIComponent(term)}`);
      setShowResults(false);
      setSearchTerm("");
    }
  };

  const handleProductClick = (product: Product) => {
    if (onProductSelect) {
      onProductSelect(product);
    } else {
      navigate(`/products?search=${encodeURIComponent(product.name)}`);
    }
    setShowResults(false);
    setSearchTerm("");
  };

  const handleAgronomistClick = (agronomist: any) => {
    navigate(`/agronomists?search=${encodeURIComponent(agronomist.name)}`);
    setShowResults(false);
    setSearchTerm("");
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults({ products: [], agronomists: [], categories: [] });
    setShowResults(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 pr-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 h-12 text-base"
          onFocus={() => !searchTerm && setShowResults(true)}
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        {isSearching && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-green-600 border-t-transparent"></div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-hidden"
          >
            {searchTerm ? (
              <>
                {/* Search Results */}
                <div className="max-h-80 overflow-y-auto">
                  {/* Products Section */}
                  {searchResults.products.length > 0 && (
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm">Products</h4>
                        <Badge variant="secondary" className="text-xs">
                          {searchResults.products.length} found
                        </Badge>
                      </div>
                      {searchResults.products.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                          onClick={() => handleProductClick(product)}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Package className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-gray-900 truncate text-sm">{product.name}</h5>
                            <p className="text-xs text-gray-600 line-clamp-1">{product.description}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                <span className="text-xs text-gray-500">{product.rating}</span>
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Agronomists Section */}
                  {searchResults.agronomists.length > 0 && (
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm">Agronomists</h4>
                        <Badge variant="secondary" className="text-xs">
                          {searchResults.agronomists.length} found
                        </Badge>
                      </div>
                      {searchResults.agronomists.map((agronomist, index) => (
                        <motion.div
                          key={agronomist.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                          onClick={() => handleAgronomistClick(agronomist)}
                        >
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 font-semibold text-sm">{agronomist.avatar}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-gray-900 truncate text-sm">{agronomist.name}</h5>
                            <p className="text-xs text-gray-600">{agronomist.title}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {agronomist.location}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                <span className="text-xs text-gray-500">{agronomist.rating}</span>
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Categories Section */}
                  {searchResults.categories.length > 0 && (
                    <div className="p-4 border-b border-gray-100">
                      <h4 className="font-semibold text-gray-900 text-sm mb-3">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {searchResults.categories.map((category) => (
                          <Button
                            key={category}
                            variant="outline"
                            size="sm"
                            className="text-xs h-8"
                            onClick={() => navigate(`/products?category=${category}`)}
                          >
                            <Filter className="h-3 w-3 mr-1" />
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* No Results */}
                  {searchResults.products.length === 0 && 
                   searchResults.agronomists.length === 0 && 
                   searchResults.categories.length === 0 && 
                   !isSearching && (
                    <div className="p-6 text-center">
                      <Package className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                      <h4 className="font-medium text-gray-900 mb-2">No results found</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Try searching for specific products, pests, or agronomists
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate('/products')}
                      >
                        Browse all products
                      </Button>
                    </div>
                  )}
                </div>

                {/* View All Results */}
                {(searchResults.products.length > 0 || searchResults.agronomists.length > 0) && (
                  <div className="p-3 bg-gray-50 border-t">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleSearch(searchTerm)}
                    >
                      View all results for "{searchTerm}"
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center mb-3">
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <h4 className="font-semibold text-gray-900 text-sm">Recent Searches</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                          className="text-xs h-8 text-gray-600 hover:text-green-600"
                          onClick={() => handleSearch(search)}
                        >
                          {search}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Searches */}
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                    <h4 className="font-semibold text-gray-900 text-sm">Popular Searches</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="text-xs h-8 text-gray-600 hover:text-green-600"
                        onClick={() => handleSearch(search)}
                      >
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchComponent;
