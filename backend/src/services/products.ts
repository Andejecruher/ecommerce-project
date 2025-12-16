import { Database } from '../config/database';
import { Producto } from '../types';


async function allProducts(): Promise<Producto[]> {
    const connection = await Database.getConnection();
    const limit = 100; // Limitar a 100 productos por consulta
    try {
        // Evitar usar placeholder en LIMIT para prevenir problemas con
        // algunos controladores/servidores MySQL al ejecutar statements
        const sql = `SELECT * FROM productos LIMIT ${limit}`;
        const [rows] = await connection.execute(sql) as [any[], any];
        const productos: Producto[] = rows.map(row => ({
            id: row.id,
            nombre: row.nombre,
            descripcion: row.descripcion,
            precio: row.precio,
            categoria_id: row.categoria_id,
            stock: row.stock,
            color: row.color,
            dimensiones: row.dimensiones,
            peso: row.peso,
            imagenes: row.imagenes,
            destacado: !!row.destacado,
            activo: !!row.activo,
            fecha_creacion: row.fecha_creacion
        }));

        return productos;
    } finally {
        connection.release();
    }
}

async function productById(id: number): Promise<Producto | null> {
    // Implementation for fetching a product by ID
    const connection = await Database.getConnection();

    try {
        const sql = `SELECT * FROM productos WHERE id = ${id} LIMIT 1`;
        const [rows] = await connection.execute(sql) as [any[], any];
        const productos: Producto[] = rows.map(row => ({
            id: row.id,
            nombre: row.nombre,
            descripcion: row.descripcion,
            precio: row.precio,
            categoria_id: row.categoria_id,
            stock: row.stock,
            color: row.color,
            dimensiones: row.dimensiones,
            peso: row.peso,
            imagenes: row.imagenes,
            destacado: !!row.destacado,
            activo: !!row.activo,
            fecha_creacion: row.fecha_creacion
        }));

        return productos[0];
    } finally {
        connection.release();
    }
}

async function ourPopularProducts(): Promise<Producto[]> {
    // Implementation for fetching a product by ID
    const connection = await Database.getConnection();

    try {
        const sql = `SELECT * FROM productos WHERE destacado = 1 LIMIT 10`;
        const [rows] = await connection.execute(sql) as [any[], any];
        const productos: Producto[] = rows.map(row => ({
            id: row.id,
            nombre: row.nombre,
            descripcion: row.descripcion,
            precio: row.precio,
            categoria_id: row.categoria_id,
            stock: row.stock,
            color: row.color,
            dimensiones: row.dimensiones,
            peso: row.peso,
            imagenes: row.imagenes,
            destacado: !!row.destacado,
            activo: !!row.activo,
            fecha_creacion: row.fecha_creacion
        }));

        return productos;
    } finally {
        connection.release();
    }
}

async function productsByCategory(categoryId: number): Promise<Producto[]> {
    const connection = await Database.getConnection();
    try {
        const sql = `SELECT * FROM productos WHERE categoria_id = ?`;
        const [rows] = await connection.execute(sql, [categoryId]) as [any[], any];
        const productos: Producto[] = rows.map(row => ({
            id: row.id,
            nombre: row.nombre,
            descripcion: row.descripcion,
            precio: row.precio,
            categoria_id: row.categoria_id,
            stock: row.stock,
            color: row.color,
            dimensiones: row.dimensiones,
            peso: row.peso,
            imagenes: row.imagenes,
            destacado: !!row.destacado,
            activo: !!row.activo,
            fecha_creacion: row.fecha_creacion
        }));

        return productos;
    } finally {
        connection.release();
    }
}


export { allProducts, ourPopularProducts, productById, productsByCategory };

