"use client";
import styles from './page.module.css';
import {BarcodeScanner} from "components/index";
import {useRouter} from "next/navigation";

const Home = () => {
    const router =  useRouter();

    const onDetected = (code: string) => {
        router.push(`/${code}`);
    };

  return (
    <main className={styles.main}>
      <BarcodeScanner onDetected={onDetected} />
    </main>
  );
};

export default Home;
