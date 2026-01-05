import { promises } from 'dns';
import { allProducts, gettarjetas, ourPopularProducts, getArticulos } from '../services/products';
import { Producto, tarjetas, articulos } from '../types';

async function getAllProducts({ search, limit, page, filter, }: { search?: string; limit?: number; page?: number; filter?: string }): Promise<{
    products: Producto[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalRecords: number;
    };
}> {
    return allProducts({
        search,
        limit,
        page,
        filter,
    });
}

async function getOurPopularProducts(): Promise<Producto[]> {
    return ourPopularProducts();
}

async function getpooltarjetas(): Promise<tarjetas[]> {
    return gettarjetas();
}

async function getpoolarticulos(): Promise<articulos[]> {
    return getArticulos();
}

export { getAllProducts, getOurPopularProducts, getpooltarjetas, getpoolarticulos };