import { ParallaxLayer } from "@react-spring/parallax";
import Hero from "../Hero";
import SocialLinks from "../SocialLinks/SocialLinks";

const TopSection = () => {
    return (
        <ParallaxLayer offset={0} speed={0.1}>
            <SocialLinks />
            <Hero />
        </ParallaxLayer>
    );
};

export default TopSection;
