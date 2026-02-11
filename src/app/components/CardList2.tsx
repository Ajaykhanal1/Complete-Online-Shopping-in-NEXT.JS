import React from "react";
import Card2 from "./Card2";

// Define Types for CardList2 props
interface CardList2Props {
    href: string; //link to product page
    imageSrc: string; // product image source
    imageAlt: string; // alt text for image
    title: string; // product title
}

// Array of card data
const cardsData: CardList2Props[] = [
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/8d251cd4324ce6ceae273e263cd8bbea.jpg_170x170q80.jpg",
        imageAlt: "Product 1",
        title: "Vinegar & Cooking Wine",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/collect/sg/p/8a3e03fce0a650da4b5ecf3d2d6eaefa.jpg_170x170q80.jpg",
        imageAlt: "Product 1",
        title: "Pump Accessories",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/g/kf/Sf2db6d0aafdd42af992b3de922028ff7w.jpg_120x120q80.jpg",
        imageAlt: "Product 1",
        title: "Convertible",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/c4285b08c667413614cde76fdf8ac809.png_120x120q80.png",
        imageAlt: "Product 1",
        title: "Hoodies & Sweatshirts",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/34d61d868aa947f297416554329df25e.jpg_120x120q80.jpg",
        imageAlt: "Product 1",
        title: "Bathroom Tapware",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/93ad082f395f1125e7f391fd06687539.jpg_120x120q80.jpg",
        imageAlt: "Product 1",
        title: "Action Camera Bags & Cases",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/g/kf/S89c67c0484e1431ba5cd81a2a471e8cdb.jpg_120x120q80.jpg",
        imageAlt: "Product 1",
        title: "Hoodies & Sweatshirts",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/76e27493bcbd057e30da1a287e0aa32e.jpg_120x120q80.jpg",
        imageAlt: "Product 1",
        title: "Toilet Paper",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/65d8d46020e569d44ca0c6271ebf2b87.jpg_120x120q80.jpg",
        imageAlt: "Product 1",
        title: "Habitats & Accessories",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/309288815fb210485fb249eb1df5a5ec.jpg_170x170q80.jpg",
        imageAlt: "Product 1",
        title: "Telescopes & Accessories",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/79328c695cf4b462b6a53280470a6c1d.png_170x170q80.png",
        imageAlt: "Product 1",
        title: "Kids Bookcases & Shelving",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/ab9a55a4caa4cf5a5fa1e287c2e6a416.jpg_170x170q80.jpg",
        imageAlt: "Product 1",
        title: "Christening",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/b9e7bd6f209b3cb6426d04ef92914f7b.jpg_170x170q80.jpg",
        imageAlt: "Product 1",
        title: "Bracelets",   
    },
    {
        href: "#",
        imageSrc: "https://img.drz.lazcdn.com/static/np/p/a3e45aee012ca31a726c6dd3bd391941.jpg_170x170q80.jpg",
        imageAlt: "Product 1",
        title: "Bathroom",   
    },
];

const CardList2: React.FC = () => {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] ">
            {cardsData.map((card, index) => (
                <Card2
                    key={index}
                    href={card.href}
                    imageSrc={card.imageSrc}
                    imageAlt={card.imageAlt}
                    title={card.title}
                />
            ))}
        </div>
    );
}
export default CardList2;