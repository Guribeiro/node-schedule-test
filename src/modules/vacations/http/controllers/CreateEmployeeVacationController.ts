import { parseISO } from 'date-fns';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateEmployeeVacationService from '../services/CreateEmployeeVacationService';

class CreateEmployeeVacationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { employee_id, start_date, end_date } = request.body;

      const createEmployeeVacation = container.resolve(
        CreateEmployeeVacationService,
      );

      const parseIsoStartDate = parseISO(start_date);
      const parseIsoEndDate = parseISO(end_date);

      const vacation = await createEmployeeVacation.execute({
        employee_id,
        start_date: parseIsoStartDate,
        end_date: parseIsoEndDate,
      });

      return response.status(200).json(vacation);
    } catch (error) {
      const err = error as Error;
      return response.status(400).json({ error: err.message });
    }
  }
}

export default CreateEmployeeVacationController;
