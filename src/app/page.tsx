'use client';
import styles from './page.module.css';
import { BarcodeScanner } from 'components/index';
import { useRouter } from 'next/navigation';
import ScanResult from 'components/ScanResult/ScanResult';
import { useState } from 'react';

const Home = () => {
    const router =  useRouter();
    const [scanning, setScanning] = useState(false);

    const onDetected = (code: string) => {
        router.push(`/${code}`);
    };

    const onScan = (isScanning: boolean) => {
        console.log({ isScanning });
    };

  return (
    <main className={styles.main}>
        <BarcodeScanner onDetected={onDetected} onScan={onScan} />
        {/*<ScanResult code={} />*/}
    </main>
  );
};

export default Home;
