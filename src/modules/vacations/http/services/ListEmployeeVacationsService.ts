import { injectable, inject } from 'tsyringe';
import Vacation from '../../infra/local/entities/Vacation';
import VacationRepository from '../../infra/local/repositories/VacationRepository';

interface Request {
  employee_id: string;
}

@injectable()
class ListEmployeeVacationService {
  constructor(
    @inject('IVacationRepository')
    private vacationRepository: VacationRepository,
  ) {}

  public async execute({ employee_id }: Request): Promise<Vacation[]> {
    const vacations = await this.vacationRepository.index({
      employee_id,
    });

    return vacations;
  }
}

export default ListEmployeeVacationService;
