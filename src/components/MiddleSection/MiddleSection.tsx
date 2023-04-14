import { ParallaxLayer } from "@react-spring/parallax";
import Work from "../Work/Work";

const MiddleSection = () => {
    return (
        <ParallaxLayer offset={1} speed={0.1}>
            <Work />
        </ParallaxLayer>
    );
};

export default MiddleSection;
