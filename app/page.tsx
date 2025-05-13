import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import IndekIspu from '@/components/IndekIspu';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import PredictionForm from '@/components/PredictionForm';
export default function Home() {
  return (
    <div>
      <Hero />
      <InfoSection />
      <PredictionForm />
      <IndekIspu />
      <Faq />
      <Footer />
    </div>
  );
}
