export interface Product {
    id: string;
    amount_multiplier: number;
    brand: string;
    categ_id: number;
    category_id: string;
    code: string;
    description: string;
    edeka_article_number:boolean;
    gross_weight: number;
    net_weight: number;
    notes:boolean;
    packaging: string;
    related_products: any[];
    requires_best_before_date: boolean;
    best_before_date?: string;
    requires_meat_info: boolean;
    trade_item_unit_descriptor: string;
    trade_item_unit_descriptor_name: string;
    type: string;
    unit_name: string;
    validation_status: string;
}