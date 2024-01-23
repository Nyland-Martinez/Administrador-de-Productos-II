'use client';
import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react';  
import axios from 'axios';

const ProductosPag = () => {
    const [productos, setProductos] = useState([]);

    const getProductos = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/productos`);
            const result = await response.data;
            setProductos(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductos();    
    }, []);

    return (
        <Fragment>
            <h1>Productos Disponibles</h1>
            <ul>
                {productos.map((item, index) => (
                    <li key={index}>
                        <h3>
                            <Link href={`/productos/${item._id}`}>{item.title}</Link>
                        </h3>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default ProductosPag;
