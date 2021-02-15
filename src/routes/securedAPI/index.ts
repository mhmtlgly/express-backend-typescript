import { Router } from 'express';
import { secured } from '../../controllers';
import { authorize } from '../../middleware';

const router = Router();

router.post('/', authorize, secured);

export default router;
