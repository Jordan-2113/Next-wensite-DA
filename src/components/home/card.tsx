import { Dispatch } from "react";
import Image from "next/image"

interface HomeCardInterface {
    text: string;
    name: string;
    banner: string;
    onClickEvent: Dispatch<any>;
}


const HomeCard = (
    { name, text, banner, onClickEvent }: HomeCardInterface) => {
    return (
        <div className="ml-5 mt-5 max-w-sm rounded-md overflow-hidden shadow-lg bg-slate-900 basis-1/3">
            <Image height="1" width="2" layout="responsive" src={banner}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {text}
                </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-sm rounded" onClick={onClickEvent}>Go to</button>
            </div>
            
        </div>

    );
};

export default HomeCard;