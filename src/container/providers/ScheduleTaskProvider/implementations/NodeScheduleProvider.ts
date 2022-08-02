import {scheduleJob} from 'node-schedule';
import ScheduleProvider from '../models/ScheduleProvider';

class NodeScheduleProvider implements ScheduleProvider {
	public async schedule(date: Date): Promise<void> {
		const job = scheduleJob(date, () => {
			console.log('Faltam 2 meses para o vencimento das férias do colaborador ALAN DA SILVA')
		});
	  
		job.nextInvocation();
	}
}

export default NodeScheduleProvider;