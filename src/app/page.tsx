import Link from "next/link";

export default function Main() {
  return (
    <div is-="typography-block" style={{margin: '2ch'}} >
        <em>/src</em> is a collection of poems by Cameron Decker. Start with <Link href={'/main'}>main</Link>.
    </div>
  );
}
