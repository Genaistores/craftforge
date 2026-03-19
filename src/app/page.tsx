import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Navbar } from "@/components/marketing/navbar";
import { TrustBar } from "@/components/marketing/trust-bar";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100">
      <Navbar />

      <main id="main">
        <Hero />
        <TrustBar />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}

