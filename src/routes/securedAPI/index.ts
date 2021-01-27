import { Router } from 'express';
import { secured } from '../../controllers';
import { validateToken } from '../../middleware';

const router = Router();

router.post('/', validateToken, secured);

export default router;
