
import { allProducts, ourPopularProducts, productById, productsByCategory } from '../services/products';
import { Producto } from '../types';

async function getAllProducts(): Promise<Producto[]> {
    return allProducts();
}

async function getProductById(id: number): Promise<Producto | null> {
    // Implementation for fetching a product by ID
    return productById(id);
}

async function getOurPopularProducts(): Promise<Producto[]> {
    return ourPopularProducts();
}

async function getProductsByCategory(categoryId: number): Promise<Producto[]> {
    // Implementation for fetching products by category
    return productsByCategory(categoryId);
}

export { getAllProducts, getOurPopularProducts, getProductById, getProductsByCategory };
