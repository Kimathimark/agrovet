import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout, Shield, Users, Package, Star, Play, Pause, Volume2, VolumeX, Wheat, Droplets, Tractor, Award, Truck, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Array of beautiful agricultural videos with excellent ambience
  const agrovetVideos = [
    {
      src: "https://videos.pexels.com/video-files/9088734/9088734-sd_960_540_30fps.mp4",
      poster: "https://images.pexels.com/photos/9088734/pexels-photo-9088734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Professional Agro-Chemical Application",
      description: "Expert farmers using quality pesticides & fungicides",
      category: "Crop Protection Chemicals",
      ambience: "Professional farming with precision application"
    },
    {
      src: "https://videos.pexels.com/video-files/26843952/12020689_640_360_50fps.mp4",
      poster: "https://images.pexels.com/photos/26843952/pexels-photo-26843952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Premium Livestock Care",
      description: "Healthy cattle thriving with quality veterinary nutrition",
      category: "Veterinary Products",
      ambience: "Peaceful pastoral farming with healthy livestock"
    },
    {
      src: "https://videos.pexels.com/video-files/29696293/12770827_640_360_30fps.mp4",
      poster: "https://images.pexels.com/photos/29696293/pexels-photo-29696293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Golden Hour Agriculture",
      description: "Beautiful farming landscapes at sunset",
      category: "Sustainable Farming",
      ambience: "Stunning golden hour agricultural beauty"
    },
    {
      src: "https://videos.pexels.com/video-files/7332202/7332202-sd_960_540_25fps.mp4",
      poster: "https://images.pexels.com/photos/7332202/pexels-photo-7332202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Modern Greenhouse Technology",
      description: "Advanced protected cultivation with optimal nutrition",
      category: "Foliar Fertilizers",
      ambience: "High-tech agricultural innovation"
    },
    {
      src: "https://videos.pexels.com/video-files/13125028/13125028-sd_426_240_25fps.mp4",
      poster: "https://images.pexels.com/photos/13125028/pexels-photo-13125028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Modern Farming Equipment",
      description: "State-of-the-art tractors and agricultural machinery",
      category: "Agricultural Services",
      ambience: "Powerful modern farming in action"
    }
  ];

  const currentVideo = agrovetVideos[currentVideoIndex];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-start video when component mounts
  useEffect(() => {
    const startVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay prevented by browser');
        }
      }
    };

    const timer = setTimeout(startVideo, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        setIsPlaying(false);
        // Auto advance to next video when current one ends
        setTimeout(() => {
          setCurrentVideoIndex((prev) => (prev + 1) % agrovetVideos.length);
        }, 1000);
      };
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, [currentVideoIndex]);

  // Auto-cycle through videos every 10 seconds for better ambience
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % agrovetVideos.length);
    }, 12000); // Longer duration for better viewing experience
    return () => clearInterval(interval);
  }, []);

  // Auto-start new video when changing
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const startNewVideo = async () => {
        try {
          await videoRef.current?.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay prevented');
        }
      };
      const timer = setTimeout(startNewVideo, 500);
      return () => clearTimeout(timer);
    }
  }, [currentVideoIndex]);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % agrovetVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + agrovetVideos.length) % agrovetVideos.length);
  };

  return (
    <>
      {/* Opening Agricultural Image Section */}
      <section className="relative h-64 sm:h-80 bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/17903068/pexels-photo-17903068.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        ></div>
        <div className="absolute inset-0 bg-green-900/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-yellow-400 mr-3" />
                <span className="text-xl sm:text-2xl font-bold">Premium Agricultural Solutions</span>
                <Award className="h-8 w-8 text-yellow-400 ml-3" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-shadow-lg">
                Leading Agricultural Distribution in Kenya
              </h1>
              <p className="text-lg sm:text-xl text-green-100 leading-relaxed">
                Your trusted partner for comprehensive farming solutions across East Africa
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-16 sm:w-32 h-16 sm:h-32 border-2 border-green-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 sm:w-24 h-12 sm:h-24 border-2 border-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-10 sm:w-20 h-10 sm:h-20 border-2 border-green-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-60 left-1/2 w-8 sm:w-16 h-8 sm:h-16 border-2 border-green-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Floating Agriculture Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-16 sm:right-32 text-green-300 hidden sm:block"
          >
            <Wheat className="h-8 sm:h-16 w-8 sm:w-16" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [20, -20, 20],
              rotate: [0, -3, 0, 3, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 right-8 sm:right-16 text-green-400"
          >
            <Tractor className="h-6 sm:h-12 w-6 sm:w-12" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              x: [-5, 5, -5]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-48 left-16 sm:left-32 text-green-500 hidden sm:block"
          >
            <Droplets className="h-5 sm:h-10 w-5 sm:w-10" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 pt-8 sm:pt-12 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="inline-flex items-center bg-green-100 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                  <Truck className="h-3 sm:h-4 w-3 sm:w-4 text-green-600 mr-2" />
                  <span className="text-xs sm:text-sm font-medium text-green-800">Leading Agricultural Distributor</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="block text-green-600">Mutuchem Enterprises</span>
                  <span className="block text-gray-800">Limited</span>
                </h1>
                <div className="mt-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                    A leading distributor of <span className="text-green-600 font-semibold">agro-chemicals</span> such as{" "}
                    <span className="text-red-600 font-semibold">Insecticides</span>,{" "}
                    <span className="text-green-600 font-semibold">Fungicides</span>,{" "}
                    <span className="text-green-600 font-semibold">Herbicides</span>,{" "}
                    <span className="text-yellow-600 font-semibold">Foliar Fertilizers</span> and{" "}
                    <span className="text-purple-600 font-semibold">veterinary products</span>.
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed"
              >
                Empowering farmers across Kenya with premium agricultural solutions. From crop protection to
                animal health, we provide comprehensive products and expert guidance for sustainable farming success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 agriculture-shadow-lg group">
                  <Link to="/products">
                    <Package className="mr-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:animate-bounce" />
                    Browse Catalogue
                    <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 group">
                  <Link to="/agronomists">
                    <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:animate-pulse" />
                    Consult Expert
                  </Link>
                </Button>
              </motion.div>

              {/* Product Categories Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 sm:pt-8"
              >
                <motion.div
                  className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-red-600 mb-2 flex justify-center">
                    <Sprout className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-semibold text-gray-800">Insecticides</div>
                  <div className="text-xs text-gray-600">Pest Control</div>
                </motion.div>
                <motion.div
                  className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-green-600 mb-2 flex justify-center">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-semibold text-gray-800">Fungicides</div>
                  <div className="text-xs text-gray-600">Disease Control</div>
                </motion.div>
                <motion.div
                  className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-green-600 mb-2 flex justify-center">
                    <Wheat className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-semibold text-gray-800">Herbicides</div>
                  <div className="text-xs text-gray-600">Weed Control</div>
                </motion.div>
                <motion.div
                  className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-yellow-600 mb-2 flex justify-center">
                    <Droplets className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-semibold text-gray-800">Fertilizers</div>
                  <div className="text-xs text-gray-600">Plant Nutrition</div>
                </motion.div>
              </motion.div>

              {/* Company Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 agriculture-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base text-center">Our Impact</h3>
                <div className="grid grid-cols-3 gap-4 sm:gap-8">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600">500+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Quality Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">10K+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Satisfied Farmers</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Video and Agricultural Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Main Agricultural Video */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl agriculture-shadow-lg group">
                <div className="aspect-[16/9] relative">
                  <video
                    ref={videoRef}
                    key={currentVideoIndex}
                    className="w-full h-full object-cover transition-all duration-1000 filter brightness-105 contrast-105"
                    poster={currentVideo.poster}
                    muted={isMuted}
                    loop
                    autoPlay
                    playsInline
                    preload="auto"
                  >
                    <source src={currentVideo.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Enhanced video overlay for better ambience */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Video Controls */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={togglePlay}
                      className="w-16 sm:w-20 h-16 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:bg-white/30 transition-all duration-300 group"
                    >
                      {isPlaying ? (
                        <Pause className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                      ) : (
                        <Play className="h-6 sm:h-8 w-6 sm:w-8 text-white ml-1" />
                      )}
                    </motion.button>
                  </div>

                  {/* Video Navigation Controls */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={prevVideo}
                      className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                    >
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      onClick={nextVideo}
                      className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                    >
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4 text-white" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>
                  
                  {/* Enhanced Overlay Content - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                      className="max-w-lg"
                    >
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-flex items-center px-3 py-1.5 bg-green-600/95 backdrop-blur-sm text-white text-xs rounded-full font-bold shadow-lg border border-green-400/30">
                          <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                          {currentVideo.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="mb-4">
                        <h3 className="font-bold text-base sm:text-lg mb-2 text-white drop-shadow-lg leading-tight">
                          {currentVideo.title}
                        </h3>
                        <p className="text-sm text-white/95 mb-2 drop-shadow-md leading-relaxed">
                          {currentVideo.description}
                        </p>
                        <p className="text-xs text-green-200/90 italic drop-shadow-md">
                          🌾 {currentVideo.ambience}
                        </p>
                      </div>

                      {/* Controls & Navigation */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {/* Video Dots */}
                          <div className="flex items-center space-x-1">
                            {agrovetVideos.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentVideoIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                  index === currentVideoIndex
                                    ? 'bg-white scale-125 shadow-lg ring-2 ring-green-400/50'
                                    : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                                }`}
                              />
                            ))}
                          </div>

                          {/* Auto-play indicator */}
                          <div className="text-xs text-white/70 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
                            🔄 Auto-play
                          </div>
                        </div>

                        {/* Video Counter */}
                        <div className="text-xs text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 font-medium">
                          {currentVideoIndex + 1} of {agrovetVideos.length}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Top Right Info */}
                  <div className="absolute top-4 right-4 text-right">
                    <div className="bg-black/40 backdrop-blur-sm text-white px-3 py-2 rounded-lg border border-white/20">
                      <div className="text-xs font-semibold mb-1">🎬 Agricultural Showcase</div>
                      <div className="text-xs text-green-200">Live from Kenya</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Service Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-white p-3 sm:p-4 rounded-2xl shadow-lg max-w-36 sm:max-w-48 agriculture-shadow"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Sprout className="h-4 sm:h-6 w-4 sm:w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-gray-900">Insecticides</h4>
                    <p className="text-xs text-gray-600">Pest control</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white p-3 sm:p-4 rounded-2xl shadow-lg max-w-36 sm:max-w-48 agriculture-shadow"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="h-4 sm:h-6 w-4 sm:w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-gray-900">Fungicides</h4>
                    <p className="text-xs text-gray-600">Disease protection</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-3 sm:p-4 rounded-2xl shadow-lg max-w-40 sm:max-w-56 agriculture-shadow"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-4 sm:h-6 w-4 sm:w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-gray-900">Expert Support</h4>
                    <p className="text-xs text-gray-600">Professional guidance</p>
                  </div>
                </div>
              </motion.div>

              {/* Subtle background enhancement */}
              <div className="absolute -z-10 -top-4 -left-4 -right-4 -bottom-4 bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-3xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-green-600 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
