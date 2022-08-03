import { injectable, inject } from 'tsyringe';
import { addSeconds } from 'date-fns';
import VacationRepository from '../../infra/local/repositories/VacationRepository';
import ScheduleProvider from '../../../../container/providers/ScheduleTaskProvider/models/ScheduleProvider';
import Vacation from '../../infra/local/entities/Vacation';

interface Request {
  employee_id: string;
  start_date: Date;
  end_date: Date;
}

@injectable()
class CreateEmployeeVacationService {
  constructor(
    @inject('IVacationRepository')
    private vacationRepository: VacationRepository,

    @inject('ScheduleProvider')
    private scheduleProvider: ScheduleProvider,
  ) {}

  public async execute({
    employee_id,
    start_date,
    end_date,
  }: Request): Promise<Vacation> {
    const vacation = await this.vacationRepository.create({
      employee_id,
      start_date,
      end_date,
    });

    const scheduledDate = addSeconds(end_date, 5);

    await this.scheduleProvider.schedule(scheduledDate);

    return vacation;
  }
}

export default CreateEmployeeVacationService;
