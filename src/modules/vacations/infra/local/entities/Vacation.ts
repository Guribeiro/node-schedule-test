import { v4 } from 'uuid';

class Vacation {
  id: string;

  employee_id: string;

  start_date: Date;

  end_date: Date;

  constructor({ employee_id, end_date, start_date }: Omit<Vacation, 'id'>) {
    const id = v4();

    this.id = id;
    this.employee_id = employee_id;
    this.start_date = start_date;
    this.end_date = end_date;
  }
}

export default Vacation;
