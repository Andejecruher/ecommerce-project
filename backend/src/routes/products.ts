import { Router } from "express";
import { getAllProducts, getOurPopularProducts, getProductById, getProductsByCategory } from "../controllers/product";

const router = Router();

// Example route to get all products
router.get("/", async (req, res) => {
    try {
        const products = await getAllProducts();
        if (products) {
            res.json({
                success: true,
                data: products,
                message: "Products retrieved successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No products found"
            });
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/:id", async (req, res) => {
    const productId = req.params.id;
    // Here you would typically call a service to get the product by ID
    try {
        const product = await getProductById(Number(productId));
        if (product) {
            res.json({
                success: true,
                data: product,
                message: "Product retrieved successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/popular/our", async (req, res) => {
    try {
        const products = await getOurPopularProducts();
        if (products) {
            res.json({
                success: true,
                data: products,
                message: "Popular products retrieved successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No popular products found"
            });
        }
    } catch (error) {
        console.error("Error fetching popular products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/category/:categoryId", async (req, res) => {
    const categoryId = req.params.categoryId;
    try {
        const products = await getProductsByCategory(Number(categoryId));
        if (products) {
            res.json({
                success: true,
                data: products,
                message: "Products by category retrieved successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No products found for this category"
            });
        }
    } catch (error) {
        console.error("Error fetching products by category:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;