export interface Usuario {
    id?: number;
    nombre: string;
    email: string;
    password?: string;
    telefono?: string;
    direccion?: string;
    rol?: 'admin' | 'cliente';
    fecha_creacion?: Date;
    activo?: boolean;
}

export interface Producto {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    precio_descuento?: number;
    categoria_id: number;
    stock: number;
    material?: string;
    color?: string;
    dimensiones?: string;
    peso?: number;
    imagenes?: string;
    destacado?: boolean;
    activo?: boolean;
    fecha_creacion?: Date;
}

export interface tarjetas {
    id?: number;
    descripcion: string;
    avatar_url?: string;
    title?: string;
}

export interface Categoria {
    id?: number;
    nombre: string;
    descripcion?: string;
    imagen_url?: string;
    activa?: boolean;
    fecha_creacion?: Date;
}

export interface CarritoItem {
    id?: number;
    usuario_id: number;
    producto_id: number;
    cantidad: number;
    fecha_agregado?: Date;
}

export interface Pedido {
    id?: number;
    usuario_id: number;
    numero_pedido: string;
    total: number;
    estado?: 'pendiente' | 'procesando' | 'enviado' | 'entregado' | 'cancelado';
    direccion_envio: string;
    metodo_pago: 'tarjeta' | 'transferencia' | 'contraentrega';
    fecha_pedido?: Date;
    fecha_actualizacion?: Date;
}

export interface DetallePedido {
    id?: number;
    pedido_id: number;
    producto_id: number;
    cantidad: number;
    precio_unitario: number;
    subtotal: number;
}

export interface Reseña {
    id?: number;
    producto_id: number;
    usuario_id: number;
    calificacion: number;
    comentario?: string;
    fecha_creacion?: Date;
}

export interface ApiResponse<T = any> {
    status: 'success' | 'error';
    message: string;
    data?: T;
    error?: string;
}

export interface PaginationParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}

export interface ProductFilters {
    categoria_id?: number;
    minPrice?: number;
    maxPrice?: number;
    material?: string;
    color?: string;
    destacado?: boolean;
}