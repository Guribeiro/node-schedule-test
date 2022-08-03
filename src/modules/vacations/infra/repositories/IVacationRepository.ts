import Vacation from '../local/entities/Vacation';

export interface IListEmployeeVacations {
  employee_id: string;
}

export interface ICreateVacationDTO {
  employee_id: string;
  start_date: Date;
  end_date: Date;
}

export default interface IVacationRepository {
  create(data: ICreateVacationDTO): Promise<Vacation>;

  index(data: IListEmployeeVacations): Promise<Vacation[]>;
}
