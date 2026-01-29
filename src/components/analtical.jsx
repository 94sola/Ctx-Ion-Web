import Hero from './analytical1';
import Hero1 from './analytical2';
import Hero2 from './/analytical3';


export default function Home() {
  return (
    <div className="bg-gray-100">
      <Hero />
      <Hero1 />
      <Hero2 />
    </div>
  );
}