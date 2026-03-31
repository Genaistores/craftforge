import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { MeetCrew } from "@/components/marketing/meet-crew";
import { Navbar } from "@/components/marketing/navbar";
import { Testimonials } from "@/components/marketing/testimonials";
import { YourDayTomorrow } from "@/components/marketing/your-day-tomorrow";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100">
      <Navbar />

      <main id="main">
        <Hero />
        <HowItWorks />
        <DashboardPreview />
        <MeetCrew />
        <Testimonials />
        <YourDayTomorrow />
      </main>

      <Footer />
    </div>
  );
}
