import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Microscope, Truck, Phone, CheckCircle, Clock, MapPin, Star } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      id: 1,
      title: "Expert Agronomist Consultation",
      description: "Get personalized advice from certified agronomists for optimal crop management, disease diagnosis, and treatment planning.",
      icon: <Users className="h-12 w-12" />,
      color: "from-green-600 to-green-800",
      image: "https://images.pexels.com/photos/7176027/pexels-photo-7176027.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Certified Agronomists",
        "On-site Farm Visits",
        "Crop Health Assessment",
        "Customized Treatment Plans",
        "Pest & Disease Identification",
        "Soil Management Advice"
      ],
      duration: "2-4 hours"
    },
    {
      id: 2,
      title: "Laboratory Testing Services",
      description: "Comprehensive soil and plant analysis to determine nutrient levels, pH, disease diagnosis, and contamination testing.",
      icon: <Microscope className="h-12 w-12" />,
      color: "from-purple-600 to-purple-800",
      image: "https://images.pexels.com/photos/3912511/pexels-photo-3912511.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Soil Nutrient Analysis",
        "Plant Disease Diagnosis",
        "Water Quality Testing",
        "Pesticide Residue Testing",
        "pH & EC Testing",
        "Detailed Reports & Recommendations"
      ],
      duration: "3-5 days"
    },
    {
      id: 3,
      title: "Product Delivery Services",
      description: "Fast and reliable delivery of agrochemicals, fertilizers, and equipment directly to your farm or preferred location.",
      icon: <Truck className="h-12 w-12" />,
      color: "from-green-600 to-green-800",
      image: "https://images.pexels.com/photos/14203300/pexels-photo-14203300.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Same Day Delivery (Nairobi)",
        "Nationwide Coverage",
        "Bulk Order Discounts",
        "Safe Product Handling",
        "GPS Tracking",
        "Flexible Delivery Slots"
      ],
      duration: "Same day - 3 days"
    },
    {
      id: 4,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support for urgent agricultural issues, emergencies, and expert guidance.",
      icon: <Phone className="h-12 w-12" />,
      color: "from-red-600 to-red-800",
      image: "https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Emergency Hotline",
        "WhatsApp Support",
        "Video Call Consultations",
        "Multilingual Support",
        "Expert Technical Team",
        "Quick Response Guarantee"
      ],
      duration: "24/7 availability"
    }
  ];

  const additionalServices = [
    {
      title: "Crop Planning & Management",
      description: "Strategic planning for seasonal crops and sustainable farming practices.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Irrigation Advisory",
      description: "Water management solutions and irrigation system optimization.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Organic Certification Support",
      description: "Guidance and support for organic farming certification processes.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Farm Equipment Consultation",
      description: "Advice on farm machinery selection and maintenance.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Post-Harvest Solutions",
      description: "Storage, processing, and marketing guidance for farm produce.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Training & Workshops",
      description: "Educational programs on modern farming techniques and safety.",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  const serviceAreas = [
    { county: "Nairobi", response: "Same Day", coverage: "100%" },
    { county: "Kiambu", response: "1-2 Days", coverage: "95%" },
    { county: "Murang'a", response: "1-2 Days", coverage: "90%" },
    { county: "Machakos", response: "2-3 Days", coverage: "85%" },
    { county: "Kajiado", response: "2-3 Days", coverage: "80%" },
    { county: "Nakuru", response: "2-4 Days", coverage: "75%" }
  ];

  const handleBookService = (service: any) => {
    const message = `I would like to book ${service.title}. Please contact me to schedule an appointment.`;
    const phoneNumber = '+254705824633';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=1920')`
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
                Professional Agricultural Services
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Comprehensive agricultural support services designed to maximize your farming success. 
                From expert consultation to product delivery, we're here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional services tailored to meet your specific agricultural needs and challenges.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">What's Included:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration}
                        </div>
                        <Button
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleBookService(service)}
                        >
                          Book Service
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-lg text-gray-600">
                Extended support services to cover all aspects of your farming operation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="text-green-600 mt-1">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Service Coverage Areas
              </h2>
              <p className="text-lg text-gray-600">
                We provide services across multiple counties with varying response times.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.county}</h3>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-600">Response Time:</div>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {area.response}
                        </Badge>
                        <div className="text-sm text-gray-600 mt-2">
                          Coverage: <span className="font-semibold">{area.coverage}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your agricultural needs and discover how our services can help your farm thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +254 700 123 456
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Request Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
