import Hero from "../components/Hero";
import Subjects from "../components/Subjects";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Faq from "../components/Faq";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Hero />
      <Subjects />
      <Features />
      <HowItWorks />
      <Faq />
      <Cta />
    </main>
  );
}
