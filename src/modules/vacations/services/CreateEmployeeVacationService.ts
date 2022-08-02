import { injectable, inject } from 'tsyringe';
import ScheduleProvider from '../../../container/providers/ScheduleTaskProvider/models/ScheduleProvider';

interface Request {
  date: Date;
}

@injectable()
class CreateEmployeeVacationService {
  constructor(
    @inject('ScheduleProvider')
    private scheduleProvider: ScheduleProvider
  ) { }

  public async execute({ date }: Request):Promise<void> {
    await this.scheduleProvider.schedule(date);
  }
}

export default CreateEmployeeVacationService;