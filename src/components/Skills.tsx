import ReactLogo from "../assets/skills/react-2.svg";
import TSLogo from "../assets/skills/typescript.svg";
import JSLogo from "../assets/skills/logo-javascript.svg";
import jQueryLogo from "../assets/skills/jquery-4.svg";
import SassLogo from "../assets/skills/sass-1.svg";
import PhpLogo from "../assets/skills/php-1.svg";
import BootstrapLogo from "../assets/skills/bootstrap-4.svg";
import WordpressLogo from "../assets/skills/wordpress-blue.svg";

function Skills() {
    const skills = [
        {
            key: 1,
            img: ReactLogo,
            text: "React",
        },
        {
            key: 2,
            img: TSLogo,
            text: "TypeScript",
        },
        {
            key: 3,
            img: JSLogo,
            text: "JavaScript",
        },
        {
            key: 4,
            img: jQueryLogo,
            text: "jQuery",
        },
        {
            key: 5,
            img: SassLogo,
            text: "Sass",
        },
        {
            key: 6,
            img: BootstrapLogo,
            text: "Bootstrap",
        },
        {
            key: 7,
            img: PhpLogo,
            text: "PHP",
            extraClasses: "w-28",
        },
        {
            key: 8,
            img: WordpressLogo,
            text: "Wordpress",
        },
    ];

    return (
        <div className="w-full h-screen text-white">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-16 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-[#3742fa]">
                        Skills
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    {skills.map((item) => {
                        return (
                            <div
                                key={item.key}
                                className="hover:scale-110 duration-500 p-4 flex justify-between items-center flex-col"
                            >
                                <img
                                    className={
                                        item.extraClasses
                                            ? "mx-auto " + item.extraClasses
                                            : "w-20 mx-auto"
                                    }
                                    src={item.img}
                                    alt={item.text}
                                />
                                <p className="mt-4">{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Skills;
