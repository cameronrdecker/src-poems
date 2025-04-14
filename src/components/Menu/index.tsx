'use client'
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import MENU_ITEMS from "@/app/menuItems";

type DirectoryItem = {
  label: string
  path?: string
  items?: DirectoryItem[]
}

export default function Menu({}) {
  const pathName = usePathname();
  const items:DirectoryItem[] = MENU_ITEMS
  return (
    <nav className={styles.menu} box-="square contain:!top" >
      <strong is-="badge" style={{marginBottom: '1vh'}}>/src</strong>
      <ul marker-="open tree" >
        {items.map((item)=>{
          if(item.path){
            return <File key={item.label} file={item} pathName={pathName}/>
          }
          else{
            return <Directory key={item.label} directory={item} pathName={pathName} />
          }

        })}
      </ul>
    </nav>
  );
}

const File = ({file, pathName}: {file: DirectoryItem, pathName: string}) => {

  let label;

  if(file.path == pathName){
    label = <strong is-="badge">{file.label}</strong>
  }
  else{
    label = <Link href={file.path || ''}>{file.label}</Link>
  }
  return (
    <li className={styles.li}>
        {label}
    </li>
  )
}

const getPaths:(items:DirectoryItem[]) => any = (items) =>{
  return items?.map((item)=>{
    if(item.path){
      return item.path
    }

    else if(item.items){
      return getPaths(item.items)
    }

  })
}

const Directory = ({directory, pathName}: { directory: DirectoryItem, pathName: string}) => {
  const paths = directory.items && getPaths(directory.items).flat()

  const [isOpen, toggleOpen ] = useState(paths?.includes(pathName));

  useEffect(()=>{
    if(paths?.includes(pathName)){ toggleOpen(true)}
  },[pathName])

  return(
      <li className={styles.li}> 
          
          <span onClick={()=>{ toggleOpen(!isOpen)}} className={styles.directory}>
              {directory.label} 
          </span> <i style={{fontSize:'.7em'}} className={`nf ${isOpen ? 'nf-fa-caret_down' : 'nf-fa-caret_right' }`}/>

          <ul marker-="open tree" style={{display: isOpen ? 'block' : 'none'}} >
              {directory.items?.map((item)=>{
                if(item.path){
                  return <File key={item.label} file={item} pathName={pathName}/>
                }
                else{
                  return <Directory key={item.label} directory={item} pathName={pathName} />
                }
              })}
          </ul>
      </li>
  )
}