import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Microscope, Truck, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      title: "Expert Consultation",
      description: "Get personalized advice from certified agronomists for optimal crop management and problem-solving.",
      icon: <Users className="h-8 w-8" />,
      features: ["Certified Agronomists", "On-site Visits", "Crop Assessment", "Treatment Plans"]
    },
    {
      id: 2,
      title: "Soil & Plant Testing",
      description: "Comprehensive laboratory analysis to determine nutrient levels and disease diagnosis.",
      icon: <Microscope className="h-8 w-8" />,
      features: ["Soil Analysis", "Plant Disease ID", "Nutrient Testing", "Recommendations"]
    },
    {
      id: 3,
      title: "Product Delivery",
      description: "Fast and reliable delivery of agrochemicals directly to your farm or location.",
      icon: <Truck className="h-8 w-8" />,
      features: ["Same Day Delivery", "Bulk Orders", "Nationwide Coverage", "Safe Handling"]
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Round-the-clock technical support for urgent agricultural issues and emergencies.",
      icon: <Phone className="h-8 w-8" />,
      features: ["Emergency Support", "Technical Hotline", "WhatsApp Support", "Expert Guidance"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond products, we offer comprehensive agricultural services to ensure your farming success. 
            Our expert team is dedicated to supporting every aspect of your agricultural journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300"
                  >
                    <div className="text-green-600 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-lg px-8 py-6">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
