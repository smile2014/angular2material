export class Product {
    id: number;
    name: string;
    imageName: string;
    tags: [string];
    dimensions: {
        length: number,
        width: number,
        height: number
    };
    warehouseLocation:{
        latitude:number,
        longitude:number
    }
}