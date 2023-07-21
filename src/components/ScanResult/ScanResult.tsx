import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import styles from './ScanResult.module.scss';

interface ScanResultProps {
    code?: string
    isScanning: boolean
    isAvailable: boolean;
}
const ScanResult: React.FC<ScanResultProps> = ({ code, isScanning, isAvailable }) => {
    const found = isAvailable && !isScanning && !!code;
    const notFound = !isAvailable && !isScanning && !!code;

    return (
        <div className={styles['scan-result']}>
            <div className={styles['scan-result__indicator']}>
                <p className={styles['scan-result__message']}>{isScanning ? 'Scanning...' : `GTIN: ${code || '-----'}`}</p>
                {found && <p className={cn(styles['scan-result__message'], styles['scan-result__message--green'])}>Product found</p>}
                {notFound && <p className={cn(styles['scan-result__message'], styles['scan-result__message--red'])}>Product not found</p>}
            </div>
            {found && <Link className={styles['scan-result__button']} href={`/${code}`}>Edit Product</Link>}
        </div>
    );
};

export default ScanResult;