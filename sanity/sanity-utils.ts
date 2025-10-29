import { Boardgame } from "@/types/Boardgame";
import { Page } from "@/types/Page";

import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getBoardgames(): Promise<Boardgame[]> {
    const query = `*[_type == "boardgame"] | order(name asc){
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`;

    const boardgames = await createClient(clientConfig).fetch(query);
    return boardgames;
}

export async function getBoardgame(slug: string): Promise<Boardgame> {
    const query = `*[_type == "boardgame" && slug.current == $slug ][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`;
    const params = { slug: slug };

    const boardgame = await createClient(clientConfig).fetch(query, params);
    return boardgame;

}

export async function getPages(): Promise<Page[]> {
    const query = `*[_type == "page"] | order(name asc){
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            label,
            content, 
            snippet
        }`;

    const pages = await createClient(clientConfig).fetch(query);
    return pages;
}

export async function getPage(slug: string): Promise<Page> {
    const query = `*[_type == "page" && slug.current == $slug ][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            label,
            content, 
            snippet,
            url
        }`;
    const params = { slug: slug };

    const page = await createClient(clientConfig).fetch(query, params);
    return page;

}