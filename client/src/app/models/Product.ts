export class Products {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    type?: string;
    brand: string;
    quantityInStock?: number;

    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.price = 0;
        this.pictureUrl = "";
        this.type = "";
        this.brand = "";
        this.quantityInStock = 0;
    }
}