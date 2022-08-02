import {container} from 'tsyringe';

import NodeScheduleProvider from './providers/ScheduleTaskProvider/implementations/NodeScheduleProvider';
import ScheduleProvider from './providers/ScheduleTaskProvider/models/ScheduleProvider';

container.registerSingleton<ScheduleProvider>('ScheduleProvider', NodeScheduleProvider)