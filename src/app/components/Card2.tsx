import React from "react";
interface Card2Props {
    href: string; //link to product page
    imageSrc: string; // product image source
    imageAlt: string; // alt text for image
    title: string; // product title
}
const card2: React.FC<Card2Props> = ({ href="#", imageSrc, imageAlt, title }: Card2Props) => {
    return (
<a
  href={href}
  className="flex flex-col justify-between bg-white rounded-lg border border-gray-200 
             transition-all duration-300
             hover:-translate-y-0.5
             hover:shadow-[0_10px_50px_-4px_rgba(0,0,0,0.35)]"
>


        <div className="flex flex-cols justify-center items-center">
            <picture className="">
                <img className="w-25 p-4" src={imageSrc} alt={imageAlt} />
            </picture>
        </div>  
        <div className="text-center line-clamp-2 flex justify-center items-center h-16 p-2">
            <p className="">{title}</p>
        </div>
    </a>
    );
}
export default card2;
