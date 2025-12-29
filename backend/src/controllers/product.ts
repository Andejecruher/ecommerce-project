import { allProducts, gettarjetas, ourPopularProducts } from '../services/products';
import { Producto, tarjetas } from '../types';

async function getAllProducts({ search, limit, page }: { search?: string; limit?: number; page?: number }): Promise<{
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
    });
}

async function getOurPopularProducts(): Promise<Producto[]> {
    return ourPopularProducts();
}

async function getpooltarjetas(): Promise<tarjetas[]> {
    return gettarjetas();
}


export { getAllProducts, getOurPopularProducts, getpooltarjetas };
