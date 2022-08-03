import {Router} from 'express';
import vacationRouter from '../modules/vacations/http/routes/vacations.routes';

const routes = Router();

routes.use('/vacations',vacationRouter);

export default routes;
