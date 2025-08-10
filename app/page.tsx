import { Navbar } from "@/components/ui/Navbar";
import HeroSection from "@/components/Hero"; 
import TransitionSection from "@/components/TransitionSection"; 
import PlaybookSection from "@/components/PlaybookSection"; 
import ComingSoonSection from "@/components/ComingSoonSection";
import JoinMovementSection from "@/components/JoinMovementSection"
import Lotto from '@/components/Lotto';
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <TransitionSection /> 
      <PlaybookSection />
      <ComingSoonSection /> 
      <JoinMovementSection />
      <Lotto />
      <Footer />
    </main>
  );
}