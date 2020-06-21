type GroupID = number;
type ProductID = number;

interface Product {
    id: ProductID;
    name: string;
    price: number;
    count: number;
    groups: GroupID[];
}

interface Group {
    id: GroupID;
    name: string;
}