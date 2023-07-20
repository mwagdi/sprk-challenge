"use client";
import styles from './page.module.css'
import {BarcodeScanner} from "components/index";

const onDetected = (code: string) => {
  console.log({code})
}

export default function Home() {
  return (
    <main className={styles.main}>
      <BarcodeScanner onDetected={onDetected} />
    </main>
  )
}
