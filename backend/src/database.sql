

-- Crear base de datos
CREATE DATABASE IF NOT EXISTS ecommerce_muebles;
USE ecommerce_muebles;

-- -- Tabla de usuarios
-- CREATE TABLE usuarios (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     nombre VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     telefono VARCHAR(20),
--     direccion TEXT,
--     rol ENUM('admin', 'cliente') DEFAULT 'cliente',
--     fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     activo BOOLEAN DEFAULT TRUE
-- );

-- Tabla de categorías
CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    activa BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de productos
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    precio_descuento DECIMAL(10, 2),
    categoria_id INT,
    stock INT DEFAULT 0,
    material VARCHAR(100),
    color VARCHAR(50),
    dimensiones VARCHAR(100),
    peso DECIMAL(8, 2),
    imagenes TEXT,
    destacado BOOLEAN DEFAULT FALSE,
    activo BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- -- Tabla de reseñas
-- CREATE TABLE reseñas (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     producto_id INT NOT NULL,
--     usuario_id INT NOT NULL,
--     calificacion INT CHECK (calificacion >= 1 AND calificacion <= 5),
--     comentario TEXT,
--     fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (producto_id) REFERENCES productos(id),
--     FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
-- );

-- -- Tabla de carrito
-- CREATE TABLE carrito (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     usuario_id INT NOT NULL,
--     producto_id INT NOT NULL,
--     cantidad INT DEFAULT 1,
--     fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
--     FOREIGN KEY (producto_id) REFERENCES productos(id),
--     UNIQUE KEY unique_carrito_item (usuario_id, producto_id)
-- );

-- -- Tabla de pedidos
-- CREATE TABLE pedidos (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     usuario_id INT NOT NULL,
--     numero_pedido VARCHAR(20) UNIQUE NOT NULL,
--     total DECIMAL(10, 2) NOT NULL,
--     estado ENUM('pendiente', 'procesando', 'enviado', 'entregado', 'cancelado') DEFAULT 'pendiente',
--     direccion_envio TEXT NOT NULL,
--     metodo_pago ENUM('tarjeta', 'transferencia', 'contraentrega') NOT NULL,
--     fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
-- );

-- -- Tabla de detalles del pedido
-- CREATE TABLE detalles_pedido (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     pedido_id INT NOT NULL,
--     producto_id INT NOT NULL,
--     cantidad INT NOT NULL,
--     precio_unitario DECIMAL(10, 2) NOT NULL,
--     subtotal DECIMAL(10, 2) NOT NULL,
--     FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
--     FOREIGN KEY (producto_id) REFERENCES productos(id)
-- );

-- Insertar datos iniciales
INSERT INTO categorias (nombre, descripcion) VALUES
('Sofás', 'Sofás cómodos y elegantes para tu sala'),
('Mesas', 'Mesas de centro, comedor y auxiliares'),
('Sillas', 'Sillas para comedor y oficina'),
('Camas', 'Camas y cabeceros'),
('Armarios', 'Armarios y guardarropas');

-- -- Insertar usuario admin (password: Admin123)
-- INSERT INTO usuarios (nombre, email, password, rol) VALUES
-- ('Administrador', 'admin@muebles.com', '$2b$10$TuHashDeContraseñaGenerado', 'admin');'

INSERT INTO productos (nombre, descripcion, precio, categoria_id, stock, material, color, dimensiones, peso, imagenes, destacado) VALUES
('Sofá Moderno', 'Sofá de diseño moderno y cómodo', 499.99, 1, 10, 'Tela', 'Gris', '200x90x100 cm', 50.0, 'https://picsum.photos/200/300', TRUE),
('Mesa de Centro', 'Mesa de centro elegante', 199.99, 2, 15, 'Madera', 'Marrón', '120x60x45 cm', 30.0, 'https://picsum.photos/200/300', FALSE),
('Silla de Oficina', 'Silla ergonómica para oficina', 149.99, 3, 20, 'Cuero', 'Negro', '60x60x110 cm', 15.0, 'https://picsum.photos/200/300', TRUE),
('Cama Doble', 'Cama doble con cabecero acolchado', 799.99, 4, 5, 'Madera y Tela', 'Blanco', '200x160x120 cm', 70.0, 'https://picsum.photos/200/300', FALSE),
('Armario de Madera', 'Armario espacioso de madera maciza', 999.99, 5, 8, 'Madera', 'Roble', '180x60x200 cm', 100.0, 'https://picsum.photos/200/300', TRUE),
('Sofá Cama', 'Sofá que se convierte en cama', 599.99, 1, 7, 'Tela', 'Azul', '200x90x100 cm', 55.0, 'https://picsum.photos/200/300', FALSE),
('Mesa de Comedor', 'Mesa grande para comedor familiar', 699.99, 2, 4, 'Madera', 'Nogal', '180x90x75 cm', 80.0, 'https://picsum.photos/200/300', TRUE),
('Silla de Comedor', 'Silla cómoda para comedor', 89.99, 3, 25, 'Madera y Tela', 'Beige', '45x45x90 cm', 8.0, 'https://picsum.photos/200/300', FALSE),
('Cama Individual', 'Cama individual con almacenamiento debajo', 499.99, 4, 10, 'Madera y Tela', 'Gris Claro', '200x90x120 cm', 60.0, 'https://picsum.photos/200/300', TRUE),
('Armario Pequeño', 'Armario compacto para habitaciones pequeñas', 499.99, 5, 12, 'Madera', 'Blanco', '120x50x180 cm', 60.0, 'https://picsum.photos/200/300', FALSE),
('Sofá de Cuero', 'Sofá elegante de cuero genuino', 899.99, 1, 6, 'Cuero', 'Marrón Oscuro', '200x90x100 cm', 60.0, 'https://picsum.photos/200/300', TRUE),
('Mesa Auxiliar', 'Mesa auxiliar para sala de estar', 129.99, 2, 18, 'Madera', 'Blanco', '50x50x55 cm', 12.0, 'https://picsum.photos/200/300', FALSE),
('Silla Plegable', 'Silla plegable para espacios pequeños', 49.99, 3, 30, 'Metal y Tela', 'Negro', '40x40x80 cm', 5.0, 'https://picsum.photos/200/300', TRUE),
('Cama con Dosel', 'Cama con dosel romántica', 1199.99, 4, 3, 'Madera y Tela', 'Blanco', '200x160x180 cm', 90.0, 'https://picsum.photos/200/300', FALSE),
('Armario Esquinero', 'Armario diseñado para esquinas', 799.99, 5, 5, 'Madera', 'Caoba', '150x150x200 cm', 90.0, 'https://picsum.photos/200/300', TRUE),
('Sofá Chesterfield', 'Sofá clásico Chesterfield de cuero', 1099.99, 1, 4, 'Cuero', 'Burdeos', '200x90x100 cm', 70.0, 'https://picsum.photos/200/300', FALSE),
('Mesa de Noche', 'Mesa de noche con cajones', 159.99, 2, 20, 'Madera', 'Nogal Claro', '50x40x60 cm', 10.0, 'https://picsum.photos/200/300', TRUE),
('Silla de Relax', 'Silla reclinable para relajarse', 299.99, 3, 10, 'Tela y Metal', 'Gris Oscuro', '80x80x100 cm', 20.0, 'https://picsum.photos/200/300', FALSE),
('Cama King Size', 'Cama king size con almacenamiento integrado', 1299.99, 4, 2, 'Madera y Tela', 'Gris Oscuro', '210x180x130 cm', 100.0, 'https://picsum.photos/200/300', TRUE),
('Armario con Espejo', 'Armario con puertas espejadas', 899.99, 5, 7, 'Madera y Espejo', 'Blanco Brillante', '160x60x200 cm', 85.0, 'https://picsum.photos/200/300', FALSE);