import { Parallax } from "@react-spring/parallax";
import ParallaxOptions from "./components/ParallaxOptions/ParallaxOptions";
import TopSection from "./components/TopSection/TopSection";
import MiddleSection from "./components/MiddleSection/MiddleSection";
import BottomSection from "./components/BottomSection/BottomSection";
import "@fontsource/raleway";

function App() {
    return (
        <Parallax pages={3}>
            <ParallaxOptions />
            <TopSection />
            <MiddleSection />
            <BottomSection />
        </Parallax>
    );
}

export default App;
