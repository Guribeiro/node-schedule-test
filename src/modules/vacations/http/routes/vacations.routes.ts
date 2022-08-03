import { Router } from 'express';
import CreateEmployeeVacationController from '../controllers/CreateEmployeeVacationController';
import ListEmployeeVacationController from '../controllers/ListEmployeeVacationController';

const vacationRouter = Router();

const createEmployeeVacationController = new CreateEmployeeVacationController();
const listEmployeeVacationController = new ListEmployeeVacationController();

vacationRouter.post('/', createEmployeeVacationController.handle);
vacationRouter.get('/:employee_id', listEmployeeVacationController.handle);

export default vacationRouter;
