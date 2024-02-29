import { createPool } from 'mysql2/promise';
export const pool = createPool({
    host: 'localhost',
    port: 3333,
    user: 'root',
    password: 'alfredo]123',
    database: 'ToDoList'
});