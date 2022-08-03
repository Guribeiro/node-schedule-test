import IVacationRepository, {
  ICreateVacationDTO,
  IListEmployeeVacations,
} from '../../repositories/IVacationRepository';
import Vacation from '../entities/Vacation';

class VacationRepository implements IVacationRepository {
  private vacations: Vacation[] = [];

  public async create({
    employee_id,
    start_date,
    end_date,
  }: ICreateVacationDTO): Promise<Vacation> {
    const vacation = new Vacation({
      employee_id,
      start_date,
      end_date,
    });

    this.vacations.push(vacation);

    return vacation;
  }

  public async index({
    employee_id,
  }: IListEmployeeVacations): Promise<Vacation[]> {
    return this.vacations.filter(
      vacation => vacation.employee_id === employee_id,
    );
  }
}

export default VacationRepository;
