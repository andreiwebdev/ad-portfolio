import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Resume from "../../assets/AndreiResume.pdf";

const SocialLinks = () => {
    return (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            {/* Social icons */}
            <ul>
                <li className="w-[168px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-blue-600">
                    <a
                        className="flex justify-between items-center w-full text-gray-300"
                        href="https://www.linkedin.com/in/andrei-dragomir-433584193/"
                        target="_blank"
                    >
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[168px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-[#333333]">
                    <a
                        className="flex justify-between items-center w-full text-gray-300"
                        href="https://github.com/andreiwebdev"
                        target="_blank"
                    >
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[168px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
                    <a
                        className="flex justify-between items-center w-full text-gray-300"
                        href="mailto:dandrei.web@gmail.com"
                    >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="w-[168px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-[#565f69]">
                    <a
                        className="flex justify-between items-center w-full text-gray-300"
                        href={Resume}
                        download
                    >
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;
