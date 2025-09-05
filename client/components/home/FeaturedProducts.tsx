import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Zap, Leaf, Shield, Sprout, Package, CheckCircle, Heart, Eye, BookOpen, Phone, Truck, Award, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // Real product images from agriculture/farming with category-specific themes
  const productImages = [
    "https://images.pexels.com/photos/17903068/pexels-photo-17903068.jpeg?auto=compress&cs=tinysrgb&w=800", // Insecticide - farmer spraying
    "https://images.pexels.com/photos/4087417/pexels-photo-4087417.jpeg?auto=compress&cs=tinysrgb&w=800", // Fungicide - plant protection
    "https://images.pexels.com/photos/20841301/pexels-photo-20841301.jpeg?auto=compress&cs=tinysrgb&w=800", // Herbicide - weed control
    "https://images.pexels.com/photos/31110992/pexels-photo-31110992.jpeg?auto=compress&cs=tinysrgb&w=800", // Fertilizer - nutrient feeding
    "https://images.pexels.com/photos/18051955/pexels-photo-18051955.jpeg?auto=compress&cs=tinysrgb&w=800", // Additional products
    "https://images.pexels.com/photos/9621275/pexels-photo-9621275.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/31935682/pexels-photo-31935682.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3912470/pexels-photo-3912470.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap": return <Zap className="h-5 sm:h-6 w-5 sm:w-6" />;
      case "Shield": return <Shield className="h-5 sm:h-6 w-5 sm:w-6" />;
      case "Leaf": return <Leaf className="h-5 sm:h-6 w-5 sm:w-6" />;
      case "Sprout": return <Sprout className="h-5 sm:h-6 w-5 sm:w-6" />;
      default: return <Package className="h-5 sm:h-6 w-5 sm:w-6" />;
    }
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-green-50 to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-green-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">Premium Quality Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Product Catalogue
          </h2>
          <p className="text-base sm:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of agricultural solutions. From crop protection to plant nutrition, 
            we distribute only the highest quality products for farming success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              // onHoverStart={() => setSelectedProduct(product.id)}
              onHoverEnd={() => setSelectedProduct(null)}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-white relative">
                {/* Quality Badge */}
                <div className="absolute top-2 left-2 z-20">
                  <Badge className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold">
                    QUALITY
                  </Badge>
                </div>

                {/* Product Image Section */}
                <div className="h-40 sm:h-48 relative overflow-hidden">
                  <img 
                    src={productImages[index % productImages.length]}
                    alt={`${product.name} - Premium agricultural product`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1">
                    <span className="text-xs font-medium text-gray-800">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                  </div>
                  
                  {/* Rating */}
                  {/* <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-800">{product.rating}</span>
                  </div> */}
                  
                  {/* Stock Status */}
                  {product.inStock && (
                    <div className="absolute bottom-3 right-3">
                      <Badge className="bg-green-500 text-white text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Available
                      </Badge>
                    </div>
                  )}

                  {/* Product Icon Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="text-white">
                      {getIcon(product.icon)}
                    </div>
                  </div>

                  {/* Quick Actions Overlay */}
                  <AnimatePresence>
                    {selectedProduct === product.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-green-600/90 flex items-center justify-center"
                      >
                        <div className="flex space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleFavorite(product.id)}
                            className={`p-3 rounded-full transition-colors ${
                              favorites.includes(product.id) 
                                ? 'bg-red-500 text-white' 
                                : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                          >
                            <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Eye className="h-5 w-5" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
                          >
                            <FileText className="h-5 w-5" />
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <CardHeader className="pb-2 p-3 sm:p-4">
                  <CardTitle className="text-base sm:text-lg group-hover:text-green-600 transition-colors line-height-tight">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 p-3 sm:p-4 pt-0">
                  {/* Active Ingredient/Composition */}
                  <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-2 sm:p-3">
                    <h5 className="text-xs font-semibold text-gray-700 mb-1">
                      {product.activeIngredient ? 'Active Ingredient:' : 'Composition:'}
                    </h5>
                    <p className="text-xs text-gray-600">
                      {product.activeIngredient || product.composition}
                    </p>
                  </div>

                  {/* Target Information */}
                  <div>
                    <h5 className="text-xs font-semibold text-gray-700 mb-2">Effective Against:</h5>
                    <div className="flex flex-wrap gap-1">
                      {(product.targetPests || product.targetDiseases || product.targetWeeds || product.benefits || []).slice(0, 2).map((target, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-green-200 text-green-700">
                          {target}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h5 className="text-xs font-semibold text-gray-700 mb-2">Key Benefits:</h5>
                    <div className="space-y-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Application Guide */}
                  <div className="bg-gradient-to-r from-green-50 to-green-50 rounded-lg p-2 sm:p-3">
                    <h5 className="text-xs font-semibold text-green-800 mb-1">Application Guide:</h5>
                    <p className="text-xs text-green-700 line-clamp-2">{product.usage}</p>
                  </div>

                  {/* Pack Sizes */}
                  <div>
                    <h5 className="text-xs font-semibold text-gray-700 mb-1">Available Packages:</h5>
                    <div className="flex flex-wrap gap-1">
                      {product.packSizes.slice(0, 3).map((size) => (
                        <Badge key={size} variant="secondary" className="text-xs bg-gray-100">
                          {size}
                        </Badge>
                      ))}
                      {product.packSizes.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.packSizes.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
                      >
                        <Phone className="h-4 w-4 text-green-600" />
                      </motion.button>
                      <Button size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-xs">
                        <FileText className="mr-1 h-3 w-3" />
                        Specs
                      </Button>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                      <BookOpen className="mr-1 h-3 w-3" />
                      View Details
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-3xl mx-auto agriculture-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400"></div>
            
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-2">
                <Truck className="h-6 w-6 text-green-600" />
                <Package className="h-6 w-6 text-green-600" />
                <Award className="h-6 w-6 text-green-600" />
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Need Product Information or Expert Guidance?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Our experienced team is ready to help you select the right agricultural solutions for your specific needs. 
              Browse our complete catalogue or consult with our experts for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 group">
                <Link to="/products">
                  <BookOpen className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Browse Full Catalogue
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white group">
                <Link to="/agronomists">
                  <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:animate-pulse" />
                  Consult Expert
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">15+</div>
                <div className="text-xs text-gray-600">Years Distribution</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">24/7</div>
                <div className="text-xs text-gray-600">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600">Quality</div>
                <div className="text-xs text-gray-600">Guaranteed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
