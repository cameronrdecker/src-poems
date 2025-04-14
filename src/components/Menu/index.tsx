import styles from "./Menu.module.css";
import { getPoemSlugs, poemsDirectory } from "@/utils/files";
import DirectoryItems from "../DirectoryItems";


export default function Menu() {
  
  const slugs = getPoemSlugs(poemsDirectory)
    return (
      <nav className={styles.menu} box-="square contain:!top" >
        <strong is-="badge" style={{marginBottom: '1vh'}}>/src</strong>
        <DirectoryItems slugs={slugs}/>
      </nav>
    );
  }


