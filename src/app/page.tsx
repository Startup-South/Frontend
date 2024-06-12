import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Step from "@/components/Step";

export default function Home() {
  return (
    <main>
      <Hero /> <br /><br />
      <NewProducts /> 
      <Step />
      <Footer />
    </main>
  );
}
