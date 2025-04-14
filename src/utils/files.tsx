import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type Poem = {
    slug: string;
    title: string;
    content: string;
};

export type Slug = string | 
{
    directory: string
    files: [string | Slug]
}

export const poemsDirectory = join(process.cwd(), "/src/poems");
  
export function getPoemSlugs(directory = poemsDirectory) {
    console.log('DIRECTORY: ', directory)
  return fs.readdirSync(directory).map((file:string)=>{

    if(file.includes('.md')){
        return file
    }
    
    return {
        directory: file, 
        files: getPoemSlugs(join(directory, file))
    }
  });
}

export function getPoemBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(poemsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
  
    return { ...data, slug: realSlug, content } as Poem;
}

export function getAllPoems(): Poem[] {
    const slugs = getPoemSlugs();
    const poems = slugs.map((slug) => getPoemBySlug(slug))

    return poems;
  }