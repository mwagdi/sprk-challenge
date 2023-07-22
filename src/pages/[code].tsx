import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { EditableProductField } from 'types';

import { useFetchProductData, useProductFormSubmit } from '../hooks';

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
            ...(event.target.type === 'checkbox' ? { [name]: !prevFormData[name as EditableProductField] }: { [name]: value })
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postData(code as string, formData);
    };

    return (
        <main>
            <h2>GTIN: {code}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount Multiplier
                    <input type="number" name="amount_multiplier" value={formData.amount_multiplier} onChange={handleChange}/>
                </label>
                <label>
                    Brand
                    <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
                </label>
                <label>
                    Description
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>
                <label>
                    EDEKA Article Number
                    <input type="text" name="edeka_article_number" value={formData.edeka_article_number} onChange={handleChange} />
                </label>
                <label>
                    Gross Weight
                    <input type="number" name="gross_weight" value={formData.gross_weight} onChange={handleChange}/>
                </label>
                <label>
                    Net Weight
                    <input type="number" name="net_weight" value={formData.net_weight} onChange={handleChange}/>
                </label>
                <label>
                    Packaging
                    <input type="text" name="packaging" value={formData.packaging} onChange={handleChange} />
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="requires_best_before_date"
                        checked={formData.requires_best_before_date}
                        onChange={handleChange}
                    />
                    Requires best before date
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="requires_meat_info"
                        checked={formData.requires_meat_info}
                        onChange={handleChange}
                    />
                    Requires meat info
                </label>
                <label>
                    Trade Item Unit Descriptor
                    <input type="text" name="trade_item_unit_descriptor" value={formData.trade_item_unit_descriptor} onChange={handleChange} />
                </label>
                <label>
                    Trade Item Unit Descriptor Name
                    <input type="text" name="trade_item_unit_descriptor_name" value={formData.trade_item_unit_descriptor_name} onChange={handleChange} />
                </label>
                <label>
                    Validation Status
                    <input type="text" name="validation_status" value={formData.validation_status} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default ProductPage;