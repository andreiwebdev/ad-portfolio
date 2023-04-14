import { ParallaxLayer } from "@react-spring/parallax";
import Skills from "../Skills";

const BottomSection = () => {
    return (
        <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Skills />
        </ParallaxLayer>
    );
};

export default BottomSection;
