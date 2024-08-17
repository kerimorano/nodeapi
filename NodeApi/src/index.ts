// src/index.ts
import express, { Application } from 'express';
import exampleRoutes from './routes/route';

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', exampleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
