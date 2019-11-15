import { Router } from 'express';
import ViewController from '../../controllers/ViewController';

const router = Router();

router.get('/', ViewController.renderIndex);

export default router;
