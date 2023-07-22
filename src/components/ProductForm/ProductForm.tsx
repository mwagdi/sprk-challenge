import { ChangeEvent, FC, FormEvent } from 'react';
import { EditableProduct } from 'types';

interface ProductFormProps {
    formData: EditableProduct
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const ProductForm: FC<ProductFormProps> = ({ formData, handleChange, handleSubmit }) => {
    return (
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
    );
};