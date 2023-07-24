import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { EditableProductField } from 'types';

import { ProductForm } from 'components/index';

import { useFetchProductData, useProductFormSubmit } from '../hooks';

import styles from './styles/ProductPage.module.scss';

const ProductPage = () => {
    const { query:{ code } } = useRouter();
    const { data, loading, error } = useFetchProductData(code as string);
    const { postData, response } = useProductFormSubmit();

    const [formData, setFormData] = useState(data);

    useEffect(() => {
        setFormData(data);
    }, [data]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            ...(event.target.type === 'checkbox' ? { [name]: !prevFormData[name as EditableProductField] }: {}),
            ...(event.target.type === 'number' ? { [name]: parseInt(value) }: {}),
            ...(event.target.type === 'text' ? { [name]: value }: {})
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postData(code as string, formData);
    };

    return (
        <main className={styles['product-page']}>
            <h2>GTIN: {code}</h2>
            <div className={styles['product-page__wrapper']}>
                <ProductForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
        </main>
    );
};

export default ProductPage;