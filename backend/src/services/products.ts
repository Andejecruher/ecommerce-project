import { Database } from '../config/database';
import { Producto, tarjetas } from '../types';


async function allProducts(): Promise<Producto[]> {
    const connection = await Database.getConnection();
    const limit = 10; // Limitar a 100 productos por consulta
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

export { allProducts, ourPopularProducts, gettarjetas };