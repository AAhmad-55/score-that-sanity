import { getPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from '@portabletext/react';
import Link from "next/link";

interface PostPageParams {
  slug: string;
}

export default async function Page({ params }: { params: PostPageParams }) {
    const { slug } = await params; // Await params if it's a Promise
    
    const pageObj = await getPage(slug);

    return (
        <div className="py-10 text-center">
            <h1 className="text-5xl font-extrabold mb-10">{pageObj.title}</h1>
            <div className="max-w-5xl mx-auto text-xl mb-10"><PortableText value={pageObj.content} /></div>

            <Link 
                href={`${pageObj.url}`}
                target="_blank"
                className="border border-gray-500 text-center rounded-lg p-3 hover:bg-blue-700 hover:text-white"
            >
                {pageObj.label}
            </Link>
        </div>
    );
    
}