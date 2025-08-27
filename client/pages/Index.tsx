import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ServicesPreview from "@/components/home/ServicesPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <ServicesPreview />
    </Layout>
  );
};

export default Index;
