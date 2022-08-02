import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {addSeconds} from 'date-fns';
import CreateEmployeeVacationService from '../services/CreateEmployeeVacationService';


class CreateEmployeeVacationController {
	public async handle(request:Request, response:Response):Promise<Response>{
		try {
			const createEmployeeVacation = container.resolve(CreateEmployeeVacationService);

			const currentDate = new Date();

			const scheduledDate = addSeconds(currentDate, 5);

			await createEmployeeVacation.execute({
				date: scheduledDate
			})
			return response.status(200).json({ok: true});
		} catch (error) {
			const err = error as Error;
			return response.status(400).json({error: err.message});
		}
	}
}

export default CreateEmployeeVacationController;