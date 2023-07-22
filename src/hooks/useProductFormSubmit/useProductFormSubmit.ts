import { useState } from 'react';
import { EditableProduct } from 'types';

export const useProductFormSubmit = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null|Error>(null);
    const [response, setResponse] = useState(null);

    const postData = async (code: string, data: EditableProduct) => {
        try {
            const mutation = `
                  mutation EditProduct($code: String!, $data: EditProductInput!) {
                    editProduct(code: $code, data: $data) {
                      code
                      amount_multiplier
                      brand
                      description
                      edeka_article_number
                      gross_weight
                      net_weight
                      packaging
                      requires_best_before_date
                      requires_meat_info
                      trade_item_unit_descriptor
                      trade_item_unit_descriptor_name
                      validation_status
                    }
                  }
                `;

            const response = await fetch('/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: mutation, variables: { code, data } })
            });
            const { data: { editProduct } } = await response.json();

            setResponse(editProduct);
            setLoading(false);
        } catch (error) {
            if(error instanceof Error) {
                setError(error);
            }
            setLoading(false);
        }
    };
    
    return { postData, response, loading, error };
};