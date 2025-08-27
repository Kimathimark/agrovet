import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Truck, 
  Leaf, 
  CheckCircle,
  MapPin,
  Calendar,
  Camera,
  Tractor,
  Sprout,
  Shield
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "David Kamau",
      position: "Founder & CEO",
      bio: "Agricultural engineer with 20+ years in agribusiness and sustainable farming solutions. Passionate about transforming Kenyan agriculture.",
      avatar: "DK",
      background: "from-green-500 to-green-700",
      imageUrl: "https://images.pexels.com/photos/29782068/pexels-photo-29782068.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sarah Njeri",
      position: "Operations Director",
      bio: "Expert in supply chain management and agricultural product distribution across East Africa. Ensures seamless operations nationwide.",
      avatar: "SN",
      background: "from-green-500 to-green-700",
      imageUrl: "https://images.pexels.com/photos/15876334/pexels-photo-15876334.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Michael Otieno",
      position: "Chief Agronomist",
      bio: "PhD in Plant Pathology with extensive experience in crop protection and integrated pest management. Leads our technical team.",
      avatar: "MO",
      background: "from-purple-500 to-purple-700",
      imageUrl: "https://images.pexels.com/photos/3912470/pexels-photo-3912470.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Grace Wanjala",
      position: "Customer Relations Manager",
      bio: "Passionate about farmer education and ensuring excellent customer service and support. Your satisfaction is our priority.",
      avatar: "GW",
      background: "from-pink-500 to-pink-700",
      imageUrl: "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "John Mwamba",
      position: "Quality Assurance Manager",
      bio: "Ensures all products meet international standards and regulatory compliance requirements. Quality is never compromised.",
      avatar: "JM",
      background: "from-orange-500 to-orange-700",
      imageUrl: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Peter Kiprotich",
      position: "Field Operations Manager",
      bio: "Coordinates on-site services and manages our network of field agronomists across Kenya. Always in the field with farmers.",
      avatar: "PK",
      background: "from-indigo-500 to-indigo-700",
      imageUrl: "https://images.pexels.com/photos/17903068/pexels-photo-17903068.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const workGallery = [
    {
      id: 1,
      title: "Field Consultation Services",
      description: "Our expert agronomists providing on-site consultation to farmers about crop protection and pest management strategies.",
      location: "Kiambu County",
      category: "Field Work",
      imageUrl: "https://images.pexels.com/photos/20650097/pexels-photo-20650097.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Modern Greenhouse Operations",
      description: "Advanced greenhouse farming techniques for high-value crop production using our premium foliar fertilizers.",
      location: "Naivasha",
      category: "Technology",
      imageUrl: "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Product Application Training",
      description: "Training farmers on proper application techniques for maximum effectiveness and safety of our agricultural products.",
      location: "Nakuru County",
      category: "Training",
      imageUrl: "https://images.pexels.com/photos/17903068/pexels-photo-17903068.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Quality Testing Laboratory",
      description: "Our state-of-the-art laboratory facility where we conduct rigorous testing to ensure product quality and effectiveness.",
      location: "Nairobi Office",
      category: "Laboratory",
      imageUrl: "https://images.pexels.com/photos/3912470/pexels-photo-3912470.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Coffee Farm Management",
      description: "Specialized services for coffee plantations including disease prevention and yield optimization programs.",
      location: "Nyeri County",
      category: "Specialty Crops",
      imageUrl: "https://images.pexels.com/photos/7125420/pexels-photo-7125420.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Precision Agriculture",
      description: "Using drone technology and precision application techniques for efficient and targeted crop protection.",
      location: "Machakos County",
      category: "Technology",
      imageUrl: "https://images.pexels.com/photos/31935682/pexels-photo-31935682.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      title: "Farm Equipment Support",
      description: "Providing modern agricultural equipment and machinery support for enhanced farming efficiency.",
      location: "Laikipia County",
      category: "Equipment",
      imageUrl: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      title: "Farmer Success Stories",
      description: "Celebrating the success of farmers who have transformed their operations using our products and services.",
      location: "Various Counties",
      category: "Success",
      imageUrl: "https://images.pexels.com/photos/15876334/pexels-photo-15876334.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started as a small agricultural consultancy in Nairobi with a vision to transform Kenyan agriculture.",
      icon: <Sprout className="h-5 sm:h-6 w-5 sm:w-6" />
    },
    {
      year: "2017",
      title: "Product Distribution",
      description: "Began importing and distributing premium agrochemicals from leading international manufacturers.",
      icon: <Truck className="h-5 sm:h-6 w-5 sm:w-6" />
    },
    {
      year: "2019",
      title: "Regional Expansion",
      description: "Expanded operations to serve farmers across 10 counties with mobile agronomist services.",
      icon: <MapPin className="h-5 sm:h-6 w-5 sm:w-6" />
    },
    {
      year: "2021",
      title: "Digital Platform",
      description: "Launched digital platform for online consultations and product ordering.",
      icon: <Users className="h-5 sm:h-6 w-5 sm:w-6" />
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description: "Introduced eco-friendly product lines and sustainable farming training programs.",
      icon: <Leaf className="h-5 sm:h-6 w-5 sm:w-6" />
    },
    {
      year: "2024",
      title: "Innovation Center",
      description: "Opened state-of-the-art research facility for crop testing and product development.",
      icon: <Award className="h-5 sm:h-6 w-5 sm:w-6" />
    }
  ];

  const values = [
    {
      icon: <Target className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality products and services to our farming community."
    },
    {
      icon: <Heart className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Farmer-Centric",
      description: "Every decision we make is focused on improving the lives and livelihoods of farmers."
    },
    {
      icon: <Leaf className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Sustainability",
      description: "Promoting environmentally responsible farming practices for future generations."
    },
    {
      icon: <Users className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Community",
      description: "Building strong relationships and supporting agricultural communities across Kenya."
    }
  ];

  const achievements = [
    { icon: <Users className="h-5 sm:h-6 w-5 sm:w-6" />, number: "10,000+", label: "Farmers Served" },
    { icon: <MapPin className="h-5 sm:h-6 w-5 sm:w-6" />, number: "15", label: "Counties Covered" },
    { icon: <Award className="h-5 sm:h-6 w-5 sm:w-6" />, number: "500+", label: "Premium Products" },
    { icon: <Truck className="h-5 sm:h-6 w-5 sm:w-6" />, number: "24/7", label: "Support Available" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-12 sm:py-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1462892/pexels-photo-1462892.jpeg?auto=compress&cs=tinysrgb&w=1920')`
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                About Mutuchem Enterprises Limited
              </h1>
              <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto">
                Empowering Kenyan agriculture through innovation, expertise, and unwavering commitment 
                to farmer success since 2015.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-green-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Target className="h-6 sm:h-8 w-6 sm:w-8 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  To provide Kenyan farmers with access to premium agricultural products, expert knowledge, 
                  and innovative solutions that increase productivity and ensure sustainable farming practices.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-green-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Eye className="h-6 sm:h-8 w-6 sm:w-8 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  To be the leading agricultural solutions provider in East Africa, recognized for our 
                  innovation, expertise, and positive impact on farming communities.
                </p>
              </motion.div>

              {/* Purpose */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Purpose</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Transforming lives through agriculture by empowering farmers with the tools, knowledge, 
                  and support they need to thrive in an ever-changing agricultural landscape.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12 sm:py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Numbers that reflect our commitment to agricultural excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-green-600">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{achievement.number}</div>
                  <div className="text-sm sm:text-base text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Work Gallery */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Work in Action
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                See how we're making a difference in farms across Kenya.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {workGallery.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    {/* Real Work Image */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={work.imageUrl}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs">
                        {work.category}
                      </Badge>
                      
                      <div className="absolute bottom-3 right-3 flex items-center text-white text-xs bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {work.location}
                      </div>
                    </div>
                    
                    <CardContent className="p-3 sm:p-4">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors text-sm sm:text-base">
                        {work.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                        {work.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agricultural Showcase */}
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
                Transforming Agriculture Across Kenya
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From smallholder farms to commercial operations, we're proud to support agricultural excellence throughout the region.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <img
                  src="https://images.pexels.com/photos/33372318/pexels-photo-33372318.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Agricultural landscape"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Sustainable Farming</h3>
                  <p className="text-sm opacity-90">Environmental stewardship</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <img
                  src="https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern farming equipment"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Modern Technology</h3>
                  <p className="text-sm opacity-90">Advanced equipment</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg group md:col-span-2 lg:col-span-1"
              >
                <img
                  src="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Farmers at work"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Expert Guidance</h3>
                  <p className="text-sm opacity-90">Professional support</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <div className="text-green-600">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                The passionate experts behind AgroVet Pro's success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="h-48 sm:h-56 relative overflow-hidden">
                      <img 
                        src={member.imageUrl}
                        alt={`${member.name} - ${member.position}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      {/* Team Member Info Overlay */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                          {member.position}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4 sm:p-6">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Key milestones in our mission to transform Kenyan agriculture.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-green-200"></div>

              <div className="space-y-8 sm:space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'text-right pr-4 sm:pr-8' : 'text-left pl-4 sm:pl-8'}`}>
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center mb-3">
                            <div className="text-green-600 mr-2">
                              {milestone.icon}
                            </div>
                            <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                              {milestone.year}
                            </Badge>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-sm sm:text-base text-gray-600">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-green-600 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-green-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Join Our Agricultural Revolution
              </h2>
              <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Be part of the transformation that's shaping the future of Kenyan agriculture. 
                Together, we can achieve more.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.a
                  href="/products"
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center btn-mobile"
                >
                  <CheckCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Explore Products
                </motion.a>
                <motion.a
                  href="/agronomists"
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center btn-mobile"
                >
                  <Users className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Meet Our Experts
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
