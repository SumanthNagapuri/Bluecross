import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import MultiLang from "@/components/MultiLang";
import AppStore from "@/components/AppStore";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <MultiLang />
      <AppStore />
      <Footer />
    </main>
  );
}
