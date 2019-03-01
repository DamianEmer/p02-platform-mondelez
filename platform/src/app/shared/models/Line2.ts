export interface Line2 {
    id: number;
    line: string;
    category: string;
    technology: string;
    number: string,
    products: Product[],
    breakdowns: BreakDown[]
}

export interface Product {
    id: number;
    description: string;
    kgmin: number;
    kgcj: number;
}

export interface BreakDown {
    id: number;
    description: string;
}