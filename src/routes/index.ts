import { Router } from 'express';
import authRoutes from './auth.routes';
import tasksRouter from './tasks.routes';
import contactRoutes from './contact.routes';
import locationRouter from './locationRoutes';
import articleRouter from './articleRoutes';
import inventoryMovementRouter from './inventoryMovementRoutes';
import inventoryRouter from './inventoryRoutes';


const router = Router()

router.use('/', contactRoutes);
router.use('/', authRoutes);
router.use('/', tasksRouter);
router.use('/location', locationRouter)
router.use('/article', articleRouter)
router.use('/inventory-movement', inventoryMovementRouter)
router.use('/inventory', inventoryRouter)



export default router