import { Router } from 'express';
import { products, deleteProduct, getProduct, updateProduct } from '../../controllers';

const router = Router();

router.post('/', products);

// router.get('/', products);
router.get('/:id', getProduct);

// router.delete('/', products);
router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);

export default router;
