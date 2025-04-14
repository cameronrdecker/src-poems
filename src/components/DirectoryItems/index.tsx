'use client'
import { Slug } from "@/utils/files";
import Link from "next/link";

export default function DirectoryItems({slugs}:{slugs: Slug[]}){
  
    console.log(slugs)
    return (
      <ul marker-="open tree">
        {slugs.map((slug: string | { directory: string, files: [string | object]})=>{
          let label;
  
          if(typeof slug == 'string'){
            const stripped = slug.replace(/\.md$/, "")
            label = <Link href={`/${stripped}`}>{stripped}</Link>
          }
          else if(typeof slug == 'object'){
            label = <Link href={'#'} onClick={()=>{console.log('clicked!!!')}} shallow={true}>{slug.directory}</Link>
          }
          
          return (
            <li key={typeof slug == 'string' ? label : slug.directory}>
              {label}
            </li>
          )
        })}
        
        {/* {directories.map((directory)=>{
          return <li key={directory}><Link href={''} >{directory}</Link></li>
        })} */}
        
      </ul>
    )
  }