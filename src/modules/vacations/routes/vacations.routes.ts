import {Router} from 'express';
import CreateEmployeeVacationController from '../controllers/CreateEmployeeVacationController';

const vacationRouter = Router();

const createEmployeeVacationController = new CreateEmployeeVacationController();

vacationRouter.post('/', createEmployeeVacationController.handle);

export default vacationRouter;