import { container } from 'tsyringe';

import IVacationRepository from '../modules/vacations/infra/repositories/IVacationRepository';
import VacationRepository from '../modules/vacations/infra/local/repositories/VacationRepository';

import NodeScheduleProvider from './providers/ScheduleTaskProvider/implementations/NodeScheduleProvider';
import ScheduleProvider from './providers/ScheduleTaskProvider/models/ScheduleProvider';

container.registerSingleton<ScheduleProvider>(
  'ScheduleProvider',
  NodeScheduleProvider,
);

container.registerSingleton<IVacationRepository>(
  'IVacationRepository',
  VacationRepository,
);
