import { Database } from '../config/database';
import { Producto, tarjetas } from '../types';


async function allProducts({
    search,
    limit,
    page
}: { search?: string; limit?: number; page?: number }): Promise<{
    products: Producto[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalRecords: number;
    };
}> {
    const connection = await Database.getConnection();
    const offset = (page && limit) ? (page - 1) * limit : 0;

    try {
        let sql = 'SELECT * FROM productos';
        const params: any[] = [];

        if (search) {
            sql += ' WHERE nombre LIKE ? OR descripcion LIKE ?';
            const searchTerm = `%${search}%`;
            params.push(searchTerm, searchTerm);
        }

        const limitValue = limit || 10;
        const offsetValue = offset;
        sql += ` ORDER BY id LIMIT ${limitValue} OFFSET ${offsetValue}`;

        const [rows] = await connection.execute(sql, params) as [any[], any];
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

        // obtener el total de registros para paginación
        let countSql = 'SELECT COUNT(*) as count FROM productos';
        const countParams: any[] = [];

        if (search) {
            countSql += ' WHERE nombre LIKE ? OR descripcion LIKE ?';
            const searchTerm = `%${search}%`;
            countParams.push(searchTerm, searchTerm);
        }

        const [countRows] = await connection.execute(countSql, countParams) as [any[], any];
        const totalRecords = countRows[0]?.count || 0;


        return {
            products: productos,
            pagination: {
                currentPage: page || 1,
                totalPages: limit ? Math.ceil(totalRecords / limit) : 1,
                totalRecords: totalRecords
            }
        };
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





async function gettarjetas(): Promise<tarjetas[]> {
    console.log('🎯 gettarjetas() - MODO SEGURO ACTIVADO');

    let connection;

    try {
        // 1. Intentar con la tabla "tarjetas" (plural)
        connection = await Database.getConnection();

        try {
            const sql = `SELECT * FROM tarjetas LIMIT 5`;
            console.log(`📝 Intentando SQL: ${sql}`);

            const [rows] = await connection.execute(sql) as [any[], any];
            console.log(`✅ Éxito con "tarjetas": ${rows.length} filas`);

            return rows.map(row => ({
                id: row.id || 0,
                title: row.title || 'Test',
                descripcion: row.descripcion || 'Descripción test',
                avatar_url: row.avatar_url || 'https://ui-avatars.com/api/?name=Test',
                calificacion: row.calificacion || 4.0
            }));

        } catch (error1: any) {
            console.log(`❌ Falló con "tarjetas": ${error1.message}`);

            // 2. Intentar con "tarjeta" (singular)
            try {
                const sql2 = `SELECT * FROM tarjeta LIMIT 5`;
                console.log(`📝 Intentando SQL: ${sql2}`);

                const [rows2] = await connection.execute(sql2) as [any[], any];
                console.log(`✅ Éxito con "tarjeta": ${rows2.length} filas`);

                return rows2.map(row => ({
                    id: row.id || 0,
                    title: row.title || row.nombre || 'Test',
                    descripcion: row.descripcion || row.comentario || 'Descripción test',
                    avatar_url: row.avatar_url || row.imagen || 'https://ui-avatars.com/api/?name=Test',
                    calificacion: row.calificacion || row.rating || 4.0
                }));

            } catch (error2: any) {
                console.log(`❌ También falló con "tarjeta": ${error2.message}`);
                throw new Error(`Ambas tablas fallaron: tarjetas->${error1.message}, tarjeta->${error2.message}`);
            }
        }



    } finally {
        if (connection) {
            connection.release();
            console.log('🔌 Conexión liberada');
        }
    }
}

export { allProducts, gettarjetas, ourPopularProducts };
