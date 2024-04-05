import React from "react";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Categories from "@/components/categories/Categories";
import Posts from "@/components/posts/Posts";
import Sidebar from "@/components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Categories />
      <div className={styles.homeContainer}>
        <Posts />
        <Sidebar/>
      </div>
    </div>
  );
};

export default Home;
