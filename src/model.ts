type GroupID = number;
type ProductID = number;

interface Product {
    id: ProductID;
    name: string;
    price: number;
    description?: string;
    count: number;
    groups: GroupID[];
}

type ProductChange = Partial<Omit<Product, "id">>

interface Group {
    id: GroupID;
    name: string;
}