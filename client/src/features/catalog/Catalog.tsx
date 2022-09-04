import { useEffect, useState } from "react";
import { Products } from "../../app/models/Product"
import ProductList from "./ProductList";

// interface props {
//     products: Products[],
//     addProducts: () => void;
// }


export default function Catalog() {
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    // function addProduct() {
    //     setProducts(ps => [...ps,
    //     {
    //         id: ps.length + 101,
    //         name: "Products" + (ps.length + 1),
    //         price: (ps.length + 1) * 100.00,
    //         brand: 'some brand',
    //         description: 'some description',
    //         pictureUrl: 'http://picsum.photos/200'
    //     }])
    // }
    return (
        <>
            <ProductList products={products} />
        </>
    )
}