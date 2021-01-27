import { Router } from 'express';
import { signup, signin, refresh_access_token, auto_sign_in } from '../../controllers';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/refresh_access_token', refresh_access_token);
router.get('/auto_sign_in', auto_sign_in);

export default router;
// export { router as authentication };
