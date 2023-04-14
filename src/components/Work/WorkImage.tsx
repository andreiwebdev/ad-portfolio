interface WorkImageProps {
    image: string;
    link: string;
    setModalOpen: (isOpen: boolean) => void;
}

const WorkImage: React.FC<WorkImageProps> = (props) => {
    return (
        <div
            onClick={() => props.setModalOpen(true)}
            className="container flex justify-center items-center mx-auto content-div hover:scale-110 duration-500"
        >
            <a href={props.link} target="_blank">
                <img
                    src={props.image}
                    alt=""
                    className="rounded-md shadow-lg shadow-[#040c16]"
                />
            </a>
        </div>
    );
};

export default WorkImage;
