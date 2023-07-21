'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { BarcodeScanner, ScanResult } from 'components/index';

import styles from './page.module.scss';

const Home = () => {
    const router =  useRouter();
    const [scanning, setScanning] = useState<boolean>(false);
    const [code, setCode] = useState<string|undefined>(undefined);
    const [available, setAvailable] = useState(false);

    const onDetected = async (code: string) => {
        setCode(code);
        setScanning(false);
        const query = `
          query GetProduct($code: String!) {
            product(code: $code) {
              code
            }
          }
        `;

        try {
            const response = await fetch('/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query, variables: { code } })
            });
            const { data } = await response.json();
            setAvailable(!!data);
        }
        catch (e) {
            setAvailable(false);
        }
    };

    const onScan = (isScanning: boolean) => {
        setScanning(isScanning);
    };

  return (
    <main className={styles.main}>
        <BarcodeScanner onDetected={onDetected} onScan={onScan} />
        <ScanResult code={code} isScanning={scanning} isAvailable={available} />
    </main>
  );
};

export default Home;
