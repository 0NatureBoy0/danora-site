import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Subjects from "@/components/Subjects";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Subjects />
        <HowItWorks />
        <Features />
        <Plans />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}