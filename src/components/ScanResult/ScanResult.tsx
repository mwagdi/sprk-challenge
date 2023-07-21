import React from 'react';
import Link from 'next/link';

export interface ScanResultProps {
    code: string
    product?: string
}
const ScanResult: React.FC<ScanResultProps> = ({ code, product }) => (
    <div>
        <div>
            <p>GTIN: {code}</p>
            {product ? <p>Product found</p> : <p>Product not found</p>}
        </div>
        {!!product && <Link href={`/${product}`} />}
    </div>
);

export default ScanResult;