import { useState } from "react";
import { Parallax } from "@react-spring/parallax";
import { ParallaxLayer } from "@react-spring/parallax";
import WorkImage from "../components/Work/WorkImage";
import WorkItem from "../components/Work/WorkItem";

// images
import Image1 from "../assets/work/Group 1.png";
import Image2 from "../assets/work/Group 2.png";
import Image3 from "../assets/work/Group 3.png";
import Image4 from "../assets/work/Group 4.png";
import Image5 from "../assets/work/Group 5.png";
import Image6 from "../assets/work/Group 6.png";
import Image7 from "../assets/work/Group 11.png";
import Image8 from "../assets/work/Group 12.png";
import Image9 from "../assets/work/Group 13.png";
import Image10 from "../assets/work/Group 14.png";

// personal projects
import PersonalImage1 from "../assets/personal-work/1.png";
import PersonalImage2 from "../assets/personal-work/2.png";

const ProjectsPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [txt, setTxt] = useState("");

    const clickHandler = (txt: string) => {
        setModalOpen(true);
        setTxt(txt);
    };

    const url = (name: string, wrap = false) =>
        `${
            wrap ? "url(" : ""
        }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
            wrap ? ")" : ""
        }`;

    const projectsImg = [
        {
            key: 1,
            img: Image1,
            text: "lorem ipsum 1 2",
            link: "https://app.getsafle.com/",
        },
        {
            key: 2,
            img: Image2,
            text: "lorem ipsum 2",
            link: "https://casino.com.ro/",
        },
        {
            key: 3,
            img: Image3,
            text: "lorem ipsum 3",
            link: "https://jersey-casinos.com/",
        },
        {
            key: 4,
            img: Image4,
            text: "lorem ipsum 4",
            link: "https://cacique-casino.co/",
        },
        {
            key: 5,
            img: Image5,
            text: "lorem ipsum 5",
            link: "https://laurcasino.ro/",
        },
        {
            key: 6,
            img: Image6,
            text: "lorem ipsum 6",
            link: "https://facibanionline.ro/",
        },
        {
            key: 7,
            img: Image7,
            text: "lorem ipsum 6",
            link: "https://jocpacanele.ro/",
        },
        {
            key: 8,
            img: Image8,
            text: "lorem ipsum 6",
            link: "https://www.supercazino.ro/",
        },
        {
            key: 9,
            img: Image9,
            text: "lorem ipsum 6",
            link: "https://casino-tsar.bg/",
        },
        {
            key: 10,
            img: Image10,
            text: "lorem ipsum 6",
            link: "https://beturi.ro/",
        },
    ];

    const personalProjects = [
        {
            key: 1,
            img: PersonalImage1,
            text: "lorem ipsum 1 2",
            link: "https://spotify-clone-six-cyan.vercel.app/",
        },
        {
            key: 2,
            img: PersonalImage2,
            text: "lorem ipsum 1 2",
            link: "https://react-to-do-app-azure.vercel.app/",
        },
    ];

    return (
        <Parallax pages={2}>
            {/* <ParallaxOptions /> */}
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
            ></ParallaxLayer>
            <div className="w-full h-screen text-gray-300">
                <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div className="pb-16 text-center">
                        <p className="text-4xl font-bold inline border-b-4 border-[#4286f4]">
                            Projects
                        </p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                        {projectsImg.map((item) => {
                            return (
                                <WorkImage
                                    key={item.key}
                                    image={item.img}
                                    link={item.link}
                                    setModalOpen={() => clickHandler(item.text)}
                                />
                            );
                        })}
                    </div>
                </div>

                {modalOpen && (
                    <WorkItem text={txt} setModalOpen={setModalOpen} />
                )}
            </div>
            <div className="w-full h-screen text-gray-300">
                <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div className="pb-16 text-center">
                        <p className="text-4xl font-bold inline border-b-4 border-[#4286f4]">
                            Personal Projects
                        </p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                        {personalProjects.map((item) => {
                            return (
                                <WorkImage
                                    key={item.key}
                                    image={item.img}
                                    link={item.link}
                                    setModalOpen={() => clickHandler(item.text)}
                                />
                            );
                        })}
                    </div>
                </div>

                {modalOpen && (
                    <WorkItem text={txt} setModalOpen={setModalOpen} />
                )}
            </div>
        </Parallax>
    );
};

export default ProjectsPage;
