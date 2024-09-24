import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then((json)=>{
                setProduct(json)
                console.log(json)
            })
    }, [id]);

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
        </div>
    );
};

export default ProductPage;
