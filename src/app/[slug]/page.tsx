import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPoems, getPoemBySlug } from "@/utils/files";
import markdownToHtml from "@/utils/markdownToHtml";

export default async function Poem(props: Params) {
  const params = await props.params;
  const poem = getPoemBySlug(params.slug);

  if (!poem) {
    return notFound();
  }

  const content = await markdownToHtml(poem.content || "");

  return (
    <div is-="typography-block" style={{padding: '2ch'}} dangerouslySetInnerHTML={{ __html: content }}/>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const poem = getPoemBySlug(params.slug);

  if (!poem) {
    return notFound();
  }

  const title = `${poem.title}`;

  return {
    title
  };
}

// export async function generateStaticParams() {
//   const poems = getAllPoems();

//   return poems.map((post) => ({
//     slug: post.slug,
//   }));
// }