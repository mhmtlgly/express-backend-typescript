import { Router } from 'express';

import { stripePayment } from '../../controllers';

const router = Router();

router.post('/stripe', stripePayment);

export default router;
// export { router as stripePayment };
