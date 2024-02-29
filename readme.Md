# Script database

```
-- Crea la base de datos ToDoList
 CREATE DATABASE ToDoList;

-- Usa la base de datos ToDoList
USE ToDoList;

-- Crea la tabla Nota
CREATE TABLE Nota (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    descripcion varchar(255),
    fecha_entrega DATE,
	estado varchar(255) -- Todo/In Progress/Done
); 

-- Pruebas
-- insert into Nota values (0,'primer tarea', 'tarea','2024-05-21','Todo')
-- select * from Nota where titulo = 'as'
```
