import React, { useState } from "react";
import WorkImage from "./WorkImage";
import WorkItem from "./WorkItem";

// images
import Image1 from "../../assets/work/Group 1.png";
import Image2 from "../../assets/work/Group 2.png";
import Image3 from "../../assets/work/Group 3.png";
import Image4 from "../../assets/work/Group 4.png";
import Image5 from "../../assets/work/Group 5.png";
import Image6 from "../../assets/work/Group 6.png";
import { Link } from "react-router-dom";

const Work = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [txt, setTxt] = useState("");

    const clickHandler = (txt: string) => {
        setModalOpen(true);
        setTxt(txt);
    };

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
    ];

    return (
        <div id="Work" className="w-full md:h-screen text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-16 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-[#4286f4]">
                        Projects
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
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

                <Link
                    to="/projects"
                    className="bg-[#4286f4] max-w-fit mx-auto py-2 px-8 rounded cursor-pointer md:text-lg lg:text-xl text-white"
                >
                    All Projects
                </Link>
            </div>

            {/* {modalOpen && <WorkItem text={txt} setModalOpen={setModalOpen} />} */}
        </div>
    );
};

export default Work;
