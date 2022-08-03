import { scheduleJob } from "node-schedule";
import ScheduleProvider from "../models/ScheduleProvider";

class NodeScheduleProvider implements ScheduleProvider {
  public async schedule(date: Date): Promise<void> {
    const job = scheduleJob(date, () => {
      console.log("Esse log foi disparado 5 segundos após a sua chamada");
    });

    job.nextInvocation();
  }
}

export default NodeScheduleProvider;
