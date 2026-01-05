import { Router } from "express";
import { getAllProducts, getOurPopularProducts, getpooltarjetas, getpoolarticulos} from "../controllers/product";

const router = Router();


router.get("/", async (req, res) => {
    try {
        const { search, limit, page } = req.query;

        const params = {
            search: search ? String(search) : undefined,
            limit: limit ? Number(limit) : 10,
            page: page ? Number(page) : 1,
            filter: req.query.filter ? String(req.query.filter) : undefined
        };

        const products = await getAllProducts(params);
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


router.get("/popular/our", async (req, res) => {
    try {
        const products = await getOurPopularProducts();
        if (products) {
            res.json({
                success: true,
                data: products,
                message: "entranndo ala funcion de productos populares"
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


router.get("/tarjeta", async (req, res) => {
    try {
        const tarjetas = await getpooltarjetas();
        if (tarjetas) {
            res.json({
                success: true,
                data: tarjetas,
                message: "entranndo ala funcion de tarjetas"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No tarjetas found"
            });
        }
    } catch (error) {
        console.error("Error fetching tarjetas:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get("/articulos", async (req, res) => {
    try {
        const articulos = await getpoolarticulos();
        if (articulos) {
            res.json({
                success: true,
                data: articulos,
                message: "entranndo ala funcion de articulos"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No articulos found"
            });
        }
    } catch (error) {
        console.error("Error fetching articulos:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



export default router;