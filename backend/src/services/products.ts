import { Database } from '../config/database';
import { Producto } from '../types';


async function getAllProducts(): Promise<Producto[]> {
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

export { getAllProducts };
