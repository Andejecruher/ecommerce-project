
import { allProducts, ourPopularProducts, productById, productsByCategory, productName, getColor } from '../services/products';
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

async function getCategoryById(categoryId: number): Promise<Producto[]> {
    // Implementation for fetching products by category ID
    return productsByCategory(categoryId);
}

async function getName(nombre: string): Promise<Producto | null> {
    // Implementation for fetching product name by some criteria
    return productName(nombre); // Placeholder implementation
}

async function getproductColor(color: string): Promise<Producto | null> {
    // Implementation for fetching product by color
    return getColor(color); // Placeholder implementation
}


export { getAllProducts, getOurPopularProducts, getProductById, getProductsByCategory , getCategoryById, getName, getproductColor };