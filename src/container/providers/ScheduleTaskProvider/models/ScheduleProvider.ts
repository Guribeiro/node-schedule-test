export default interface ScheduleProvider {
  schedule(date: Date):Promise<void>;
}
