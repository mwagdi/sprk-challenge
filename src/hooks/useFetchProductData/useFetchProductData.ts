import { useEffect, useState } from 'react';

export const useFetchProductData = (code: string) => {
    const [data, setData] = useState({
        amount_multiplier: 0,
        brand: '',
        description: '',
        edeka_article_number: '',
        gross_weight: 0,
        net_weight: 0,
        packaging: '',
        requires_best_before_date: false,
        requires_meat_info: false,
        trade_item_unit_descriptor: '',
        trade_item_unit_descriptor_name: '',
        validation_status: ''
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null|Error>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = `
                  query GetProduct($code: String!) {
                    product(code: $code) {
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
                    body: JSON.stringify({ query, variables: { code } })
                });
                const { data: { product } } = await response.json();

                setData(product);
                setLoading(false);
            } catch (error) {
                if(error instanceof Error) {
                    setError(error);
                }
                setLoading(false);
            }
        };

        if(code) fetchData();
    }, [code]);

    return { data, loading, error };
};