import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
 
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

function Page() {
  return (
    <div className="glassmorphism">
      <Navbar />
      <Hero />
      <div className="glassmorphism">
        <About />
        <div className="glassmorphism" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        
        {/* <SignIn /> */}
        <div className="glassmorphism" />
        <WhatsNew />
      </div>
      <World />
      <div className="glassmorphism">
        <Insights />
        <div className="glassmorphism" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
