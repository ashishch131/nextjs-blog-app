import styles from "./categories.module.css";
import  BorderAllIcon  from "@mui/icons-material/BorderAll";
import BrushIcon from '@mui/icons-material/Brush';
import Groups3Icon from '@mui/icons-material/Groups3';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.catWrapper}>
        <ul className={styles.catItems}>

          <li className={styles.catItem} style={{color: "#FADBD8"}}>
            <BorderAllIcon className={styles.catIcon} />
            <span className={styles.catText}>All</span>
          </li>
          <li className={styles.catItem} style={{color: "#58D68D"}}>
            <BrushIcon className={styles.catIcon} />
            <span className={styles.catText}>Art</span>
          </li>
          <li className={styles.catItem} style={{color: "#EDBB99 "}}>
            <Groups3Icon className={styles.catIcon} />
            <span className={styles.catText}>Culture</span>
          </li>
          <li className={styles.catItem} style={{color: "#76D7C4"}}>
            <AirportShuttleIcon className={styles.catIcon} />
            <span className={styles.catText}>Travel</span>
          </li>
          <li className={styles.catItem} style={{color: "#EC7063"}}>
            <ShoppingBagIcon className={styles.catIcon} />
            <span className={styles.catText}>Fashion</span>
          </li>
          <li className={styles.catItem} style={{color: "#58D68D"}}>
            <SportsBaseballIcon className={styles.catIcon} />
            <span className={styles.catText}>Sport</span>
          </li>
          <li className={styles.catItem} style={{color: "#AF7AC5"}}>
            <SettingsEthernetIcon className={styles.catIcon} />
            <span className={styles.catText}>Coding</span>
          </li>
          <li className={styles.catItem} style={{color: "#E8DAEF"}}>
            <FastfoodIcon className={styles.catIcon} />
            <span className={styles.catText}>Food</span>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Categories;
