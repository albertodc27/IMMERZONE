import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Products from "@/components/Products";
import Games from "@/components/Games";
import ArenaSizing from "@/components/ArenaSizing";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProp />
        <Products />
        <Games />
        <ArenaSizing />
        <Partners />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
