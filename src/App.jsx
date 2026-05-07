import Header  from './components/Header';
import Hero    from './components/Hero';
import About   from './components/About';
import Service from './components/Service';
import Feature from './components/Feature';
import Project from './components/Project';
import Blog    from './components/Blog';
import Footer  from './components/Footer';
import BackTop from './components/BackTop';
import DeliveryRoutes from './components/DeliveryRoutes';
import Pricing       from './components/Pricing';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Service />
        <Feature />
        <Project />
        <DeliveryRoutes />
        <Pricing />
        <Blog />
      </main>
      <Footer />
      <BackTop />
    </div>
  );
}
