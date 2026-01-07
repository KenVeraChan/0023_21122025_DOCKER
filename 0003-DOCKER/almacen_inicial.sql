-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,    
    edad INT NOT NULL,
    calificacion NUMERIC(10,2) NOT NULL,
    stock INT NOT NULL
);

-- Insertar datos iniciales
INSERT INTO usuarios (nombre, apellidos, edad, calificacion, stock) VALUES
('Rasselin','Wissangel Rousher', 21, 9.87, 150),
('Vitrea','Horiz', 21, 8.50, 200),
('Verduliz','Sainz', 21, 7.75, 120),
('Emiliam','Bastreriz', 21, 9.10, 180),
('Veddina','Henion', 22, 6.95, 90),
('Samira','Savadez', 22, 8.80, 160),
('Shail','Matsiz', 22, 7.60, 110),
('Jill','Anherson', 23, 9.30, 140),
('Christal','Gedishen', 22, 8.20, 130);
