import { ChangeEvent, FC, FormEvent } from 'react';
import { EditableProduct } from 'types';

import { Checkbox } from '../Checkbox/Checkbox';
import { FormInput } from '../FormInput/FormInput';

import styles from './ProductForm.module.scss';

interface ProductFormProps {
    formData: EditableProduct
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const ProductForm: FC<ProductFormProps> = ({ formData, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={styles['product-form']}>
            <FormInput label="Amount Multiplier" type="number" name="amount_multiplier" value={formData.amount_multiplier} onChange={handleChange} />
            <FormInput label="Brand" type="text" name="brand" value={formData.brand} onChange={handleChange} />
            <FormInput label="Description" type="text" name="description" value={formData.description} onChange={handleChange} />
            <FormInput label="EDEKA Article Number" type="text" name="edeka_article_number" value={formData.edeka_article_number} onChange={handleChange} />
            <FormInput label="Gross Weight" type="number" name="gross_weight" value={formData.gross_weight} onChange={handleChange} />
            <FormInput label="Net Weight" type="number" name="net_weight" value={formData.net_weight} onChange={handleChange} />
            <FormInput label="Packaging" type="text" name="packaging" value={formData.packaging} onChange={handleChange} />
            <Checkbox label="Requires best before date" name="requires_best_before_date" checked={formData.requires_best_before_date} onChange={handleChange} />
            <Checkbox label="Requires Meat Info" name="requires_meat_info" checked={formData.requires_meat_info} onChange={handleChange} />
            <FormInput label="Trade Item Unit Descriptor" type="text" name="trade_item_unit_descriptor" value={formData.trade_item_unit_descriptor} onChange={handleChange} />
            <FormInput label="Trade Item Unit Descriptor Name" type="text" name="trade_item_unit_descriptor_name" value={formData.trade_item_unit_descriptor_name} onChange={handleChange} />
            <FormInput label="Validation Status" type="text" name="validation_status" value={formData.validation_status} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};