import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListEmployeeVacationsService from '../services/ListEmployeeVacationsService';

class ListEmployeeVacationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { employee_id } = request.params;

      const listEmployeeVacations = container.resolve(
        ListEmployeeVacationsService,
      );

      const vacations = await listEmployeeVacations.execute({
        employee_id,
      });

      return response.status(200).json(vacations);
    } catch (error) {
      const err = error as Error;
      return response.status(400).json({ error: err.message });
    }
  }
}

export default ListEmployeeVacationController;
