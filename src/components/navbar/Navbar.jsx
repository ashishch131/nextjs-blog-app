"use client"
import Link from "next/link";
import styles from "./navbar.module.css";
import { navLinks } from "@/dummyData";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();

  const user = true;
  return (
    <div className={styles.navbar}>
    <div className={styles.navbarWrapper}>
    <div className={styles.navLeft}>
      <div className={styles.logo}>ASHISH :)</div>
    </div>
    <div className={styles.navCenter}>
      <ul className={styles.navlinks}>
        <li className={styles.navLink}>
          {navLinks.map((item) => (
            <Link href={item.path} key={item.id}
              className={`${styles.link} ${pathname === item.path && styles.active}`}>
              {item.title}
            </Link>
          ))}
          <span className="logout">Logout</span>
        </li>
      </ul>
    </div>
    <div className={styles.navRight}>
      {user ? (
        <Link className={styles.navRight} href={"/settings"}>
          <img
            className={styles.img}
            src="https://cdn.dribbble.com/userupload/9982640/file/original-03d49d6f18e21c133798adc0bbac3fe1.jpg?resize=1024x768"
            alt=""
          />
          <SearchIcon className={styles.icon} />
        </Link>
      ) : (
        <>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </>
      )}
    </div>
  </div>
    </div>
  );
};

export default Navbar;
        
