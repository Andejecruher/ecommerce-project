import { Router } from "express";
import { getAllProducts } from "../controllers/product";

const router = Router();

// Example route to get all products
router.get("/", async (req, res) => {
    const products = await getAllProducts(req, res);
    res.json({
        success: true,
        data: products,
        message: "Products retrieved successfully"
    });
});

export default router;