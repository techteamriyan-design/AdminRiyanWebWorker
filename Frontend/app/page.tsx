import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Partners from '@/components/partners';
import Testimonials from '@/components/testimonials';
import Careers from '@/components/careers';
import JourneySteps from '@/components/journey-steps';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Partners />
      <Testimonials />
      <Careers />
      <JourneySteps />
      <Footer />
    </main>
  );
}
