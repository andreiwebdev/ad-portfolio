import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Resume from "../assets/AndreiResume.pdf";

function Hero() {
    return (
        <div className="w-full h-screen">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#3742fa] font-bold">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                    Andrei Dragomir
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
                    I'm a Front End Developer.
                </h2>
                <p className="text-[#bec9ec] py-4 max-w-[700px]">
                    I'm an enthusiastic Front End Developer with a growing
                    proficiency in React, eager to further develop my skills and
                    contribute to innovative projects. I am dedicated to
                    creating visually appealing and user-friendly web
                    experiences while continuously learning and staying
                    up-to-date with the latest trends and technologies. As a
                    team player with a strong passion for web development, I'm
                    excited to collaborate on projects and contribute to your
                    digital goals. Let's work together to build exceptional web
                    solutions!
                </p>
                <div className="flex lg:hidden text-white">
                    <a
                        href="https://www.linkedin.com/in/andrei-dragomir-433584193/"
                        target="_blank"
                        className="bg-[#3742fa] p-2 flex flex-col items-center justify-center rounded-full mr-3 cursor-pointer"
                    >
                        <FaLinkedin size={25} />
                    </a>
                    <a
                        href="https://github.com/andreiwebdev"
                        target="_blank"
                        className="bg-[#3742fa] p-2 flex flex-col items-center justify-center rounded-full mr-3 cursor-pointer"
                    >
                        <FaGithub size={25} />
                    </a>
                    <a
                        href="mailto:dandrei.web@gmail.com"
                        className="bg-[#3742fa] p-2 flex flex-col items-center justify-center rounded-full mr-3 cursor-pointer"
                    >
                        <HiOutlineMail size={25} />
                    </a>
                    <a
                        href={Resume}
                        download
                        className="bg-[#3742fa] p-2 flex flex-col items-center justify-center rounded-full mr-3 cursor-pointer"
                    >
                        <BsFillPersonLinesFill size={25} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
