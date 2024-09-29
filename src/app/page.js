import Header from '../components/Header/page'
import About from '../app/about/page'
import Marquee from '@/components/Marquee/Marquee';
import SpotLight from '@/components/ui/spotlight'
import './globals.css'
export default function Home() {
  return (
    <>
    <SpotLight />
        <Header className="relative" />
        <div className="container mx-auto w-full text-white flex  overflow-x-hidden">
          <Marquee />
        </div>
      <About />

    </>
  );
}
