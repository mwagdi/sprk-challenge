import { FC } from 'react';
import { Product } from 'types';

import styles from './ResponseViewer.module.scss';

interface ResponseViewerProps {
    loading: boolean
    error: Error | null
    response: Product | null
}

export const ResponseViewer: FC<ResponseViewerProps> = ({ loading, error, response }) => (
    <div className={styles['response-viewer']}>
        {loading && 'Loading...'}
        {!!error && 'An error has occurred'}
        {!!response && (
            <div className={styles['response-viewer__wrapper']}>
                <pre>
                <code>{JSON.stringify(response, null, 2)}</code>
            </pre>
            </div>
        )}
    </div>
);