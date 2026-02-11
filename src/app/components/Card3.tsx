import React from "react";

interface Card3Props {
    href: string; //link to product page
    imageSrc: string; // product image source
    title: string;
    currency: string;
    price: string;
    discount: string;
}
const card3: React.FC<Card3Props> = ({ href = "#", imageSrc, title, currency, price, discount }: Card3Props) => {
    return (
        <a href={href} className="border border-solid border-gray-400 rounded-lg p-2 flex flex-col justify-between">
            <div>
                <picture className="p-3 flex justify-center">
                    <img className="w-30" src={imageSrc} alt={title} />
                </picture>
            </div>
            <div>
                <div className="title line-clamp-2 text-center">{title}</div>
                <div>
                    <span className="currency text-orange-400">{currency}</span>
                    <span className="price text-orange-400">{price}</span>
                    <span className="discount text-xs ml-2">{discount}</span>
                </div>

                <div className="flex items-center space-x-1 text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300 relative">
                        ★
                        <span className="absolute top-0 left-0 w-1/2 overflow-hidden text-yellow-400">★</span>
                    </span>
                    <span className="text-gray-500 ml-2">(36)</span>

                </div>
            </div>
        </a>
    );
}
export default card3;