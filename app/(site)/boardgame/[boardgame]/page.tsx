import { getBoardgame } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from '@portabletext/react';

export default async function Boardgame({ params }) {
    const { boardgame } = await params; // Await params if it's a Promise
    
    const boardgameObj = await getBoardgame(boardgame);
    return (
        <div className="py-10">
            <Image
                src={boardgameObj.image}
                alt={boardgameObj.name}
                width={500}
                height={500}
                style={{ maxWidth: '500px', maxHeight: '500px', objectFit: 'contain' }} 
                className="object-cover rounded-lg mx-auto mb-10"
                />
                
            <h1 className="text-7xl font-extrabold text-center mb-10">{boardgameObj.name}</h1>
            <div className="text-xl text-center mb-10 mx-10"><PortableText value={boardgameObj.content} /></div>
        </div>
    );
}