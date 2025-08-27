import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Star, 
  Search, 
  GraduationCap, 
  Award, 
  Calendar,
  Users,
  MessageCircle,
  Clock,
  CheckCircle,
  XCircle,
  Filter,
  Grid,
  List
} from "lucide-react";
import { agronomists, getAgronomistsByLocation, searchAgronomists, getAvailableAgronomists } from "@/data/agronomists";
import SearchComponent from "@/components/common/SearchComponent";

const Agronomists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "Nairobi", label: "Nairobi" },
    { value: "Kiambu", label: "Kiambu" },
    { value: "Nakuru", label: "Nakuru" },
    { value: "Machakos", label: "Machakos" },
    { value: "Murang'a", label: "Murang'a" },
    { value: "Kajiado", label: "Kajiado" },
    { value: "Eldoret", label: "Eldoret" },
    { value: "Kisumu", label: "Kisumu" },
    { value: "Nyeri", label: "Nyeri" },
    { value: "Meru", label: "Meru" },
    { value: "Embu", label: "Embu" }
  ];

  const filteredAgronomists = useMemo(() => {
    let results = agronomists;

    // Apply search filter
    if (searchTerm) {
      results = searchAgronomists(searchTerm);
    }

    // Apply location filter
    if (selectedLocation !== "all") {
      results = results.filter(agronomist => 
        agronomist.location === selectedLocation || agronomist.counties.includes(selectedLocation)
      );
    }

    // Apply availability filter
    if (availabilityFilter !== "all") {
      results = results.filter(agronomist => 
        availabilityFilter === "available" ? agronomist.isAvailable : !agronomist.isAvailable
      );
    }

    // Sort results
    results.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return b.rating - a.rating;
        case "experience":
          return parseInt(b.experience) - parseInt(a.experience);
        case "consultations":
          return b.consultations - a.consultations;
        default:
          return 0;
      }
    });

    return results;
  }, [searchTerm, selectedLocation, availabilityFilter, sortBy]);

  const handleAgronomistSelect = (agronomist: any) => {
    const element = document.getElementById(`agronomist-${agronomist.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.classList.add('ring-2', 'ring-green-500');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-green-500');
      }, 3000);
    }
  };

  const handleCallAgronomist = (agronomist: any) => {
    // Make direct phone call
    window.location.href = `tel:${agronomist.phone}`;
  };

  const handleMessageAgronomist = (agronomist: any) => {
    // Give user choice between WhatsApp and Email
    const useWhatsApp = confirm(
      `Contact ${agronomist.name}:\n\nChoose communication method:\n- OK: WhatsApp Message\n- Cancel: Email`
    );

    if (useWhatsApp) {
      // Open WhatsApp with pre-filled message
      const message = `Hello ${agronomist.name}, I would like to schedule a consultation regarding agricultural advice. I found your profile on Mutuchem Enterprises website. Please let me know your availability.`;
      const phoneNumber = agronomist.phone.replace(/\s+/g, '').replace('+', '');
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      // Open email client
      const subject = encodeURIComponent('Agricultural Consultation Request');
      const body = encodeURIComponent(`Hello ${agronomist.name},

I would like to schedule a consultation regarding agricultural advice. I found your profile on Mutuchem Enterprises website.

Please let me know your availability for a consultation.

Best regards`);
      window.location.href = `mailto:${agronomist.email}?subject=${subject}&body=${body}`;
    }
  };

  const GridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredAgronomists.map((agronomist, index) => (
        <motion.div
          key={agronomist.id}
          id={`agronomist-${agronomist.id}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Availability Indicator */}
            <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${agronomist.isAvailable ? 'bg-green-500' : 'bg-red-500'} z-10`}></div>
            
            {/* Profile Header */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 text-center relative">
              {/* Photo Placeholder */}
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="text-white font-bold text-lg">{agronomist.avatar}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-1">{agronomist.name}</h3>
              <p className="text-sm text-green-700 font-medium">{agronomist.title}</p>
              
              {/* Rating and Stats */}
              <div className="flex items-center justify-center space-x-4 mt-3">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{agronomist.rating}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{agronomist.consultations}</span>
                </div>
              </div>
            </div>

            <CardContent className="p-4 space-y-3">
              {/* Specializations */}
              <div>
                <h5 className="text-xs font-semibold text-gray-700 mb-2">Specializations:</h5>
                <div className="flex flex-wrap gap-1">
                  {agronomist.specialization.slice(0, 2).map((spec) => (
                    <Badge key={spec} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                  {agronomist.specialization.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{agronomist.specialization.length - 2} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Key Info */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Experience:</span>
                  <span className="font-medium">{agronomist.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response:</span>
                  <span className="font-medium">{agronomist.responseTime}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center text-xs text-gray-600">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{agronomist.location}</span>
                {agronomist.counties.length > 1 && (
                  <span className="ml-1">+{agronomist.counties.length - 1} areas</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t">
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-xs"
                  disabled={!agronomist.isAvailable}
                  onClick={() => handleCallAgronomist(agronomist)}
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-green-600 text-green-600 text-xs"
                  onClick={() => handleMessageAgronomist(agronomist)}
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {filteredAgronomists.map((agronomist, index) => (
        <motion.div
          key={agronomist.id}
          id={`agronomist-${agronomist.id}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.02 }}
          whileHover={{ scale: 1.01 }}
        >
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                  <span className="text-white font-bold">{agronomist.avatar}</span>
                  <div className={`absolute top-1 right-1 w-3 h-3 rounded-full border-2 border-white ${agronomist.isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>

                {/* Main Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{agronomist.name}</h3>
                      <p className="text-green-600 font-medium">{agronomist.title}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{agronomist.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">{agronomist.experience}</div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        disabled={!agronomist.isAvailable}
                        onClick={() => handleCallAgronomist(agronomist)}
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-600 text-green-600"
                        onClick={() => handleMessageAgronomist(agronomist)}
                      >
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 mt-3 line-clamp-2">{agronomist.bio}</p>

                  {/* Specializations and Details */}
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-xs font-semibold text-gray-700 mb-1">Specializations:</h5>
                      <div className="flex flex-wrap gap-1">
                        {agronomist.specialization.map((spec) => (
                          <Badge key={spec} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-xs font-semibold text-gray-700 mb-1">Service Areas:</h5>
                      <div className="flex items-center text-xs text-gray-600">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{agronomist.counties.slice(0, 3).join(", ")}</span>
                        {agronomist.counties.length > 3 && <span> +{agronomist.counties.length - 3} more</span>}
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center space-x-6 mt-4 text-xs text-gray-600">
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      <span>{agronomist.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      <span>{agronomist.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Response: {agronomist.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          ></div>
          <div className="absolute inset-0 bg-green-900/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Expert Agronomists
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Connect with certified agricultural experts across Kenya. Get personalized advice, 
                on-site consultations, and professional guidance for your farming success.
              </p>
              <div className="max-w-md mx-auto">
                <SearchComponent 
                  placeholder="Search agronomists by name or specialization..."
                  onProductSelect={handleAgronomistSelect}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600">{agronomists.length}</div>
                <div className="text-sm text-gray-600">Total Experts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">{getAvailableAgronomists().length}</div>
                <div className="text-sm text-gray-600">Available Now</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">{agronomists.reduce((sum, a) => sum + a.consultations, 0)}</div>
                <div className="text-sm text-gray-600">Total Consultations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">15</div>
                <div className="text-sm text-gray-600">Counties Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">4.7</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-6 bg-green-50 border-b">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-green-800">Need Immediate Agricultural Help?</h3>
              <p className="text-sm text-green-700">Contact our expert agronomists directly</p>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700"
              >
                <a href="tel:+254705824633">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Line
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                onClick={() => {
                  const message = "I need urgent agricultural consultation. Please connect me with an available agronomist.";
                  const whatsappUrl = `https://wa.me/254705824633?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-6 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4 items-center">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location.value} value={location.value}>
                        {location.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="busy">Busy</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="experience">Experience</SelectItem>
                    <SelectItem value="consultations">Consultations</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {filteredAgronomists.length} of {agronomists.length} experts
                </span>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agronomists Grid/List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {viewMode === "grid" ? <GridView /> : <ListView />}

            {/* No Results */}
            {filteredAgronomists.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 mb-4">
                  <Users className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No agronomists found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedLocation("all");
                  setAvailabilityFilter("all");
                }}>
                  Clear filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Need Immediate Consultation?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Our expert agronomists are available for emergency consultations and urgent farm issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Hotline: +254 700 123 456
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Agronomists;
