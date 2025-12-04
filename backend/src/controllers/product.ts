
import { Request, Response } from 'express';
import { getAllProducts as fetchAllProducts } from '../services/products';

async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        const products = await fetchAllProducts();
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export { getAllProducts };
