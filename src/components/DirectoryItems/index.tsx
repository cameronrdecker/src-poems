'use client'
import { Slug } from "@/utils/files";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from '../Menu/Menu.module.css'
import type { Directory } from "@/utils/files";
import { useState } from "react";
import { dir } from "console";

export default function DirectoryItems({slugs}:{slugs: Slug[]}){
  const { slug:selectedSlug } = useParams<{ slug: string }>()

    return (
      <ul marker-="open tree" >
        {slugs.map((slug: string | Directory)=>{
          let label;
  
          if(typeof slug == 'string'){
            return <File key={slug} file={slug} selectedSlug={selectedSlug}/>
          }
          else if(typeof slug == 'object'){
            return <Directory key={slug.directory} directory={slug} selectedSlug={selectedSlug}/>
          }
          
        })}
        
      </ul>
    )
  }

  const File = ({file, selectedSlug}: {file: string, selectedSlug: string}) => {
    const stripped = file.replace(/\.md$/, "")
    let label;

    if(stripped == selectedSlug){
        label = <strong is-="badge">{stripped}</strong>
    }
    else{
        label = <Link href={`/${stripped}`}>{stripped}</Link>
    }
    return (
        <li className={styles.li} key={stripped}>
            {label}
        </li>
    )
  }

  const Directory = ({directory, selectedSlug}: { directory: Directory, selectedSlug: string}) => {
    const [isOpen, toggleOpen ] = useState(false);
    
    //splitting files from directories so directories can be listed last
    const actualFiles = directory.files.filter((file)=> typeof file == 'string')
    const directories = directory.files.filter((file)=> typeof file == 'object')

    return(
        <li className={styles.li}> 
            
            <span onClick={()=>{ toggleOpen(!isOpen)}} className={styles.directory}>
                {directory.directory} 
            </span> <i style={{fontSize:'.7em'}} className={`nf ${isOpen ? 'nf-fa-caret_down' : 'nf-fa-caret_right' }`}/>

            <ul marker-="open tree" style={{display: isOpen ? 'block' : 'none'}} >
                {[...actualFiles, ...directories].map((file)=>{
                    let label;
                    if(typeof file == 'string'){
                        return <File key={file} file={file} selectedSlug={selectedSlug}/>
                      }
                    else if(typeof file == 'object'){
                        return <Directory key={file.directory} directory={file} selectedSlug={selectedSlug} />
                    }
                })}
            </ul>
        </li>
    )
  }