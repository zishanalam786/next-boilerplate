"use client";
import { ThreeDCardDemo } from "@/components/Card";
import styles from './page.module.css';

const Home=()=> {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Boilerplate</h1>
      <p className={styles.homeWelcome}>Welcome to boilerplate!</p>
      <ThreeDCardDemo 
      />
    </div>
  );
}
export default Home;
//EOF
