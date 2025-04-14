'use client'
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

type DirectoryItem = {
  label: string
  path?: string
  items?: DirectoryItem[]
}

type Directory = {
  label: string
  items: (File | Directory)[]
}

export default function Menu({}) {
  const pathName = usePathname();

  return (
    <nav className={styles.menu} box-="square contain:!top" >
      <strong is-="badge" style={{marginBottom: '1vh'}}>/src</strong>
      <ul marker-="open tree" >
        {MENU_ITEMS.map((item)=>{
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

  console.log(paths)
  const [isOpen, toggleOpen ] = useState(paths?.includes(pathName));

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


const MENU_ITEMS: DirectoryItem[] = [
  {
    label: 'main',
    path: '/main'
  },
  {
    label: 'other',
    items: [
      {
        label: 'test1',
        path: '/other/test1'
      },
      {
        label: 'test2',
        path: '/other/test2'
      },
      {
        label: 'test3',
        path: '/other/test3'
      },
      {
        label: 'sub',
        items: [
          {
            label: 'test4',
            path: '/other/sub/test4'
          },
          {
            label: 'test5',
            path: '/other/sub/test5'
          },
          {
            label: 'test6',
            path: '/other/sub/test6'
          },
          
        ]
      }
    ]
  }
]