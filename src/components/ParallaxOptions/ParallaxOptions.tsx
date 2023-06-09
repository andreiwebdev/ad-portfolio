import { ParallaxLayer } from "@react-spring/parallax";
import RocketImg from "../../../src/assets/rocket.png";

const ParallaxOptions = () => {
  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;

  return (
    <>
      <ParallaxLayer offset={1} speed={1} />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
          backgroundColor: "red",
          zIndex: "-1",
        }}
      />

      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundColor: "#000000",
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
          zIndex: "-1",
        }}
      >
        <img
          src={RocketImg}
          style={{ width: "25%", marginLeft: "75%", marginTop: "15%" }}
        />
        {/* <img src={RocketImg} style={{ width: '35%', marginLeft: '30%', marginTop: '5%' }} /> */}
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.3}
        speed={-0.3}
        style={{ pointerEvents: "none" }}
      >
        <img
          src={url("satellite4")}
          style={{ width: "15%", marginLeft: "70%" }}
        />
        <img
          src={url("satellite4")}
          style={{
            width: "15%",
            marginLeft: "2%",
            marginTop: "8%",
            transform: "rotate(-90deg)",
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} /> */}
        {/* <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} /> */}
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} /> */}
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "10%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "75%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "60%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "25%", marginLeft: "30%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "80%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "5%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "15%", marginLeft: "75%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.5}
        speed={-0.4}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <img src={url("earth")} style={{ width: "60%" }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={-0.3}
        style={{
          backgroundSize: "80%",
          backgroundPosition: "center",
          // backgroundImage: url('clients', true)
        }}
      />
    </>
  );
};

export default ParallaxOptions;
