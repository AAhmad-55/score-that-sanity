import Image from "next/image";
import { getBoardgames, getPages } from "@/sanity/sanity-utils";
import Link from "next/link";
import { PortableText } from '@portabletext/react';

export default async function Home() {
  const boardgames = await getBoardgames();
  const pages = await getPages();

  return (
    <div>
      <Image
        src='/images/homepage_header.jpeg'
        alt='Score That!'
        width={1000}
        height={500}
        style={{ objectFit: 'contain' }} 
        className="object-cover rounded-lg mx-auto mb-10"
        />

      <p className="max-w-4xl mx-auto text-xl text-center mb-7">Welcome to our board game scoring app, where the thrill of competition meets seamless scoring! Whether you're embarking on an epic journey through fantasy realms or engaging in a strategic battle of wits, our app is here to ensure that every victory is celebrated and every point counted.</p>

      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl text-gray-700 mb-5">Let the games begin!</h2>
        <a 
          href="https://scorethat.info/scoring/load_noleague.php"
          target="_blank"
          className="border border-gray-500 rounded-lg p-3 hover:bg-blue-700 hover:text-white"
          >Quick Score</a>
      </div>

      <div className="grid md:grid-cols-2 gap-8 my-5">
        {pages.map((page) => (
          <Link 
            href={`/${page.slug}`} 
            key={page._id} 
            className="border border-gray-500 rounded-lg p-3 text-center hover:bg-blue-700 hover:text-white">
              <PortableText value={page.snippet} />
          </Link>
        ))}
      </div>

      <h2 className="mb-10 font-bold text-3xl text-gray-700 text-center">Here are some of our board games</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardgames.map((boardgame) => (
          <Link 
            href={`/boardgame/${boardgame.slug}`} 
            key={boardgame._id} 
            className="border border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500">
            {boardgame.image && (
              <Image
                src={boardgame.image}
                alt={boardgame.name}
                width={280}
                height={280}
                style={{ maxHeight: '280px', objectFit: 'contain' }} 
                className="object-cover rounded-lg mx-auto"
              />
            )}

            <div className="font-bold text-center pt-2">{boardgame.name}</div>
          </Link>          
        ))}

      </div>

    </div>
  );
}
