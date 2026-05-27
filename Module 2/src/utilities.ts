 type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string;
 }

 type ProductSummary = Pick<Product, "id" | "name" | "price">;

 type ProductWithoutStock = Omit<Product, "stock">;

 type ReadonlyProduct = Readonly<Product>;
 type PartialProduct = Partial<Product>;

 type ProductWithColor= Required<Product>;

 const product: ProductWithColor = {
    id: 222,
    name: "Laptop",
    price: 1500,
    stock: 10,
    color: "Silver"
 }

 const emptyObj: Record<string, unknown> = {};