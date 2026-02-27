import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <NavigationBar />
      <Hero />
      <ProductViewer />
    </main>
  );
};

export default App;
