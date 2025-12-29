import { Router } from 'express';
import routerProduicts from './products';


const router = Router();

router.use('/products', routerProduicts);

export default router;