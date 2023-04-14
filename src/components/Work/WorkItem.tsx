import Overlay from '../common/Overlay'

interface WorkItemProps {
    setModalOpen: (isOpen: boolean) => void;
    text: string;
}

const WorkItem: React.FC<WorkItemProps> = ({setModalOpen, text}) => {
  return (
    <Overlay extraClasses="absolute top-0 flex flex-col justify-center items-center py-10 px-10">
        <div className="bg-white w-full max-w-lg h-full rounded-xl shadow-xl shadow-gray-900 work-item">
            <div onClick={() => setModalOpen(false)} 
            className="bg-[#dcdde1] w-full h-10 rounded-tr-xl rounded-tl-xl relative">
                <div className="bg-[#eb3b5a] w-4 h-4 rounded-full absolute top-3 right-3 cursor-pointer"></div>
            </div>
            <div className="h-full p-8">
                <div className="w-full h-3/6 shadow-gray-300"
                style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/2439/4751/products/Caution-Work-in-Progress_2000x.jpg?v=1617580561')`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                </div>
                <div className="text-black px-10 w-full h-full max-h-[200px] overflow-y-scroll mt-10">
                    <p>{text}</p>
                    <div className="w-full mx-auto text-center">
                        <button className="mt-7 bg-[#3742fa] px-5 rounded-xl text-white">Website</button>
                    </div>
                </div>
            </div>
        </div>        
    </Overlay>
  )
}

export default WorkItem