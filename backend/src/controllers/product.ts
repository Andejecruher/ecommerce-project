import { allProducts, ourPopularProducts, gettarjetas  } from '../services/products';
import { Producto, tarjetas } from '../types';

async function getAllProducts(): Promise<Producto[]> {
    return allProducts();
}

async function getOurPopularProducts(): Promise<Producto[]> {
    return ourPopularProducts();
}

async function getpooltarjetas(): Promise<tarjetas[]> {
    return gettarjetas();
}


export { getAllProducts, getOurPopularProducts, getpooltarjetas };