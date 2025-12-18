import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { Database } from './config/database';
import router from './routes';

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', router);

const port = process.env.PORT || 3000;

// Test database connection on startup

Database.getConnection().then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
}).catch(() => {
    console.error('Fallo al conectar a la base de datos. Saliendo...');
    process.exit(1);
});


app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});

export default app;