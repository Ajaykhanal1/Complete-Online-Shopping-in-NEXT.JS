import React from "react";
import Card3 from "./Card3";

interface CardList3Props {
    href: string; //link to product page
    imageSrc: string; // product image source
    title: string;
    currency: string;
    price: string;
    discount: string;
}

// Array of card data
const cardsData: CardList3Props[] = [
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/49bf0605c4ae4bf00e95e02c90aa6260.jpg_400x400q80.jpg",
        title: "Bathroom Waterproof Slipper Smiley For Men By Jutta Ghar Nepal - Fashion | Slippers For Men |",
        currency: "Rs.",
        price: "157",
        discount: "-48%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/g/kf/Sccd92ae6d62745b2849352ec904180145.jpg_400x400q80.jpg",
        title: "P47 5.0+ EDR Wireless Bluetooth Foldable Headset With Microphone For All Mobile & De...",
        currency: "Rs.",
        price: "442",
        discount: "-68%",
        },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/acf7c14005a8f6aa78686eab5d0dba58.jpg_400x400q80.jpg",
        title: "Combo Pack Finger Grip & Counter Hand Grip Strengthener Extensor Exerciser Grip Finger Trainer for Improved Finger Function",
        currency: "Rs.",
        price: "499",
        discount: "-29%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/697d1ac6d532dab1e11c442808b136ec.png_400x400q80.png",
        title: "Stainless Steel Cordless Electric Jug 1.8 Ltr (1500 Watts)",
        currency: "Rs.",
        price: "555",
        discount: "-72%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/753cc934546a325741bb0015ee3c0f84.jpg_400x400q80.jpg",
        title: "Hot Shaper Slim Belt For Weight Loss(8Mm)",
        currency: "Rs.",
        price: "1500",
        discount: "",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/9d0272b1880c043ffacc0ef79fa55f67.jpg_400x400q80.jpg",
        title: "Golden metal bangle",
        currency: "Rs.",
        price: "800",
        discount: "",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/49bf0605c4ae4bf00e95e02c90aa6260.jpg_400x400q80.jpg",
        title: "Bathroom Waterproof Slipper Smiley For Men By Jutta Ghar Nepal - Fashion | Slippers For Men |",
        currency: "Rs.",
        price: "157",
        discount: "-48%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/g/kf/Sccd92ae6d62745b2849352ec904180145.jpg_400x400q80.jpg",
        title: "P47 5.0+ EDR Wireless Bluetooth Foldable Headset With Microphone For All Mobile & De...",
        currency: "Rs.",
        price: "442",
        discount: "-68%",
        },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/acf7c14005a8f6aa78686eab5d0dba58.jpg_400x400q80.jpg",
        title: "Combo Pack Finger Grip & Counter Hand Grip Strengthener Extensor Exerciser Grip Finger Trainer for Improved Finger Function",
        currency: "Rs.",
        price: "499",
        discount: "-29%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/697d1ac6d532dab1e11c442808b136ec.png_400x400q80.png",
        title: "Stainless Steel Cordless Electric Jug 1.8 Ltr (1500 Watts)",
        currency: "Rs.",
        price: "555",
        discount: "-72%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/753cc934546a325741bb0015ee3c0f84.jpg_400x400q80.jpg",
        title: "Hot Shaper Slim Belt For Weight Loss(8Mm)",
        currency: "Rs.",
        price: "1500",
        discount: "",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/9d0272b1880c043ffacc0ef79fa55f67.jpg_400x400q80.jpg",
        title: "Golden metal bangle",
        currency: "Rs.",
        price: "800",
        discount: "",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/acf7c14005a8f6aa78686eab5d0dba58.jpg_400x400q80.jpg",
        title: "Combo Pack Finger Grip & Counter Hand Grip Strengthener Extensor Exerciser Grip Finger Trainer for Improved Finger Function",
        currency: "Rs.",
        price: "499",
        discount: "-29%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/697d1ac6d532dab1e11c442808b136ec.png_400x400q80.png",
        title: "Stainless Steel Cordless Electric Jug 1.8 Ltr (1500 Watts)",
        currency: "Rs.",
        price: "555",
        discount: "-72%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/753cc934546a325741bb0015ee3c0f84.jpg_400x400q80.jpg",
        title: "Hot Shaper Slim Belt For Weight Loss(8Mm)",
        currency: "Rs.",
        price: "1500",
        discount: "",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/9d0272b1880c043ffacc0ef79fa55f67.jpg_400x400q80.jpg",
        title: "Golden metal bangle",
        currency: "Rs.",
        price: "800",
        discount: "",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/acf7c14005a8f6aa78686eab5d0dba58.jpg_400x400q80.jpg",
        title: "Combo Pack Finger Grip & Counter Hand Grip Strengthener Extensor Exerciser Grip Finger Trainer for Improved Finger Function",
        currency: "Rs.",
        price: "499",
        discount: "-29%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/697d1ac6d532dab1e11c442808b136ec.png_400x400q80.png",
        title: "Stainless Steel Cordless Electric Jug 1.8 Ltr (1500 Watts)",
        currency: "Rs.",
        price: "555",
        discount: "-72%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/753cc934546a325741bb0015ee3c0f84.jpg_400x400q80.jpg",
        title: "Hot Shaper Slim Belt For Weight Loss(8Mm)",
        currency: "Rs.",
        price: "1500",
        discount: "",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/9d0272b1880c043ffacc0ef79fa55f67.jpg_400x400q80.jpg",
        title: "Golden metal bangle",
        currency: "Rs.",
        price: "800",
        discount: "",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/acf7c14005a8f6aa78686eab5d0dba58.jpg_400x400q80.jpg",
        title: "Combo Pack Finger Grip & Counter Hand Grip Strengthener Extensor Exerciser Grip Finger Trainer for Improved Finger Function",
        currency: "Rs.",
        price: "499",
        discount: "-29%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/697d1ac6d532dab1e11c442808b136ec.png_400x400q80.png",
        title: "Stainless Steel Cordless Electric Jug 1.8 Ltr (1500 Watts)",
        currency: "Rs.",
        price: "555",
        discount: "-72%",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/753cc934546a325741bb0015ee3c0f84.jpg_400x400q80.jpg",
        title: "Hot Shaper Slim Belt For Weight Loss(8Mm)",
        currency: "Rs.",
        price: "1500",
        discount: "",
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/9d0272b1880c043ffacc0ef79fa55f67.jpg_400x400q80.jpg",
        title: "Golden metal bangle",
        currency: "Rs.",
        price: "800",
        discount: "",
    }
];

const CardList3: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cardsData.map((card, index) => (
                <Card3
                    key={index}
                    href={card.href}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    currency={card.currency}
                    price={card.price}
                    discount={card.discount}
                />
            ))}
        </div>
    );
}
export default CardList3;