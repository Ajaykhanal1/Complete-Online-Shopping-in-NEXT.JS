// Single card component 1st card in flash sale section
import React from "react";
interface Card1Props {
    href: string; //link to product page
    imageSrc: string; // product image source
    imageAlt: string; // alt text for image
    title: string; // product title
    discountedPrice: string; // discounted price to show
    originalPrice: string; // original price to show with strikethrough
    currency: string; // currency symbol to show with price
    discountPercentage: string; // percentage discount to show (e.g. 20 for 20% off)
}
const card1: React.FC<Card1Props> = ({ href="#", imageSrc, imageAlt, title, discountedPrice, originalPrice, currency, discountPercentage }: Card1Props) => {
    return (
    <a href={href} className=" bg-white rounded-lg border border-gray-200 
             transition-all duration-300
             hover:-translate-y-0.5
             hover:shadow-[0_10px_50px_-4px_rgba(0,0,0,0.35)] flex flex-col justify-between">
        <div className="img h-50 overflow-hidden mt-1 flex justify-center items-center">
            <picture>
                <img className="w-40 " src={imageSrc} alt={imageAlt} />
            </picture>
        </div>
        <div className="text ">
            <p id="2line" className="text-gray-800 text-base font-medium line-clamp-2 text-center">{title}</p>
            <div className="discountPrice text-orange-500 font-bold text-xl ml-2">
                <span className="currency">{currency}</span>
                <span className="price">{discountedPrice}</span>
            </div>
            <div className="originalPrice flex gap-3 ml-2">
                <div className="price text-gray-400 line-through">
                    <span className="currency mr-1">{currency}</span>
                    <span className="price">{originalPrice}</span>
                </div>
                <span className="itemDiscount font-bold">{discountPercentage}</span>
            </div>
        </div>
    </a>
    );
};
export default card1;