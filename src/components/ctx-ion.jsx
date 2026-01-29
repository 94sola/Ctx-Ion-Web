import Hero from './Hero';
import Hero1 from './ctx';
import Hero2 from './ctx1';
import Hero3 from './ctx2';
import Hero4 from './ctx3';


export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
    </div>
  );
}