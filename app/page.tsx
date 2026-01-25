import Hero from "@/components/marketing/Hero";
import Steps from "@/components/marketing/Steps";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import Stats from "@/components/marketing/Stats";
import Pricing from "@/components/marketing/Pricing";
import Coverage from "@/components/marketing/Coverage";
import FAQ from "@/components/marketing/FAQ";
import CTA from "@/components/marketing/CTA";
import Problems from "@/components/marketing/Problems";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Problems />
      <FeatureGrid />
      <Steps />
      <Pricing />
      <Coverage />
      <FAQ />
      <CTA />
    </>
  );
}
