import { Router } from 'express';
import views from './views';

const router = Router();

router.use('/', views);

export default router;
